import React from "react";

export function Listitem({id,title}) {
    return(
        <li>
            {`${id}-${title}`}
        </li>
    )
}