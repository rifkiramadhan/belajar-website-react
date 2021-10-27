import React, {Component, Fragment} from 'react';
import './LifeCycleComp.css';
import {connect} from 'react-redux';
import { GlobalConsumer } from '../../../context/context';

// Urutan LifeCycle Component
class LifeCycleComp extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 1
        }
        // Pertama
        console.log('constructor');
    }

    // Kedua
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null;
    }

    // Keempat
    componentDidMount() {
        console.log('componentDidMount');
        // setTimeout(() => {
        //     this.setState({
        //         count: 2
        //     })
        // }, 5000);
    }

    shouldComponentUpdate(nextProps, nextSate) {
        console.group('shouldComponentUpdate');
        // console.log('nextProps', nextProps);
        console.log('nextStage', nextSate);
        console.log('this state: ', this.state);
        console.groupEnd();
        if(nextSate.count >= 4) {
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    // Method yang dibuat menggunakan default onclick
    changeCount = () => {
        this.setState({
            count: this.state.count + 1            
        })
    }

    // Ketiga
    render(){
        console.log('render');
        return (
            <Fragment>
                <p>Halaman LifeCycle</p>
                <hr/>
                <button className="btn" onClick={this.changeCount}>Component Button {this.state.count}</button>
                <hr />

                <p>Total Order: {this.props.state.totalOrder}</p>
            </Fragment>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(LifeCycleComp);
export default GlobalConsumer(LifeCycleComp);