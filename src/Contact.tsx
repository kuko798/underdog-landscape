import React, {useState} from 'react';
import './Contact.css'

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        // Add API call or form submission logic here
    };

    return (
        <section className='contact'>
        <div className="containerr">
            <div className="contentt">
                {/* Left Side */}
                <div className="left-side">
                    <div className="address details">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="topic">Locations</div>
                        <div className="text-one">Nashville/Nolensville</div>
                       
                    </div>

                    <div className="email details">
                        <i className="fas fa-envelope"></i>
                        <div className="topic">Call Us</div>
                        <div className="text-two">(786) 858-2115</div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="right-side">
                    <div className="topic-text">Contact Us</div>
                    <p>Send us a message.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-box message-box">
                            <textarea
                                name="message"
                                placeholder="Enter your message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className="button">
                            <button type="submit">Send Message</button>
                            <span></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </section>
    );
}

export default ContactForm;