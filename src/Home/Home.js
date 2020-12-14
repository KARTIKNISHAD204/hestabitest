import React, { Component } from 'react';
import './home.css';
import Post from './Components/Post';
import User from './Components/User' ;
import UiBlock from './Components/UiBlock'


export default class Home extends Component {

    render() {
        return (
            <div className="home">
                <div className="title">
                  <h1>Our</h1><span >Post</span>
                </div>

                <div className="resuable__container">
                        <UiBlock url={`https://gorest.co.in/public-api/posts`}  callback={(data,index)=>{ return <Post data={data.data.slice(index-3,index)}/>        
                        }}
                        // uiBlock is reusable component block which takes url and 
                        // return callback function with fetched post and page index 
                        // 
                        />
                    
                 </div>

                <div className="title">
                  <h1>Our</h1> <span >Users</span> 
                </div>
                <div   className="resuable__container"> 

                    <UiBlock  url={`https://gorest.co.in/public-api/users`} callback = {(data,index)=>{return <User  data = {data.data.slice( 2*index-6 ,2*index)}/>}}/>             

                </div>

            </div>
        )
    }
}
