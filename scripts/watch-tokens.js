const chokidar = require("chokidar");
const pm2 = require("pm2");

console.log("React Watch", "Watching Tokens...");

chokidar.watch("./src/tokens/output.json").on("all", (event, path) => {
    console.log(event, path);

    pm2.start(
        {
            script: "npm run build:sd",
            autorestart: false,
        },
        (err, apps) => {
            pm2.disconnect();
            if (err) {
                throw err;
            }
        }
    );
});

chokidar.watch("./src/tokens/tokens.json").on("all", (event, path) => {
    console.log(event, path);

    pm2.start(
        {
            script: "npm run build:light",
            autorestart: false,
        },
        (err, apps) => {
            pm2.disconnect();
            if (err) {
                throw err;
            }
        }
    );
});
