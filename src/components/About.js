import React,{useState} from 'react';

export default function About(props){

   // const[myStyle,setMyStyle]=useState({
     //   color:'black',
       // backgroundColor:'white',
        //width:100vh
        let myStyle={

          color:props.mode==='dark'?'white':'#042743',
          backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white'
        }

    return(
        <div className="container" >
        <h2 className="my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>About Us</h2>
        <div className="accordion" id="accordionExample" >
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Texutils gives you a way to analyze your text quikly and efficiently.</strong>Be it word count or character count. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Free to Use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Texutils is a free character counter tool that provides instant character count and word
          count statistics for a given text.</strong> It reports the number of words and characters. Thus it is suitable for writing text with word/character
          limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
        <strong>This word counter software works in any web browser such as chrome , firefox and internet explorer.</strong> 
        It suits to count characters in facebook,blogs,books and essays.
      </div>
    </div>
  </div>
</div>
</div>
    )
    
}