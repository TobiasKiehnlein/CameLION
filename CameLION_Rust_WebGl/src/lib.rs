mod utils;

use rayon;
use wasm_bindgen::prelude::*;

// reexport
pub use wasm_bindgen_rayon::init_thread_pool;

#[wasm_bindgen(raw_module = "/src/utils/wasmWorker.ts")]
extern "C" {
    fn alert(s: &str);
	fn customAlert(s: &str);
	fn log(s: &str);
}

#[wasm_bindgen]
pub fn greet() -> i32 {
	log("greet");
	rayon::scope(|s| {
		log("main worker");
		s.spawn(|_| {
			log("2nd worker");
		});
		s.spawn(|_| {
			log("3rd worker");
		});
		s.spawn(|_| {
			log("4th worker");
		});
		log("main worker-2");
	});
	customAlert("lelelel");
    42
}
