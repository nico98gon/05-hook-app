// import { memo } from 'react';

// export const Small = memo(({ value }) => {

//     console.log('Me volví a dibujar')

//     return (
//         <small>{ value }</small>
//     )
// })

//! Si utilizamos 'cra' en vez de vite, veremos que se utiliza de la siguiente manera:
//! en este caso no es necesario importar react

// export const Small = React.memo(({ value }) => {

//     console.log('Me volví a dibujar')

//     return (
//         <small>{ value }</small>
//     )
// })

//! Esta es la manera más común de verlo en React:

import React from "react"

export const Small = React.memo(({ value }) => {

    console.log('Me volví a dibujar')

    return (
        <small>{ value }</small>
    )
})