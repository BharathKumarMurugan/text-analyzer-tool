export default function TextArea({textArea, onChange}) {
    return (
        <div className="textarea">
            <textarea placeholder="Type your text here" onChange={(e)=> onChange(e)} value={textArea} />
        </div>
    )
}
