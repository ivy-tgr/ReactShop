import React from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

export const DeleteProductsDialog = ({ deleteProductsDialog, hideDeleteProductsDialog, deleteSelectedProducts }) => {
    const deleteProductsDialogFooter = (
        <>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteSelectedProducts} />
        </>
    );

    return (
        <Dialog visible={deleteProductsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
            <div className="confirmation-content">
                <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                <span>Are you sure you want to delete the selected products?</span>
            </div>
        </Dialog>
    );
};
