import { Container } from 'inversify';

import { ProjectService } from './service/project-service.js';

export class IOCContainer {
  private static container: Container;

  public static getInstance(): Container {
    if (!this.container) {
      this.container = new Container();
    }

    this.container.bind(ProjectService).toSelf();

    return this.container;
  }
}
