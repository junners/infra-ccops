import { expect } from 'expect';
import { Container } from 'inversify';
import { describe, it } from 'node:test';

import { IOCContainer } from '../../src/core/container.ts';

describe('Singleton Container', () => {
  it('should be defined', () => {
    expect(IOCContainer).toBeDefined();
  });

  describe('container.getInstance', () => {
    it('should be defined', () => {
      expect(IOCContainer.getInstance).toBeDefined();
    });

    it('should return an instance of container', () => {
      expect(IOCContainer.getInstance()).toBeInstanceOf(Container);
    });

    it('should be singleton', () => {
      const firstContainerInstance = IOCContainer.getInstance();
      expect(firstContainerInstance).toStrictEqual(IOCContainer.getInstance());
    });
  });
});
