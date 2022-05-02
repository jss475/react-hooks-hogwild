import React from 'react'

function Sort({handleNameChange, handleWeightChange, weight, name}){
    return (
        <>
            <input type='text' placeholder= 'Search Weight' value = {weight} onChange = {handleWeightChange}></input>
            <input type = 'text' placeholder='Search Name' value = {name} onChange = {handleNameChange}></input>
        </>
        
    )
}

export default Sort