import { Container } from 'inversify';

export class IOCContainer {
  private static container: Container;

  public static getInstance(): Container {
    if (!this.container) {
      this.container = new Container();
    }

    return this.container;
  }
}
