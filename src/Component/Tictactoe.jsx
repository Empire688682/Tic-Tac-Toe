import React, { useRef } from 'react'
import './Tictactoe.css'
import { useState } from 'react'
import circle_Icon from '../Component/Assets/circle.png'
import cross_Icon from '../Component/Assets/cross.png'

let data = Array(9).fill("");
const Tictactoe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const titleRef = useRef(null);
  const box1 = useRef(null)
  const box2 = useRef(null)
  const box3 = useRef(null)
  const box4 = useRef(null)
  const box5 = useRef(null)
  const box6 = useRef(null)
  const box7 = useRef(null)
  const box8 = useRef(null)
  const box9 = useRef(null)
 const box_Arrays = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

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
      const speech = new SpeechSynthesisUtterance();
      speech.text = "Congratulation circle won"
      window.speechSynthesis.speak(speech);
      titleRef.current.innerHTML = `Congratulation: <img src=${circle_Icon} />` + "Won";
    }
    else{
      const speech = new SpeechSynthesisUtterance();
      speech.text = "Congratulation Times won"
      window.speechSynthesis.speak(speech);
      titleRef.current.innerHTML = `Congratulation: <img src=${cross_Icon} />` + "Won";
    }
  }

  const resetState = () =>{
    setLock(false);
    setCount(0)
    titleRef.current.innerHTML = "TIC TAC TOE GAME";
    box_Arrays.map((boxs) =>{
      boxs.current.innerHTML = "";
    });
    data = Array(9).fill("")
  }

  return (
    <div>
      <div className="tictactoe">
        <h1 ref={titleRef}>TIC TAC TOE GAME</h1>
        <div className="row">
          <div className="colums">
            <div ref={box1} onClick={(e) =>{toggle(e,0)}} className="boxes"></div>
            <div ref={box2} onClick={(e) =>{toggle(e,1)}} className="boxes"></div>
            <div ref={box3} onClick={(e) =>{toggle(e,2)}} className="boxes"></div>
          </div>
          <div className="colums">
            <div ref={box4} onClick={(e) =>{toggle(e,3)}} className="boxes"></div>
            <div ref={box5} onClick={(e) =>{toggle(e,4)}} className="boxes"></div>
            <div ref={box6} onClick={(e) =>{toggle(e,5)}} className="boxes"></div>
          </div>
          <div className="colums">
            <div ref={box7} onClick={(e) =>{toggle(e,6)}} className="boxes"></div>
            <div ref={box8} onClick={(e) =>{toggle(e,7)}} className="boxes"></div>
            <div ref={box9} onClick={(e) =>{toggle(e,8)}} className="boxes"></div>
          </div>
          <button  type="button" onClick={resetState}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Tictactoe
