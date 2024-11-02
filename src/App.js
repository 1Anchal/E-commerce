import logo from './logo.svg';
import './App.css';
import Category from './Category';
import axios from 'axios';

import { useEffect, useState } from 'react';

function App() {
  let [finalCategory,setfinalCategory]=useState([]);
  let [finalPro,setfinalPro]=useState([]);
  let [catName,setcatName]=useState('');
  let getCategory=()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res)=>res.data)
    .then((finalRes)=>{
      setfinalCategory(finalRes);
    });
  };

  let getProducts=()=>{
    axios.get('https://dummyjson.com/products')
    .then((proRes)=>proRes.data)
    .then((finalRes)=>{
      setfinalPro(finalRes.products)
    })
  }
  useEffect(()=>{
    getCategory();
    getProducts();
  },[])
  useEffect(()=>{
    console.log(catName);
    if(catName!==""){
      axios.get(`https://dummyjson.com/products/category/${catName}`)
      
    .then((proRes)=>proRes.data)
    .then((finalRes)=>{
      setfinalPro(finalRes.products)
    
    })
  }
  },[catName])

  let Pitems=finalPro.map((products,index)=>{
    return(
      <ProductItems key={index} pdata={products}/>
    );
  })
  return (
    <>
    <div className="py-[40px]">
      <div className='max-w-[1320px] mx-auto'>
        <h1 className='text-center text-[40px] font-bold mb-[30px]'>Our Products</h1>
        <div className='grid grid-cols-[30%_auto] gap-[20px]'>
          <div>
            
            <Category finalCategory={finalCategory} setcatName={setcatName} selectedCat={catName}/>
          </div>
          <div>
            <div className='grid grid-cols-3 gap-4'>
              {
              finalPro.length>=1 ?
              Pitems
            : "no data found"}
                
            

            </div>
          </div>
          
        </div>

      </div>
      
    </div>
    </>
  );
}

export default App;

function ProductItems({pdata}) {
  console.log(pdata.title);
  return (
    <div className='shadow-lg text-center pb-4'>
        
        <img src={pdata.thumbnail}></img>
      <h4>{pdata.title}</h4>
      <p>${pdata.price}</p>
      </div>
  );
}
