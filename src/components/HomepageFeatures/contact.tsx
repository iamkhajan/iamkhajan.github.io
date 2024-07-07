import React, { useState } from 'react';
import styles from './styles.module.css';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to an API
    console.log(formData);
    alert('Form submitted. Thank you!');
  };

  return (
    <form onSubmit={handleSubmit}>
        <section className={styles.text}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      </section>
      <section className={styles.text}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      </section>
      <section className={styles.text}>
      <button type="submit">Submit</button>
      </section>
    </form>
  );
}

export default ContactForm;