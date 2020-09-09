import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    label: string
}

const StyledInput: React.FC<InputProps> = ( { name, label, ...rest } ) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input id={name} {...rest} />
        </div>
    )
}

export default StyledInput