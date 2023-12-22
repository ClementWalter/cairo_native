(function() {var implementors = {
"cairo_native":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.i8.html\">i8</a>&gt; for <a class=\"enum\" href=\"cairo_native/values/enum.JitValue.html\" title=\"enum cairo_native::values::JitValue\">JitValue</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.u128.html\">u128</a>&gt; for <a class=\"enum\" href=\"cairo_native/values/enum.JitValue.html\" title=\"enum cairo_native::values::JitValue\">JitValue</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.u32.html\">u32</a>&gt; for <a class=\"enum\" href=\"cairo_native/values/enum.JitValue.html\" title=\"enum cairo_native::values::JitValue\">JitValue</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"cairo_native/utils/struct.LayoutError.html\" title=\"struct cairo_native::utils::LayoutError\">LayoutError</a>&gt; for <a class=\"enum\" href=\"cairo_native/error/types/enum.ErrorImpl.html\" title=\"enum cairo_native::error::types::ErrorImpl\">ErrorImpl</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"cairo_native/error/jit_engine/enum.ErrorImpl.html\" title=\"enum cairo_native::error::jit_engine::ErrorImpl\">ErrorImpl</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.1/core/alloc/layout/struct.LayoutError.html\" title=\"struct core::alloc::layout::LayoutError\">LayoutError</a>&gt; for <a class=\"enum\" href=\"cairo_native/error/jit_engine/enum.ErrorImpl.html\" title=\"enum cairo_native::error::jit_engine::ErrorImpl\">ErrorImpl</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"cairo_native/values/enum.JitValue.html\" title=\"enum cairo_native::values::JitValue\">JitValue</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.1/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.1/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"enum\" href=\"cairo_native/values/enum.JitValue.html\" title=\"enum cairo_native::values::JitValue\">JitValue</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"cairo_native/error/libfuncs/struct.Error.html\" title=\"struct cairo_native::error::libfuncs::Error\">Error</a>&gt; for <a class=\"enum\" href=\"cairo_native/error/types/enum.ErrorImpl.html\" title=\"enum cairo_native::error::types::ErrorImpl\">ErrorImpl</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.i32.html\">i32</a>&gt; for <a class=\"enum\" href=\"cairo_native/values/enum.JitValue.html\" title=\"enum cairo_native::values::JitValue\">JitValue</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.u16.html\">u16</a>&gt; for <a class=\"enum\" href=\"cairo_native/values/enum.JitValue.html\" title=\"enum cairo_native::values::JitValue\">JitValue</a>"],["impl&lt;TType, TLibfunc&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.1/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;ProgramRegistryError, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.1/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"enum\" href=\"cairo_native/error/compile/enum.ErrorImpl.html\" title=\"enum cairo_native::error::compile::ErrorImpl\">ErrorImpl</a>&lt;TType, TLibfunc&gt;<span class=\"where fmt-newline\">where\n    TType: GenericType,\n    TLibfunc: GenericLibfunc,\n    &lt;TType as GenericType&gt;::Concrete: <a class=\"trait\" href=\"cairo_native/types/trait.TypeBuilder.html\" title=\"trait cairo_native::types::TypeBuilder\">TypeBuilder</a>&lt;TType, TLibfunc&gt;,\n    &lt;TLibfunc as GenericLibfunc&gt;::Concrete: <a class=\"trait\" href=\"cairo_native/libfuncs/trait.LibfuncBuilder.html\" title=\"trait cairo_native::libfuncs::LibfuncBuilder\">LibfuncBuilder</a>&lt;TType, TLibfunc&gt;,</span>"],["impl&lt;TType, TLibfunc&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;EditStateError&gt; for <a class=\"enum\" href=\"cairo_native/error/compile/enum.ErrorImpl.html\" title=\"enum cairo_native::error::compile::ErrorImpl\">ErrorImpl</a>&lt;TType, TLibfunc&gt;<span class=\"where fmt-newline\">where\n    TType: GenericType,\n    TLibfunc: GenericLibfunc,\n    &lt;TType as GenericType&gt;::Concrete: <a class=\"trait\" href=\"cairo_native/types/trait.TypeBuilder.html\" title=\"trait cairo_native::types::TypeBuilder\">TypeBuilder</a>&lt;TType, TLibfunc&gt;,\n    &lt;TLibfunc as GenericLibfunc&gt;::Concrete: <a class=\"trait\" href=\"cairo_native/libfuncs/trait.LibfuncBuilder.html\" title=\"trait cairo_native::libfuncs::LibfuncBuilder\">LibfuncBuilder</a>&lt;TType, TLibfunc&gt;,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"cairo_native/utils/struct.LayoutError.html\" title=\"struct cairo_native::utils::LayoutError\">LayoutError</a>&gt; for <a class=\"enum\" href=\"cairo_native/error/libfuncs/enum.ErrorImpl.html\" title=\"enum cairo_native::error::libfuncs::ErrorImpl\">ErrorImpl</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"cairo_native/error/types/struct.Error.html\" title=\"struct cairo_native::error::types::Error\">Error</a>&gt; for <a class=\"enum\" href=\"cairo_native/error/libfuncs/enum.ErrorImpl.html\" title=\"enum cairo_native::error::libfuncs::ErrorImpl\">ErrorImpl</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.1/core/num/error/struct.TryFromIntError.html\" title=\"struct core::num::error::TryFromIntError\">TryFromIntError</a>&gt; for <a class=\"enum\" href=\"cairo_native/error/types/enum.ErrorImpl.html\" title=\"enum cairo_native::error::types::ErrorImpl\">ErrorImpl</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"cairo_native/values/enum.JitValue.html\" title=\"enum cairo_native::values::JitValue\">JitValue</a>&gt;, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.array.html\">[T; N]</a>&gt; for <a class=\"enum\" href=\"cairo_native/values/enum.JitValue.html\" title=\"enum cairo_native::values::JitValue\">JitValue</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.1/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;ProgramRegistryError, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.1/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"enum\" href=\"cairo_native/error/jit_engine/enum.ErrorImpl.html\" title=\"enum cairo_native::error::jit_engine::ErrorImpl\">ErrorImpl</a>"],["impl&lt;'m&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"cairo_native/executor/struct.AotNativeExecutor.html\" title=\"struct cairo_native::executor::AotNativeExecutor\">AotNativeExecutor</a>&gt; for <a class=\"enum\" href=\"cairo_native/executor/enum.NativeExecutor.html\" title=\"enum cairo_native::executor::NativeExecutor\">NativeExecutor</a>&lt;'m&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.1/core/num/error/struct.TryFromIntError.html\" title=\"struct core::num::error::TryFromIntError\">TryFromIntError</a>&gt; for <a class=\"enum\" href=\"cairo_native/error/libfuncs/enum.ErrorImpl.html\" title=\"enum cairo_native::error::libfuncs::ErrorImpl\">ErrorImpl</a>"],["impl&lt;TType, TLibfunc&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"cairo_native/error/compile/enum.ErrorImpl.html\" title=\"enum cairo_native::error::compile::ErrorImpl\">ErrorImpl</a>&lt;TType, TLibfunc&gt;<span class=\"where fmt-newline\">where\n    TType: GenericType,\n    TLibfunc: GenericLibfunc,\n    &lt;TType as GenericType&gt;::Concrete: <a class=\"trait\" href=\"cairo_native/types/trait.TypeBuilder.html\" title=\"trait cairo_native::types::TypeBuilder\">TypeBuilder</a>&lt;TType, TLibfunc&gt;,\n    &lt;TLibfunc as GenericLibfunc&gt;::Concrete: <a class=\"trait\" href=\"cairo_native/libfuncs/trait.LibfuncBuilder.html\" title=\"trait cairo_native::libfuncs::LibfuncBuilder\">LibfuncBuilder</a>&lt;TType, TLibfunc&gt;,</span>"],["impl&lt;'m&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"cairo_native/executor/struct.JitNativeExecutor.html\" title=\"struct cairo_native::executor::JitNativeExecutor\">JitNativeExecutor</a>&lt;'m&gt;&gt; for <a class=\"enum\" href=\"cairo_native/executor/enum.NativeExecutor.html\" title=\"enum cairo_native::executor::NativeExecutor\">NativeExecutor</a>&lt;'m&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.i64.html\">i64</a>&gt; for <a class=\"enum\" href=\"cairo_native/values/enum.JitValue.html\" title=\"enum cairo_native::values::JitValue\">JitValue</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.1/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;ProgramRegistryError, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.1/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"enum\" href=\"cairo_native/error/libfuncs/enum.ErrorImpl.html\" title=\"enum cairo_native::error::libfuncs::ErrorImpl\">ErrorImpl</a>"],["impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;E&gt; for <a class=\"struct\" href=\"cairo_native/error/jit_engine/struct.Error.html\" title=\"struct cairo_native::error::jit_engine::Error\">Error</a><span class=\"where fmt-newline\">where\n    <a class=\"enum\" href=\"cairo_native/error/jit_engine/enum.ErrorImpl.html\" title=\"enum cairo_native::error::jit_engine::ErrorImpl\">ErrorImpl</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;E&gt;,</span>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"cairo_native/values/enum.JitValue.html\" title=\"enum cairo_native::values::JitValue\">JitValue</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.slice.html\">[T]</a>&gt; for <a class=\"enum\" href=\"cairo_native/values/enum.JitValue.html\" title=\"enum cairo_native::values::JitValue\">JitValue</a>"],["impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;E&gt; for <a class=\"struct\" href=\"cairo_native/error/types/struct.Error.html\" title=\"struct cairo_native::error::types::Error\">Error</a><span class=\"where fmt-newline\">where\n    <a class=\"enum\" href=\"cairo_native/error/types/enum.ErrorImpl.html\" title=\"enum cairo_native::error::types::ErrorImpl\">ErrorImpl</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;E&gt;,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.u8.html\">u8</a>&gt; for <a class=\"enum\" href=\"cairo_native/values/enum.JitValue.html\" title=\"enum cairo_native::values::JitValue\">JitValue</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Felt&gt; for <a class=\"enum\" href=\"cairo_native/values/enum.JitValue.html\" title=\"enum cairo_native::values::JitValue\">JitValue</a>"],["impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;E&gt; for <a class=\"struct\" href=\"cairo_native/error/libfuncs/struct.Error.html\" title=\"struct cairo_native::error::libfuncs::Error\">Error</a><span class=\"where fmt-newline\">where\n    <a class=\"enum\" href=\"cairo_native/error/libfuncs/enum.ErrorImpl.html\" title=\"enum cairo_native::error::libfuncs::ErrorImpl\">ErrorImpl</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;E&gt;,</span>"],["impl&lt;TType, TLibfunc, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;E&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.1/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"struct\" href=\"cairo_native/error/compile/struct.Error.html\" title=\"struct cairo_native::error::compile::Error\">Error</a>&lt;TType, TLibfunc&gt;&gt;<span class=\"where fmt-newline\">where\n    TType: GenericType,\n    TLibfunc: GenericLibfunc,\n    &lt;TType as GenericType&gt;::Concrete: <a class=\"trait\" href=\"cairo_native/types/trait.TypeBuilder.html\" title=\"trait cairo_native::types::TypeBuilder\">TypeBuilder</a>&lt;TType, TLibfunc&gt;,\n    &lt;TLibfunc as GenericLibfunc&gt;::Concrete: <a class=\"trait\" href=\"cairo_native/libfuncs/trait.LibfuncBuilder.html\" title=\"trait cairo_native::libfuncs::LibfuncBuilder\">LibfuncBuilder</a>&lt;TType, TLibfunc&gt;,\n    <a class=\"enum\" href=\"cairo_native/error/compile/enum.ErrorImpl.html\" title=\"enum cairo_native::error::compile::ErrorImpl\">ErrorImpl</a>&lt;TType, TLibfunc&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;E&gt;,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.i128.html\">i128</a>&gt; for <a class=\"enum\" href=\"cairo_native/values/enum.JitValue.html\" title=\"enum cairo_native::values::JitValue\">JitValue</a>"],["impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;E&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.1/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"struct\" href=\"cairo_native/error/jit_engine/struct.Error.html\" title=\"struct cairo_native::error::jit_engine::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    <a class=\"enum\" href=\"cairo_native/error/jit_engine/enum.ErrorImpl.html\" title=\"enum cairo_native::error::jit_engine::ErrorImpl\">ErrorImpl</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;E&gt;,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.u64.html\">u64</a>&gt; for <a class=\"enum\" href=\"cairo_native/values/enum.JitValue.html\" title=\"enum cairo_native::values::JitValue\">JitValue</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.1/core/alloc/layout/struct.LayoutError.html\" title=\"struct core::alloc::layout::LayoutError\">LayoutError</a>&gt; for <a class=\"enum\" href=\"cairo_native/error/types/enum.ErrorImpl.html\" title=\"enum cairo_native::error::types::ErrorImpl\">ErrorImpl</a>"],["impl&lt;'a, K&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"cairo_native/cache/struct.JitProgramCache.html\" title=\"struct cairo_native::cache::JitProgramCache\">JitProgramCache</a>&lt;'a, K&gt;&gt; for <a class=\"enum\" href=\"cairo_native/cache/enum.ProgramCache.html\" title=\"enum cairo_native::cache::ProgramCache\">ProgramCache</a>&lt;'a, K&gt;<span class=\"where fmt-newline\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</span>"],["impl&lt;TType, TLibfunc, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;E&gt; for <a class=\"struct\" href=\"cairo_native/error/compile/struct.Error.html\" title=\"struct cairo_native::error::compile::Error\">Error</a>&lt;TType, TLibfunc&gt;<span class=\"where fmt-newline\">where\n    TType: GenericType,\n    TLibfunc: GenericLibfunc,\n    &lt;TType as GenericType&gt;::Concrete: <a class=\"trait\" href=\"cairo_native/types/trait.TypeBuilder.html\" title=\"trait cairo_native::types::TypeBuilder\">TypeBuilder</a>&lt;TType, TLibfunc&gt;,\n    &lt;TLibfunc as GenericLibfunc&gt;::Concrete: <a class=\"trait\" href=\"cairo_native/libfuncs/trait.LibfuncBuilder.html\" title=\"trait cairo_native::libfuncs::LibfuncBuilder\">LibfuncBuilder</a>&lt;TType, TLibfunc&gt;,\n    <a class=\"enum\" href=\"cairo_native/error/compile/enum.ErrorImpl.html\" title=\"enum cairo_native::error::compile::ErrorImpl\">ErrorImpl</a>&lt;TType, TLibfunc&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;E&gt;,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.i16.html\">i16</a>&gt; for <a class=\"enum\" href=\"cairo_native/values/enum.JitValue.html\" title=\"enum cairo_native::values::JitValue\">JitValue</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.1/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;ProgramRegistryError, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.1/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"enum\" href=\"cairo_native/error/types/enum.ErrorImpl.html\" title=\"enum cairo_native::error::types::ErrorImpl\">ErrorImpl</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"cairo_native/error/libfuncs/enum.ErrorImpl.html\" title=\"enum cairo_native::error::libfuncs::ErrorImpl\">ErrorImpl</a>"],["impl&lt;'a, K&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"cairo_native/cache/struct.AotProgramCache.html\" title=\"struct cairo_native::cache::AotProgramCache\">AotProgramCache</a>&lt;'a, K&gt;&gt; for <a class=\"enum\" href=\"cairo_native/cache/enum.ProgramCache.html\" title=\"enum cairo_native::cache::ProgramCache\">ProgramCache</a>&lt;'a, K&gt;<span class=\"where fmt-newline\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.1/core/alloc/layout/struct.LayoutError.html\" title=\"struct core::alloc::layout::LayoutError\">LayoutError</a>&gt; for <a class=\"enum\" href=\"cairo_native/error/libfuncs/enum.ErrorImpl.html\" title=\"enum cairo_native::error::libfuncs::ErrorImpl\">ErrorImpl</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"cairo_native/error/types/enum.ErrorImpl.html\" title=\"enum cairo_native::error::types::ErrorImpl\">ErrorImpl</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()