import React, { Component } from 'react';
import Counter from './Counter';

class CardProduct extends Component{

    render(){
        return(
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/1/14/476717782/476717782_e7e26483-1349-45cf-8de2-aa42dd515646_1084_1084.jpg" alt=""/>
                    </div> 
                    <p className="product-title">Bumbu Tepung Sajiku 1Kg untuk ayam goreng kentucky</p>
                    <p className="product-price">Rp.34.000</p>
                    <Counter />
                </div>
                );
            } 
        }
    export default CardProduct;
