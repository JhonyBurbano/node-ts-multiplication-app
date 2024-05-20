import { yarg as args_v } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

(async () => {
  await main();
})();

async function main() {
  const {
    b: base,
    l: limit,
    s: showTable,
    n: fileName,
    d: fileDestination,
  } = args_v;
  ServerApp.run({ base, limit, showTable, fileName, fileDestination });
}
