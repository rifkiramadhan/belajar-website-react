import React, { Component, Fragment } from 'react';
import CardProduct from './CardProduct/CardProduct';
import './Product.css'; 
import {connect} from 'react-redux';
import {RootContext} from '../../Home/Home';

class Product extends Component{
    // state = {
    //     order: 4
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render(){
        return(
            <RootContext.Consumer>
                {
                    value => {
                        return (
                            <Fragment>
                                <p>Halaman Product</p>
                                <hr />
                                <div className="header">
                                    <div className="logo">
                                        <img src="https://info.etanee.id/wp-content/uploads/2020/06/Logo-etanee-LEAF-GREEN-500px.png" alt=""/>
                                    </div>
                                    <div className="troley">
                                        <img src="https://image.flaticon.com/icons/png/512/263/263142.png" alt=""/>
                                        <div className="count">{value.state.totalOrder}</div>
                                    </div> 
                                </div>
                                <CardProduct />
                            </Fragment>
                        )
                    }
                }
            </RootContext.Consumer>
        );
    } 
}

// const mapStateToProps = state => {
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(Product);
export default Product;
