"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactPageComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    additionalInformation: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phoneNumber: value });
  };

  const validateForm = () => {
    const formErrors = {};
    if (!formData.firstName) formErrors.firstName = "First name is required.";
    if (!formData.lastName) formErrors.lastName = "Last name is required.";
    if (!formData.email) formErrors.email = "Email is required.";
    if (!formData.subject) formErrors.subject = "Subject is required.";
    if (!formData.phoneNumber) formErrors.phoneNumber = "Phone number is required.";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  setIsLoading(true);

  try {
    const response = await fetch("https://consultancyserver.onrender.com/api/send_email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ formData: JSON.stringify(formData) })
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        additionalInformation: "",
      });
    } else {
      alert("Error sending message. Please try again.");
    }
  } catch {
    alert("An unexpected error occurred. Please try again.");
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className="contact-form-container" id="ContactUs">
      <div className="Contact Us">
        <h2>Contact Us</h2>
        <p>Send us a message, and we'll get back to you shortly.</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          required
        />
        {errors.firstName && <p className="error-flag">{errors.firstName}</p>}

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          required
        />
        {errors.lastName && <p className="error-flag">{errors.lastName}</p>}

        <input
          type="email"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        {errors.email && <p className="error-flag">{errors.email}</p>}

        <PhoneInput
          country={"in"}
          value={formData.phoneNumber}
          
          onChange={handlePhoneChange}
          inputStyle={{
            width: "100%",
            padding: "15px",
            paddingLeft: "50px",
            height: "50px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginBottom: "15px",
          }}
        />
        {errors.phoneNumber && <p className="error-flag">{errors.phoneNumber}</p>}
        <br></br>
        
     <select
  name="subject"
  value={formData.subject}
  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
  required
>
  <option value="">Subject</option>
  <option value="Engineering Service">Engineering Service</option>
  <option value="Product Development">Product Development</option>
  <option value="Material Testing">Material Testing</option>
  <option value="VMC Machining Job Work">VMC Machining Job Work</option>
  <option value="Engineering Design Service">Engineering Design Service</option>
  <option value="Pharmacy Testing Service">Pharmacy Testing Service</option>
  <option value="Analytical Testing Service">Analytical Testing Service</option>
  <option value="Environment Audit">Environment Audit</option>
  <option value="Ergonomic Analysis Service">Ergonomic Analysis Service</option>
  <option value="Drug Delivery System Service">Drug Delivery System Service</option>
  <option value="Clinical Testing Service">Clinical Testing Service</option>
  <option value="Industrial Engineering Services">Industrial Engineering Services</option>
  <option value="Lean Manufacturing Services">Lean Manufacturing Services</option>
  <option value="Software Development Service">Software Development Service</option>
  <option value="Architectural and planning services">Architectural and planning services</option>
  <option value="Urban & Rural Planning services">Urban & Rural Planning services</option>
  <option value="Ayurveda Services">Ayurveda Services</option>
  <option value="Management Related Services">Management Related Services</option>
  <option value="Business development Services">Business development Services</option>
  <option value="Applied Science Services">Applied Science Services</option>
  <option value="Food and Dairy Technology Service">Food and Dairy Technology Service</option>
  <option value="Beverage Development Service">Beverage Development Service</option>
  <option value="Other Services">Other Services (Please specify in description)</option>
</select>

        <textarea
          name="additionalInformation"
          placeholder="Your message?"
          value={formData.additionalInformation}
          onChange={(e) =>
            setFormData({ ...formData, additionalInformation: e.target.value })
          }
          required
        ></textarea>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactPageComponent;  
