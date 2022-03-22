const fs = require('fs');
const https = require('https');
const core = require('@actions/core');
const github = require('@actions/github');

const host = 'realtimelog.herokuapp.com';

const main = async () => {
  try {
    // Read input params.
    const streamId = core.getInput('stream-id');
    core.setOutput('StreamID', `${streamId}, Open URL: https://${host}/${streamId}`);

    const time = (new Date()).toTimeString();
    core.setOutput('Time', time);

    const message = core.getInput('message');
    core.setOutput('Message', message);

    const filePath = core.getInput('file-path');
    core.setOutput('FilePath', filePath);

    // Prepare data.
    let file = '';
    if (filePath) {
      const buffer = await fs.readFileSync(filePath);
      file = buffer.toString();
    }
    const reqData = JSON.stringify({
        title: 'GitHub action',
        message: message,
        file: file,
        payload: github.context.payload
    });
    core.setOutput('RequestData', reqData);

    // Send request.
    const options = {
      hostname: host,
      port: 443,
      path: '/' + streamId,
      method: 'POST',
      headers: {
       'Content-Type': 'application/json',
       'Content-Length': reqData.length
     }
    };
    const req = https.request(options, (res) => {
      res.on('data', (resData) => {
        core.setOutput('ResponseData', resData);
      });
    });
    req.on('error', (err) => {
      core.setFailed(err);
    });
    req.write(reqData);
    req.end();
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();
