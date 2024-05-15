import React, { useState } from 'react';
import { useEffect } from 'react';
import './Room4.css';
import Room3 from './Room3';
import Room1 from './Room1';
import Gameover from './Gameover';


const Room4 = () => {
    const [Lock1, setLock1] = useState("locked");
    const [Lock2, setLock2] = useState("locked");
    const [Lock3, setLock3] = useState("locked");
    const [Lock4, setLock4] = useState("locked");
    const [showRoom3, setShowRoom3] = useState(false);
    const [showRoom1, setShowRoom1] = useState(false);
    const [showgame, setshowgame] = useState(false);
    const [timer, setTimer] = useState(300);

    useEffect(() => {
      const countdown = setTimeout(() => {
        if (timer === 0) {
          setshowgame(true);
          setShowRoom3(false);
          setShowRoom1(false);
        } else {
          setTimer(timer - 1); 
        }
      }, 1000); 
  
      return () => clearTimeout(countdown);
    }, [timer]);
  
    const tryLock1 = () => {
      const input = prompt("The mural seems to hide something\uFF02,you thought.There was a faint inscription on it, it read (1,1)");
      if (input === "18") {
        setLock1("unlocked");
        
      } else {
        alert("Time slips by , you stand intrigued, captivated by the murals and the hush of what lay beyond the door.");
      }
    };

    const tryLock2 = () => {
        const input = prompt("The mural seems to hide something\uFF02,you thought.There was a faint inscription on it, it read (3,2)");
        if (input === "17") {
          setLock2("unlocked");
          
        } else {
          alert("Time slips by , you stand intrigued, captivated by the murals and the hush of what lay beyond the door.");
        }
    };

    const tryLock3 = () => {
        const input = prompt("The mural seems to hide something\uFF02,you thought.There was a faint inscription on it, it read (4,4)");
        if (input === "12") {
          setLock3("unlocked");
          
        } else {
          alert("Time slips by , you stand intrigued, captivated by the murals and the hush of what lay beyond the door.");
        }
    };

    const tryLock4 = () => {
        const input = prompt("The mural seems to hide something\uFF02,you thought.There was a faint inscription on it, it read (5,3)");
        if (input === "16") {
          setLock4("unlocked");
          
        } else {
          alert("Time slips by , you stand intrigued, captivated by the murals and the hush of what lay beyond the door.");
        }
    };

    const goToRoom3 = () => {
        setShowRoom3(true);
    };
    const goToRoom1 = () => {
        setShowRoom1(true);
        setShowRoom3(false)
    };
    
    return (

      <div>
            {(showRoom3 || showRoom1 || showgame) ? (
                (showRoom3 || showRoom1) ? (
                    showRoom3 ? (
                        <Room3 />
                    ) : (
                        <Room1 />
                    )
                ) : (
                    <Gameover />
                )
            ) : (
              <div id="room4" >
                <img id="left" src="/images/left.png" alt="Left" onClick={goToRoom3} />
                <img id="square"  src="/images/lastcode.jpeg" alt="scroll" />
                
                <img id="sol1" className='solss' src="/images/sol1.png" alt="scroll" />
                {Lock1 === "locked" && <img id="lock1" className='lockss' src="/images/ls1.jpeg" alt="lock1" onClick={tryLock1} />}

                <img id="sol2" className='solss' src="/images/sol2.png" alt="scroll" />
                {Lock2 === "locked" && <img id="lock2" className='lockss' src="/images/ls2.jpeg" alt="lock2" onClick={tryLock2} />}

                <img id="sol3" className='solss' src="/images/sol3.png" alt="scroll" />
                {Lock3 === "locked" && <img id="lock3" className='lockss' src="/images/ls3.jpeg" alt="lock1" onClick={tryLock3} />}

                <img id="sol4" className='solss' src="/images/sol4.png" alt="scroll" />
                {Lock4 === "locked" && <img id="lock4" className='lockss' src="/images/ls4.jpeg" alt="lock4" onClick={tryLock4} />}

                <div id="timer" >
                <table id='time'>
                  <tr>
                    <td><img id="clock" src="/images/timer.png" /></td>
                    <td>{timer}</td>
                    <td>seconds</td>
                    <td>left</td>
                  </tr>
                </table>
              </div>
                
                <img id="right" src="/images/right.png" alt="Right" onClick={goToRoom1} />
            </div>
            )}
        </div>
    
    
    );
}



export default Room4;
