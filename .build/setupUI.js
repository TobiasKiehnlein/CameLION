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

(async function() {
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

  const cdUI = "cd ../CameLION_TS_UI";
  const cdWebGl = "cd ../CameLION_Rust_WebGl";
  // Install/update packages
  console.log("Installing packages...");
  await execAsync(`${cdUI}; yarn`);
  // Setup rust wasm
  console.log("Setting up WASM...");
  await execAsync("yarn setupWASM");
  // Build Rust_WebGl to be able to link it into the UI
  console.log("Building WASM...");
  await execAsync(`${cdWebGl}; wasm-pack build --target web`);
  // Link Rust_WebGl into the UI
  console.log("Linking WASM...");
  await execAsync(`${cdWebGl}/pkg; yarn link`);
  await execAsync(`${cdUI}; yarn link came-lion-web-gl`);
  console.log("DONE! --> UI can now be built!");
})();
