import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Upper Case clicked");
        let t = text.toUpperCase();
        setText(t);
        props.showAlert("upper case enabled", "Success")
    }

    const handleLoClick = () => {
        console.log("Upper Case clicked");
        let t = text.toLowerCase();
        setText(t);
        props.showAlert("LowerCase enabled", "Success")
    }

    const handleOnClick = (e) => {
        console.log("on change  clicked");
        setText(e.target.value);

    }

    const handleCopy = () => {
        console.log('copy');
        var text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied", "Success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("removed extra spaces", "Success")
    }

    const [text, setText] = useState('Hi');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className='mb-3'>Enter your Text</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnClick}
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#052c65' : 'white',
                            color: props.mode === 'dark' ? 'white' : 'black'
                        }}
                        id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className='mb-2'>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split("").length} Minutes read</p>
            </div>
        </>
    )
}
