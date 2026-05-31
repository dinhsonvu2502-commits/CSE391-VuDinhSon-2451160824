// 1. Pipe (Kết hợp các hàm)
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

// 2. Memoize (Cache kết quả)
function memoize(fn) {
    const cache = {};
    return function(n) {
        if (n in cache) return cache[n];
        return cache[n] = fn(n);
    };
}

// 3. Debounce (Tối ưu hóa event listener)
function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}