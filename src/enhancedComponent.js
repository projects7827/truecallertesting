import React from 'react'

const EnhancedComponent = (Component) => {
    const newComponent = () => {
        return (
            <Component name="done" />
        )
    }

return newComponent;
}

export default EnhancedComponent