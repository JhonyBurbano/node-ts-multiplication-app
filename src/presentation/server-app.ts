import { CreateTable } from "../Domain/use-cases/create-table.use-cases";
import { SaveFile } from "../Domain/use-cases/save-file.use-case";

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  fileName: string;
  fileDestination: string;
}
export class ServerApp {
  static run({
    base,
    limit,
    showTable,
    fileName,
    fileDestination,
  }: RunOptions) {
    console.log("Server running...");
    const table = new CreateTable().execute({ base, limit });
    const wasCreated = new SaveFile().execute({
      fileContent: table,
      fileName: `${fileName}-${base}`,
      fileDestination,
    });

    if (showTable) console.log(table);
    wasCreated
      ? console.log("File created!")
      : console.log("File not created!");
  }
}
