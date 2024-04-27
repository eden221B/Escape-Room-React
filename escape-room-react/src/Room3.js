import React, { useState } from 'react';
import './Room3.css';
import Room2 from './Room2';
import Room4 from './Room4';

const Room3 = () => {
  const [vaultOpened, setVaultOpened] = useState("locked");
  const [showRoom2, setShowRoom2] = useState(false);
  const [showRoom4, setShowRoom4] = useState(false);

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
        {(showRoom2 || showRoom4) ? (
            showRoom2 ? (
                <Room2 />
            ) : (
                <Room4 />
            )
        ) : (
            <div id="room3" className="room">
                <img id="left" src="/images/left.png" alt="Left" onClick={goToRoom2} />
                <img id="scroll" src="/images/scroll.jpeg" alt="scroll" />
                {vaultOpened === "locked" && <img id="vault" src="/images/vault.jpeg" alt="Vault" onClick={tryVault} />}
                <img id="LostSymbol" src="/images/sphinx.png" alt="Lost Symbol" />
                <img id="right" src="/images/right.png" alt="Right" onClick={goToRoom4} />
            </div>
        )}
    </div>
);

}

export default Room3;
