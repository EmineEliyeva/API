import { useState, useEffect } from 'react';
import React from 'react'
import './Main.css'
const Main = () => {
    const [search, setSearch]=useState("")
    const [myData, setMyData] = useState([])
  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character/')
    .then(res=> res.json())
    .then(data=>{
        setMyData(data.results)
        console.log(data.results);
    })
  },[])
  const searchData = (e)=>{
    setSearch(e.target.value.toLowerCase())
  }
  const filteredData = myData.filter(
    (results) =>
        results.name.toLowerCase().includes(search) ||
        results.species.toLowerCase().includes(search)
);
 
  return (
    <div>
        <div className="inp">
            <input onChange={searchData} type="text" />
        </div>
      <div className="caracters">
      {
            filteredData.map((a, i)=>(
                <div key={i} className='div'>
                    <img src={a.image} alt="image" />
                    <h1>{a.name}</h1>
                    <h2>{a.status}</h2>
                    <h3>{a.species}</h3>
                </div>
        ))
        }
    
      </div>
    </div>
  )
}

export default Main