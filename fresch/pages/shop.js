import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { classNames } from 'primereact/utils';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { getProducts } from '../services/ProductService';
import Navbar from '../components/Navbar';
import {Image } from 'primereact/image';
import { Toast } from 'primereact/toast';
import Footer from '@/components/Footer';

export default function PaginationDemo() {
    const [products, setProducts] = useState([]);
    const [layout, setLayout] = useState('grid');
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [rows, setRows] = useState(6);
    const [globalFilter, setGlobalFilter] = useState('');
    const toast = useRef(null);

    useEffect(() => {
        getProducts().then(setProducts).catch(error => {
            console.error('Error fetching products:', error);
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Failed to fetch products', life: 3000 });
        });
    }, []);

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
                return null;
        }
    };

    const listItem = (product, index) => {
        return (
            <div className="col-12" key={product.id}>
                <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
                    <Image src={`/demo/images/product/${product.image}`} width="100" height="100" onError={(e) => e.target.src = 'https://www.mountainphotography.com/images/xl/20100923-Capitol-Sunset.jpg'} alt={product.image} preview/>
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{product.name}</div>
                            <Rating value={product.rating} readOnly cancel={false}></Rating>
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag"></i>
                                    <span className="font-semibold">{product.category}</span>
                                </span>
                                <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                            </div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <span className="text-2xl font-semibold">${product.price}</span>
                            <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const gridItem = (product) => {
        return (
            <div className="col-12 sm:col-6 lg:col-4 p-2" key={product.id}>
                <div className="p-4 border-1 surface-border surface-card border-round">
                    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="flex align-items-center gap-2">
                            <i className="pi pi-tag"></i>
                            <span className="font-semibold">{product.category}</span>
                        </div>
                        <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    </div>
                    <div className="flex flex-column align-items-center gap-3 py-5">
                        <Image src={`/demo/images/product/${product.image}`} width="150" height="150" onError={(e) => e.target.src = 'https://www.mountainphotography.com/images/xl/20100923-Capitol-Sunset.jpg'} alt={product.image} preview/>
                        <div className="text-2xl font-bold">{product.name}</div>
                        <Rating value={product.rating} readOnly cancel={false}></Rating>
                    </div>
                    <div className="flex align-items-center justify-content-between">
                        <span className="text-2xl font-semibold">${product.price}</span>
                        <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    </div>
                </div>
            </div>
        );
    };

    const itemTemplate = (product, layout, index) => {
        if (!product) return;
        if (layout === 'list') return listItem(product, index);
        else if (layout === 'grid') return gridItem(product);
    };

    const listTemplate = (products, layout) => {
        return <div className="grid grid-nogutter">{products.map((product, index) => itemTemplate(product, layout, index))}</div>;
    };

    const sortProducts = (data) => {
        if (sortKey) {
            data.sort((a, b) => {
                const value1 = a[sortKey];
                const value2 = b[sortKey];
                let result = null;

                if (value1 === null || value1 === undefined) result = -1;
                else if (value2 === null || value2 === undefined) result = 1;
                else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);
                else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

                return sortOrder * result;
            });
        }
        return data;
    };

    const onSortChange = (event) => {
        const value = event.value;
        if (value) {
            setSortKey(value.field);
            setSortOrder(value.order);
        } else {
            setSortKey(null);
            setSortOrder(null);
        }
    };

    const sortOptions = [
        { label: 'Name (A-Z)', field: 'name', order: 1 },
        { label: 'Name (Z-A)', field: 'name', order: -1 },
        { label: 'Price (Low to High)', field: 'price', order: 1 },
        { label: 'Price (High to Low)', field: 'price', order: -1 },
        { label: 'Category (A-Z)', field: 'category', order: 1 },
        { label: 'Category (Z-A)', field: 'category', order: -1 }
    ];

    const header = () => {
        return (
            <div className="flex justify-content-between align-items-center">
                <div>
                    <Dropdown
                        value={sortKey ? { field: sortKey, order: sortOrder } : null}
                        options={sortOptions}
                        placeholder="Sort by"
                        onChange={onSortChange}
                        optionLabel="label"
                        className="p-mr-2"
                    />
                    <InputText type="search" value={globalFilter} onChange={(e) => setGlobalFilter(e.target.value)} placeholder="Search" />
                </div>
                <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
            </div>
        );
    };

    return (
        <div className="card">
            <Navbar />
            <Toast ref={toast} />
            <DataView
                value={sortProducts(products.filter((product) => product.name.toLowerCase().includes(globalFilter.toLowerCase())))}
                listTemplate={listTemplate}
                layout={layout}
                header={header()}
                paginator
                rowsPerPageOptions={[6, 12, 24]}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                rows={rows}
            />
            <Footer/>
        </div>
    );
}
