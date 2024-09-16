import React, { useEffect, useState, useRef } from 'react';
import { ProductTable } from '../components/ProductTable';
import { ProductDialog } from '../components/ProductDialog';
import { ProductDeleteDialog } from '../components/ProductDeleteDialog';
import { DeleteProductsDialog } from '../components/DeleteProductsDialog';
import { getProducts } from '../services/ProductService';
import { createId } from '../utils/utils';
import { Toast } from 'primereact/toast';

export default function Home() {
    let emptyProduct = {
        id: null,
        name: '',
        image: null,
        description: '',
        category: '',
        price: 0,
        quantity: 0,
        rating: 0,
        inventoryStatus: 'INSTOCK'
    };

    const [products, setProducts] = useState([]);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);

    useEffect(() => {
        getProducts().then(data => setProducts(data));
    }, []);

    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    };

    const saveProduct = () => {
        setSubmitted(true);

        if (product.name.trim()) {
            let _products = [...products];
            let _product = { ...product };
            if (product.id) {
                const index = findIndexById(product.id);
                _products[index] = _product;
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            } else {
                _product.id = createId();
                _product.image = 'product-placeholder.svg';
                _products.push(_product);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            setProducts(_products);
            setProductDialog(false);
            setProduct(emptyProduct);
        }
    };

    const editProduct = (product) => {
        setProduct({ ...product });
        setProductDialog(true);
    };

    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    };

    const deleteProduct = () => {
        let _products = products.filter(val => val.id !== product.id);
        setProducts(_products);
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    };

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    };

    const deleteSelectedProducts = () => {
        let _products = products.filter(val => !selectedProducts.includes(val));
        setProducts(_products);
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Selected Products Deleted', life: 3000 });
    };

    const findIndexById = (id) => {
        return products.findIndex(p => p.id === id);
    };

    const exportCSV = () => {
        // Funktion zur CSV-Export-Logik
    };

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _product = { ...product };
        _product[`${name}`] = val;

        setProduct(_product);
    };

    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        let _product = { ...product };
        _product[`${name}`] = val;

        setProduct(_product);
    };

    return (
        <div className="grid">
            <Toast ref={toast} />
            <div className="col-12">
                <ProductTable
                    products={products}
                    selectedProducts={selectedProducts}
                    setSelectedProducts={setSelectedProducts}
                    globalFilter={globalFilter}
                    setGlobalFilter={setGlobalFilter}
                    openNew={openNew}
                    confirmDeleteSelected={confirmDeleteSelected}
                    exportCSV={exportCSV}
                    editProduct={editProduct}
                    confirmDeleteProduct={confirmDeleteProduct}
                />

                <ProductDialog
                    product={product}
                    productDialog={productDialog}
                    hideDialog={hideDialog}
                    saveProduct={saveProduct}
                    onInputChange={onInputChange}
                    onInputNumberChange={onInputNumberChange}
                    submitted={submitted}
                    emptyProduct={emptyProduct}
                />

                <ProductDeleteDialog
                    deleteProductDialog={deleteProductDialog}
                    hideDeleteProductDialog={() => setDeleteProductDialog(false)}
                    deleteProduct={deleteProduct}
                />

                <DeleteProductsDialog
                    deleteProductsDialog={deleteProductsDialog}
                    hideDeleteProductsDialog={() => setDeleteProductsDialog(false)}
                    deleteSelectedProducts={deleteSelectedProducts}
                />
            </div>
        </div>
    );
}
