import React from 'react';
import '../Assets/CSS/SignUp.css';


function SignUp() {
    return (
        <div id="sign-up-section" className="sign-up">
            <div className="left-box">
                <div className="sign-up-heading">
                    <h1>Want to try it out?</h1>
                </div>
                <div className="mail-info">
                    <p>Sign up for a demo today! </p>
                    
                </div>
            </div>
            <div className="google-form">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdxhVYFVfOgdrkV48Mt5FEHtOUvk6_XwhyupsekxMf6H9wh1Q/viewform" width="800" height="900" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
    )
}


export default SignUp