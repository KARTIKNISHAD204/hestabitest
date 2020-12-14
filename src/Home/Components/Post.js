import React from 'react';
import './post.css'
// this componnet post single post is columns arrangemnet , this component will have only 
// sliced array of if we need to render next 3 post it will get only 3 post's data as props
const Post = (props) =>{
    console.log( "post----------------------",props)
    return (
        <div className ="posts">
            {
               props.data.length !==0 ?   props.data.map(post=>
            <div className="singlepost">
                <li >            
            <div className = "title">{post.title}</div>
            <div className = "body">{post.body}</div>       


                </li></div>) : <h2> There are no posts left please refresh the page </h2>
            }

      
          
    </div>
    )
}
export default  Post;