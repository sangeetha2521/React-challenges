
// Challenge: Make the button functional
// A click on button should toggle (show/hide) the string `Toggle Challenge` each time it is pressed

import React, { useState } from "react";

const HideContent = () => {
    const [toggle, setToggle] = useState()

    return (
        <>
            <button onClick={() => setToggle(true)}>Show Toggle</button>
            <button onClick={() => setToggle(false)}>Hide Toggle</button>
            {toggle && <h2>
                Hey! my dear friends.
            </h2>
            }
        </>
    )
}
export default HideContent;