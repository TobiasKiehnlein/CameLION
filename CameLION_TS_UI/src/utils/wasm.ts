import { threads } from "wasm-feature-detect";
import * as Comlink from "comlink";
import init, { InitOutput } from "came-lion-web-gl";
import { Initializer } from "./wasmWorker";

let wasmWorker: Comlink.Remote<InitOutput>;
let initError = false;

export const loadWasm = async () => {
  if (initError) return null;
  if (!wasmWorker) {
    let supported = true;
    if (!crossOriginIsolated) {
      let info = "Site not crossOriginIsolated.";
      alert(info);
      console.error(info);
      supported = false;
    }
    if (!(await threads())) {
      let info =
        "Wasm threads not supported. Application will probably not run. Try a different browser.";
      alert(info);
      console.error(info);
      supported = false;
    }
    if (!supported) {
      initError = true;
      return null;
    }
    try {
      const worker = new Worker(new URL("wasmWorker.ts", import.meta.url), {
        type: "module",
      });
      let wrappedWorker: Comlink.Remote<InitOutput | Initializer> =
        Comlink.wrap(worker);
      if (wrappedWorker as Comlink.Remote<Initializer>) {
        await (wrappedWorker as Comlink.Remote<Initializer>).init(
          navigator.hardwareConcurrency
        );
      } else {
        throw new Error("Weird.");
      }
      wasmWorker = wrappedWorker as Comlink.Remote<InitOutput>;
    } catch (err: any) {
      console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
      initError = true;
      return null;
    }
  }
  return wasmWorker;
};
