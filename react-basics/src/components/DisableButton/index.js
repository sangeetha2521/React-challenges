
//  Challenge: Make button disabled when there is no character on the input field. Enable the `Submit` button (remove button from being disabled) when there is at least one character.

import React, { useState } from "react";
import "../../App.css";

const Disable = () => {
    const [hide, setHide] = useState("")

    const onSubmit = () => {
        window.alert("Submited");
    }
    return (
        <>
            <input type="text" placeholder="Enter value" value={hide} onChange={(e) => setHide(e.target.value)} />
            {hide === "" ?
                <button disabled={true} className="button">Submit</button>
                :
                <button onClick={onSubmit}>submit</button>
            }
        </>
    )

}
export default Disable;