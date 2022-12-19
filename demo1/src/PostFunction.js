import React from 'react'

export const PostFunction = (props) => {    //ใส่ props ลบ this ออก
    return (
        <div>
            <p>
                <b>Text:</b> <i>{props.content}</i>   
            </p>
            <p>
                <b>Post by :</b><i>{props.name}</i>
            </p>
        </div>
    );
}
