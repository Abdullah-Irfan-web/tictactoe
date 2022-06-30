import React ,{useState} from "react";
import Board from "./components/Board"

import "./components/style/styleapp.scss"
import "./winner"
import Statusmsg from "./components/Statusmsg";
import { calculateWinner } from "./winner";
const App = () =>{

  const [board,setboard]=useState(Array(9).fill(null));
  const [isXnext,Xnext]=useState(false);

const {winner,winningline}=calculateWinner(board)

  const handleclick=(position)=>{
    if(board[position] || winner){
      return;
    }
    setboard((prev)=>{
return prev.map((square,pos)=>{
  if(pos==position){
    return  isXnext ?'X' : 'O'
  }
  return square
})
    })
    Xnext(prev=>!prev);
  }

const startgame=()=>{
  setboard(Array(9).fill(null));
  Xnext(false);
}
  return (
    <div className="app">
    <h1>Welcome to TIC TAC TOE game!</h1>


   <Statusmsg
   winner={winner}
   isXnext={isXnext}
   board={board}
   />

    <Board
    board={board}
    handleclick={handleclick}
    winningline={winningline}
    isXnext={isXnext}
     />

    <button className="start" onClick={()=>{
      startgame();
    }} type="button">Start new game</button>

    </div>
  );
};
export default App;
