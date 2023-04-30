import React from 'react'

const InputField = () => {
    return (
        <form className='input'>
            <input type="input" placeholder='Enter a task' className='input__box'></input>
            <button className='input__submit'>Go</button>
        </form>
    )
}

export default InputField