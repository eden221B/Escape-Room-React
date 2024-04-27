import React, { useState } from 'react';
import './Room1.css'; 
import Room4 from './Room4';
import Room2 from './Room2';
import Escaped from './Escaped';


const Room1 = () => {
    const [hasKey, setHasKey] = useState(false);
    const [lock, setLock] = useState("locked");
    const [keylock, setKeyLock] = useState("locked");
    const [showKey, setShowKey] = useState(false);
    const [showDoor, setShowDoor] = useState(true);
    const [showEscaped, setShowEscaped] = useState(false);
    const [showRoom2, setShowRoom2] = useState(false);
    const [showRoom4, setShowRoom4] = useState(false);
  
    const tryLock = () => {
      const locktry = prompt("Neferiti, the high priestess of the temple, beckoned for the code, her eyes reflecting both the weight of the knowledge sought and the mysteries yet to unfold.");
      if (locktry === "1618221") {
        setLock("unlocked");
        alert("The ankh disappeared, having fulfilled her duty bestowed on her since her inception. With a clatter, a key fell where you stood.");
        setShowKey(true);
      } else {
        alert("Neferiti stood high atop the veil with an air of expectation, yet, the chamber remained cloaked.");
      }
    };
    const pickupKey = () => {
        setHasKey(true);
        alert("Crouching, you picked up the key");
        setShowKey(false);
    };
    const tryKeyLock = () => {
        if (hasKey) {
          setKeyLock("unlocked");
          alert("With a vociferous thud, the ancient door came cascading down. Beyond lay a passage, the whispers of age-old mysteries seeping through its tattered walls.");
          setShowDoor(false);
        } else {
          alert("The time slips by but nothing happens");
        }
    };
    const goToRoom2 = () => {
        setShowRoom2(true);
    };
    const goToRoom4 = () => {
        setShowRoom4(true);
        setShowRoom2(false);
    };

    const handleClick = () => {
        setShowEscaped(true);
        
    }

    return (
        <div>
            {(showRoom2 || showRoom4 || showEscaped) ? (
                (showRoom2 || showRoom4) ? (
                    showRoom2 ? (
                        <Room2 />
                    ) : (
                        <Room4 />
                    )
                ) : (
                    <Escaped />
                )
            ) : (
                <div id="room1">
                    {showDoor && <img id="door" src="/images/door1.jpeg" alt="Door" />}
                    {lock === "locked" && <img id="lock" src="/images/lock.png" alt="Lock" onClick={tryLock} />}
                    {keylock === "locked" && <img id="keylock" src="/images/keylock.jpeg" alt="Keylock" onClick={tryKeyLock} />}
                    {hasKey && <img id="key" src="/images/key.png" alt="Key" onClick={pickupKey} style={{ display: 'none' }} />}
                    {showKey && <img id="key" src="/images/key.png" alt="Key" onClick={pickupKey} />}
                    <img id="escape" src="/images/stone.png" alt="Escape" onClick={handleClick} />

                    <img id="right" src="/images/right.png" alt="Right" onClick={goToRoom2} />
                    <img id="left" src="/images/left.png" alt="left" onClick={goToRoom4} />
                </div>
            )}
        </div>
    );

}

export default Room1;