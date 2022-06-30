import React from 'react'

const Square = ({value,onClick,iswinning,isXnext}) => {
  console.log(value);
  
  return (
    
    
       <button onClick={onClick}  className={`square ${value==='X'?'text-green':'text-orange'}`} type="button" style={{fontWeight:iswinning?'bold':'normal'}}>
        
        {value}
         
       
       
       </button>
      
      
      
    
  )
}

export default Square