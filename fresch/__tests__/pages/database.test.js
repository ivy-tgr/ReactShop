import request from "supertest";
import app from "../../pages/_app"; // Passe den Pfad zu deiner App an

describe("API Endpoints", () => {
  describe("GET /api/items", () => {
    it("should fetch all items", async () => {
      const res = await request(app).get("/api/items");
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("items");
    });
  });

  describe("GET /api/items/:id", () => {
    it("should fetch a single item by id", async () => {
      const res = await request(app).get("/api/items/1");
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("item");
    });

    it("should return 404 if the item is not found", async () => {
      const res = await request(app).get("/api/items/999");
      expect(res.statusCode).toBe(404);
    });
  });

  describe("POST /api/items", () => {
    it("should create a new item", async () => {
      const newItem = {
        name: "Test Item",
        description: "Test Description",
      };
      const res = await request(app).post("/api/items").send(newItem);
      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("item");
    });
  });

  describe("PUT /api/items/:id", () => {
    it("should update an existing item", async () => {
      const updatedItem = {
        name: "Updated Item",
        description: "Updated Description",
      };
      const res = await request(app).put("/api/items/1").send(updatedItem);
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("item");
    });

    it("should return 404 if the item is not found", async () => {
      const updatedItem = {
        name: "Updated Item",
        description: "Updated Description",
      };
      const res = await request(app).put("/api/items/999").send(updatedItem);
      expect(res.statusCode).toBe(404);
    });
  });

  describe("DELETE /api/items/:id", () => {
    it("should delete an item", async () => {
      const res = await request(app).delete("/api/items/1");
      expect(res.statusCode).toBe(200);
    });

    it("should return 404 if the item is not found", async () => {
      const res = await request(app).delete("/api/items/999");
      expect(res.statusCode).toBe(404);
    });
  });
});
