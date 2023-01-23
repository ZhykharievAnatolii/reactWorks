import React from "react";
import PropTypes from "prop-types";

export function Listitem({id,title,handleClick}) {
    return(
        <li onClick={handleClick} className="col-3 offset-1">
            {`${id}-${title}`}
        </li>
    )
}

Listitem.propTypes={
    id:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    handleClick:PropTypes.func.isRequired
}