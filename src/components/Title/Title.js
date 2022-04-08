import React from "react"
import './Title.css'


function Title ( {title} ) {
    return (
        <div className="title-cotaniner">
            <h2 className="title">{title}</h2>
        </div>
    )
}

export default Title;