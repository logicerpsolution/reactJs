import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    checkLoggedIn,
    logout,
    register,
    getAll,
    verify,
    delete: _delete
};
//check if user is already logged in
function checkLoggedIn(){
	if (localStorage.getItem("user") === null) {
	 return { type: userConstants.LOGOUT };
	}
	else{
		history.push('/home');
	}
}
 
//login user
function login(login_username, login_password) {
    return dispatch => {
        dispatch(request({ login_username })); 
        userService.login(login_username, login_password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/code');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}
//verify user with code
function verify(login_code) {
    return dispatch => {
        dispatch(request({ login_code })); 
        userService.verify(login_code)
            .then(
                token => { 
                    dispatch(success(token));
                   history.push('/home');
                   },
                error => {
                   dispatch(failure(error));
                   dispatch(alertActions.error(error));
                }
            );
    };

    function request(token) { return { type: userConstants.LOGIN_REQUEST_TOKEN, token } }
    function success(token) { return { type: userConstants.LOGIN_SUCCESS_TOKEN, token } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE_TOKEN, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(login_username,password) {
    return dispatch => {
        dispatch(request(login_username,password));

        userService.register(login_username,password)
            .then(
                user => {                     
                    dispatch(success(login_username));
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, login_username } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, login_username } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => { 
                    dispatch(success(id));
                },
                error => {
                    dispatch(failure(id, error));
                }
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}

