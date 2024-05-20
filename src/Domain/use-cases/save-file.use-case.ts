import fs from "fs";
import { SaveFileUseCase, SaveFileOptions } from "./Interfaces/index";

export class SaveFile implements SaveFileUseCase {
  constructor() {}

  execute = ({
    fileContent,
    fileDestination = "output",
    fileName = "table",
  }: SaveFileOptions) => {
    try {
      fs.mkdirSync(fileDestination, { recursive: true });
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
}
