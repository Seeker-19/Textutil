import React, { useState } from "react";

export default function Textform(props) {
  const handleClick = () => {
    let newtext = Text.toUpperCase();
    setText(newtext);
    props.showAlert("converted to uppercase", "Success");
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleClich = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("converted to Lowercase", "Success");
  };
  const handleClear = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text cleared", "success");
  };
  const handleCopy = () => {
    var Text = document.getElementById("myBox");
    Text.select();
    Text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(Text.value);
    props.showAlert("Text copied", "success");
  };

  /*const remove = () => {
    let newText = Text.split(/[]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces", "success");
  */

  const [Text, setText] = useState("Enter text-");
  /* const[myStyle,setMyStyle]=useState({
        color:'black',
        backgroundColor:'white'

    })*/

  /*const[btnText,setbtnText]=useState('Enable Dark Mode');*/

  /*const toggleStyle=()=>{

        if(myStyle.color==='white')
        {
            setMyStyle({
                color:'black',
                backgroundColor:'white',
                border:'1px solid white'
            })
            setbtnText('Enable Dark Mode');
        }
        else{
            setMyStyle({
                color:'white',
                backgroundColor:'black'
            })
            setbtnText('Enable White Mode');

        }
    }*/

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2 className="mb-3">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={Text}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            onChange={handleChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={Text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={Text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleClich}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={Text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          disabled={Text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        {/*<button className="btn btn-primary mx-2 my-1" onClick={toggleStyle}>{btnText}</button>*/}
        <button
          disabled={Text.length === 0}
          className="btn btn-primary mx-2 my-1"
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {
            Text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and characters {Text.length}
        </p>
        <p>
          {0.008 *
            Text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes Read
        </p>
        <h2>Preview</h2>
        <p>{Text.length > 0 ? Text : "Enter Something"}</p>
      </div>
    </>
  );
}
Textform.defaultProps = {
  heading: "Try TextUtility- Word Counter& Character Counter",
};
