import { expect, describe, it } from "bun:test";
import { greet } from "./main";

describe("Bun Test Runner", () => {
    it("should support unit test", async () => {
        const response = greet("Akmal");
        expect(response).toBe("Hello, Akmal!");
    });

    it("should support unit test with yani", async () => {
        const response = greet("Yani");
        expect(response).toBe("Hello, Yani!");
    });
});
