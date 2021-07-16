import React, {Component, Fragment} from 'react';
import Post from '../Post/Post';
import './BlogPost.css';
import axios from 'axios';

class BlogPost extends Component {

    // Siapkan state
    state = {
        post: []
    }

    getPostApi = () => {
        // 2. Menggunakan Axios
        axios.get('http://localhost:3004/posts')
        .then((result) => {
            // console.log(result.data);
            this.setState({
                post: result.data
            })
        })
    }

    handleRemove = (data) => {
        // console.log(data);
        axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
            // console.log(res);
            this.getPostApi()
        })
    }

    // Ketika component berhasil dimounting
    componentDidMount() {
        // 1. Menggunakan Fetch
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })

        // 2. Menggunakan Axios
        // axios.get('http://localhost:3004/posts')
        // .then((result) => {
        //     // console.log(result.data);
        //     this.setState({
        //         post: result.data
        //     })
        // })

        // Memanggil post api
        this.getPostApi();
    }

    // Kita akan memanggil API dari post ini
    render() {
        return(
            <Fragment>
                <p className="section-title">Blog Post</p>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove}/>

                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;