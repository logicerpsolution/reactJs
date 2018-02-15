import React from 'react';

import{ Component } from 'react';

export default class Registration extends Component {
  
  
      render() {
        
        
            return (
             <div className="md-card-content large-padding" id="login_form">
                        <div className="login_heading">
                            <div className="logo">
                                <img src="../src/assets/images/logo.png"  alt="" />
                            </div>
                        </div>
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
            
            );
      }
}
