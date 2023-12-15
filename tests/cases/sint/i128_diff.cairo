fn diff(a: i128, b: i128) -> (u128, u128) {
    match integer::i128_diff(a, b) {
        Result::Ok(r) => (r, 0),
        Result::Err(r) => (r, 1),
    }
}

fn main() -> (
    (u128, u128), (u128, u128),
    (u128, u128), (u128, u128),
    (u128, u128), (u128, u128),
    (u128, u128), (u128, u128),
) {
    (
        diff(18, 1),
        diff(1, 18),
        diff(0, 170141183460469231731687303715884105727),
        diff(170141183460469231731687303715884105727, 0),
        diff(-18, 1),
        diff(1, -18),
        diff(0, -170141183460469231731687303715884105727),
        diff(-170141183460469231731687303715884105727, 0),
    )
}