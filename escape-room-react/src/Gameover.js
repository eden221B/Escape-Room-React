import React, { useState } from 'react';
import './Gameover.css'; 
import Home from './Home';

const Gameover = () => {
    const [showHome, setshowHome] = useState(false);

    const goToHome = () => {
        setshowHome(true);
    };

    return (
        <div>
            {showHome ? (
                <Home />
            ) : (
                <div id='over'>
                    <div id="head1">Lost in the sands of time, your journey ends here.</div>
                    <div id="head2">The guardians of the pyramid have deemed you unworthy.   Can you prove them wrong in your next venture?</div>
                    <img id="mystic" src='/images/mystic.png' onClick={goToHome}/>
                </div>
            )}
        </div>
    );
    

    
  }

export default Gameover;