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
