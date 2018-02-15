import { authHeader } from '../_helpers';
import { userConstants,apiConstants } from '../_constants';

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    verify,
    delete: _delete
};
function login(login_username, login_password) {
    const requestOptions = {
        method: 'POST', 
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },															
        body:JSON.stringify({ login_username:login_username,login_password:login_password })
    };
 
    return fetch(apiConstants.API_URL+'/Login/validate', requestOptions)
        .then(response => {
            if (!response.ok) {  
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(user => {
            
            // login successful if there's a jwt token in the response
            if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function verify(login_code) {
	 let user = JSON.parse(localStorage.getItem('user'));
    const requestOptions = {
        method: 'POST', 
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },															
        body:JSON.stringify({ login_username:user.username,login_code:login_code })
    };
 
    return fetch(apiConstants.API_URL+'/Login/verify', requestOptions)
        .then(response => {
            if (!response.ok) {  
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(token => {
            
            // login successful if there's a jwt token in the response
            if (token) {
				localStorage.setItem("token", JSON.stringify(token));   
				var result = JSON.parse(localStorage.getItem("token")); 
            }

            return token;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('/users', requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('/users/' + _id, requestOptions).then(handleResponse);
}

function register(login_username,password) {
  const requestOptions = {
        method: 'POST', 
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },															
        body:JSON.stringify({ login_username:login_username,login_password:password })
    };
    console.log(apiConstants.API_URL+'/Users/register');
 return fetch(apiConstants.API_URL+'/Users/register', requestOptions)
        .then(response => {
            if (!response.ok) {  
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(user => {
            
            // login successful if there's a jwt token in the response
            if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
               
            }

            return user;
        });
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch('/users/' + user.id, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch('/users/' + id, requestOptions).then(handleResponse);;
}

function handleResponse(response) {
    if (!response.ok) { 
        return Promise.reject(response.statusText);
    }

    return response.json();
}
