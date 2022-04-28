use wasm_bindgen::prelude::*;
use std::sync::{mpsc, Mutex, Arc};

#[wasm_bindgen(raw_module = "/src/utils/wasmTesting.ts")]
extern "C" {
	fn alert(s: &str);
	fn log(s: &str);
}

#[wasm_bindgen]
pub fn channel_test() {
	log("channel_test start");
	let (sender, receiver) = mpsc::channel();
	sender.send(42).unwrap();
	log("channel_test sent");
	let recv = receiver.recv().unwrap();
	log(format!("channel_test {} received", recv).as_str());
}

#[wasm_bindgen]
pub fn mutex_test() {
	let var = Arc::new(Mutex::new(42));
	{
		let lock = &mut (*var.lock().unwrap());
		*lock = 41;
	}
	let result = *var.lock().unwrap();
	log(format!("mutex_test result: {}", result).as_str());
	assert_eq!(result, 41);
}
