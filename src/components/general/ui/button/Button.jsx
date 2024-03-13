import "./style.scss"
import React from 'react'


export default function Button ({title, linkTo, routeTo, style}) {

    if(linkTo){
        return (
            <a 
                className="ui-btn cen"
                href={linkTo}
                style={style}
                target="_blank"
            >
                <div className="text cen">
                    {title}
                </div>
            </a>
        )
    }

    if(routeTo){
        return (
            <div className="ui-btn cen">
                {title}
            </div>
        )
    }

    return <></>
}