import React, { FormEvent, useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    emailSubject: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="number"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="emailSubject"
            placeholder="Email Subject"
            value={formData.emailSubject}
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
      <div className="book">
        <center> <a href="#" className="btn4">  Book a strategy session</a> </center>
        <center> <a href="#" className="btn5">  Invite me to speak</a> </center>
        <center> <a href="#" className="btn6">  Ask a question</a> </center>
      
        </div>
    </section>


  );
};

export default Contact; 