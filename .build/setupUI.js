const { exec } = require("child_process");

let success = true;
function execAsync(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(stderr);
        success = false;
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}

(async function () {
  // Actual script:
  // Check requirements
  await execAsync("yarn --version").catch((error) => {
    console.error("yarn not installed");
  });
  const output = await execAsync("node --version").catch((error) => {
    console.error("node not installed");
  });
  if (!output.match(/14\.\d+\.\d+/)) {
    console.log(output);
    console.error("node version must be 14.x");
    success = false;
  }

  if (!success) process.exit(1);

  const cdUI = "cd ../CameLION_TS_UI";
  const cdWebGl = "cd ../CameLION_Rust_WebGl";
  // Install/update packages
  await execAsync(`${cdUI}; yarn`);
  // Setup rust wasm
  await execAsync("yarn setupWASM");
  // Build Rust_WebGl to be able to link it into the UI
  await execAsync(`${cdWebGl}; wasm-pack build`);
  // Link Rust_WebGl into the UI
  await execAsync(`${cdWebGl}/pkg; yarn link`);
  await execAsync(`${cdUI}; yarn link came-lion-web-gl`);
})();
