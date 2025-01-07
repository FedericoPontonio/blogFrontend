import { useState } from 'react'
import './App.css'

function App() {
  const getAllPosts = "https://blogbackend-jjff.onrender.com/posts";
  const [data, setData] = useState([]);
  async function getData() {
    const url = getAllPosts;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setData(json)
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <>
      <div>
        <button onClick={getData}>Get all posts</button>
        {data.allPosts && data.allPosts.map((post) => <div key={post.id}>{post.title}</div>)}
        {console.log(data.allPosts)}
      </div>
    </>
  )
}

export default App

