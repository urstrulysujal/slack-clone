import fs from 'fs';
import { spawn } from 'child_process';
import path from 'path';

const logPath = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\b35a26a0-fbb7-43b0-a975-4796a692d06e\\debug_log_artifacts.txt';

function log(msg) {
  try {
    fs.appendFileSync(logPath, msg + '\n');
  } catch (e) {
    // ignore
  }
}

log("Starting debug server (artifacts log)...");

try {
  const child = spawn('node', ['src/server.js'], {
    stdio: ['ignore', 'pipe', 'pipe'],
    cwd: 'e:\\practice mern\\slack-clone\\backend',
    env: process.env
  });

  child.stdout.on('data', (data) => {
    log(`stdout: ${data}`);
  });

  child.stderr.on('data', (data) => {
    log(`stderr: ${data}`);
  });

  child.on('error', (err) => {
    log(`Failed to start subprocess: ${err}`);
  });

  child.on('close', (code) => {
    log(`child process exited with code ${code}`);
  });
} catch (e) {
  log(`Error spawning child: ${e}`);
}
