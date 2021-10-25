import React, { Component } from 'react';

class CardProduct extends Component{
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

    render(){
        return(
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/1/14/476717782/476717782_e7e26483-1349-45cf-8de2-aa42dd515646_1084_1084.jpg" alt=""/>
                    </div> 
                    <p className="product-title">Bumbu Tepung Sajiku 1Kg untuk ayam goreng kentucky</p>
                    <p className="product-price">Rp.34.000</p> 
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.order}/> 
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
                );
            } 
        }
        export default CardProduct;
