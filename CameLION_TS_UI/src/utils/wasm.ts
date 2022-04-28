import { threads } from "wasm-feature-detect";
import init from "threadrr-wasm-example";

let initialized = false;
let initError = false;

export async function initWasm() {
  if (!initialized) {
    initialized = true;
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
      throw new Error(info);
    }
    await init();
  }
  if (initError) throw new Error("Wasm already failed initializing.");
}
