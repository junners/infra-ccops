import { runCommand } from '@oclif/test';
import { expect } from 'expect';
import { describe, it } from 'node:test';

describe('generate:manifest', () => {
  it('should show cwd', async () => {
    const { stdout } = await runCommand('generate manifest');
    expect(stdout).toContain(`{ dir: '.' }`);
  });
});
