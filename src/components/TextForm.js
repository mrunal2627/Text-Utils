import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked !!!" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase !!","success")
  };
  const handleLowClick = () => {
    console.log("Lowercase was clicked !!!" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase !!","success")
  };
  const handleClearClick = () => {
    console.log("Clear text was clicked !!!" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared !!","success")
  };
  const handleOnChange = (event) => {
    console.log("On change !!!");
    setText(event.target.value);
    
  };
  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to text board !!","success")
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces !!","success")
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="Container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey", color :props.mode === 'light' ? '#042743' :'white'
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>Your text summary</h1>

        <p>
          {text.split(" ").length} words,{text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text: "Enter something in textbox to preview here !!!"}</p>
      </div>
    </>
  );
}
