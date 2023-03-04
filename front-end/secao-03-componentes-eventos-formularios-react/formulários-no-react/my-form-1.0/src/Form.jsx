import React, { Component } from 'react';

class Form extends Component {
	constructor() {
		super();

		this.state = {
			favPlayer: '',
		};
	};

	handleChange = ({target}) => {
		this.setState({
			[target.name]: target.value
		})
	};

    render() {
			const {favPlayer} = this.state;
        return (
					<form>
						<label htmlFor='times'>
							Escolha o maior time do Brasil:
						<select id="times">
							<option value="">Palmeiras</option>
							<option value="">Flamengo</option>
							<option value="">Corinthians</option>
						</select>
						</label>
						<br></br>
						<br></br>
						
						{/* componente controlado pelo react */}
						<label>
							Jogador favorito do time escolhido
							<input type="text" name="favPlayer" value={favPlayer} onChange={this.handleChange}/>
						</label>
						<br></br>
						<br></br>

						<label>
							Por qual motivo escolheu esse jogador?
							<textarea name="" value=""></textarea>
						</label>

					</form>
        )
    }
}

export default Form;