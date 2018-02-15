import React from 'react';
import{ Component } from 'react'; 
export default class TopProfile extends Component {
  render() {
    return (
			<div className="dropdown">
				<button type="button" className="dropdown-toggle user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<div className="user-img"><a href="main.html"><img src="./src/assets/images/user_icon.png" alt=""/></a></div>
					<div className="user-name-email"><p>{this.props.username}</p><p><small>ella.webster@gmail.com</small></p></div>
				</button>
				<div className="dropdown-menu animated swing">
					<div className="user-header">
						<div className="text-center">
							<div className="user-icon">
								<img src="./src/assets/images/user_icon-white.png" alt=""/>
							</div>
							<div className="user-detail">
								<h4>{this.props.username}</h4>
								<h5>email</h5>
							</div>
						</div>
					</div>
					<a className="dropdown-item" href="javascript:void(0);"><i className="fa fa-user"></i> My Profile</a>
					<a className="dropdown-item" href="javascript:void(0);"><i className="fa fa-cog"></i> Settings</a>
					<a className="dropdown-item" href="login.html"><i className="fa fa-sign-out"></i> Logout</a>
				</div>
			</div>
    );
  }
}
