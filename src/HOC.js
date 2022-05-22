import React from 'react'
import EnhancedComponent from './enhancedComponent'

const HOC = (prop) => {
    console.log(prop)
    return (
        <>
            {prop.name}
        </>
    )
}

export default EnhancedComponent(HOC);