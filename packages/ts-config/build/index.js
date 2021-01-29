"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testBuild = void 0;
/**
 * Sample function that's used internally to confirm the tsconfig is valid
 * @param param sample param
 * @private
 */
const testBuild = (param) => {
    if (typeof param === "string")
        return param;
    if (typeof param === "number")
        return param + 5;
    if (param instanceof Object) {
        return { key: param };
    }
    return [param];
};
exports.testBuild = testBuild;
//# sourceMappingURL=index.js.map