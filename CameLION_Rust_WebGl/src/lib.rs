mod utils;

use wasm_bindgen::prelude::*;

// reexport
pub use wasm_bindgen_rayon::init_thread_pool;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
	fn customAlert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    //customAlert("Hello, came-lion-rust-web-gl!");
}
