import React, { useState } from 'react';
import { useEffect } from 'react';
import './Room3.css';
import Room2 from './Room2';
import Room4 from './Room4';
import Gameover from './Gameover';

const Room3 = () => {
  const [vaultOpened, setVaultOpened] = useState("locked");
  const [showRoom2, setShowRoom2] = useState(false);
  const [showRoom4, setShowRoom4] = useState(false);
  const [showgame, setshowgame] = useState(false);
  const [timer, setTimer] = useState(600);

  useEffect(() => {
    const countdown = setTimeout(() => {
      if (timer === 0) {
        setshowgame(true);
        setShowRoom2(false);
        setShowRoom4(false);
      } else {
        setTimer(timer - 1); 
      }
    }, 1000); 

    return () => clearTimeout(countdown);
  }, [timer]);


  const tryVault = () => {
    const input = prompt("Enter the password:");
    if (input === "sphinx" || input === "SPHINX") {
      setVaultOpened("unlocked");
      alert("The vault opens, revealing a dusty scroll.");
      
    } else {
      alert("The vault remains locked.");
    }
  };

  const goToRoom2 = () => {
    setShowRoom2(true);
  };
  const goToRoom4 = () => {
    setShowRoom4(true);
    setShowRoom2(false)
};

  return (
    <div>
            {(showRoom2 || showRoom4 || showgame) ? (
                (showRoom2 || showRoom4) ? (
                    showRoom2 ? (
                        <Room2 />
                    ) : (
                        <Room4 />
                    )
                ) : (
                    <Gameover />
                )
            ) : (
              <div id="room3" className="room">
              <img id="left" src="/images/left.png" alt="Left" onClick={goToRoom2} />
              <img id="scroll" src="/images/scroll.jpeg" alt="scroll" />
              {vaultOpened === "locked" && <img id="vault" src="/images/vault.jpeg" alt="Vault" onClick={tryVault} />}
              <img id="LostSymbol" src="/images/sphinx.png" alt="Lost Symbol" />
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
              <img id="right" src="/images/right.png" alt="Right" onClick={goToRoom4} />
          </div>
            )}
        </div>
    
);

}

export default Room3;
