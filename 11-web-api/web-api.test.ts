import { describe, it, expect } from "bun:test";

describe("Web API", function () {
    it("should support fetch", async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        const json = await response.json();
        expect(json.userId).toBe(1);
    });
});
