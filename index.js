const https = require('https');
const core = require('@actions/core');
const github = require('@actions/github');

try {
  const host = 'realtimelog.herokuapp.com';

  const streamId = core.getInput('stream-id');
  console.log(`Stream ID: ${streamId}`);
  console.log(`Open URL: https://${host}/${streamId}`);

  const time = (new Date()).toTimeString();
  core.setOutput("time", time);

  const data = JSON.stringify({
      message: 'GitHub action',
      payload: github.context.payload
  });
  console.log(`Body data: ${data}`);

  const options = {
    hostname: host,
    port: 443,
    path: '/' + streamId,
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
     'Content-Length': data.length
   }
  };

  const req = https.request(options, (res) => {
    res.on('data', (d) => {
      console.log(`Response: ${d}`);
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
