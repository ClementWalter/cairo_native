use cairo_lang_sierra::{
    extensions::core::{CoreLibfunc, CoreType},
    program_registry::ProgramRegistry,
};
use cairo_native::{context::NativeContext, utils::find_function_id};
use std::path::Path;

fn main() {
    let program_path = Path::new("aot_api.cairo");

    // Compile the cairo program to sierra.
    let program = cairo_native::utils::cairo_to_sierra(program_path);

    let native_context = NativeContext::new();
    let native_program = native_context.compile(&program).unwrap();

    let object_data = cairo_native::module_to_object(native_program.module()).unwrap();
    cairo_native::object_to_shared_lib(&object_data, Path::new("aot_api.dylib")).unwrap();

    let shared_lib = unsafe { libloading::Library::new("aot_api.dylib").unwrap() };

    let executor = cairo_native::aot::AotNativeExecutor::new(
        shared_lib,
        ProgramRegistry::<CoreType, CoreLibfunc>::new(&program).unwrap(),
    );

    dbg!(executor.invoke_dynamic(find_function_id(&program, "aot_api::aot_api::invoke0"), &[]));
}

// use cairo_felt::Felt252;
// use cairo_lang_compiler::CompilerConfig;
// use cairo_lang_starknet::contract_class::compile_path;
// use cairo_native::{
//     context::NativeContext,
//     starknet::{BlockInfo, ExecutionInfo, StarkNetSyscallHandler, SyscallResult, TxInfo, U256},
//     utils::find_entry_point_by_idx,
// };
// use std::{error::Error, path::Path};

// #[derive(Debug)]
// struct SyscallHandler;

// pub fn main() -> Result<(), Box<dyn Error>> {
//     let path = Path::new("programs/examples/hello_starknet.cairo");
//     let libpath = Path::new("./aot.so");

//     let contract = compile_path(
//         path,
//         None,
//         CompilerConfig {
//             replace_ids: true,
//             ..Default::default()
//         },
//     )
//     .unwrap();

//     let entry_point = contract.entry_points_by_type.constructor.get(0).unwrap();
//     let sierra_program = contract.extract_sierra_program().unwrap();

//     let native_context = NativeContext::new();

//     let native_program = native_context.compile(&sierra_program).unwrap();

//     let mlir = native_program.module().as_operation().to_string();
//     std::fs::write("aot.mlir", mlir)?;

//     let object = cairo_native::module_to_object(native_program.module())?;

//     //let file = NamedTempFile::new()?.into_temp_path();
//     cairo_native::object_to_shared_lib(&object, libpath)?;

//     let entry_point_fn =
//         find_entry_point_by_idx(&sierra_program, entry_point.function_idx).unwrap();

//     let reg = native_program.program_registry();
//     // aot::call_contract_library(libpath, entry_point_fn, &mut SyscallHandler, reg)?;
//     todo!();

//     Ok(())
// }

// impl StarkNetSyscallHandler for SyscallHandler {
//     fn get_block_hash(
//         &mut self,
//         block_number: u64,
//         _gas: &mut u128,
//     ) -> SyscallResult<cairo_felt::Felt252> {
//         println!("Called `get_block_hash({block_number})` from MLIR.");
//         Ok(Felt252::from_bytes_be(b"get_block_hash ok"))
//     }

//     fn get_execution_info(
//         &mut self,
//         _gas: &mut u128,
//     ) -> SyscallResult<cairo_native::starknet::ExecutionInfo> {
//         println!("Called `get_execution_info()` from MLIR.");
//         Ok(ExecutionInfo {
//             block_info: BlockInfo {
//                 block_number: 1234,
//                 block_timestamp: 2345,
//                 sequencer_address: 3456.into(),
//             },
//             tx_info: TxInfo {
//                 version: 4567.into(),
//                 account_contract_address: 5678.into(),
//                 max_fee: 6789,
//                 signature: vec![1248.into(), 2486.into()],
//                 transaction_hash: 9876.into(),
//                 chain_id: 8765.into(),
//                 nonce: 7654.into(),
//             },
//             caller_address: 6543.into(),
//             contract_address: 5432.into(),
//             entry_point_selector: 4321.into(),
//         })
//     }

