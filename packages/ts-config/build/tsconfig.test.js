"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe("TSConfig Test Build", () => {
    test("should return param if instanceof string", () => {
        expect(_1.testBuild("param")).toBe("param");
    });
    test("should return number + 5 is param instanceof number", () => {
        expect(_1.testBuild(5)).toBe(10);
    });
    test("should return object if param instanceof object", () => {
        expect(_1.testBuild({ param: "value" })).toStrictEqual({
            key: { param: "value" },
        });
    });
    test("should fallback to array if param instance of none", () => {
        expect(_1.testBuild()).toStrictEqual([undefined]);
    });
});
//# sourceMappingURL=tsconfig.test.js.map