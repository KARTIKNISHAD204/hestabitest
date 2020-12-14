import React, {Component, useEffect,useState}from 'react';
import Post from './Post';
import './post.css'

export default function UiBlock(props) {
    const [post, setPosts] = useState({});  // when we got response from server we are storing
    // response json to post state using setPost 
    const [page ,setPage] = useState(3);
    const [fetched,setFetched] =useState(false); // when data is fetched it will be true and make sure that undefined 
    // will not be passed to  card or post component
   
    const url = props.url;

  
   

    

   
    async function fetchData() {
        const res = await fetch(`${url}`);
        res
          .json()
          .then(res =>{
              setPosts(res)
              setFetched(true)
            }
          )
          .catch(err => console.log(err) );
      }
    
      useEffect(() => {
        fetchData();
      },[]);
      // here empty dependecy is given to prevent unlimited rendering 
      // empty array will never be updated so it renders only 1 time 
    
   const loadMore=()=>{
      const newpage = page + 3;
      setPage(newpage);
      // newpage passes the index of response data that should be render by post and user component
   }

    return (
        <div>
         

         <div>
         {  fetched &&  props.callback(post,page)}
             </div>  
       <div><button className="load__more" onClick={loadMore}> Load More</button></div>
           
        </div>
    )
}
