import React, { useState } from 'react';
import "./Home.css";
import Room1 from './Room1';

const Home = () => {
    const [showRoom1, setshowRoom1] = useState(false);
    
    const handleClick = () => {
        setshowRoom1(true);
    }


    return (
        <div>
            {showRoom1 ? (
                <Room1 />
            ) : (
                <div id="hello">
                    <nav>
            <table>
                <tr>
                    <td class="pics"><img src="/images/insta.svg.png" /></td>
                    <td class="pics"><img src="/images/fb.svg.png" /></td>
                    <td class="pics"><img src="/images/utube.svg" /></td>
                    <td id="text">PHARAOH'S ENIGMA</td>
                </tr>
            </table>
        </nav>
        <div class="top"></div>
        <div class="texttop">The Lost Chamber</div>
        <div class="texttop" id="lower">Unlock the Mysteries, Escape the Pharaoh's Curse, and Claim Victory</div>
        <div class="texttop" id="down"><p id="link" onClick={handleClick}> PLAY!</p> </div>

        <div class="how">
            <div class="head">
                <h1>How It Works</h1>
                Read this and understand it well because your success depends on it. Once you step into the room, the challenge begins.
                <table>
                    <tr>
                        <td class="images"><img src="/images/lock-solid.svg" /></td>
                        <td><h2>You Are Locked In</h2>Inside the room, you and your partners will discover clues. Your goal is to unlock the mysteries hidden within.</td>
                    </tr>
                    <tr>
                        <td class="images"><img src="/images/chess-knight-solid.svg" /></td>
                        <td><h2>Escape Strategically</h2>Stay focused and work together to decipher the sequence. Every clue brings you closer to freedom.</td>
                    </tr>
                    <tr>
                        <td class="images"><img src="/images/key-solid.svg" /></td>
                        <td><h2>Escape on Your Terms</h2>You hold the key to your own escape. Take control, think critically, and emerge victorious.</td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="foot">
            <p>PHARAOH'S ENIGMA</p>
            <table>
                <tr>
                    <td class="pics"><img src="/images/insta.svg.png" /></td>
                    <td class="pics"><img src="/images/fb.svg.png" /></td>
                    <td class="pics"><img src="/images/utube.svg" /></td>
                </tr>
            </table>
        </div>
                </div>
            )}
        </div>
    )
}

export default Home;