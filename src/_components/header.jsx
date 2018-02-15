import React from 'react';
import{ Component } from 'react';
import TopProfile from '../_components/topProfile'
export default class Header extends Component {
  render() {
    return (
    
      <header className="row header fixed-header">
                <div className="col col-sm-4 col-md-3 col-lg-2">
                    <div className="logo">
                        <img src="./src/assets/images/logo.png" alt="" />
                    </div>
                </div>
                <div className="col col-sm-8 col-md-9 col-lg-10 pl-0">
                    <div className="left-nav-toggle x-navigation-minimize">
                        <a href="javascript:void(0)"><span className="fa fa-dedent"></span></a>
                    </div>
                    <div className="pull-right">
						<TopProfile username={this.props.user.username} />                       
                    </div>
                </div>
            </header>
    );
  }
}

