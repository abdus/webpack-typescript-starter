export class SayHello {
  private prefix = "Hello, ";

  hello(name: string): void {
    alert(this.prefix + name);
  }
}
