export class Engine {
  static async new(): Promise<Engine> {
    return new Engine()
  }

  start(): void {}
}
