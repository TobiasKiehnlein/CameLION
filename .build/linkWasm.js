import { execAsync, MTTesting, cdUI, WebGl, ThreadrrExample } from "./utils.js";

(async function () {
  // Actual script:
  /*await execAsync(`${cdWebGl}/pkg; yarn link`);
	await execAsync(`${cdUI}; yarn link came-lion-web-gl`);
	await execAsync(`${cdMTTesting}/pkg; yarn link`);
	await execAsync(`${cdUI}; yarn link came-lion-mt-testing`);
	await execAsync(`${cdThreadrrExample}/pkg; yarn link`);
	await execAsync(`${cdUI}; yarn link threadrr-wasm-example`);*/
  await execAsync(`${cdUI}; yarn add came-lion-web-gl@file:../${WebGl}/pkg`);
  await execAsync(
    `${cdUI}; yarn add came-lion-mt-testing@file:../${MTTesting}/pkg`
  );
  await execAsync(
    `${cdUI}; yarn add threadrr-wasm-example@file:../${ThreadrrExample}/pkg`
  );
})();
