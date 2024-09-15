/** @type {import('ts-jest').JestConfigWithTsJest} **/
const nextJest = require("next/jest");
const createJestConfig = nextJest({});

module.exports = createJestConfig(nextJest({}));