import React, {Component} from 'react';

class Counter extends Component {

    state = {
        order: 4,
        name: 'Rifki'
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })
    }

    handleMinus = () => {
        if(this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
            this.handleCounterChange(this.state.order);
            })
        }
    }

    render() {
        return(
            <div className="counter">
                <button className="minus" onClick={this.handleMinus}>-</button>
                <input type="text" value={this.state.order}/> 
                <button className="plus" onClick={this.handlePlus}>+</button>
            </div>
        )
    }
}

export default Counter;