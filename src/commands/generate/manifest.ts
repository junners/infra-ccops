import { Command, Flags } from '@oclif/core';
import { inspect } from 'node:util';

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

  public async run(): Promise<void> {
    const { flags } = await this.parse(GenerateManifest);

    this.log(`${inspect(flags, { depth: null, showHidden: true })}`);
  }
}
