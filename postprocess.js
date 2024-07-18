import { readFileSync, writeFileSync } from "fs";

const chunk = readFileSync("./dist/index.js").toString();
const css = readFileSync("./dist/style.css").toString().trim();

writeFileSync("./dist/index.js", chunk.replace("%%%CSS내용물여기로%%%", css.replaceAll(/"/g, "\\$&")));