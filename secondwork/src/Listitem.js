import React from "react";
import PropTypes from "prop-types";

export function Listitem({id,title}) {
    return(
        <li className="col-3 offset-1">
            {`${id}-${title}`}
        </li>
    )
}

Listitem.propTypes={
    id:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired
}