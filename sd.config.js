module.exports = {
    source: [`src/tokens/**/*.json`],
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
    },
};
