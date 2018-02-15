import React from 'react';
import { connect } from 'react-redux';
import{ Component } from 'react'; 
export default class Countries extends Component {

  render() {
   console.log(this.props.country);
    if (!this.props.country) {
            return null;
        } 
        
        let  countryMap = this.props.country;
    return (
			<select className="form-control select" id="address_country" name="address_country">
				{
					countryMap.map(function(player) {
						return <option key={player.id} value={player.id}>{player.country_name}</option>
					})
				}
			</select>
    );
  }
}
