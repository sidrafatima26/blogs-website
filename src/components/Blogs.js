import React from 'react';
import { useContext } from 'react';
import Spinner from './Spinner';
import { AppContext } from '../Context/AppContext';
//import Card from './Card';

export default function Blogs(){

    const {loading, posts} = useContext(AppContext)

    return(
        <div className='w-11/20 max-w-[850px] mt-20 text-center mb-20'>
            {
            loading ? (<Spinner/>) : ( posts.length === 0 ? ( <div> <p> No Posts Found </p> </div>) : ( posts.map( (post) => (
            <div key={post.id} className='p-5'>
            <p className='font-bold text-2xl '>{post.title}</p>
            <p> By <span className='italic'> {post.author} </span> on <span className='underline font-bold'>{post.category}</span> </p>
            <p >Posted on <span>{post.date}</span></p>
            <p className='m-2'>{post.content}</p>
            <div className=' flex justify-center items-center gap-3' >{post.tags.map( (tag,index) => { return <span className=' text-blue-500 underline font-bold text-sm text-center cursor-pointer ' key={index} > {`#${tag}`} </span>} )}</div>
            </div> )
            ))  )  
            }
        </div>
    );
}