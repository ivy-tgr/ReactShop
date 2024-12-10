import { useState, useEffect, useRef } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { TabView, TabPanel } from 'primereact/tabview';
import Navbar from '@/components/Navbar';
import HomeProducts from '@/components/HomeProductCarussell';
import Image from 'next/image';
import { Rating } from 'primereact/rating';
import Footer from '@/components/Footer';
import { getReviews } from '../services/ProductService';
import { Toast } from 'primereact/toast';

export default function ReviewsPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [reviews, setReviews] = useState([]);
    const toast = useRef(null);

    useEffect(() => {
        getReviews().then((data) => {
            const reviewsWithTemplate = data.map((item, index) => ({
                ...item,
                template: (reviewItem) => itemRenderer(reviewItem, index),
            }));
            setReviews(reviewsWithTemplate);
        }).catch(error => {
            console.error('Error fetching reviews:', error);
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Failed to fetch reviews', life: 3000 });
        });
    }, [activeIndex]);

    const itemRenderer = (item, itemIndex) => (
        <a className="p-menuitem-link flex flex-column align-items-start gap-2"  onClick={() => setActiveIndex(itemIndex)}>
            <div className="flex align-items-center gap-2">
                <Image width={100} height={30} alt={item.name} src={item.picture} style={{ width: '32px' }} />
                <span className="font-bold">{item.name}</span>
            </div>
            <span className="text-sm text-gray-500">{item.description}</span>
        </a>
    );

    return (
        <div className="card">
            <Navbar />
            <Toast ref={toast} />
            <HomeProducts />
            <TabMenu model={reviews} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            <TabView style={{borderBottom: 'none', paddingTop: '0'}} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                {reviews.map((item, index) => (
                    <TabPanel key={index}>
                         <div className="flex align-items-start gap-4">
                            <Image src={item.image} alt={item.name} width={150} height={150} />
                            <div className="flex flex-column">
                                <p>{item.review}</p>
                                <Rating value={item.rating} readOnly cancel={false} className="my-3" />
                            </div>
                        </div>
                    </TabPanel>
                ))}
            </TabView>
            <Footer />
        </div>
    );
}