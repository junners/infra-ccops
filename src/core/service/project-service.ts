import { injectable } from 'inversify';
import { existsSync, readFileSync } from 'node:fs';
import { cwd } from 'node:process';
import { parse } from 'yaml';

export type ProjectConfiguration = {
  name: string;
};

const SERVICE_CONFIGURATION: string = 'config/service.yml';
const CONFIGURATION_FILE_DOES_NOT_EXIST: string = "Service configuration file doesn't exist";
const BAD_USAGE_GET_CONFIG: string = 'Bad usage of getConfig(), use resolve() prior to calling getConfig()';

@injectable()
export class ProjectService {
  private configuration!: ProjectConfiguration;

  public getConfig(): ProjectConfiguration {
    if (!this.configuration) {
      throw new Error(BAD_USAGE_GET_CONFIG);
    }

    return this.configuration;
  }

  public async resolve(projectDirectory?: string): never | Promise<void> {
    const directoryToRead = projectDirectory ?? cwd();
    const validatedFile = this.validate(directoryToRead);
    this.configuration = this.readConfiguration<ProjectConfiguration>(validatedFile);
  }

  private readConfiguration<T>(configFile: string): T {
    const file = readFileSync(configFile, 'utf8');
    return parse(file) as T;
  }

  private validate(projectDirectory: string): never | string {
    const configFilePath = `${projectDirectory}/${SERVICE_CONFIGURATION}`;
    const configExist = existsSync(configFilePath);
    if (!configExist) {
      throw new Error(CONFIGURATION_FILE_DOES_NOT_EXIST);
    }

    return configFilePath;
  }
}
