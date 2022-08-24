import { emotionsInfo } from '../../Utils/emotionsInfo'
import './SelectWords.css'
import { useState } from 'react';

export const SelectWords = () => {

    const handleOnClick = (event) => {
        console.log(event.target.dataset.index)
    }


    const [wordsLeft, setWordsLeft] = useState([emotionsInfo.words.miedo]);
    const [wordsRight, setWordsRight] = useState(new Array(emotionsInfo.words.miedo.length));

    console.log(wordsLeft)


    const listOfWords = wordsLeft?.map((word, index) =>
        <p data-index={index} data-side='left' onClick={handleOnClick}>{word}</p>
    );

    const selectedListOfWords = wordsRight?.map((word, index) =>
        <p data-index={index} dataside='right' onClick={handleOnClick}>{word}</p>
    );


    return (
        <div className='select-words'>
            <ul>{listOfWords}</ul>
            <ul> {selectedListOfWords} </ul>
        </div>
    );
}
// selectedListOfWords[index] = word[index];
// word[index] = '';