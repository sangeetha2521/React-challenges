// Challenge: User should be able to type in any characters on input and those character should show in the browser.

import React, { useState } from "react";
import "../../App.css";

const TwowayBinding = () => {
    const [text, seText] = useState("");

    return (
        <div>
            <input type="text" placeholder="Enter your text to display" onChange={(e) => seText(e.target.value)} value={text}>
            </input>
            <p className="Text">
                <b>{text}</b>

            </p>
        </div>
    )
}
export default TwowayBinding;