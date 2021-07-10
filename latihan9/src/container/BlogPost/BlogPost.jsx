import React, {Component, Fragment} from 'react';
import Post from '../Post/Post';
import './BlogPost.css';

class BlogPost extends Component {

    // Siapkan state
    state = {
        post: []
    }

    // Ketika component berhasil dimounting
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
    }

    // Kita akan memanggil API dari post ini
    render() {
        return(
            <Fragment>
                <p className="section-title">Blog Post</p>
                <Post title="title" desc="desc" />
            </Fragment>
        )
    }
}

export default BlogPost;