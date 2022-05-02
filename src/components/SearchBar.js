import React from 'react'

function SearchBar({handleCheck}){
    
    return (
        <>
            <input type = 'checkbox' onClick = {handleCheck}></input>
            <em>Greased?</em>
        </>
        
    )
}

export default SearchBar