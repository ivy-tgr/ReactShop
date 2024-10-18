import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

    return (
        <div className="contact-container">
            <Navbar/>
            <h2>Kontaktieren Sie uns</h2>
            <form onSubmit={handleSubmit}>
                <div className="p-field">
                    <label htmlFor="name">Name</label>
                    <InputText id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="p-field">
                    <label htmlFor="email">E-Mail</label>
                    <InputText id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="p-field">
                    <label htmlFor="message">Nachricht</label>
                    <InputTextarea id="message" name="message" value={formData.message} onChange={handleChange} required />
                </div>
                <Button label="Absenden" icon="pi pi-check" type="submit" />
            </form>
            <Footer/>
        </div>
    );
};

export default Contact;
