interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

interface CreateTableOptions {
  base: number;
  limit?: number;
}

interface SaveFileUseCase {
  execute: (options: SaveFileOptions) => boolean;
}

interface SaveFileOptions {
  fileContent: string;
  fileDestination?: string;
  fileName?: string;
}

export {
  CreateTableUseCase,
  CreateTableOptions,
  SaveFileUseCase,
  SaveFileOptions,
};
