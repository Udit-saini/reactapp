import React, { useState } from 'react'



export default function Textform(props) {
   
    const handleupclick = () => {
        console.log("up is clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Covert to UperCase")
    }
    const handlelowclick = () => {
        console.log("up is clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Covert to LowererCase")

    }
    const handleclrr = () => {
        console.log("up is clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Clear")

    }
    const handleonchanged = (event) => {
        console.log("on changed");
        setText(event.target.value);

    }
    const [text, setText] = useState('');

    return (
        < >
            <div >
                <div className='container'style={{color: props.mode==='dark'?'white':'black'}}>
                    <div className="mb-3" >
                        <h1>{props.heading}</h1>
                        <label htmlFor="mytext" className="form-label">Type Here</label>
                        <textarea className="form-control" value={text} onChange={handleonchanged} style={{background: props.mode==='dark'?'#666e77':'white',color: props.mode==='dark'?'white':'black'}} id="mytext" rows="8" ></textarea>
                    </div>
                    <button className="btn btn-primary mx-2" onClick={handleupclick}>CONVERT TO UPPERCASE</button>
                    <button className="btn btn-success mx-2" onClick={handlelowclick}>CONVERT TO LOWERCASE</button>
                    <button className="btn btn-success mx-2" onClick={handleclrr}>CLEAR</button>
                    <div className="container my-3">
                    </div>
                </div>
                <div className="container my-3"style={{color: props.mode==='dark'?'white':'black'}} >
                    <h1>Your Text summary</h1>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} Minuts to Read</p>
                    <h3>Preview</h3>
                    <p className='preview'>{text.length>0?text:"Enter something to Preview"}</p>

                </div>
            </div>
        </>
    )
}
