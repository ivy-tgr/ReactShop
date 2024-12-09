import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import AboutUs from '@/components/AboutUs';

export default function About() {
    const events = [
        {
            status: 'Gründung des Shops',
            date: '01/01/2020',
            icon: 'pi pi-calendar-plus',
            color: '#4CAF50',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fshop-with-sign-we-are-open_52683-38687.jpg&f=1&nofb=1&ipt=abaa1e4c1538046240ac0ac49164c4abbf365ba6076cc0b6101931ce93bf9b21&ipo=images',
            description: 'Im Januar 2020 haben wir unseren Onlineshop ins Leben gerufen, mit dem Ziel, modische und hochwertige Kleidung zu bieten.'
        },
        {
            status: 'Erster Meilenstein erreicht',
            date: '01/06/2020',
            icon: 'pi pi-trophy',
            color: '#FF9800',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fmilestone-26251226.jpg&f=1&nofb=1&ipt=53a49d6f1ce045ed587ba0dce10925ffab2ebf8520f2d7d147cd8fe8b7025b16&ipo=images',
            description: 'Im Juni 2020 erreichten wir unseren ersten großen Meilenstein: 1000 Bestellungen in den ersten sechs Monaten!'
        },
        {
            status: 'Erweiterung der Produktpalette',
            date: '01/11/2021',
            icon: 'pi pi-box',
            color: '#2196F3',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpebblely.com%2Fblog%2Fcreate-product-images-with-ai%2Fcollage-of-ai-generated-images.jpg&f=1&nofb=1&ipt=d558bd9b42d84df7a18f71f5bd58b00ffe0a1697daafa15c8c8291127379218f&ipo=images',
            description: 'Wir erweiterten unsere Kollektion um Accessoires und Schuhe, um unseren Kunden eine noch größere Auswahl zu bieten.'
        },
        {
            status: 'Globaler Versand eingeführt',
            date: '15/03/2022',
            icon: 'pi pi-globe',
            color: '#FF5722',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd28pk2nlhhgcne.cloudfront.net%2Fassets%2Fapp%2Fuploads%2F2020%2F05%2Fglobal-market-expansion.jpg&f=1&nofb=1&ipt=7d2ea4e882c19066245cbd54cb8769bebaaf906dd31d15fbed3756c58a0b4e1c&ipo=images',
            description: 'Seit März 2022 bieten wir weltweiten Versand an, um unseren internationalen Kunden unsere Produkte zugänglich zu machen.'
        },
        {
            status: 'Nachhaltigkeit als Ziel',
            date: '01/06/2023',
            icon: 'pi pi-face-smile',
            color: '#4CAF50',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F5788b7b16a4963f2a542d038%2Ffb41de89-f609-4d79-8db5-52a8eeae77b4%2FThe%2BSustainable%2BFashion%2B4.png%3Fformat%3D1500w&f=1&nofb=1&ipt=d212b900bf69598ea60dd3cd0712838f21ad51bd657cb6e06f1e2a242d9a6c55&ipo=images',
            description: 'Im Juni 2023 haben wir unsere nachhaltige Modekollektion eingeführt, um unseren ökologischen Fußabdruck zu reduzieren.'
        }
    ];

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
                {item.image && <img src={item.image} alt={item.name} width={200} className="shadow-1" />}
                <p>{item.description}</p>
                <Button label="Mehr erfahren" className="p-button-text"></Button>
            </Card>
        );
    };

    return (
        <div className="card">
            <Navbar />
            <AboutUs />
            <div className="surface-0 text-center">
                <div className="mb-3 font-bold text-3xl">
                    <span className="text-900">Unsere Reise, </span>
                    <span className="text-blue-600">unsere Meilensteine</span>
                </div>
                <div className="text-700 mb-6">
                    Seit der Gründung haben wir ständig nach Innovation und Wachstum gestrebt. Sehen Sie sich unsere wichtigsten Meilensteine an.
                </div>
            </div>
            <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
            <Footer />
        </div>
    )
}
