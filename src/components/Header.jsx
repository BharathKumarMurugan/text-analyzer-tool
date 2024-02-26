export default function Header({wordCount, charCount, sentenceCount, paraCount}) {
    return (
        <div className="header">
            <div className="header-content">
                <div className="header-content-title">
                    Words
                </div>
                <div className="header-content-count">{wordCount}</div>
            </div>
            <div className="header-content">
                <div className="header-content-title">
                    Characters
                </div>
                <div className="header-content-count">{charCount}</div>
            </div>
            <div className="header-content">
                <div className="header-content-title">
                    Sentences
                </div>
                <div className="header-content-count">{sentenceCount}</div>
            </div>
            <div className="header-content">
                <div className="header-content-title">
                    Paragraphs
                </div>
                <div className="header-content-count">{paraCount}</div>
            </div>
        </div>
    )
}
