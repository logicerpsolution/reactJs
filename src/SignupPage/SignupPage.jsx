import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class SignupPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                login_username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.login_username  && user.password && user.confirmPassword && ( user.password == user.confirmPassword)) {
            dispatch(userActions.register(user.login_username,user.password));
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
         <div className="row login-form-wrap align-items-center">
			<div className="login_page_wrapper">    
			<div className="md-card" id="login_card">			 
             <div className="md-card-content large-padding" id="login_form">
                <div className="login_heading">
					<div className="logo">
						<img src="../src/assets/images/logo.png"  alt="" />
					</div>
				</div>
                <form name="form" onSubmit={this.handleSubmit}>
					<div className="uk-form-row"> 
							<label htmlFor="user.login_username">Email</label>
							<input className="md-input" type="text"  id="login_username"  name="login_username" value={user.login_username} onChange={this.handleChange} />
							{submitted && !user.login_username &&
								<div className="help-block">Username is required</div>
							}
						</div>
                    <div className="uk-form-row">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="md-input"  name="password" value={user.password} onChange={this.handleChange} />
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                        {submitted && user.password && (user.password.length <= 5) &&
                            <div className="help-block">Password should be more than 5 characters.</div>
                        }
                    </div>
                    
                     <div className="uk-form-row">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" className="md-input"  name="confirmPassword"   onChange={this.handleChange} />
                        {submitted && !user.confirmPassword &&
                            <div className="help-block">Confirm Password is required</div>
                        }
                         {submitted && user.confirmPassword && (user.confirmPassword != user.password) &&
                            <div className="help-block">Confirm Password and password should match</div>
                        }
                    </div>
                    <div className="uk-margin-medium-top">
                                <button className="btn btn-blue md-btn-block hvr-ripple-out">Register</button>
                                {registering &&
								<img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
							}
                       
                    </div>
                </form>
            </div>
           </div>
			<div className="uk-margin-top uk-text-center">
                 <Link to="/login" className="btn btn-link">Back To login</Link>
            </div>     
            
           </div>
           </div>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedSignupPage = connect(mapStateToProps)(SignupPage);
export { connectedSignupPage as SignupPage };
