import { runCommand } from '@oclif/test';
import { expect } from 'expect';
import { describe, it } from 'node:test';

describe('hello world', () => {
  it('runs hello world cmd', async () => {
    const { stdout } = await runCommand('hello world');
    expect(stdout).toContain('hello world!');
  });
});
