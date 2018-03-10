import React, { Component } from 'react';
import NewItem from './NewItem';
import Item from './Item';

class ItemList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: []
		}

		this.addNewItem = this.addNewItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
	}

  	render() {
		const is = this.state.items.map(i => 
			<Item name={i.name} count={i.count} key={i.id} id={i.id} removeItem={this.removeItem} />
		);
		return (
			<section className='App'>
				<NewItem addNewItem={this.addNewItem}/>
				{is}
			</section>
		)
    }

	addNewItem(name, count) {
		const newItems = [...this.state.items];
		newItems.push({id: Math.random(), name, count});
		this.setState({items: newItems});
    }

	removeItem(id) {
		const index = this.state.items.findIndex(t => t.id === id);
    	const copy = [...this.state.items];
    	copy.splice(index, 1);
    	this.setState({items: copy});
	}
}

export default ItemList;