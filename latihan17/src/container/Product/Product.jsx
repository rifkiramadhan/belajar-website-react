import React, { Component, Fragment } from 'react';
import CardProduct from '../CardProduct/CardProduct';
import './Product.css'; 

class Product extends Component{
    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render(){
        return(
            <Fragment>
                <p>Halaman Product</p>
                <hr />
                <div className="header">
                    <div className="logo">
                        <img src="https://info.etanee.id/wp-content/uploads/2020/06/Logo-etanee-LEAF-GREEN-500px.png" alt=""/>
                    </div>
                    <div className="troley">
                        <img src="https://image.flaticon.com/icons/png/512/263/263142.png" alt=""/>
                        <div className="count">{this.state.order}</div>
                     </div> 
                </div>
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
            </Fragment>
            );
            } 
        }
        export default Product;
