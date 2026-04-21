"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDataCleaner = void 0;
const lodash_1 = require("lodash");
const updateDataCleaner = (newData, oldData) => {
    return Object.fromEntries(Object.entries(newData).filter(([key, value]) => {
        const field = key;
        // remove undefined / null
        if (value === undefined || value === null)
            return false;
        // remove empty string
        if (typeof value === "string" && value.trim() === "")
            return false;
        // remove NaN
        if (typeof value === "number" && isNaN(value))
            return false;
        // remove unchanged values
        if ((0, lodash_1.isEqual)(value, oldData[field]))
            return false;
        return true;
    }));
};
exports.updateDataCleaner = updateDataCleaner;
//# sourceMappingURL=updateDataCleaner.js.map