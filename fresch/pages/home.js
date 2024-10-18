import { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { TabView, TabPanel } from 'primereact/tabview';
import Navbar from '@/components/Navbar';
import HomeProducts from '@/components/HomeProductCarussell';
import Image from 'next/image';
import { Rating } from 'primereact/rating';
import Footer from '@/components/Footer';

export default function TemplateDemo() {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const itemRenderer = (item, itemIndex) => (
        <a className="p-menuitem-link flex flex-column align-items-start gap-2"  onClick={() => setActiveIndex(itemIndex)}>
            <div className="flex align-items-center gap-2">
                <img alt={item.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${item.image}`} style={{ width: '32px' }} />
                <span className="font-bold">{item.name}</span>
            </div>
            <span className="text-sm text-gray-500">{item.description}</span>
        </a>
    );

    const items = [
        {
            name: 'Amy Elsner',
            image: 'amyelsner.png',
            description: 'Allein erziehende Mutter von 35 Kinder',
            template: (item) => itemRenderer(item, 0),
            content: 'Das Light Green T-Shirt hat das perfekte Frühlingsgefühl! Es bringt nicht nur Farbe in meinen Kleiderschrank, sondern auch in meine Laune. Vielleicht könnte es sogar als meine persönliche Gute-Laune-Maschine patentiert werden! Wenn es noch eine Extra-Tasche für Snacks hätte, wäre es perfekt!',
            picture: 'https://primefaces.org/cdn/primereact/images/product/light-green-t-shirt.jpg',
            rating: '4'
        },
        {
            name: 'Anna Fali',
            image: 'annafali.png',
            description: 'PH Studentin im 4ten Semester',
            template: (item) => itemRenderer(item, 1),
            content: 'Diese Galaxy Earrings sind so galaktisch schön, dass ich fast das Gefühl habe, sie könnten mir das nächste schwarze Loch anzeigen! Sie funkeln und strahlen wie die Sterne. Vielleicht könnte man sie auch in einer etwas kleineren Variante für den Alltag machen – für den Fall, dass ich beim Kaffeetrinken nicht gleich ins All abheben möchte!',
            picture: 'https://primefaces.org/cdn/primereact/images/product/galaxy-earrings.jpg',
            rating: '5'
        },
        {
            name: 'Asiya Javayant',
            image: 'asiyajavayant.png',
            description: 'Ceo einer Gurken einmach Firma',
            template: (item) => itemRenderer(item, 2),
            content: 'Das Armband ist ein echter Hingucker! Es hat so viel Stil, dass es wahrscheinlich selbst eine Raumfahrtmission als Modetrend etablieren könnte. Vielleicht könntest du es mit einer kleinen, verspielten Botschaft oder einem Charm erweitern – das würde den intergalaktischen Look noch persönlicher machen!',
            picture: 'https://primefaces.org/cdn/primereact/images/product/bracelet.jpg',
            rating: '4'
        }
    ];

    return (
        <div className="card">
            <Navbar/>
            <HomeProducts/>
            <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            <TabView style={{borderBottom: 'none', paddingTop: '0'}} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                {items.map((item, index) => (
                    <TabPanel key={index}>
                         <div className="flex align-items-start gap-4">
                            <Image src={item.picture} alt={item.name} width={150} height={150} />
                            <div className="flex flex-column">
                                <p>{item.content}</p>
                                <Rating value={item.rating} readOnly cancel={false} className="my-3" />
                            </div>
                        </div>
                    </TabPanel>
                ))}
            </TabView>
            <Footer/>
        </div>
    );
}
