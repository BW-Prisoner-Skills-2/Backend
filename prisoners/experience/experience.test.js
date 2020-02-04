const request = require("supertest");
const server = require("../../api/server.js");

describe("experience endpoints", () => {
  describe("POST /experience", () => {
    it("returns 401 code if not logged in", () => {
      return request(server)
        .post("/api/prisons/1/prisoners/1/experience")
        .then(res => {
          expect(res.status).toBe(401);
        });
    });
    it("returns using json structure", () => {
      return request(server)
        .post("/api/prisons/1/prisoners/1/experience")
        .then(res => {
          expect(res.type).toMatch(/json/);
        });
    });
  });

  describe("DELETE /experience/:id", () => {
    it("returns 401 code if not logged in", () => {
      return request(server)
        .delete("/api/prisons/1/prisoners/1/experience/1")
        .then(res => {
          expect(res.status).toBe(401);
        });
    });
    it("returns using json structure", () => {
      return request(server)
        .delete("/api/prisons/1/prisoners/1/experience/1")
        .then(res => {
          expect(res.type).toMatch(/json/);
        });
    });
  });

  describe("PUT /experience/:id", () => {
    it("returns 401 code if not logged in", () => {
      return request(server)
        .put("/api/prisons/1/prisoners/1/experience/1")
        .then(res => {
          expect(res.status).toBe(401);
        });
    });
    it("returns using json structure", () => {
      return request(server)
        .put("/api/prisons/1/prisoners/1/experience/1")
        .then(res => {
          expect(res.type).toMatch(/json/);
        });
    });
  });
});
