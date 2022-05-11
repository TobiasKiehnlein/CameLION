import { execAsync } from "./utils.js";

let success = true;

(async function () {
  // Actual script:
  // Check requirements
  await execAsync("rustup --version").catch((error) => {
    console.error("rustup not installed");
  });
  await execAsync("rustc --version").catch((error) => {
    console.error("rustc not installed");
  });
  await execAsync("cargo --version").catch((error) => {
    console.error("cargo not installed");
  });
  await execAsync("wasm-pack --version").catch((error) => {
    console.error("wasm-pack not installed");
  });

  if (!success) process.exit(1);
})();
