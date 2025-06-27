import { expect } from 'expect';
import { describe, it } from 'node:test';

import { ProjectService } from '../../../src/core/service/project-service.ts';

describe('ProjectService', () => {
  it('should be defined', () => {
    expect(ProjectService).toBeDefined();
  });
});
