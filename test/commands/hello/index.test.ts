import { runCommand } from '@oclif/test';
import { expect } from 'expect';
import { describe, it } from 'node:test';

describe('hello', () => {
  it('runs hello', async () => {
    const { stdout } = await runCommand('hello friend --from oclif');
    expect(stdout).toContain('hello friend from oclif!');
  });
});
