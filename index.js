const core = require('@actions/core');
const exec = require('child_process').exec;

async function run() {
    const path = core.getInput('path');
    console.log(`path:${path}`);
    const property = core.getInput('property');
    console.log(`property:${property}`);
    exec(`$(sed -n "/^[[:space:]]*${property}[[:space:]]*=[[:space:]]*/s/^[[:space:]]*${property}[[:space:]]*=[[:space:]]*//p" "${path}")`, (error, stdout, stderr) => {
        if(error != null) {
            core.setFailed(error);
        }
        if(stderr != null) {
            console.log(stderr);
        }
        const value = stdout;
        console.log(stdout);
        console.log(`property value:${value}`);
        core.setOutput("value", value);
    });
}

run();