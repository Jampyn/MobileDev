import React from 'react'
import "./Comment.css"

export default Comment = (props) => {
    return (
        <div className="dialogbox">
            <div className="body">
                <span className="tip tip-up"></span>
                <div className="message">
                    <span>
                    <b>{props.userId}</b> - {props.message}
                    </span>
                </div>
            </div>
        </div>
    )
}
