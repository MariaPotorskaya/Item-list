import React, { Component } from 'react';
import Button from './Button'

class NewItem extends Component {
	constructor(props) {
		super(props);

	    this.state = {
	      	name: '',
	      	count: 0
	    };

	    this.onChangeName = this.onChangeName.bind(this);
	    this.onChangeCount = this.onChangeCount.bind(this);
	    this.onAdd = this.onAdd.bind(this);
	}

  	render() {
  		return (
	  		<section className='NewItem'>
				<label className='name'>
					Name
					<input type='text' value={this.state.name} onChange={this.onChangeName} />
				</label>
				<label className='count'>
					Count
					<input type='text' value={this.state.count} onChange={this.onChangeCount} />
				</label>
				<section className='button'>
		  			<Button text='add' click={this.onAdd} />
				</section>
		  	</section>
  		);
  	}

  	onChangeName(event) {
  		this.setState({name: event.target.value});
  	}

  	onChangeCount(event) {
		this.setState({count: +event.target.value});
  	}

  	onAdd() {
  		this.props.addNewItem(this.state.name, this.state.count);
  	}
}

export default NewItem;