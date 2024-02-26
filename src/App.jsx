import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TextArea from "./components/TextArea";
import Footer from "./components/Footer";

function App() {
  const [textArea, setTextArea] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [paraCount, setParaCount] = useState(0);
  const [avgReadTime, setAvgReadTime] = useState(0);
  const wpm = 225;
  ;

  const textareaChangeHandler = (e) => {
    const str = e.target.value;
    setTextArea(str);
    setCharCount(str.length);
    const wordsList = str.trim().split(' ');
    setWordCount(wordsList.length);
    const sentenceList = str.split('.').filter(n => n);
    setSentenceCount(sentenceList.length);
    const paraList = str.split('\n').filter(n => n);
    setParaCount(paraList.length);
    const readTime = Math.ceil(wordsList.length/wpm);
    setAvgReadTime(readTime);
  }

  return (
    <div className="App">
      <h2>Text Analyzer Tool</h2>
      <div className="container">
        <Header
          wordCount={wordCount}
          charCount={charCount}
          sentenceCount={sentenceCount}
          paraCount={paraCount}
          />
        <TextArea
          textArea={textArea}
          onChange={textareaChangeHandler}
          />
        <Footer
          avgReadTime={avgReadTime}
          />
      </div>
    </div>
  )
}

export default App;
