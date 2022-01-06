import React from 'react'

function Select({defaultText, options, selectLen, setSelectedLen}) {
    return (
        <select className='modes' value={selectLen} onChange={e => setSelectedLen(e.target.value)}>
            <option value="">{defaultText}</option>
            {Object.keys(options).map(option => (
                <option value={option} key={options[option].field}>{options[option].field}</option>
            ))}
        </select>
    )
}

export default Select
