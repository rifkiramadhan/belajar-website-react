import React, {Component} from 'react';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
// import Product from '../Product/Product';
// import YouTubeComp from '../../component/YoutubeComp/YouTubeComp';

class Home extends Component {

    state = {
        showComponent: true
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
            
        // }, 15000);
    }

    render() {

        return(
            <div>
                {/* <p>Youtube Component</p>
                <hr />
                <YouTubeComp 
                time="4:11" 
                title="Tutorial React JS - Bagian 1"
                desc="2x ditonton, 2 hari yang lalu"/>
                <YouTubeComp 
                time="8:02" 
                title="Tutorial React JS - Bagian 2"
                desc="200x ditonton, 10 hari yang lalu"/>
                <YouTubeComp 
                time="5:04" 
                title="Tutorial React JS - Bagian 3"
                desc="500x ditonton, 4 hari yang lalu"/>
                <YouTubeComp 
                time="4:12" 
                title="Tutorial React JS - Bagian 4"
                desc="1k ditonton, 14 hari yang lalu"/>
                <YouTubeComp/> */}

                {/* <p>Counter</p>
                <hr />
                <Product /> */}

                <p>Life Cycle Component</p>
                <hr />
                
                {
                    this.state.showComponent ?
                    <LifeCycleComp/> : null
                }

            </div>
        )
    }
}

export default Home;