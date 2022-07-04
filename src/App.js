import {data} from './data'
import './App.css';
import React from 'react';
import {useState} from 'react'



function App() {
  const[people ,setPeople]=useState(data)
  return (
    <main>
    <section className='container'>
    <h3>{people.length}  BirthDay Today</h3>
     
  
     {people.map(({id,name,image,age})=>{
      return(
          <article key={id} className='person'>
         <img src={image} alt=''/>
         <div>
             <h4>{name}</h4>
             <p>{age}</p>
            <button onClick={()=>{
             const remdata=people.filter((people)=>people.id !==id)
             setPeople(remdata)
            }}>Remove</button>
            <button onClick={()=>{
              const data=people.filter((people)=>people.id !==id)
              
            }}>Details</button>
         </div>
          </article>
      )
    })}
     
    <button onClick={()=>{
    setPeople([])
   
    }} >Delete</button>
     <button onClick={()=>{ 
     
      setPeople(data)

     }}>UnDo</button>
    </section>
    </main>
  );
}

export default App;
