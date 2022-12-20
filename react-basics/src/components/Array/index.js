// Display array of users to browser

import React from "react";
import "../../App.css";


const user = [
    { name: "sang", hobby: "foot" },
    { name: "snek", hobby: "sing" },
    { name: "suresh", hobby: "play" },

]

const Users = () => {
    const userDetails = user.map((user) => <div className="User">{user.name}{user.hobby}</div>)
    return (
        <>
            {userDetails}
        </>
    )
}
export default Users;