import React, {Component, Fragment} from 'react';
import Post from '../Post/Post';
import './BlogPost.css';
import axios from 'axios';

class BlogPost extends Component {

    // Siapkan state
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false
    }

    getPostApi = () => {
        // 2. Menggunakan Axios
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then((result) => {
            // console.log(result.data);
            this.setState({
                post: result.data
            })
        })
    }

    postDataToApi = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost).then((res) => {
            console.log(res);
            
            // Memanggil data yang telah disubmit
            this.getPostApi();

            this.setState({
                // isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                },
            })
        }, (err) => {
            console.log('error: ', err);
        })
    }

    PutDataToApi = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then(res => {
            console.log(res);
            this.getPostApi();
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                },
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

    handleUdate = (data) => {
        console.log(data);
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
        // axios.put(`http://localhost:3004/posts/${data}`, this.state.formBlogPost).then(res => {
        //     console.log(res);
        //     this.getPostApi();
        // })

    }

    // Membuat sebuah handler/method ketika input/ketika form berubah
    handleFormChange = (event) => {
        // console.log('form change', event.target);
        let formBlogPostNew = {...this.state.formBlogPost};
        let timestamp = new Date().getTime();
        // console.log(timestamp);
        
        if(!this.state.isUpdate) {
            formBlogPostNew['id'] = timestamp;

        }

        // console.log(event.target.name);
        formBlogPostNew[event.target.name] = event.target.value;
        // console.log('init state: ', this.state.formBlogPost);
        // console.log('new value: ', formBlogPostNew);
        // let title = event.target.value
        this.setState({
            formBlogPost: formBlogPostNew
        }) 
    }

    handleSubmit = () => {
        if(this.state.isUpdate) {
            this.PutDataToApi();
        }else{
            this.postDataToApi();
        }
        // console.log(this.state.formBlogPost);
    }

    // Ketika component berhasil dimounting
    componentDidMount() {
        // Remove fungsi code yang tidak digunakan
        this.getPostApi();
    }

    // Kita akan memanggil API dari post ini
    render() {
        return(
            <Fragment>
                <p>Halaman Blog Post</p>
                <hr />
                <p className="section-title">Blog Post</p>
                
                <div className="form-add-post">
                    <label className="title">Title</label>
                    <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="add title" onChange={this.handleFormChange}/>
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" cols="30" rows="10" value={this.state.formBlogPost.body} placeholder="add blog content" onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUdate}/>

                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;