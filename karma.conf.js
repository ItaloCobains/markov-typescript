/* cSpell:disable */
module.exports = function (config) {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            { pattern: "spec/**/*.ts" },
            { pattern: "src/**/*.ts" },
        ],
        preprocessors: {
            "**/*.ts": ["karma-typescript"],
        },
        reporters: ["progress", "karma-typescript"],
        browsers: ["Chrome"],
        plugins: [
            "karma-chrome-launcher",
            "karma-jasmine",
            "karma-typescript"
        ],
    });
};