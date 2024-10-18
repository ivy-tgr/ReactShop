import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerLinksIcons}>
                <div className={styles.footerLinks}>
                    <Link href="/about">About Us</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/impressum">Impressum</Link>
                    <Link href="/faq">FAQ</Link>
                </div>
                <div className={styles.footerIcons}>
                    <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="pi pi-facebook text-xl"></i>
                    </Link>
                    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="pi pi-twitter text-xl"></i>
                    </Link>
                    <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="pi pi-instagram text-xl"></i>
                    </Link>
                </div>
            </div>
            <p className="text-sm">&copy; {new Date().getFullYear()} Fresch. All rights reserved.</p>
        </div>
    );
}
