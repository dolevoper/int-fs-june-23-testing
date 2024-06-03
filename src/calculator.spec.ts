import { add } from "./calculator";

describe("add", () => {
    test("1 + 1 = 2", () => {
        expect(add(1, 1)).toBe(2);
    });

    test("1 + 2 = 3", () => {
        expect(add(1, 2)).toBe(3);
    });

    test("2 + 1 = 3", () => {
        expect(add(2, 1)).toBe(3);
    });

    test("2 + 0 = 2", () => {
        expect(add(2, 0)).toBe(2);
    });

    test("2 + (-1) = 1", () => {
        expect(add(2, -1)).toBe(1);
    });
});