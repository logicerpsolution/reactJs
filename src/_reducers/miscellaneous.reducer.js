import { miscellaneousConstants } from '../_constants';

export function miscellaneous(state = {}, action) {
	 switch (action.type) {
		case miscellaneousConstants.COUNTRIES_REQUEST:
			return {
			loading: true
		}; 
		case miscellaneousConstants.COUNTRIES_ALL_SUCCESS:
			return {...state, countries:action.countries};
		case miscellaneousConstants.COUNTRIES_ALL_FAILURE:
			return { 
				error: action.error
		};
		case miscellaneousConstants.PROVIDERS_REQUEST:
			return {
			loading: true
		}; 
		case miscellaneousConstants.PROVIDERS_ALL_SUCCESS:{
			return {...state, providers:action.providers};
		}
		case miscellaneousConstants.PROVIDERS_ALL_FAILURE:
			return { 
				error: action.error
		};
		 default:
      return state
	 }
}
