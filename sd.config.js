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
    },
};
