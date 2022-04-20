const StyleDictionary = require("style-dictionary");
const humps = require("humps");

StyleDictionary.registerFormat({
    name: "scssJSONFormat",
    formatter: function ({ dictionary, platform, options, file }) {
        return (
            "{\n" +
            dictionary.allTokens
                .map(function (token) {
                    const key = `--${humps.decamelize(token.name, {
                        separator: "-",
                    })}`;
                    return `  "${key}": ${JSON.stringify(token.value)}`;
                })
                .join(",\n") +
            "\n}"
        );
    },
});

module.exports = {
    source: [`src/tokens/**/output.json`],
    platforms: {
        scss: {
            transformGroup: "scss",
            buildPath: "src/assets/scss/",
            files: [
                {
                    destination: "_variables.scss",
                    format: "scss/variables",
                },
            ],
        },
        js: {
            transformGroup: "js",
            buildPath: "src/assets/js/",
            files: [
                {
                    destination: "token_variables.js",
                    format: "javascript/es6",
                },
            ],
        },
        json: {
            transformGroup: "js",
            buildPath: "src/assets/json/",
            files: [
                {
                    destination: "_variables.js",
                    format: "javascript/module-flat",
                },
            ],
        },
        css: {
            transformGroup: "css",
            buildPath: "src/assets/css/",
            files: [
                {
                    destination: "_variables.css",
                    format: "css/variables",
                },
            ],
        },
        json2: {
            transformGroup: "js",
            buildPath: "src/assets/custom/",
            files: [
                {
                    destination: "token_variables.json",
                    format: "json/flat",
                },
            ],
        },
        json3: {
            transformGroup: "js",
            buildPath: "src/assets/custom/",
            files: [
                {
                    destination: "scss_variables.json",
                    format: "scssJSONFormat",
                },
            ],
        },
    },
};
