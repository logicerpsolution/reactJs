import React from 'react';
import{ Component } from 'react'; 
import { connect } from 'react-redux';

export default  class Providers extends Component {	
	render() {
		 if (!this.props.provider) {
            return null;
        } 
		return (
				<div className="form-group">
					<label>Please Select the Patients Provider</label>					
					<select className="form-control select show-menu-arrow">
						{
							this.props.provider.providers.map(function(player) {
								return <option key={player.id} value={player.id}>{player.firstName}</option>
							})
						}
					</select>
				</div>
		);
	}
}


