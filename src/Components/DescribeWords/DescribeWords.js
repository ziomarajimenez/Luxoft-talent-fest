import './DescribeWords.css'

export const DescribeWords = () => {
    let arrayWords = ['Preocupado', 'Dudoso', 'Nervioso'];
    const words = arrayWords.map((word) =>
        <div id='write'>
            <p>{word}:</p>
            <textarea></textarea>
        </div>
    );
    return (
        <div>
            <section id='describe-container'>{words}</section>
        </div>
    );
}