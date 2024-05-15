
import React, { useState } from 'react';
import { useEffect } from 'react';
import './Room2.css'; 
import Room1 from './Room1';
import Room3 from './Room3';
import Gameover from './Gameover';

const Room2 = () => {
  const [lock, setLock] = useState("locked");
  const [showRoom1, setShowRoom1] = useState(false);
  const [showRoom3, setShowRoom3] = useState(false);
  const [showgame, setshowgame] = useState(false);
  const [timer, setTimer] = useState(600);

  useEffect(() => {
    const countdown = setTimeout(() => {
      if (timer === 0) {
        setshowgame(true);
        setShowRoom1(false);
        setShowRoom3(false);
      } else {
        setTimer(timer - 1); 
      }
    }, 1000); 

    return () => clearTimeout(countdown);
  }, [timer]);

  const tryLock = () => {
    const locktry = prompt("Enter the code:");
    if (locktry === "10") {
      setLock("unlocked");
      alert("The lock opens, revealing a hidden passage.");
    } else {
      alert("The lock remains sealed.");
    }
  };

  const reveal = () => {
    alert("English letters and Hieroglyphics? Maybe it's related to the scroll found on the other wall.");
  };
  const goToRoom1 = () => {
    setShowRoom1(true);
  };
  const goToRoom3 = () => {
    setShowRoom3(true);
    setShowRoom1(false)
};


return (
  <div>
            {(showRoom1 || showRoom3 || showgame) ? (
                (showRoom1 || showRoom3) ? (
                    showRoom1 ? (
                        <Room1 />
                    ) : (
                        <Room3 />
                    )
                ) : (
                    <Gameover />
                )
            ) : (
              <div id="room2">
                <img id="code" src="/images/herioglyphics.jpeg" alt="Code" onClick={reveal} />
                {lock === "locked" && <img id="anotherlock" src="/images/lock2.jpeg" alt="Another Lock" onClick={tryLock} />}
                <img id="symbols" src="/images/symbols.png" alt="Symbols" />
                
                <img class="letters" id="P" src="/images/P.jpeg" />
                <img class="boxes" id="box1" src="/images/b1.jpeg" />
                
                <img class="letters" id="O" src="/images/O.jpeg" />
                <img class="boxes" id="box2" src="/images/b2.jpeg" />
                
                <img class="letters" id="H2" src="/images/H2.jpeg" />
                <img class="boxes" id="box3" src="/images/b1.jpeg" />
                
                <img class="letters" id="R" src="/images/R.jpeg" />
                <img class="boxes" id="box4" src="/images/b3.jpeg" />
                
                <img class="letters" id="A1" src="/images/A.jpeg" />
                <img class="boxes" id="box5" src="/images/b1.jpeg" />
                
                <img class="letters" id="H1" src="/images/H.jpeg" />
                <img class="boxes" id="box6" src="/images/b4.jpeg" />
                
                <img class="letters" id="A2" src="/images/A2.jpeg" />
                <img class="boxes" id="box7" src="/images/b2.jpeg" />
                
                
                <img id="left" src="/images/left.png" alt="Left" onClick={goToRoom1} />
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
                <img id="right2" src="/images/right.png" alt="Right2" onClick={goToRoom3} />
            </div>
            )}
        </div>
    
);

}

export default Room2;

