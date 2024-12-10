import React from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { InputTextarea } from 'primereact/inputtextarea'; 

export const ProductDialog = ({
    product,
    productDialog,
    hideDialog,
    saveProduct,
    onInputChange,
    onInputNumberChange,
    submitted,
}) => {

    const categories = [
        { label: 'Accessories', value: 'Accessories' },
        { label: 'Clothing', value: 'Clothing' },
        { label: 'Electronics', value: 'Electronics' },
        { label: 'Fitness', value: 'Fitness' }
    ];

    const productDialogFooter = (
        <>
            <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={saveProduct} />
        </>
    );

    return (
        <Dialog visible={productDialog} style={{ width: '450px' }} header="Product Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
            {submitted && !product.name && (
                <small className="p-error">Product Name is required.</small>
            )}
            <div className="field">
                <label htmlFor="name">Name</label>
                <InputText
                    id="name"
                    value={product.name}
                    onChange={(e) => onInputChange(e, 'name')}
                    required
                    autoFocus
                    className={classNames({ 'p-invalid': submitted && !product.name })}
                />
                {submitted && !product.name && (
                    <small className="p-error">Product Name is required.</small>
                )}
            </div>

            <div className="field">
                <label htmlFor="description">Description</label>
                <InputTextarea
                    id="description"
                    value={product.description}
                    onChange={(e) => onInputChange(e, 'description')}
                    required
                    rows={3}
                    cols={20}
                />
            </div>

            <div className="field">
                <label className="mb-3">Category</label>
                <Dropdown
                    value={product.category}
                    options={categories}
                    onChange={(e) => onInputChange(e, 'category')}
                    placeholder="Select a Category"
                />
            </div>

            <div className="field">
                <label htmlFor="price">Price</label>
                <InputNumber
                    id="price"
                    value={product.price}
                    onValueChange={(e) => onInputNumberChange(e, 'price')}
                    mode="currency"
                    currency="USD"
                    locale="en-US"
                />
            </div>

            <div className="field">
                <label htmlFor="quantity">Quantity</label>
                <InputNumber
                    id="quantity"
                    value={product.quantity}
                    onValueChange={(e) => onInputNumberChange(e, 'quantity')}
                    integeronly
                />
            </div>

            <div className="field">
                <label htmlFor="rating">Rating</label>
                <InputNumber
                    id="rating"
                    value={product.rating}
                    onValueChange={(e) => onInputNumberChange(e, 'rating')}
                    min={0}
                    max={5}
                    step={0.5}
                />
            </div>

            <div className="field">
                <label htmlFor="inventoryStatus">Status</label>
                <Dropdown
                    id="inventoryStatus"
                    value={product.inventoryStatus}
                    options={[
                        { label: 'In Stock', value: 'INSTOCK' },
                        { label: 'Low Stock', value: 'LOWSTOCK' },
                        { label: 'Out of Stock', value: 'OUTOFSTOCK' }
                    ]}
                    onChange={(e) => onInputChange(e, 'inventoryStatus')}
                    placeholder="Select a Status"
                />
            </div>
        </Dialog>
    );
};
