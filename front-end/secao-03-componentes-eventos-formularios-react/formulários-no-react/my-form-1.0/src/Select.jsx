import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
    render() {
			const {selectTeam, handleChange} = this.props;
        return (
					
					<div>
						<label htmlFor='times'>
								Escolha o maior time do Brasil:
							<select name="selectTeam" value={ selectTeam } onChange={ handleChange } id="times">
								<option value="">Selecione</option>
								<option value="Palmeiras">Palmeiras</option>
								<option value="Flamengo">Flamengo</option>
								<option value="Corinthians">Corinthians</option>
							</select>
							</label>
							<br></br>
							<br></br>
					</div>
        )
    }
}

Select.propTypes = {
	selectTeam: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
}
export default Select;
