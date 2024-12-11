import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { getEvents } from '../services/ProductService';
import { Toast } from 'primereact/toast';
import { Image } from 'primereact/image';
import AboutUs from '@/components/AboutUs';

export default function About() {
    const [activeIndex] = useState(0);
    const [events, setEvents] = useState([]);
    const toast = useRef(null);

    // gets all the events
    useEffect(() => {
        getEvents().then((data) => {
            const reviewsWithTemplate = data.map((item, index) => ({
                ...item,
                template: (eventItem) => itemRenderer(eventItem, index),
            }));
            setEvents(reviewsWithTemplate);
        }).catch(error => {
            console.error('Error fetching events:', error);
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Failed to fetch events', life: 3000 });
        });
    }, [activeIndex]);

    const customizedMarker = (item) => {
        return (
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item) => {
        return (
            <Card title={item.status} subTitle={item.date}>
                {item.image && <Image src={item.image} alt={item.name} width={200} className="shadow-1" />}
                <p>{item.description}</p>
                <Button label="Mehr erfahren" className="p-button-text"></Button>
            </Card>
        );
    };

    const Title = <div className="surface-0 text-center">
        <div className="mb-3 font-bold text-3xl">
            <span className="text-900">Unsere Reise, </span>
            <span className="text-blue-600">unsere Meilensteine</span>
        </div>
        <div className="text-700 mb-6">
            Seit der Gründung haben wir ständig nach Innovation und Wachstum gestrebt. Sehen Sie sich unsere wichtigsten Meilensteine an.
        </div>
    </div>;

    return (
        <div className="card">
            <Navbar />
            <Toast ref={toast} />
            <AboutUs />
            {Title}
            <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
            <Footer />
        </div>
    )
}
