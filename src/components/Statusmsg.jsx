import React from 'react'

const Statusmsg = ({winner,isXnext,board}) => {
    

const noMoveleft=board.every(x=>x!==null)
  return (
    <h2>
     
     {winner && 
     <>
     Winner is {' '}
      <span className={`${winner=='X'?'text-green':'text-orange'}`}>{winner}</span>
     </>
     }
     
      
        {!winner  && !noMoveleft &&
        
        <>
       
        Next player to play <span className={isXnext?'text-green':'text-orange'}>{`${isXnext?'X':'O'}`}</span> 
        </> 
        }

        {!winner && noMoveleft && `Match Draw`}
    </h2>
  )
}

export default Statusmsg