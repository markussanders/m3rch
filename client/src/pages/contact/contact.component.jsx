import React from 'react';

import './contact.styles.scss';

import CustomButton from '../../components/custom-button/custom-button.component';

const ContactPage = () => {
    const handleClick = () => (
        window.open("mailto:markus.sanderst@gmail.com?subject=Support%20from%20M3RCH%20Clothing", "__blank")
    );

    return (
        <div className="contact-page">
            <h2 className="title">CONTACT</h2>
            <span className="subtitle">HOW CAN WE HELP YOU TODAY?</span>
            <p className="content">
                Questions? Comments? Returns/Exchanges? <br/>
                Our team is happy to help! 
            </p>
            <CustomButton onClick={() => handleClick()}>Contact Us</CustomButton>
        </div>
    )
};

export default ContactPage;