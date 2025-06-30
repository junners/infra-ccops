// import { runCommand } from '@oclif/test';
import { expect } from 'expect';
import { describe, it } from 'node:test';

import GenerateManifest from '../../../src/commands/generate/manifest.js';

describe('generate:manifest', () => {
  it('should be defined', () => {
    expect(GenerateManifest).toBeDefined();
  });
  // it('should always throw', async () => {
  //   await expect(runCommand('generate manifest')).rejects.toThrow();
  // });
});
