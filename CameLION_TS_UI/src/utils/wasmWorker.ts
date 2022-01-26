import init, { InitOutput, initThreadPool } from "came-lion-web-gl";
import * as Comlink from "comlink";

export class Initializer {
  async init(num_threads: number) {
    wasm = await init();
    await initThreadPool(num_threads);
  }
}

let wasm: InitOutput | Initializer = new Initializer();

Comlink.expose(wasm);
