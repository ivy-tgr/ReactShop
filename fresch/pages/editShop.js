import React, { useEffect, useState, useRef } from 'react';
import { ProductTable } from '../components/ProductTable';
import { ProductDialog } from '../components/ProductDialog';
import { ProductDeleteDialog } from '../components/ProductDeleteDialog';
import { DeleteProductsDialog } from '../components/DeleteProductsDialog';
import { getProducts, createProduct, updateProduct, deleteProduct as deleteProductApi } from '../services/ProductService';
import { createId } from '../utils/utils';
import { Toast } from 'primereact/toast';
import Navbar from '../components/Navbar';

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
        getProducts().then(setProducts).catch(error => {
            console.error('Error fetching products:', error);
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Failed to fetch products', life: 3000 });
        });
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

    const saveProduct = async () => {
        setSubmitted(true);

        if (product.name.trim()) {
            try {
                let _products = [...products];
                let _product = { ...product };

                if (product.id) {
                    await updateProduct(product.id, _product);
                    const index = findIndexById(product.id);
                    _products[index] = _product;
                    toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
                } else {
                    _product.id = createId();
                    _product.image = 'product-placeholder.svg';
                    await createProduct(_product);
                    _products.push(_product);
                    toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
                }

                setProducts(_products);
                setProductDialog(false);
                setProduct(emptyProduct);
            } catch (error) {
                console.error('Error saving product:', error);
                toast.current.show({ severity: 'error', summary: 'Error', detail: 'Failed to save product', life: 3000 });
            }
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

    const deleteProduct = async () => {
        try {
            await deleteProductApi(product.id);
            let _products = products.filter(val => val.id !== product.id);
            setProducts(_products);
            setDeleteProductDialog(false);
            setProduct(emptyProduct);
            toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
        } catch (error) {
            console.error('Error deleting product:', error);
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Failed to delete product', life: 3000 });
        }
    };

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    };

    const deleteSelectedProducts = async () => {
        try {
            await Promise.all(selectedProducts.map(product => deleteProductApi(product.id)));
            let _products = products.filter(val => !selectedProducts.includes(val));
            setProducts(_products);
            setDeleteProductsDialog(false);
            setSelectedProducts(null);
            toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Selected Products Deleted', life: 3000 });
        } catch (error) {
            console.error('Error deleting selected products:', error);
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Failed to delete selected products', life: 3000 });
        }
    };

    const findIndexById = (id) => {
        return products.findIndex(p => p.id === id);
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
                <Navbar/>

                <ProductTable
                    products={products}
                    selectedProducts={selectedProducts}
                    setSelectedProducts={setSelectedProducts}
                    globalFilter={globalFilter}
                    setGlobalFilter={setGlobalFilter}
                    openNew={openNew}
                    confirmDeleteSelected={confirmDeleteSelected}
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
