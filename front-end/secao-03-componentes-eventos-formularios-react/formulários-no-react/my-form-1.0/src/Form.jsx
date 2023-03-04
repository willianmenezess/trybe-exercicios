import React, { Component } from 'react';
import Select from './Select';

class Form extends Component {
	constructor() {
		super();

		this.state = {
			favPlayer: '',
			textPlayer: '',
			selectTeam: '',
		};
	};

	handleChange = ({target}) => {
		// if(target.type === 'checkbox') {
		// 	this.setState({
		// 		[target.name]: target.checked,
		// 	})
		// }
		// this.setState({
		// 	[target.name]: target.value
		// })

		console.log('função no componente pai')

		const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });

	};

    render() {
			const {favPlayer, textPlayer, selectTeam} = this.state;
        return (
					<section>
					<h1> 
						Pesquisa sobre melhor time do Brasil e jogador favorito 
					</h1>
					<form>
						{/* componente controlado pelo react */}
						<Select selectTeam={selectTeam} handleChange={this.handleChange}/>
						
						{/* componente controlado pelo react */}
						<label>
							Jogador favorito do time escolhido
							<input type="text" name="favPlayer" value={ favPlayer } onChange={this.handleChange}/>
						</label>
						<br></br>
						<br></br>

						{/* componente controlado pelo react */}
						<label>
							Por qual motivo escolheu esse jogador?
							<textarea name="textPlayer" value={ textPlayer } onChange={this.handleChange}></textarea>
						</label>

					</form>
					</section>
        )
    }
}

export default Form;