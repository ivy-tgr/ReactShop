import { PrismaClient } from '@prisma/client';
import handlerIndex from '../../pages/api/products/index';
import handlerId from '../../pages/api/products/[id]';
import handlerDelete from '../../pages/api/products/[id]/delete';
import handlerUpdate from '../../pages/api/products/[id]/update';
import { createMocks } from 'node-mocks-http';

jest.mock('@prisma/client', () => {
  const mPrismaClient = {
    event: {
      findMany: jest.fn(),
    },
    product: {
      findUnique: jest.fn(),
      delete: jest.fn(),
      update: jest.fn(),
    },
  };
  return { PrismaClient: jest.fn(() => mPrismaClient) };
});

describe('API Handlers', () => {
  let prisma;

  beforeAll(() => {
    prisma = new PrismaClient();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('ID Handler', () => {
    it('should return product on GET', async () => {
      const product = { id: 1, name: 'Product 1' };
      prisma.product.findUnique.mockResolvedValue(product);

      const { req, res } = createMocks({
        method: 'GET',
        query: { id: '1' },
      });

      await handlerId(req, res);

      expect(res._getStatusCode()).toBe(200);
      expect(JSON.parse(res._getData())).toEqual(product);
    });

    it('should return 404 if product not found', async () => {
      prisma.product.findUnique.mockResolvedValue(null);

      const { req, res } = createMocks({
        method: 'GET',
        query: { id: '1' },
      });

      await handlerId(req, res);

      expect(res._getStatusCode()).toBe(404);
      expect(JSON.parse(res._getData()).message).toBe('Product not found');
    });

    it('should handle errors', async () => {
      prisma.product.findUnique.mockRejectedValue(new Error('Error'));

      const { req, res } = createMocks({
        method: 'GET',
        query: { id: '1' },
      });

      await handlerId(req, res);

      expect(res._getStatusCode()).toBe(500);
    });
  });

  describe('Delete Handler', () => {
    it('should delete product on DELETE', async () => {
      prisma.product.delete.mockResolvedValue({});

      const { req, res } = createMocks({
        method: 'DELETE',
        query: { id: '1' },
      });

      await handlerDelete(req, res);

      expect(res._getStatusCode()).toBe(204);
    });

    it('should handle errors', async () => {
      prisma.product.delete.mockRejectedValue(new Error('Error'));

      const { req, res } = createMocks({
        method: 'DELETE',
        query: { id: '1' },
      });

      await handlerDelete(req, res);

      expect(res._getStatusCode()).toBe(500);
      expect(JSON.parse(res._getData()).error).toBe('Error deleting product');
    });
  });

  describe('Update Handler', () => {
    it('should update product on PUT', async () => {
      const updatedProduct = { id: 1, name: 'Updated Product' };
      prisma.product.update.mockResolvedValue(updatedProduct);

      const { req, res } = createMocks({
        method: 'PUT',
        query: { id: '1' },
        body: updatedProduct,
      });

      await handlerUpdate(req, res);

      expect(res._getStatusCode()).toBe(200);
      expect(JSON.parse(res._getData())).toEqual(updatedProduct);
    });

    it('should handle errors', async () => {
      prisma.product.update.mockRejectedValue(new Error('Error'));

      const { req, res } = createMocks({
        method: 'PUT',
        query: { id: '1' },
        body: { name: 'Updated Product' },
      });

      await handlerUpdate(req, res);

      expect(res._getStatusCode()).toBe(500);
      expect(JSON.parse(res._getData()).error).toBe('Error updating product');
    });
  });
});