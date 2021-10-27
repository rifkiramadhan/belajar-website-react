// Libraries
import React, {Component, Fragment, createContext} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// Pages
import BlogPost from '../pages/BlogPost/BlogPost';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import Product from '../pages/Product/Product';
import YoutubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage'

// Style
import './Home.css';

export const RootContext = createContext();
const Provider = RootContext.Provider;

class Home extends Component {

    state = {
        totalOrder: 5
    }


    render() {
        return(
            <Router>
                <Provider value={this.state}>
                    <Fragment>
                        <div className="navigation">
                            <Link to="/">Blog Post</Link>
                            <Link to="/product">Product</Link>
                            <Link to="/lifecycle">Lifecycle</Link>
                            <Link to="/youtube-component">Youtube</Link>
                        </div>
                        <Route path="/" exact component={BlogPost} />
                        <Route path="/detail-post/:postID" component={DetailPost} />
                        <Route path="/product" component={Product} />
                        <Route path="/lifecycle" component={LifeCycleComp} />
                        <Route path="/youtube-component" component={YoutubeCompPage} />
                    </Fragment>
                </Provider>
            </Router>
        )
    }
}

export default Home;