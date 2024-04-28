import { expect, describe, it } from "bun:test";
import { User } from "user/user";

describe("Bun Test Runner", () => {
    it("should support unit test", async () => {
        const user = new User("Akmal");
        expect(user.name).toBe("Akmal");
    });
});
