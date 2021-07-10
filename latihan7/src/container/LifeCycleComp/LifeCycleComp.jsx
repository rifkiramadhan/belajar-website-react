import React, {Component} from 'react';
import './LifeCycleComp.css';

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
        setTimeout(() => {
            this.setState({
                count: 2
            })
        }, 3000);
    }

    shouldComponentUpdate(nextProps, nextSate) {
        console.log('shouldComponentUpdate');
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

    // Ketiga
    render(){
        console.log('render');
        return (
            <button className="btn">Component Button {this.state.count}</button>
        )
    }
}

export default LifeCycleComp;