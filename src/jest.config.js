// jest.config.js
export const transform = {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
};
export const moduleFileExtensions = ["js", "jsx", "json", "node"];
export const moduleNameMapper = {
    "\\.(css|less)$": "identity-obj-proxy",
};
export const testEnvironment = "jsdom";
