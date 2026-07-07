 import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
 
 const App = () => {
 const data = [
  {
    img: "https://images.unsplash.com/photo-1783163685162-213197d55eab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    songname: "one lova",
    authorname: "areeb sheikh",
    addfav: false
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1782900377345-6130539f2b76?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    songname: "ABC song",
    authorname: "Pratham laudha",
    addfav: false
  },
  {
    img: "https://images.unsplash.com/photo-1782825955433-cce9fe38a62d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    songname: "ABC song",
    authorname: "Pratham laudha",
    addfav: false
  } ,
  {
    img:"https://images.unsplash.com/photo-1773332611514-238856b76198?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     songname:"areeb song",
     authorname: "farhan bhai",
     addfav:false
  
  }
   
];

 
const [musicdata, setmusicdata] = useState(data);

const handleclick =(index)=>{
 setmusicdata((prev) =>{
  return prev.map((items,itemsindex)=>{
    if(index === itemsindex){
      return {...items, addfav: !items.addfav}
    }
    return items;
  })
 })
}
   return (
     <div className='h-screen w-screen bg-[#111]'>
       <Navbar data = {musicdata}/>
      <div className='p-10 flex  gap-10 flex-wrap'>
   {musicdata.map((items , index)=>{
     return <Cards click = {handleclick} data = {items} index = {index} key = {index}  />

   })}
      </div>
     </div>
   )
 }
 
 export default App
 