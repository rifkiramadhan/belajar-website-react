import React, {Component, Fragment} from 'react';
import BlogPost from '../BlogPost/BlogPost';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import Product from '../Product/Product';
import YouTubeComp from '../../component/YoutubeComp/YouTubeComp';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './Home.css';

class Home extends Component {

    state = {
        showComponent: true
    }

    render() {

        return(
            <BrowserRouter>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifecycle">Lifecycle</Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/product" component={Product} />
                    <Route path="/lifecycle" component={LifeCycleComp} />
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default Home;