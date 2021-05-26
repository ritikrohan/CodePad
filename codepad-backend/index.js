const express = require('express')
const { spawn } = require('child_process');


const app = express()
const port = 3000

function runPython(args, cb) {
    var scriptPath = '/Users/collegedunia/CodePad/codepad-backend/sample.py'
    var process = spawn('python', [scriptPath, args]);

    var output = '';

    process.stderr.on('data', (error) => {
        console.error(`stderr: ${error}`);
    })

    process.stdout.on('data', (data) => {
        console.log("Data: ", data.toString());
        output += data.toString();
    })

    process.on('close', function (code) {
        cb(output);
    });
}


app.get('/', (req, res) => {
    const arr = [1, 2, 3]
    runPython(arr, (output) => {
        res.send(output);
    })
})

app.listen(port, () => {
  console.log(`App listening at port: ${port}`)
})