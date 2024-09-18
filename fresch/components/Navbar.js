import React from 'react';
import { Menubar } from 'primereact/menubar';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    const items = [
        {
            label: (
                <Link href="/" className={styles.navLink}>
                    <div className={styles.linkContainer}>
                        <i className="pi pi-home" /> Home
                    </div>
                </Link>
            ),
        },
        {
            label: (
                <Link href="/shop" className={styles.navLink}>
                    <div className={styles.linkContainer}>
                        <i className="pi pi-star" /> Shop
                    </div>
                </Link>
            ),
        },
        {
            label: (
                <Link href="/cart" className={styles.navLink}>
                    <div className={styles.linkContainer}>
                        <i className="pi pi-shopping-cart" /> Shopping Cart
                    </div>
                </Link>
            ),
        },
        {
            label: (
                <Link href="/about" className={styles.navLink}>
                    <div className={styles.linkContainer}>
                        <i className="pi pi-info-circle" /> About Us
                    </div>
                </Link>
            ),
        },
        {
            label: (
                <Link href="/contact" className={styles.navLink}>
                    <div className={styles.linkContainer}>
                        <i className="pi pi-envelope" /> Contact
                    </div>
                </Link>
            ),
        }
    ];

    const start = <img alt="logo" src={`/demo/images/startPage/fresch.png`} height="80" className="mr-2"></img>;

    return (
        <div className="card">
            <Menubar model={items} start={start} />
        </div>
    );
}
