import { miscellaneousConstants } from '../_constants';
import { miscellaneousService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';


export const miscellaneousActions = {
		getAllCountries,
		getAllProviders,
	   // delete: _delete
	};
	//Fetch all countries from the database table
	function getAllCountries()
	{
		return dispatch => {
		  dispatch(request()); 
			miscellaneousService.getAllCountries()
				.then(
					countries => dispatch(success(countries)),
					
					error => {
					   dispatch(failure(error));
					   dispatch(alertActions.error(error));
					}
				); 
    };
 
		function request() { return { type: miscellaneousConstants.COUNTRIES_REQUEST} }
		function success(countries) { return { type: miscellaneousConstants.COUNTRIES_ALL_SUCCESS, countries } }
		function failure(error) { return { type: miscellaneousConstants.COUNTRIES_ALL_FAILURE, error } }
	}
	//Fetch all providers from the database table
	function getAllProviders()
	{
		return dispatch => {
		  dispatch(request()); 
			miscellaneousService.getAllProviders()
				.then(
					providers => dispatch(success(providers)),
					
					error => {
					   dispatch(failure(error));
					   dispatch(alertActions.error(error));
					}
				); 
		};
 
		function request() { return { type: miscellaneousConstants.PROVIDERS_REQUEST} }
		function success(providers) { return { type: miscellaneousConstants.PROVIDERS_ALL_SUCCESS, providers } }
		function failure(error) { return { type: miscellaneousConstants.PROVIDERS_ALL_FAILURE, error } }
	}
