import { authHeader } from '../_helpers';
import { miscellaneousConstants } from '../_constants';
import { apiConstants } from '../_constants';

export const miscellaneousService = {
   getAllCountries,
   getAllProviders
 //   delete: _delete
};
//Fetch all countries from the database
function getAllCountries() {
   const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
 
    return fetch(apiConstants.API_URL+'/miscellaneous/getAllCountries', requestOptions)
        .then(response => {
            if (!response.ok) {  
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(countries => {
		 if (countries) {
			 return countries;
		 //do anything with countries if you want to
		 }
		//or all data is sent to actions
		//return countries;
		 });
}
//Fetch all providers from the database
function getAllProviders() {
   const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
 
    return fetch(apiConstants.API_URL+'/miscellaneous/getAllProviders', requestOptions)
        .then(response => {
            if (!response.ok) {  
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(providers => {
		 if (providers) {
             console.log(providers);
			 return providers;
		 //do anything with countries if you want to
		 }
		//or all data is sent to actions
		return providers;
		 });
}
