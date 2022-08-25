import './DescribeWords.css'
import { useState, useEffect } from 'react';

const DescribeWords = () => {
    const [words, setWords] = useState([]);

    useEffect(() => {
        const listOfWords = JSON.parse(localStorage.getItem('selections'));
        if (listOfWords) {
            setWords(listOfWords);
        }
    }, []);
    const setOfWords = words.map((word) =>
        <div id='write'>
            <p className='describe-word'>{word}:</p>
            <textarea></textarea>
        </div>
    );
    return (
        <div>
            <section className='describe-container'>{setOfWords}</section>
        </div>
    );
}

export default DescribeWords;