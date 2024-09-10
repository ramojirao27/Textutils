import React, { useState } from "react";

const Textform = (props) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleUpClick = () => {
    let updated_text = text.toUpperCase();
    console.log(updated_text);

    setText(updated_text);
  };
  const handleLoClick = () => {
    let updated_text = text.toLowerCase();
    console.log(updated_text);

    setText(updated_text);
  };
  const handleClear = () => {

    setText("");
  };
  const handleCopy=()=>{
    var copyText = document.getElementById("myForm");

    // Select the text field
    copyText.select();
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  }
  const handleRemoveSpace =()=>{
    let updated_text =text.replace(/\s+/g,' ').trim();
    setText(updated_text)
  }

  return (
    <>
      <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
        <div className="mb-3 mt-3 w-50%">
          <h1 className="my-3">{props.title}</h1>
          <label for="myForm" className="form-label">
            Thanks for using me
          </label>
          <textarea
            style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}}
            value={text}
            onChange={handleChange}
            className="form-control"
            id="myForm"
            rows="8"
          >
            {text}
          </textarea>
        </div>
        <button
          onClick={handleUpClick}
          type="button"
          className="btn btn-primary mx-2"
        >
          Convert to UpperCase
        </button>
        <button
          onClick={handleLoClick}
          type="button"
          className="btn btn-primary mx-2"
        >
          Convert to LowerCase
        </button>
        <button
          onClick={handleClear}
          type="button"
          className="btn btn-primary mx-2"
        >
          Clear
        </button>
        <button
          onClick={handleCopy}
          type="button"
          className="btn btn-primary mx-2"
        >
          Copy
        </button>
        <button onClick={handleRemoveSpace} className="btn btn-primary">Remove extra spaces</button>
      </div>
      <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{Number(0.008* text.split(" ").length)} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the Text Area to preview here"}</p>
      </div>
    </>
  );
};

export default Textform;
