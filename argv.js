const yargs = require('yargs');
let argvs, argv;


function argvBoolean() {
    /**
     *  -sp  argv.s && argv.p === true,
     *  --sp argv.sp === true
     */
    argv = yargs.argv;
    if (argv.s) {
        process.stdout.write(argv.fr ? 'Le perroquet dit: ' : 'The parrot says: ');
    }
    console.log(
        (argv.fr ? 'couac' : 'squawk') + (argv.p ? '!' : '')
    );
}

function argvParse() {
    argvs = yargs.parse(['-x', '1', '-y', '2']);
    console.log(argvs);
}

function argvCount() {
    argv = yargs.count('verbose').alias('v', 'verbose').argv;
    console.log(argv.verbose);
}

// argvCount();

function argvDemands() {
    var argv = yargs
    .usage('Usage: $0 -w [num] -h [num]')
    .demandOption(['w','h'])
    .argv;

    console.log("The area is:", argv.w * argv.h);
}

// argvDemands();

function argvDemmandCommand() {
    argv = yargs.demandCommand(2).argv; //Ask for non-hyphenated arguments
    console.dir(argv)
}

// argvDemmandCommand();

function argvDefault() {
    argv = yargs.default({x: 10, y: 10});
}


function argvArray() {
    argv = yargs.array('v').argv;
    console.log(argv)
}

// argvArray();

function argvBoolean() {
    argv = yargs.boolean('v').argv;
    console.log(argv);
}
argvBoolean();