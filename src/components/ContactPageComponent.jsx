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
    association: "",
    bestTimeToContact: "",
    preferredMethodOfContact: "",
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
    if (!formData.phoneNumber) formErrors.phoneNumber = "Phone number is required.";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    const formPayload = new FormData();
    formPayload.append("formData", JSON.stringify(formData));

    try {
      const response = await fetch("https://server-1-22hx.onrender.com/api/send_email", {
        method: "POST",
        body: formPayload,
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          association: "",
          bestTimeToContact: "",
          preferredMethodOfContact: "",
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
    <div className="contact-form-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Send us a message, and we'll get back to you shortly.</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First name*"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          required
        />
        {errors.firstName && <p className="error-flag">{errors.firstName}</p>}

        <input
          type="text"
          name="lastName"
          placeholder="Last name*"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          required
        />
        {errors.lastName && <p className="error-flag">{errors.lastName}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email address*"
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
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginBottom: "15px",
          }}
        />
        {errors.phoneNumber && <p className="error-flag">{errors.phoneNumber}</p>}

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
