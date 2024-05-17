import React, { useState } from 'react';
import { useEffect } from 'react';
import './Level2.css';
import Escaped from './Escaped';
import Gameover from './Gameover';

const Room3 = () => {
  const [cipherOpened, setcipherOpened] = useState("locked");
  const [relic, setrelic] = useState(false);
  const [showEscaped, setShowEscaped] = useState(false);
  const [showgame, setshowgame] = useState(false);
  const [timer, setTimer] = useState(3000);

  useEffect(() => {
    const countdown = setTimeout(() => {
      if (timer === 0) {
        setshowgame(true);
      } else {
        setTimer(timer - 1); 
      }
    }, 1000); 

    return () => clearTimeout(countdown);
  }, [timer]);


  const tryVault = () => {
    const input = prompt("A dusty page flutters by. You grab it and read. ");
    if (input === "truth emerges at life's edge" || input === "TRUTH EMERGES AT LIFE'S EDGE") {
      setcipherOpened("unlocked");
      setrelic(true);
      alert("The page dissapears, revealing an ancient relic");
      
    } else {
      alert("The vault remains locked.");
    }
  };
  

  
  const handleClick = () => {
    setShowEscaped(true);
    
}

  return (
    <div>
        {(showEscaped || showgame) ? (
            showEscaped ? (
                <Escaped />
            ) : (
                <Gameover />
            )
        ) : (
            <div id="level2" className="room">
                {cipherOpened === "locked" && <img id="page" src="/images/caeser.jpeg" alt="Vault" onClick={tryVault} />}
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
              {relic && <img id="relic" src="/images/relic.png" alt="Key" onClick={handleClick} />}
            </div>
        )}
             
    </div>
    
);

}

export default Room3;
