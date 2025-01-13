import React from "react";
import { Menubar } from "primereact/menubar";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { Avatar } from "primereact/avatar";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

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
            <i className="pi pi-shop" /> Shop
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
    },
    {
      label: (
        <Link href="/editShop" className={styles.navLink}>
          <div className={styles.linkContainer}>
            <i className="pi pi-pen-to-square" /> Edit Shop
          </div>
        </Link>
      ),
    },
  ];

  const start = (
    <Image
      width="150"
      height="80"
      alt="logo"
      src={`/demo/images/startPage/fresch.png`}
      className="mr-2"
    ></Image>
  );

  const end = (
    <div className="flex align-items-center gap-5">
      {session ? (
        <>
          <span className={styles.welcomeText}>
            Welcome, {session.user.email}
          </span>
          <Avatar
            image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
            shape="circle"
          />
          <button
            className="p-button p-component"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link href="/auth/login">
            <button className="p-button p-component">Login</button>
          </Link>
          <Link href="/auth/register">
            <button className="p-button p-component">Register</button>
          </Link>
        </>
      )}
    </div>
  );

  return (
    <div className="navbar">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
}
