import { Command, Config, Flags } from '@oclif/core';
import { inspect } from 'node:util';

import { IOCContainer } from '../../core/container.js';
import { ProjectService } from '../../core/service/project-service.js';

/**
 * docker build --tag `${service.name}:${commit.sha}` .
 * docker tag `${service.name}:${commit.sha}` `${registry.host}:${registry.port}/${service.name}:${commit.sha}`
 * docker push `${registry.host}:${registry.port}/${service.name}:${commit.sha}`
 */

export default class GenerateManifest extends Command {
  public static override args = {};
  public static override description = 'Generates a kubernetes manifest';
  public static override examples = ['<%= config.bin %> <%= command.id %>'];
  public static override flags = {
    dir: Flags.directory({
      char: 'd',
      default: '.',
      description: 'Directory to read where ./config/service.yml exist',
    }),
    'out-file': Flags.file({ char: 'o', description: 'Kubernetes manifest output' }),
  };
  private projectService: ProjectService;

  constructor(argv: string[], config: Config) {
    super(argv, config);
    this.projectService = IOCContainer.getInstance().get(ProjectService);
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(GenerateManifest);
    this.projectService.resolve(flags.dir);
    const config = this.projectService.getConfig();
    this.log(`${inspect(config, { depth: null, showHidden: true })}`);
  }
}
