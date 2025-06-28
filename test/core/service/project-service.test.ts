import esmock from 'esmock';
import { expect } from 'expect';
import { beforeEach, describe, it } from 'node:test';
import { stub } from 'sinon';

import { ProjectService } from '../../../src/core/service/project-service.js';

describe('ProjectService', () => {
  let sut: ProjectService;

  beforeEach(() => {
    sut = new ProjectService();
  });

  it('should be defined', () => {
    expect(ProjectService).toBeDefined();
  });

  describe('resolve', () => {
    it('should validate that config/service.yml exist', async () => {
      const { ProjectService: Service } = await esmock('../../../src/core/service/project-service.js', {
        'node:fs': {
          existsSync: stub().returns(false),
          readFileSync: stub().returns('name: automation'),
        },
      });
      sut = new Service();
      await expect(sut.resolve('/project/directory')).rejects.toThrow();
    });

    it('should read config/service.yml', async () => {
      const { ProjectService: Service } = await esmock('../../../src/core/service/project-service.js', {
        'node:fs': {
          existsSync: stub().returns(true),
          readFileSync: stub().returns('name: automation'),
        },
      });
      sut = new Service();
      await expect(sut.resolve('/project/directory')).resolves.not.toThrow();
      expect(sut.getConfig()).toStrictEqual({ name: 'automation' });
    });
  });
});
