import React from 'react';
import './users.css'

export default function User(props) {
    console.log( "user----------------------",props)
    return (
        <div className ="user">
      { props.data.length !=0 ? 
          <div>

<div className="users__row">
    
    {
        props.data.slice(0,3).map(post=>
    <div className="single__users">
        <li >            
    <div className = "name"><strong>Name :</strong> {post.name}</div>
    <div className = "email"><strong>Email :</strong> {post.email}</div> 
    <div className = "gender"><strong>Gender :</strong> {post.gender}</div>         


        </li></div>)
    }
      </div>

      <div  className="users__row">
    {
        props.data.slice(3,6).map(post=>
    <div className="single__users">
        <li >            
    <div className = "name"> <strong>Name :</strong> {post.name}</div>
    <div className = "email"><strong>Email :</strong> {post.email}</div> 
    <div className = "gender"><strong>Gender :</strong> {post.gender}</div>         


        </li></div>)
    }
      </div>
          </div>
          
       : <h2>There Are No Users Left Please Refresh The Page</h2>
      
    }



  
      
</div>
    )
}
