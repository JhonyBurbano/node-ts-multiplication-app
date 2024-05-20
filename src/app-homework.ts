import fs from "fs";
import { yarg as args_v } from "./config/plugins/args.plugin";

const { b: base, l: limit, s: flagShowTable } = args_v;
const pathFile = "output";
// const base = args_v.b;
// const limit = args_v.l;
// const flagShow = args_v.s;
let table = "";
const headerMessage = `
=========================
      Table of ${base}
=========================\n
`;
for (let i = 1; i <= limit; i++) {
  table += `${base} x ${i} = ${base * i}\n`;
}
table = headerMessage + table;

if (flagShowTable) console.log(table);

fs.mkdirSync(pathFile, { recursive: true });
fs.writeFileSync(`${pathFile}/table-${base}.txt`, table);

console.log("File created!!");
