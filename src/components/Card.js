import React from 'react';

export default function Card(post){

    return( 
        <div>
            <p className='font-bold text-3xl text-blue-800'>{post.title}</p>
            <p> By <span> {post.author} </span> on <span>{post.category}</span> </p>
            <p>Posted on <span>{post.date}</span></p>
            <p>{post.content}</p>
            <div key={post.id}>{post.tags.map( (tag) => { return <span> {`#${tag}`} </span>} )}</div>
        </div>
    );
}