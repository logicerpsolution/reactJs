import React from 'react';
import { connect } from 'react-redux';
import ReactBody from 'react-body';
import Favicon from 'react-favicon';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { userActions } from '../_actions';
import Registration from '../_components/registrationForm.jsx';

class LoginPage extends React.Component { 
    constructor(props) {
        super(props);
        // reset login status  
        //this.props.dispatch(userActions.logout());
		this.props.dispatch(userActions.checkLoggedIn());
        this.state = {
            login_username: '',
            login_password: '',
            submitted: false  
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { login_username, login_password } = this.state;
        const { dispatch } = this.props;
        if (login_username && login_password) {			
            dispatch(userActions.login(login_username, login_password));
            
        }
    }

    render() {
        const { loggingIn } = this.props;
         const { loggedIn } = this.props;
        const { login_username, login_password, submitted } = this.state;
        const showHide = {
      'display': {loggedIn} ? 'none' : 'block'
    };
    const hideShow = {
      'display': {loggedIn} ? 'block' : 'none'
    };
        return (
        <div>
         <Favicon url="./src/assets/images/favicon.png" />" />
        <ReactBody className="login_page"  />
         <div className="row login-form-wrap align-items-center">
			<div className="login_page_wrapper">    
			<div className="md-card" id="login_card">			 
                    <div className="md-card-content large-padding" style={hideShow}>
                        <div className="login_heading">
                            <div className="logo">
                                <img src="../src/assets/images/logo.png"  alt="" />
                            </div>
                        </div>
                        {loggedIn}
                        <form  name="form" onSubmit={this.handleSubmit}>
                            <div className="uk-form-row">
                                <label htmlFor="login_username">Email</label>
                                <input className="md-input" type="text" id="login_username"  name="login_username"  value={login_username} onChange={this.handleChange} />
								{submitted && !login_username &&
									<div className="help-block">Username is required</div>
								}
                            </div>
                            <div className="uk-form-row">
                                <label htmlFor="login_password">Password</label>
                                <input className="md-input" type="password" id="login_password" name="login_password" value={login_password} onChange={this.handleChange} />
							{submitted && !login_password &&
								<div className="help-block">Password is required</div>
							}
                            </div>
                            <div className="uk-margin-medium-top">
                                <button className="btn btn-blue md-btn-block hvr-ripple-out">Login</button>
                                {loggingIn &&
								<img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
							}
                            </div>
                            <div className="uk-margin-top">
                                <a href="#" id="password_reset_show" className="uk-float-right">Forgot your password?</a>
                                <span className="icheck-inline">
                                    <input type="checkbox" name="login_page_stay_signed" id="login_page_stay_signed" data-md-icheck />
                                    <label htmlFor="login_page_stay_signed" className="inline-label">Stay Login</label>
                                </span>
                            </div>
                        </form> 
                    </div>
                    <div className="md-card-content large-padding" id="login_password_reset" style={{display: "none"}}>
                        <button type="button" className="uk-position-top-right uk-close uk-margin-right uk-margin-top back_to_login"></button>
                        <h2 className="heading_a uk-margin-large-bottom">htmlForget password</h2>
                        <form>
                            <div className="text-center">
                                <p>Please enter your email address to recieve a password link</p>
                            </div>
                            <div className="uk-form-row">
                                <label htmlFor="login_email_reset">Your email address</label>
                                <input className="md-input" type="text" id="login_email_reset" name="login_email_reset" />
                            </div>
                            <div className="uk-margin-medium-top">
                                <a href="javascript:void();" className="btn btn-blue md-btn-block hvr-ripple-out">Send password</a>
                            </div>
                        </form>
                    </div>
                    <div className="md-card-content large-padding"  style={showHide}>
                        <button type="button" className="uk-position-top-right uk-close uk-margin-right uk-margin-top back_to_login"></button>
                        <div className="login_heading">
                            <div className="logo">
                                <img src="../src/assets/images/logo.png"  alt="" />
                            </div>
                        </div> 
                        <div className="text-center">
                            <h2 className="heading_a mb10">Security Access Code</h2>
                        </div>
                        <form>
                            <div className="uk-form-row">
                                <label htmlFor="security-code">Enter security access code</label>
                                <input className="md-input" type="text" id="security-code" name="security-code" />
                            </div>
                            <div className="uk-margin-medium-top">
                                <a href="main.html" className="btn btn-blue md-btn-block hvr-ripple-out">Login</a>
                            </div>
                        </form>
                    </div>
                    <div className="md-card-content large-padding" id="register_form" style={{display: "none"}}>
                        <button type="button" className="uk-position-top-right uk-close uk-margin-right uk-margin-top back_to_login"></button>
                        <h2 className="heading_a uk-margin-medium-bottom">Create an account</h2>
                        <form> 
                            <div className="uk-form-row">
                                <label htmlFor="register_username">Username</label>
                                <input className="md-input" type="text" id="register_username" name="register_username" />
                            </div>
                            <div className="uk-form-row">
                                <label htmlFor="register_password">Password</label>
                                <input className="md-input" type="password" id="register_password" name="register_password" />
                            </div>
                            <div className="uk-form-row">
                                <label htmlFor="register_password_repeat">Repeat Password</label>
                                <input className="md-input" type="password" id="register_password_repeat" name="register_password_repeat" />
                            </div>
                            <div className="uk-form-row">
                                <label htmlFor="register_email">E-mail</label>
                                <input className="md-input" type="text" id="register_email" name="register_email" />
                            </div>
                            <div className="uk-margin-medium-top">
                                <a href="javascript:void();" className="btn btn-blue md-btn-block hvr-ripple-out">Sign Up</a>
                            </div>
                        </form>
                    </div>
                </div> 
                <div className="uk-margin-top uk-text-center">
                    <a href="/signup">Create an account</a>
                </div>     
				</div>
			</div> 
		</div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 
