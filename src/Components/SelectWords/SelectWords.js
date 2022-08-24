import React, {useState, useEffect} from "react"
import { emotionsInfo } from "../../Utils/emotionsInfo"
import '../SelectWords/SelectWords.css' 

const  SelectWords =(props)=>  {
    const {setDisabledButton} = props
    let { words } = emotionsInfo
    const [options, setOptions] = useState(words.miedo)
    const [selections, setSelections] = useState([])

    useEffect(() => {
        if(selections.length > 3 || selections.length < 3 ) {
            setDisabledButton(true)
        }else {
            setDisabledButton(false)
        }
    }, [selections]);

    useEffect(() => {
        console.log("options", options)
        console.log("selections", selections)

    }, []);

    const handleClickOption = (option) => {
        console.log("option selected => ", option)
        if (selections.length < 3) {
            setSelections(current => [...current, option])
            setOptions(current => current.filter(element => {
                return element !== option
        }))}

    }

    const handleClickSelection = (selection) => {
        console.log("selection clicked => ", selection)
        setOptions(current => [...current, selection])
        setSelections(current => current.filter(element => {
            return element !== selection
        }))
    }



    return (
        <>
        <div className="columnContainer">
            <div className="columnSpace">
                <div className="columnInfo optionsColumn">
                    {options.map( (option) =>  (
                        <div id={option} className="option" onClick={()=> handleClickOption(option)}> 
                            <p className="word">{option}</p>
                        </div>
                    ) )}
                    
                </div>
            </div>
            <div className="columnSpace">
                <div className="columnInfo selectionColumn">
                { selections.length ? selections.map( (selection) =>  (
                        <div id={selection} className="selection" onClick={()=> handleClickSelection(selection)}> 
                            <p className="word">{selection}</p>
                        </div>
                    ) )
                : ''
                }
                </div>
            </div>
        </div>
        </>
    )
}

export default SelectWords;