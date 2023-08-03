import React, { useState } from 'react'



export default function Textform(props) {

    const handleupclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Covert to UperCase")
    }
    const handlelowclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Covert to LowererCase")

    }
    const handleclrr = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Clear")

    }
    const handleonchanged = (event) => {
        setText(event.target.value);

    }
    const handlecoppy = () => {
        var text = document.getElementById("mytext");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
       props.showAlert("COPIED!");



    }
    const handleextraspace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Removed!")
    }
    const [text, setText] = useState('');

    return (
        < >
            <div >
                <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <div className="mb-3" >
                        <h1>{props.heading}</h1>
                        <label htmlFor="mytext" className="form-label">Type Here</label>
                        <textarea className="form-control" value={text} onChange={handleonchanged} style={{ background: props.mode === 'dark' ? '#666e77' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="mytext" rows="8" ></textarea>
                    </div>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleupclick}>CONVERT TO UPPERCASE</button>
                    <button disabled={text.length === 0} className="btn btn-success mx-2 my-1" onClick={handlelowclick}>CONVERT TO LOWERCASE</button>
                    <button disabled={text.length === 0} className="btn btn-success mx-2 my-1" onClick={handleextraspace}>REMOVE EXTRA SPACE</button>
                    <button disabled={text.length === 0} className="btn btn-success mx-2 my-1" onClick={handlecoppy}>COPPY TEXT</button>
                    <button disabled={text.length === 0} className="btn btn-success mx-2 my-1" onClick={handleclrr}>CLEAR</button>
                    <div className="container my-3">
                    </div>
                </div>
                <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                    <h1>Your Text summary</h1>
                    <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minuts to Read</p>
                    <h3>Preview</h3>
                    <p className='preview'>{text.length > 0 ? text : "Nothing to Preview"}</p>

                </div>
            </div>
        </>
    )
}