//     fn deploy(
//         &mut self,
//         class_hash: cairo_felt::Felt252,
//         contract_address_salt: cairo_felt::Felt252,
//         calldata: &[cairo_felt::Felt252],
//         deploy_from_zero: bool,
//         _gas: &mut u128,
//     ) -> SyscallResult<(cairo_felt::Felt252, Vec<cairo_felt::Felt252>)> {
//         println!("Called `deploy({class_hash}, {contract_address_salt}, {calldata:?}, {deploy_from_zero})` from MLIR.");
//         Ok((
//             class_hash + contract_address_salt,
//             calldata.iter().map(|x| x + &Felt252::new(1)).collect(),
//         ))
//     }

//     fn replace_class(
//         &mut self,
//         class_hash: cairo_felt::Felt252,
//         _gas: &mut u128,
//     ) -> SyscallResult<()> {
//         println!("Called `replace_class({class_hash})` from MLIR.");
//         Ok(())
//     }

//     fn library_call(
//         &mut self,
//         class_hash: cairo_felt::Felt252,
//         function_selector: cairo_felt::Felt252,
//         calldata: &[cairo_felt::Felt252],
//         _gas: &mut u128,
//     ) -> SyscallResult<Vec<cairo_felt::Felt252>> {
//         println!(
//             "Called `library_call({class_hash}, {function_selector}, {calldata:?})` from MLIR."
//         );
//         Ok(calldata.iter().map(|x| x * &Felt252::new(3)).collect())
//     }

//     fn call_contract(
//         &mut self,
//         address: cairo_felt::Felt252,
//         entry_point_selector: cairo_felt::Felt252,
//         calldata: &[cairo_felt::Felt252],
//         _gas: &mut u128,
//     ) -> SyscallResult<Vec<cairo_felt::Felt252>> {
//         println!(
//             "Called `call_contract({address}, {entry_point_selector}, {calldata:?})` from MLIR."
//         );
//         Ok(calldata.iter().map(|x| x * &Felt252::new(3)).collect())
//     }

//     fn storage_read(
//         &mut self,
//         address_domain: u32,
//         address: cairo_felt::Felt252,
//         _gas: &mut u128,
//     ) -> SyscallResult<cairo_felt::Felt252> {
//         println!("Called `storage_read({address_domain}, {address})` from MLIR.");
//         Ok(address * &Felt252::new(3))
//     }

//     fn storage_write(
//         &mut self,
//         address_domain: u32,
//         address: cairo_felt::Felt252,
//         value: cairo_felt::Felt252,
//         _gas: &mut u128,
//     ) -> SyscallResult<()> {
//         println!("Called `storage_write({address_domain}, {address}, {value})` from MLIR.");
//         Ok(())
//     }

//     fn emit_event(
//         &mut self,
//         keys: &[cairo_felt::Felt252],
//         data: &[cairo_felt::Felt252],
//         _gas: &mut u128,
//     ) -> SyscallResult<()> {
//         println!("Called `emit_event({keys:?}, {data:?})` from MLIR.");
//         Ok(())
//     }

//     fn send_message_to_l1(
//         &mut self,
//         to_address: cairo_felt::Felt252,
//         payload: &[cairo_felt::Felt252],
//         _gas: &mut u128,
//     ) -> SyscallResult<()> {
//         println!("Called `send_message_to_l1({to_address}, {payload:?})` from MLIR.");
//         Ok(())
//     }

//     fn keccak(
//         &mut self,
//         input: &[u64],
//         _gas: &mut u128,
//     ) -> SyscallResult<cairo_native::starknet::U256> {
//         println!("Called `keccak({input:?})` from MLIR.");
//         Ok(U256(Felt252::from(1234567890).to_le_bytes()))
//     }

//     fn secp256k1_add(
//         &mut self,
//         _p0: cairo_native::starknet::Secp256k1Point,
//         _p1: cairo_native::starknet::Secp256k1Point,
//         _gas: &mut u128,
//     ) -> SyscallResult<Option<cairo_native::starknet::Secp256k1Point>> {
//         todo!()
//     }

