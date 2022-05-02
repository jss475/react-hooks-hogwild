import React, {useState} from 'react'

function Tile({name, image, info}){
    const [clickedName, setClickedName] = useState('')

    function handleClick(){
        debugger
        setClickedName(name)
    }

    return (
        <div className = 'pigTile' onClick = {()=>handleClick({name: {name}})}>
            <h3>{name}</h3>
            <img src = {image} alt = {name}></img>
            {clickedName === name ? (
            <>
                <p>Specialty = {info.specialty} </p>
                <p>Weight = {info.weight}</p>
                <p>Greased = {info.greased ? 'Yes' : 'No'}</p>
                <p>Highest medal achieved = {info['highest medal achieved']}</p>
            </>
            ): null}
        </div>  
    )
}

export default Tile