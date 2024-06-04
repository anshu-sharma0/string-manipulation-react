import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SimpleAlert from './Alert';

const TextUtils = () => {
  const [text, setText] = useState("");
  const [countWords, setCountWords] = useState(0);
  const [countLetters, setCountLetters] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [msg, setMsg] = useState("")

  useEffect(()=>{
    let words = text.split(" ");
    let filteredWords = words?.filter((i)=>i?.length > 0)
    setCountWords(filteredWords.length)
    setCountLetters(text.length)
  }, [text])


  const handleText = (e) => {
    setText(e.target.value);
  }

  const convertUp = () => {
    setText(text.toUpperCase());
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
    setMsg("Converted")
  }

  const convertLow = () => {
    setText(text.toLowerCase());
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
    setMsg("Converted")
  }

  const copyText = () => {
    navigator.clipboard.writeText(text);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
    setMsg("copied")
  }

  return (
    <>
      {showAlert && <SimpleAlert text={msg} />}
      <div className='App'>
        <h3>Enter text</h3>
        <textarea name="textarea" id="textarea" rows={20} onChange={handleText} style={{ width: "900px" }}></textarea>
        <div>
          <div>Total number of Words: {countWords}</div>
          <div>Total number of Letters: {countLetters}</div>
        </div>
        <div>
          <Button onClick={convertUp} variant="outlined">Convert to Upper Case</Button>
        </div>
        <div>
          <Button onClick={convertLow} variant="outlined">Convert to Lower Case</Button>
        </div>
        <div>
          <Button onClick={copyText} variant="outlined">Copy Text</Button>
        </div>
      </div>

      <div className='container-sm'>
        <h3>Preview: {text}</h3>
      </div>

    </>
  )
}

export default TextUtils;
