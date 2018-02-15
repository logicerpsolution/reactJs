import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { userActions } from '../_actions';

class CodePage extends React.Component { 
    constructor(props) {
        super(props);
 
        // reset login status  
        //this.props.dispatch(userActions.logout());

        this.state = {
            login_code: '',
            submitted: false  
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
	componentDidMount() {
       // this.props.dispatch(userActions.getAll());
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { login_code } = this.state;
        const { dispatch } = this.props;
        if (login_code) {		
            dispatch(userActions.verify(login_code));
            
        }
    }

    render() {
        const { loggingIn } = this.props;
         const { loggedIn } = this.props;
        const { login_code,submitted } = this.state;
     const { user, users } = this.props;
        return (
         <div className="row login-form-wrap align-items-center">
			<div className="login_page_wrapper">    
			<div className="md-card" id="login_card">			                 
                    <div className="md-card-content large-padding" id="login_help" >
                        <button type="button" className="uk-position-top-right uk-close uk-margin-right uk-margin-top back_to_login"></button>
                        <div className="login_heading">
                            <div className="logo">
                                <img src="../src/assets/images/logo.png"  alt="" />
                            </div>
                        </div> 
                        <div className="text-center">
                            <h2 className="heading_a mb10">Security Access Code</h2>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="uk-form-row">
                                <label htmlFor="login_code">Enter security access code</label>
                                <input className="md-input" type="text" id="login_code" name="login_code" value={login_code} onChange={this.handleChange} />
                                {submitted && !login_code &&
									<div className="help-block">Security Code is required</div>
								}
                            </div>
                            <div className="uk-margin-medium-top">
                                <button className="btn btn-blue md-btn-block hvr-ripple-out">Login</button>
                                {loggingIn &&
								<img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
							}
                            </div>
                        </form>
                    </div>                  
                </div>     
				</div>
			</div> 
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}
const connectedCodePage = connect(mapStateToProps)(CodePage);
export { connectedCodePage as CodePage }; 
