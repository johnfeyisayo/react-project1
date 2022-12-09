import React from 'react'
import Data from './Data'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Card.css'
export default function Card() {
  
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');
  
    useEffect(() => {
        const loadPost = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/");
        setPosts(response.data);

        }
  
        // Call the function
        loadPost();
    }, []);


  return (
    <div>
    <div className='input-container' >
      <input type="text" placeholder='Search...' onChange={(e) => setInput(e.target.value)} />
    </div>
       <div className='movie-grid' >
       {posts.filter((value) => {
        return input.toLowerCase() === '' ? value : value.title.toLowerCase().includes(input)
       }).map((item) =>
    <div key={item.id} className="movie-container">
    <Data title={item.title} body={item.body}/>
    </div>
    )}
    </div>
    </div>
  )
}