//     fn secp256k1_get_point_from_x(
//         &self,
//         _x: cairo_native::starknet::U256,
//         _y_parity: bool,
//         _gas: &mut u128,
//     ) -> SyscallResult<Option<cairo_native::starknet::Secp256k1Point>> {
//         todo!()
//     }

//     fn secp256k1_get_xy(
//         &self,
//         _p: cairo_native::starknet::Secp256k1Point,
//         _gas: &mut u128,
//     ) -> SyscallResult<(cairo_native::starknet::U256, cairo_native::starknet::U256)> {
//         todo!()
//     }

//     fn secp256k1_mul(
//         &self,
//         _p: cairo_native::starknet::Secp256k1Point,
//         _m: cairo_native::starknet::U256,
//         _gas: &mut u128,
//     ) -> SyscallResult<Option<cairo_native::starknet::Secp256k1Point>> {
//         todo!()
//     }

//     fn secp256k1_new(
//         &self,
//         _x: cairo_native::starknet::U256,
//         _y: cairo_native::starknet::U256,
//         _gas: &mut u128,
//     ) -> SyscallResult<Option<cairo_native::starknet::Secp256k1Point>> {
//         todo!()
//     }

//     fn secp256r1_add(
//         &self,
//         _p0: cairo_native::starknet::Secp256k1Point,
//         _p1: cairo_native::starknet::Secp256k1Point,
//         _gas: &mut u128,
//     ) -> SyscallResult<Option<cairo_native::starknet::Secp256k1Point>> {
//         todo!()
//     }

//     fn secp256r1_get_point_from_x(
//         &self,
//         _x: cairo_native::starknet::U256,
//         _y_parity: bool,
//         _gas: &mut u128,
//     ) -> SyscallResult<Option<cairo_native::starknet::Secp256k1Point>> {
//         todo!()
//     }

//     fn secp256r1_get_xy(
//         &self,
//         _p: cairo_native::starknet::Secp256k1Point,
//         _gas: &mut u128,
//     ) -> SyscallResult<(cairo_native::starknet::U256, cairo_native::starknet::U256)> {
//         todo!()
//     }

//     fn secp256r1_mul(
//         &self,
//         _p: cairo_native::starknet::Secp256k1Point,
//         _m: cairo_native::starknet::U256,
//         _gas: &mut u128,
//     ) -> SyscallResult<Option<cairo_native::starknet::Secp256k1Point>> {
//         todo!()
//     }

//     fn secp256r1_new(
//         &mut self,
//         _x: cairo_native::starknet::U256,
//         _y: cairo_native::starknet::U256,
//         _gas: &mut u128,
//     ) -> SyscallResult<Option<cairo_native::starknet::Secp256k1Point>> {
//         todo!()
//     }

//     fn pop_log(&mut self) {
//         todo!()
//     }

//     fn set_account_contract_address(&mut self, _contract_address: cairo_felt::Felt252) {
//         todo!()
//     }

//     fn set_block_number(&mut self, _block_number: u64) {
//         todo!()
//     }

//     fn set_block_timestamp(&mut self, _block_timestamp: u64) {
//         todo!()
//     }

//     fn set_caller_address(&mut self, _address: cairo_felt::Felt252) {
//         todo!()
//     }

//     fn set_chain_id(&mut self, _chain_id: cairo_felt::Felt252) {
//         todo!()
//     }

//     fn set_contract_address(&mut self, _address: cairo_felt::Felt252) {
//         todo!()
//     }

//     fn set_max_fee(&mut self, _max_fee: u128) {
//         todo!()
//     }

//     fn set_nonce(&mut self, _nonce: cairo_felt::Felt252) {
//         todo!()
//     }

//     fn set_sequencer_address(&mut self, _address: cairo_felt::Felt252) {
//         todo!()
//     }

//     fn set_signature(&mut self, _signature: &[cairo_felt::Felt252]) {
//         todo!()
//     }

//     fn set_transaction_hash(&mut self, _transaction_hash: cairo_felt::Felt252) {
//         todo!()
//     }

//     fn set_version(&mut self, _version: cairo_felt::Felt252) {
//         todo!()
//     }
// }