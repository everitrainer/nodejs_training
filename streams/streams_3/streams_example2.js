const { Readable } = require('stream');

const ac = new AbortController();
const signal = ac.signal;

const someLongRunningFn = () => {
    console.log("Test")
}
async function* generate() {
    yield 'a';
    await someLongRunningFn({ signal });
    yield 'b';
    yield 'c';
}

const readable = Readable.from(generate());
readable.on('close', () => {
    ac.abort();
});
let i = 1;
readable.on('data', (chunk) => {
    console.log(i++)
    console.log(chunk);
});