const fs = require('fs');
const https = require('https');
const core = require('@actions/core');
const github = require('@actions/github');

const host = 'realtimelog.herokuapp.com';

/**
 * Main function.
 */
const main = async () => {
  const streamId = core.getInput('stream-id');
  const message = core.getInput('message');
  const filePath = core.getInput('file-path');

  let file = '';
  if (filePath) {
    const buffer = await fs.readFileSync(filePath);
    file = buffer.toString();
  }
  const reqData = JSON.stringify({
      title: 'GitHub Action.',
      message: message,
      file: file,
      payload: github.context.payload
  });

  core.setOutput('stream-id', `${streamId}, Open URL: https://${host}/${streamId}`);
  core.setOutput('file-path', filePath);
  core.setOutput('request-data', reqData);

  console.info('log', {streamId: streamId, reqData: reqData});
  log(streamId, reqData);
}

/**
 * Sends log to REAL-TIME log.
 *
 * @required {string} streamId - REAL-TIME log streamId.
 * @required {object} reqData - Request body data.
 */
const log = async (streamId, reqData) => {
  try {
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
      res.on('data', (resData) => core.setOutput('response-data', resData));
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
