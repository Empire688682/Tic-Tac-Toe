import React, { useRef } from 'react'
import './Tictactoe.css'
import { useState } from 'react'
import circle_Icon from '../Component/Assets/circle.png'
import cross_Icon from '../Component/Assets/cross.png'

let data = Array(9).fill("");
const Tictactoe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const titleRef = useRef(null)

  const toggle = (e, num) => {
    if(lock){
      return null
    }
    if(count %2 === 0){
      e.target.innerHTML = `<img src=${cross_Icon} />`;
      data[num] = "x";
      setCount(count+1)
    }
    else{
      e.target.innerHTML = `<img src=${circle_Icon} />`;
      data[num] = "o";
      setCount(count+1)
    }
    checkWin()
  }

  const checkWin = () => {
    if(data[0]=== data[1] && data[1]===data[2] && data[2]!==""){
      won(data[2]);
    }
    else if(data[3]=== data[4] && data[4]===data[5] && data[5]!==""){
      won(data[5]);
    }
    else if(data[6]=== data[7] && data[7]===data[8] && data[8]!==""){
      won(data[8]);
    }
    else if(data[0]=== data[4] && data[4]===data[8] && data[8]!==""){
      won(data[8]);
    }
    else if(data[2]=== data[4] && data[4]===data[6] && data[6]!==""){
      won(data[6]);
    }
    else if(data[0]=== data[3] && data[3]===data[6] && data[6]!==""){
      won(data[6]);
    }
    else if(data[1]=== data[4] && data[4]===data[7] && data[7]!==""){
      won(data[7]);
    }
    else if(data[2]=== data[5] && data[5]===data[8] && data[8]!==""){
      won(data[8]);
    }
  }

  const won = (winner) =>{
    setLock(true);
    if(winner === "o"){
      titleRef.current.innerHTML = `Congratulation: <img src=${circle_Icon} />` + "Won";
    }
    else{
      titleRef.current.innerHTML = `Congratulation: <img src=${cross_Icon} />` + "Won";
    }
  }

  return (
    <div>
      <div className="tictactoe">
        <h1 ref={titleRef}>TIC TAC TOE GAME</h1>
        <div className="row">
          <div className="colums">
            <div onClick={(e) =>{toggle(e,0)}} className="boxes"></div>
            <div onClick={(e) =>{toggle(e,1)}} className="boxes"></div>
            <div onClick={(e) =>{toggle(e,2)}} className="boxes"></div>
          </div>
          <div className="colums">
            <div onClick={(e) =>{toggle(e,3)}} className="boxes"></div>
            <div onClick={(e) =>{toggle(e,4)}} className="boxes"></div>
            <div onClick={(e) =>{toggle(e,5)}} className="boxes"></div>
          </div>
          <div className="colums">
            <div onClick={(e) =>{toggle(e,6)}} className="boxes"></div>
            <div onClick={(e) =>{toggle(e,7)}} className="boxes"></div>
            <div onClick={(e) =>{toggle(e,8)}} className="boxes"></div>
          </div>
          <button  type="button">Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Tictactoe
