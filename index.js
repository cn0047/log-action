const fetch = require('node-fetch');
const core = require('@actions/core');
const github = require('@actions/github');

try {
  const streamId = core.getInput('stream-id');
  console.log(`Stream ID: ${streamId}`);

  const time = (new Date()).toTimeString();
  core.setOutput("time", time);

  const payload = github.context.payload;
  console.log(`Payload: ${payload}`);

  fetch('https://realtimelog.herokuapp.com/test', {
    method: 'post', headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({message: 'GitHub action', payload: payload})
  });
} catch (error) {
  core.setFailed(error.message);
}
