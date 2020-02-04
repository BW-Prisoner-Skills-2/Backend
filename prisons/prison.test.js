const request = require("supertest");
const server = require("../api/server.js");

describe("server", () => {
  describe("environment", () => {
    it("returns testing for environment", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });

  describe("GET /prisons", () => {
    it("returns an array regardless of login status", () => {
      return request(server)
        .get("/api/prisons")
        .then(res => {
          expect(Array.isArray(res.body)).toBe(true);
        });
    });
    it("returns using json structure", () => {
      return request(server)
        .get("/api/prisons")
        .then(res => {
          expect(res.type).toMatch(/json/);
        });
    });
  });

  describe("POST /prisons", () => {
    it("returns 401 code if not logged in", () => {
      return request(server)
        .post("/api/prisons")
        .then(res => {
          expect(res.status).toBe(401);
        });
    });
    it("returns using json structure", () => {
      return request(server)
        .post("/api/prisons")
        .then(res => {
          expect(res.type).toMatch(/json/);
        });
    });
  });

  describe("DELETE /prisons/:id", () => {
    it("returns 401 code if not logged in", () => {
      return request(server)
        .delete("/api/prisons/1")
        .then(res => {
          expect(res.status).toBe(401);
        });
    });
    it("returns using json structure", () => {
      return request(server)
        .delete("/api/prisons/1")
        .then(res => {
          expect(res.type).toMatch(/json/);
        });
    });
  });

  describe("PUT /prisons/:id", () => {
    it("returns 401 code if not logged in", () => {
      return request(server)
        .put("/api/prisons/1")
        .then(res => {
          expect(res.status).toBe(401);
        });
    });
    it("returns using json structure", () => {
      return request(server)
        .put("/api/prisons/1")
        .then(res => {
          expect(res.type).toMatch(/json/);
        });
    });
  });
});
