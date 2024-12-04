import React, { useRef, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Image } from 'primereact/image';
import { Rating } from 'primereact/rating';
import { Toast } from 'primereact/toast';

export const ProductTable = ({
    products, 
    selectedProducts, 
    setSelectedProducts, 
    globalFilter, 
    setGlobalFilter, 
    openNew, 
    confirmDeleteSelected, 
    editProduct, 
    confirmDeleteProduct
}) => {
    const dt = useRef(null);

    const imageBodyTemplate = (rowData) => (
        <Image src={rowData.image} width="100" height="100" onError={(e) => e.target.src = 'https://www.mountainphotography.com/images/xl/20100923-Capitol-Sunset.jpg'} alt={rowData.image} />
    );

    const priceBodyTemplate = (rowData) => formatCurrency(rowData.price);

    const ratingBodyTemplate = (rowData) => <Rating value={rowData.rating} readOnly cancel={false} />;

    const statusBodyTemplate = (rowData) => (
        <span className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}>
            {rowData.inventoryStatus}
        </span>
    );

    const actionBodyTemplate = (rowData) => (
        <>
            <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => editProduct(rowData)} />
            <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={() => confirmDeleteProduct(rowData)} />
        </>
    );

    const header = (
        <div className="flex flex-column md:flex-row md:align-items-center justify-content-between">
            <span className="p-input-icon-left w-full md:w-auto">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." className="w-full lg:w-auto" />
            </span>
            <div className="mt-3 md:mt-0 flex justify-content-end">
                <Button icon="pi pi-plus" className="mr-2 p-button-rounded" onClick={openNew} />
                <Button icon="pi pi-trash" className="p-button-danger mr-2 p-button-rounded" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} />
            </div>
        </div>
    );

    return (
        <>
            <Toast ref={dt} />
            <DataTable ref={dt} value={products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                globalFilter={globalFilter} header={header} responsiveLayout="scroll">
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                <Column field="name" header="Name" sortable style={{ minWidth: '16rem' }}></Column>
                <Column field="image" header="Image" body={imageBodyTemplate}></Column>
                <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ minWidth: '8rem' }}></Column>
                <Column field="category" header="Category" sortable style={{ minWidth: '10rem' }}></Column>
                <Column field="rating" header="Reviews" body={ratingBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>
            </DataTable>
        </>
    );
};

const formatCurrency = (value) => value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
