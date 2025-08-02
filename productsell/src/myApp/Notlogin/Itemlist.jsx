import React, {useState ,useEffect} from 'react'
import axios from 'axios'


function Itemlist() {

  const [item, setItem]=useState([])

  const myApi = ()=>{
     axios.get('https://dummyjson.com/products').then((d) => {
      console.log(d.data.products);
      setItem(d.data.products)
    })

  }

   useEffect(()=>{
    myApi();
  },[])

  return (
    <>
    <div className='w-full h-auto flex flex-wrap items-center justify-evenly px-20 mt-4'>
      {item.map((d)=>{
        return(
         <div className='w-full h-auto mx-10 sm:w-[500px]  sm:flex shadow-md shadow-indigo-400 mb-8 border border-indigo-500 rounded-md' key={d.id}>
            <div className=''>
                <img className='w-full h-50 shadow-2xl' src={d.thumbnail} alt="" />
            </div>
            <div className='p-4'>
                <p className='text-2xl font-bold text-indigo-600'>{d.title}</p>
                
            </div>
        </div>

      )})}
       
    </div>
    </>
  )
}

export default Itemlist