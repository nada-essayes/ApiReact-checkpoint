import React from "react";
const UserList =({users})=>{
return(
    <div>
        <ul className="List-group">
            {users.map((users)=>(
                <li className="Liset-group-item justify-content-between align-items-center" >
                    {users.name}
                </li>
            ))}
        </ul>
    </div>
);
}
export default UserList;