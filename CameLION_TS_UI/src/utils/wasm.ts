let wasm: typeof import("came-lion-web-gl/came_lion_web_gl");

export const loadWasm = async () => {
  if (!wasm) {
    try {
      wasm = await import("came-lion-web-gl");
    } catch (err: any) {
      console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
    }
  }
  return wasm;
};
