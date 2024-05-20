import { CreateTableUseCase, CreateTableOptions } from "./Interfaces/index";

export class CreateTable implements CreateTableUseCase {
  constructor() /**
   * DI => Dependency Injection
   */ {}
  execute = ({ base, limit }: CreateTableOptions) => {
    let table = "";
    for (let i = 1; i <= 10; i++) {
      table += `${base} x ${i} = ${base * i}\n`;
    }
    return table;
  };
}
