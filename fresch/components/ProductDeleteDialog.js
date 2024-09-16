import React from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

export const ProductDeleteDialog = ({ deleteProductDialog, hideDeleteProductDialog, deleteProduct }) => {
    const deleteProductDialogFooter = (
        <>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteProduct} />
        </>
    );

    return (
        <Dialog visible={deleteProductDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
            <div className="confirmation-content">
                <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                <span>Are you sure you want to delete this product?</span>
            </div>
        </Dialog>
    );
};
