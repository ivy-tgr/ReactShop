import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulardaten:', formData);
        alert('Danke für Ihre Nachricht!');
        setFormData({ name: '', email: '', message: '' });
    };

    const contactFormular = <div className="contact-container" style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Kontaktieren Sie uns</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="p-field" style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="name" style={{ marginBottom: '0.5rem', color: '#555' }}>Name</label>
                <InputText id="name" name="name" value={formData.name} onChange={handleChange} required style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div className="p-field" style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="email" style={{ marginBottom: '0.5rem', color: '#555' }}>E-Mail</label>
                <InputText id="email" name="email" value={formData.email} onChange={handleChange} required style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div className="p-field" style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="message" style={{ marginBottom: '0.5rem', color: '#555' }}>Nachricht</label>
                <InputTextarea id="message" name="message" value={formData.message} onChange={handleChange} required style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} rows={5} />
            </div>
            <Button label="Absenden" icon="pi pi-check" type="submit" style={{ alignSelf: 'center', padding: '0.75rem 2rem', backgroundColor: '#007ad9', borderColor: '#007ad9', borderRadius: '4px' }} />
        </form>
    </div>;

    return (
      <>
        <Navbar />
        {contactFormular}
        <Footer />
      </>
    );
};

export default Contact;
