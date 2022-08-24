
import React, {useState, useEffect} from "react"
import { emotionsInfo } from "../../Utils/emotionsInfo"
import '../SelectWords/SelectWords.css' 

function SelectWords() {

    let { words } = emotionsInfo
    const [options, setOptions] = useState(words.miedo)
    const [selections, setSelections] = useState([])

    
    useEffect(() => {
        console.log("options", options)
        console.log("selections", selections)

    }, []);

    const handleClick = (option) => {
        console.log("option selected => ", option)
        setSelections(current => [...current, option])


    }

    return (
        <>
        <div className="columnContainer">
            <div className="columnInfo optionsColumn">
                {options.map( (option) =>  (
                    <div id={option} className="option" onClick={()=> handleClick(option)}> 
                    <p>{option}</p>
                     </div>
                ) )}
                
            </div>
            <div className="columnInfo selectionColumn">
            { selections.length ? selections.map( (selection) =>  (
                    <div id={selection} className="selection" 
                    // onClick={()=> handleClick(selection)}
                    > 
                    <p>{selection}</p>
                     </div>
                ) )
             : ''
            }
            </div>
        </div>
        </>
    )
}

export default SelectWords;
