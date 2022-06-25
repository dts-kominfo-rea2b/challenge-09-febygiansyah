// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ data }) => {
  const { name, phone, email, photo } = data;
  return (
    <div className="contact">
      <img className="contact-photo" src={photo} alt={name} />
      <div className="contact-detail">
        <h4 className="contact-detail-name">{name}</h4>
        <p className="contact-detail-phone">{phone}</p>
        <p className="contact-detail-email">{email}</p>
      </div>
    </div>
  );
};

export default Contact;
