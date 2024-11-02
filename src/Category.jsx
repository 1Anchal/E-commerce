import React from 'react'

export default function Category({ finalCategory,setcatName,selectedCat }) {
    const cat=finalCategory.map((item,i)=>(
        
        <li onClick={()=>setcatName(item.slug)} 
        key={i} 
        className={`p-[7px] cursor-pointer text-[20px] font-serif font-[500] mb-2  ${selectedCat === item.slug ? 'bg-green-400' : 'bg-[#ccc]'}`}
        > {item.name}</li>
        )
      
        
        
    );
  return (
    <div>
      <h3 className='text-[25px] font-[500] p-[10px]'>Product Category</h3>
        <ul>
            {cat}
        </ul>
    </div>
  )
}

