import React, { useState } from "react";

import styles from './input.module.css';


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string,
    errorMessage?: string,
}


const Input = (props: InputProps) => {
    const [focused, setFocused] = useState(false)
    const { label, onChange, errorMessage, id, ...inputProps } = props

    const handleBlur = () => {
        setFocused(true)
    }
    
    return (
        <div className={`${styles.inputContainer} flex flex-col items-start w-full` }>
            <label 
                htmlFor={id}
                className="text-sm mt-2 text-gray-500 font-bold"
            >
                {label}
            </label>
            <input 
                id={id}
                className="text-md placeholder-gray-600 bg-gray-600/10 rounded-md p-3 my-2 w-full"
                onChange={onChange}
                onBlur={handleBlur}
                x-focused={focused.toString()}
                {...inputProps}
            />
            <span className="text-left">
                {errorMessage}
            </span>
        </div>
    )
}

export default Input