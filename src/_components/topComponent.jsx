import React from 'react';
import{ Component } from 'react';
import DateRange from '../_components/dateRange'
import Countries from '../_components/countries'

export default class TopComponent extends Component {
  render() {
    return (
     
      <div className="topfilerbar">
		<div className="row">
			<div className="col-sm-4">			 
				<DateRange />
			</div>
			<div className="col-sm-4">
				<select className="form-control select" id="address_country" name="address_country">
						{
							this.props.country && this.props.country.countries.map(function(player) {
								return <option key={player.id} value={player.id}>{player.country_name}</option>
							})
						}
			</select>
			</div>
		</div>
	</div> 
    );
  }
}
