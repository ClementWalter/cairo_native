//! # Elliptic curve point type

use super::TypeBuilder;
use crate::{
    error::types::{Error, Result},
    metadata::MetadataStorage,
};
use cairo_lang_sierra::{
    extensions::{types::InfoOnlyConcreteType, GenericLibfunc, GenericType},
    program_registry::ProgramRegistry,
};
use melior::{
    dialect::llvm,
    ir::{r#type::IntegerType, Module, Type},
    Context,
};

/// Build the MLIR type.
///
/// Check out [the module](self) for more info.
pub fn build<'ctx, TType, TLibfunc>(
    context: &'ctx Context,
    _module: &Module<'ctx>,
    _registry: &ProgramRegistry<TType, TLibfunc>,
    _metadata: &mut MetadataStorage,
    _info: &InfoOnlyConcreteType,
) -> Result<Type<'ctx>>
where
    TType: GenericType,
    TLibfunc: GenericLibfunc,
    <TType as GenericType>::Concrete: TypeBuilder<TType, TLibfunc, Error = Error>,
{
    let felt252_ty = IntegerType::new(context, 252).into();

    Ok(llvm::r#type::r#struct(
        context,
        &[felt252_ty, felt252_ty],
        false,
    ))
}