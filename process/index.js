process.on('beforeExit', (code) => {
    console.log('Process beforeExit event with code: ', code);
});

process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
});

console.log(process.arch);

console.log(process.cwd());

console.log( process.env );

console.log('This message is displayed first.');
