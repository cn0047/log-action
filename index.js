const https = require('https');
const core = require('@actions/core');
const github = require('@actions/github');

try {
  const streamId = core.getInput('stream-id');
  console.log(`Stream ID: ${streamId}`);

  const time = (new Date()).toTimeString();
  core.setOutput("time", time);

  const payload = github.context.payload;
  console.log(`Payload: ${payload}`);

  const options = {
    hostname: 'realtimelog.herokuapp.com',
    port: 443,
    path: '/' + streamId,
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
     'Content-Length': data.length
   }
  };
  const data = JSON.stringify({
      message: 'GitHub action',
      payload: payload
  });
  const req = https.request(options, (res) => {
    res.on('data', (d) => {
      process.stdout.write(d);
    });
  });
  req.on('error', (e) => {
    console.error(e);
  });
  req.write(data);
  req.end();
} catch (error) {
  core.setFailed(error.message);
}
