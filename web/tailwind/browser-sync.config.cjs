const fs = require("node:fs");
const path = require("node:path");
const process = require("node:process");

const baseDir = (() => {
    let dir = path.resolve(__dirname);
    const files = ["composer.json", "bin/magento"];

    while (dir !== path.parse(dir).root) {
        if (files.every((file) => fs.existsSync(path.join(dir, file)))) {
            return dir;
        }
        dir = path.dirname(dir);
    }

    console.error(`
ERROR: Unable to locate Magento base directory.
Please ensure you're running this script within a Magento 2 project.
`);
    process.exit(1);
})();

const nodeEnvArg = process.env.PROXY_URL; // Legacy method, use `--proxy` arg instead
const hasProxyArg = process.argv.includes("--proxy") || !!nodeEnvArg;
const proxy = nodeEnvArg || "http://my-magento.test";

if (!hasProxyArg && proxy === "http://my-magento.test") {
    console.error(`
To set an alternative proxy, use: 'npm run browser-sync -- --proxy http://hyva.test'.
You can also use an HTTPS local address: 'npm run browser-sync -- --proxy https://hyva.test --https'.
Alternatively, update the defaultProxy value in 'browser-sync.config.cjs'.
`);
    process.exit(1);
}

try {
    module.exports = {
        proxy,
        port: 3000,
        rewriteRules: [
            {
                match: new RegExp(`${new URL(proxy).origin}`, "g"),
                replace: "",
            },
        ],
        files: [
            path.join(baseDir, "**/*.js"),
            path.join(baseDir, "**/*.css"),
            path.join(baseDir, "**/*.xml"),
            path.join(baseDir, "**/*.phtml"),
        ],
    };
} catch (error) {
    console.error("ERROR: Failed to configure browser-sync:", error.message);
    process.exit(1);
}
