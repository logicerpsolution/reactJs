import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactBody from 'react-body';  

import { userActions,miscellaneousActions } from '../_actions';


import Favicon from 'react-favicon'; 
import bootstrapSelect from '../assets/js/bootstrap-select.js';
import moment from '../assets/js/moment.min.js';
import actions from '../assets/js/actions.js';
import settings from '../assets/js/settings.js';
import Header from '../_components/header'
import TopComponent from '../_components/topComponent'
import Sidebar from '../_components/sidebar'
import Footer from '../_components/footer'
import HomeChild from '../_components/homeChild'
import PageTransition from 'react-router-page-transition';

//var DateRangePicker = require('react-bootstrap-daterangepicker');
 
class HomePage extends React.Component {
    componentDidMount() {
       this.props.dispatch(miscellaneousActions.getAllProviders());
       this.props.dispatch(miscellaneousActions.getAllCountries());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users, miscellaneous } = this.props;
            return (
         
        <div>
            
            <Favicon url="./src/assets/images/favicon.png" />" />
            <ReactBody className="notouch loader"  />
            <div className="container-fluid page-container">
                <div className="loader-wrap">
                    <div className="loading-img">
                        <img src="./src/assets/images/heartbeat.gif" alt="" />
                    </div> 
                </div>   
            </div>  
            <div className="row">
           <Header user={user} />
           <Sidebar />
            <div className="page-content"> 
				<TopComponent  country={miscellaneous.countries}  />
                <PageTransition>
                   {this.props.children}
                </PageTransition>
                <HomeChild miscellaneous={miscellaneous} />				
            </div>
             </div>
        </div> 
    );
    }
}


function mapStateToProps(state) {
    const { users, authentication, miscellaneous } = state;
    const { user } = authentication;
    return {
        user,
        users,
        miscellaneous
    };
}
const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
