import React from "react";
import Spinner from 'react-bootstrap/Spinner'
const Loading =()=>{
    return(
        <div className="position-absolute top-50 start-50">
            <Spinner animation="border" variant="info">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}
export default Loading;