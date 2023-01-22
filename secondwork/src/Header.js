import React from "react";
import PropTypes from "prop-types"
export const Header=({logoText, navItems})=>{
    return(
        <header className="header">
            <div className="container d-flex justify-content-between align-items-center">
                <a href="" className="logo">{logoText}</a>
                <nav>
                    <ul>
                        {
                            navItems.map(({label,href})=>{
                                return     <li key={label}>
                                    <a href={href}>{label}</a>
                                </li>
                            })
                        }
                    </ul>
                </nav>

            </div>
        </header>
    )
}

Header.propTypes={
logoText:PropTypes.string.isRequired,
    navItems:PropTypes.arrayOf(
        PropTypes.shape({
            label:PropTypes.string.isRequired,
            href:PropTypes.string.isRequired
        })
    ).isRequired
}

// .shape()- это описание того, что мы будем ожидать в массиве, позволяет дополнительно валидировать данные и не пропускать
// неправильные типы или отсутствие