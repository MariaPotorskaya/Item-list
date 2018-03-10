import React, { Component } from 'react';
import Button from './Button'

class Item extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            check: 0
        }

        this.remove = this.remove.bind(this);
        this.check = this.check.bind(this);
    }

    render() {
        const className = 'Item' + (this.state.check === this.props.count ? ' complite' : '');
        return(
            <section className={className}>
                <section className='text'>
                    {this.props.name}
                </section>
                <section className='text'>
                    {this.state.check}
                    /
                    {this.props.count}
                </section>
                <section className='button'>
				    <Button text='up' click={this.check} />
				    <Button text='remove' click={this.remove} />
                </section>
			</section>
        );
    }

    check() {
        if (this.state.check < this.props.count) {
            this.setState({check: ++this.state.check});
        }
    }

    remove() {
        this.props.removeItem(this.props.id)
    }
}

export default Item