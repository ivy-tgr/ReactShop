import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';

const Impressum = () => {
    return (
        <>
            <Navbar />
            <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
                <h1>Willkommen bei Fresch!</h1>

                <div style={{
                    backgroundColor: '#f4f4f4',
                    padding: '20px',
                    borderRadius: '5px',
                    marginTop: '20px'
                }}>
                    <h2>Impressum</h2>
                    <p><strong>Firma:</strong> Fresch AG</p>
                    <p><strong>Rechtsform:</strong> Aktiengesellschaft (AG)</p>
                    <p><strong>Sitz der Firma:</strong> Fresch AG, Alfred-Escher-Str 12, 8000 Zürich, Schweiz</p>
                    <p><strong>Vertreten durch:</strong> Hans Meier (CEO)</p>
                    <p><strong>Kontakt:</strong></p>
                    <ul>
                        <li>Telefon: +41 44 783 45 12</li>
                        <li>E-Mail: <a href="mailto:kontakt@fresch.ch">kontakt@fresch.ch</a></li>
                        <li>Website: <a href="http://www.txbi.ch" target="_blank" rel="noopener noreferrer">www.fresch.ch</a></li>
                    </ul>
                    <p><strong>USt-IdNr.:</strong> CHE-123.456.789</p>
                    <p><strong>Handelsregister:</strong> Handelsregister Zürich, CH-123.456.789</p>
                    <p><strong>Geschäftsführer:</strong> Tobias Gretler</p>
                    <p><strong>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</strong></p>
                    <p>Hans Meier, Alfred-Escher-Str 12, 8000 Zürich, Schweiz</p>
                    <p><strong>Haftungsausschluss:</strong> Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Fresch AG übernimmt jedoch keine Haftung für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Informationen. Die Nutzung der Website und ihrer Inhalte erfolgt auf eigene Gefahr.</p>
                    <p><strong>Urheberrecht:</strong> Alle auf dieser Website veröffentlichten Inhalte, insbesondere Texte, Bilder, Grafiken und Logos, sind urheberrechtlich geschützt. Eine Verwendung ist ohne ausdrückliche Zustimmung der Fresch AG nicht gestattet.</p>
                    <p><strong>Online-Streitbeilegung:</strong> Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS-Plattform) bereit, die unter <a href="http://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">http://ec.europa.eu/consumers/odr</a> erreichbar ist. Wir sind jedoch nicht verpflichtet, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Impressum;
