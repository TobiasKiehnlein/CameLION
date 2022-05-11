import { execAsync, cdMTTesting, cdWebGl, cdThreadrrExample } from "./utils.js";

(async function () {
  // Actual script:
  await execAsync(`${cdWebGl}; wasm-pack build --target web --dev`);
  await execAsync(`${cdMTTesting}; wasm-pack build --target web --dev`);
  await execAsync(`${cdThreadrrExample}; wasm-pack build --target web --dev`);
})();
