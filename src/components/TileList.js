import React, {useState} from 'react'
import Tile from './Tile'
import SearchBar from './SearchBar'
import Sort from './Sort'

function TileList({hogs}){
  
    const [isChecked, setIsChecked] = useState(false)
    const [sortWeight, setSortWeight] = useState('')
    const [sortName, setSortName] = useState(null)
    
    //greased check
    function handleCheck(){
        setIsChecked((isChecked) => !isChecked)
    }

    function handleWeightChange(e){
        setSortWeight(e.target.value)
    }

    function handleNameChange(e){
        setSortName(e.target.value)
    }

    //create an arry of greased hogs
    let greasedList = hogs
    if(isChecked === true){
        greasedList = hogs.filter(hog => hog.greased === true)
    }else{
        
    }

    //if statements on weight and name




    let hogList = greasedList
                    .filter(hog => {
                        if(sortName !== null){
                            return hog.name.toLowerCase().includes(sortName.toLowerCase())
                        }else{
                            return true
                        }
                    })
                    .filter(hog=> {
                        if(+sortWeight !== 0){
                            return +hog.weight=== +(sortWeight)
                        }else if(+sortWeight === 0){
                            return hog
                        }
                    } )
                    .map(hog => {
                        return(
                            <Tile 
                            key = {hog.name} 
                            name = {hog.name} 
                            image = {hog.image}
                            info =  {hog}
                            />
                        )
                    })
                        
   

    return (
        <>
            <Sort handleNameChange={handleNameChange} handleWeightChange={handleWeightChange} weight={sortWeight} name = {sortName}/>
            <SearchBar handleCheck={handleCheck}/>
            {hogList}
        </>
    )
}

export default TileList