
import React from 'react'; 
import { Menubar } from 'primereact/menubar';

export default function Navbar() {
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Shop',
            icon: 'pi pi-star'
        },
        {
            label: 'Shopping Cart',
            icon: 'pi pi-star'
        },
        {
            label: 'About Us',
            icon: 'pi pi-star'
        },
        {
            label: 'Projects',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Components',
                    icon: 'pi pi-bolt'
                },
                {
                    label: 'Blocks',
                    icon: 'pi pi-server'
                },
                {
                    label: 'UI Kit',
                    icon: 'pi pi-pencil'
                },
                {
                    label: 'Templates',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Apollo',
                            icon: 'pi pi-palette'
                        },
                        {
                            label: 'Ultima',
                            icon: 'pi pi-palette'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope'
        }
    ];

    const start = <img alt="logo" src={`demo/images/startPage/fresch.png`} height="80" className="mr-2"></img>;

    return (
        <div className="card">
            <Menubar model={items} start={start} />
        </div>
    )
}
        