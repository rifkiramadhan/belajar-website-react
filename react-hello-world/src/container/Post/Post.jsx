import React from 'react';

const Post = (props) => {
    return (
        <div className="post">
           <div className="img-thumb">
                <img src="https://placeimg.com/200/150/tech" alt="dummy" />
           </div>
                <div className="content">
                <p className="title">{props.title}</p>
                <p className="desc">{props.desc}</p>
            </div>
        </div>
    )
}

export default Post;