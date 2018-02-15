import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { CodePage } from '../CodePage';
import { LoginPage } from '../LoginPage';
import { SignupPage } from '../SignupPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
        <div className="container-fluid">		
			{alert.message &&
				<div className={`alert ${alert.type}`}>{alert.message}</div>
			}
			<Router history={history}>
				<div>
					<PrivateRoute exact path="/home" component={HomePage} />
					<Route path="/code" component={CodePage} />
					<Route path="/login" component={LoginPage} />
					<Route path="/signup" component={SignupPage} />
				 </div>
			</Router>
         </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 
