const express = require('express');
const SocketServer = require('ws').Server;
const path = require('path');
const led = require('./led');

const PORT = 1337;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });

wss.on('connection', (ws) => {

  console.log('Client connected');

  ws.on('close', () => console.log('Client disconnected'));

  ws.on('message', function incoming(data) {

    const json_data = JSON.parse(data);

    if (json_data.action === "led_change") {
      if (json_data.state === 1) {
        led.on();
      } else {
        led.off();
      }
    }

    console.log(`Web socket message:`, data);
  });
});
