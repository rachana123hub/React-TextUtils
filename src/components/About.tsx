import { useState } from "react"

export default function About(props: any) {
    const toggleStyle = () => {
        if (myStyle.color === 'black') {
            return {
                color: 'white',
                backgroundColor: '#1d16167d'
            };
            setToggleText('Enable white mode');
        } else {
            return {
                color: 'black',
                backgroundColor: 'white'
            };
            setToggleText('Enable dark mode');
        }
    }
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });
    const [toggleText, setToggleText] = useState('Enable dark mode');
    return (
        <div className='container mb-5 my-5'>
            <div className="accordion my-5" id="accordionExample">
                <div className="accordion-item" style={props.mode === 'dark' ? { backgroundColor: '#1d16167d', color: 'white' } : { backgroundColor: 'white', color: 'black' }}>
                    <h2 className="accordion-header" id="headingOne">
                        <button style={props.mode === 'dark' ? { backgroundColor: '#1d16167d', color: 'white' } : { backgroundColor: 'white', color: 'black' }} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={props.mode === 'dark' ? { backgroundColor: '#1d16167d', color: 'white' } : { backgroundColor: 'white', color: 'black' }}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button style={props.mode === 'dark' ? { backgroundColor: '#1d16167d', color: 'white' } : { backgroundColor: 'white', color: 'black' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={props.mode === 'dark' ? { backgroundColor: '#1d16167d', color: 'white' } : { backgroundColor: 'white', color: 'black' }}>
                    <h2 className="accordion-header" id="headingThree">
                        <button style={props.mode === 'dark' ? { backgroundColor: '#1d16167d', color: 'white' } : { backgroundColor: 'white', color: 'black' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className=" container my-3 form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={toggleStyle} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{toggleText}</label>
            </div> */}
        </div>
    )
}
