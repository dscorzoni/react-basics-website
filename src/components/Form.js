import './Components.css';
import React from 'react';

/*
    This component implements a simple form.
    It uses useRef() to control forms and set values to "" after form submission.
    It also uses useState() to define when to render the the success message below the form.
*/


const Form = () => {

    // Creating the useState hook:
    const [message, setMessage] = React.useState(false);
    
    // Creating the useRef hooks:
    const nameRef = React.useRef();
    const emailRef = React.useRef();
    const messageRef = React.useRef();

    function submitHandler(e) {
        /* 
        Handling the submission: 
        - Prevent default to avoid page refresh.
        - Toggle true to render the success message. 
        - Set form values to empty. 
        */
        e.preventDefault();
        setMessage(true);
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
        
        // Display div for only 3s and then it hides again:
        setTimeout(() => {
            setMessage(false);
        }, 3000);

    }
    
    return(
        <section className="contact-form">
            <div className="container">
                <h1>Contact Us!</h1>
                <h2>Fill the form below and we'll be in touch soon.</h2>
                <form onSubmit={submitHandler}>
                    Name: <input type="text" ref={nameRef} required />
                    Email: <input type="email" ref={emailRef} required />
                    Message: <textarea ref={messageRef} require />
                    <button type="submit">Send Email</button>
                </form>
                {message ? <div className="form-status">Form submmited with success!</div> : null}
            </div>
        </section>
    )
}

export default Form;