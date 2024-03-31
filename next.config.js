const path = require("path");

module.exports = {
  compilerOptions: {
    baseUrl: "./",
    paths: {
      "@/*": ["./*"],
    },
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  include: ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
};
