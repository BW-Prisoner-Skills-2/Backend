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
});
