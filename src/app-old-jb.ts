import fs from "fs";

const pathFile = "output";
const base = 5;
let table = "";
const headerMessage = `
=========================
      Table of ${base}
=========================\n
`;
for (let i = 1; i <= 10; i++) {
  table += `${base} x ${i} = ${base * i}\n`;
}
table = headerMessage + table;
console.log(table);
fs.mkdirSync(pathFile, { recursive: true });
fs.writeFileSync(`${pathFile}/table-${base}.txt`, table);
console.log("File created!!");
