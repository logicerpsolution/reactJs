import React from 'react';
import{ Component } from 'react';

export default class Sidebar extends Component {
constructor(props){
  super(props);
 
}
  render() {
    return (
      <div className="page-sidebar">
			<ul className="x-navigation">
				<li><a href="#" className="x-navigation-control"></a></li>
				<li className="xn-openable"><a href="javascript:void(0);"><span className="medical-icon-i-administration"></span> <span className="xn-text">Intake</span></a>
					<ul>
						<li><a href="javascript:void(0);">test</a></li>
						<li><a href="javascript:void(0);">test</a></li>
						<li><a href="javascript:void(0);">test</a></li>
					</ul>
				</li>
				<li><a href="javascript:void(0);"><i className="fa fa-clone"></i> <span className="xn-text">Screenings</span></a></li>
				<li><a href="javascript:void(0);"><span className="medical-icon-i-care-staff-area"></span> <span className="xn-text">Advance Directives</span></a></li>
				<li><a href="javascript:void(0);"><span className="medical-icon-i-pharmacy"></span> <span className="xn-text">CCM</span></a></li>
				<li><a href="javascript:void(0);"><i className="fa fa-hospital-o"></i> <span className="xn-text">Portal Opt In</span></a></li>
				<li><a href="javascript:void(0);"><i className="fa fa-medkit"></i> <span className="xn-text">End Early</span></a></li>
				<li><a href="javascript:void(0);"><i className="fa fa-list-alt"></i> <span className="xn-text">Completion</span></a></li>
			</ul>
		</div>
    );
  }
}
