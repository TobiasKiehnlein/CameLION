import init, { greet, initThreadPool } from "came-lion-web-gl";
import * as Comlink from "comlink";

export function customAlert(str: string) {
  proxyAlertFunction(str);
}

export function log(str: string) {
  console.log(str);
}

let proxyAlertFunction: any;

export const wasmWorker = {
  async init(num_threads: number, f: any) {
    await init();
    await initThreadPool(num_threads);
    proxyAlertFunction = f;
  },
  greet() {
    return greet();
  },
};

Comlink.expose(wasmWorker);
