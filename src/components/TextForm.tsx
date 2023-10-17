import React, { useState } from 'react'

export default function TextForm(props: any) {
    const convertToUpper = (action: string) => {
        let newText = '';
        switch (action) {
            case 'upper':
                newText = text.toUpperCase();
                props.showAlert('Converted to uppercase');
                break;
            case 'lower':
                newText = text.toLowerCase();
                props.showAlert('Converted to lowercase');
                break;
            case 'removeSpace':
                newText = text.replaceAll(' ', '');
                props.showAlert('space removed');
                break;
            case 'clear':
                newText = '';
                props.showAlert('Text cleared');
                break;
            case 'copy':
                const copyText: any = document.getElementById('exampleFormControlTextarea1');
                copyText.select();
                newText = copyText.value;
                navigator.clipboard.writeText(copyText.value);
                props.showAlert('Text copied');
                break;
            case 'removeExtraSpace':
                const textarr = text.split(/[ ]+/);
                newText = textarr.join(' ');
                props.showAlert('Removed extra spaces');
                break;
        }
        setText(newText);
    }
    const handleOnChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container mb-3">
                <h1><label htmlFor="exampleFormControlTextarea1" className="form-label">Enter your text</label></h1>
                <textarea style={props.mode === 'dark' ? { backgroundColor: '#1d16167d', color: 'white' } : { backgroundColor: 'white', color: 'black' }} className="form-control my-2" id="exampleFormControlTextarea1" rows={8} value={text} onChange={handleOnChange}></textarea>
                <button className="btn btn-primary mx-2" onClick={(event) => convertToUpper('upper')}>Covert to uppercase</button>
                <button className="btn btn-warning mx-2" onClick={(event) => convertToUpper('lower')}>Covert to lowercase</button>
                <button className="btn btn-secondary mx-2" onClick={(event) => convertToUpper('removeSpace')}>Remove spaces</button>
                <button className="btn btn-info mx-2" onClick={(event) => convertToUpper('copy')}>Copy Text</button>
                <button className="btn btn-dark mx-2" onClick={(event) => convertToUpper('removeExtraSpace')}>Remove Extra sapce</button>
                <button className="btn btn-danger mx-2" onClick={(event) => convertToUpper('clear')}>Clear Text</button>
            </div>
            <div className="container">
                <h2>Your text summery</h2>
                <p>{text ? text.trim().split(' ').length : 0} words {text.length} characters</p>
                <p>{text ? 0.008 * text.trim().split(' ').length : 0} minutes read</p>
                <h2>Preview</h2>
                <pre>{!text ? 'Enter the text in above text box to preview' : text}</pre>
            </div>
        </>
    )
}
