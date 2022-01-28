import { threads } from "wasm-feature-detect";
import * as Comlink from "comlink";
import { wasmWorker } from "./wasmWorker";

let wasm: Comlink.Remote<typeof wasmWorker>;
let initError = false;

function callback(str: string) {
  alert(`Result: ${str}`);
}

export const loadWasm = async () => {
  if (initError) {
    return null;
  }
  if (!wasm) {
    let info = "";
    if (!crossOriginIsolated) {
      info += "Site not crossOriginIsolated.";
      initError = true;
    }
    if (!(await threads())) {
      if (info.length > 0) {
        info += " AND ";
      }
      info +=
        "Wasm threads not supported. Application will probably not run. Try a different browser.";
      initError = true;
    }
    if (initError) {
      console.error(info);
      alert(info);
      return null;
    }
    try {
      const worker = new Worker(new URL("wasmWorker.ts", import.meta.url), {
        type: "module",
      });
      wasm = Comlink.wrap(worker);
      await wasm.init(navigator.hardwareConcurrency, Comlink.proxy(callback));
    } catch (err: any) {
      console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
      initError = true;
      return null;
    }
  }
  return wasm;
};
