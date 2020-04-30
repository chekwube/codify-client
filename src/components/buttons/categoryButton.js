
import React from 'react'

const Span = (props) => {
    return (
        <span className={props.className}>
            {props.value}
        </span>
    )
}

export default Span