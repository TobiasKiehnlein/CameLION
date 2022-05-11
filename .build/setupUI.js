import { execAsync, cdUI } from "./utils.js";

let success = true;

(async function () {
  // Actual script:
  // Check requirements
  await execAsync("yarn --version").catch((error) => {
    console.error("yarn not installed");
  });
  const output = await execAsync("node --version").catch((error) => {
    console.error("node not installed");
  });
  // if (!output.match(/14\.\d+\.\d+/)) {
  //   console.log(output);
  //   console.error("node version must be 14.x");
  //   success = false;
  // }

  if (!success) process.exit(1);

  // Install/update packages
  console.log("Installing packages...");
  await execAsync(`${cdUI}; yarn`);
  // Setup rust wasm
  console.log("Setting up rust...");
  await execAsync("yarn setupRust");
  // Build Rust_WebGl to be able to link it into the UI
  console.log("Building WASM...");
  await execAsync("yarn buildWasm");
  // Link Rust_WebGl into the UI
  console.log("Linking WASM...");
  await execAsync("yarn linkWasm");
})();
