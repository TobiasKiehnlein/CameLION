import { exec } from "child_process";

export function execAsync(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(stderr);
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}

// from project root folder
export const UI = "CameLION_TS_UI";
export const WebGl = "CameLION_Rust_WebGl";
export const MTTesting = "CameLION_Rust_MT_Testing";
export const ThreadrrExample = "../async-threadrr/examples/wasm";

// from .build folder
export const cdUI = `cd ../${UI}`;
export const cdWebGl = `cd ../${WebGl}`;
export const cdMTTesting = `cd ../${MTTesting}`;
export const cdThreadrrExample = `cd ../${ThreadrrExample}`;
