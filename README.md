# walksvr-kurento-demo
A demo of streaming one presenter to multi-party audience using webRTC and kurento media server for walksVR.

Based (heavily) on Kurento's own one2many demo, and on tips from Tom Weller at MIT Media Lab (http://blob.tomerweller.com/free-live-streaming-in-two-hours).


## Prerequisites
- Install NodeJS
- Install Docker (if running on localhost)
- Be able to handle SSL/HTTPS in at least basic form (self-signed certificates ok) for webRTC

## Getting up and running (localhost version)
1. clone git repo
  - `git clone https://github.com/mochuelo-kun/walksvr-kurento-demo.git`
2. install server/client dependencies
  - `npm install` (at root dir of cloned repo)
  - (should automatically cascade into a bower install in the `client` dir)
3. build docker image running Kurento Media Server
  - `sudo docker build -t kms .` (also at root dir of repo, where Dockerfile is)
4. run Kurento Media Server on the docker image, exposing port 8888
  - `sudo docker run -p 8888:8888 -d kms`
5. run node server
  - `npm start`

If all goes well, you should be able to access the site at https://localhost:8443

## non-local deployment
Kurento can be deployed using the docker definition in this repo, but it may be simpler to give it its own entire server using the normal installation method at the Kurento website. (i.e. use entirely separate servers for signaling and the media server instead of cheating with a virtualized server.)

STUN (or TURN) may need to be enabled if you are deploying to a cloud service in this case (see kurento docs).

Also remember to change the `server.js` `as_uri` and `ws_uri` variables to whatever your new signaling and media server IPs/Ports are.

--

## Note on Deploying
To run the server in the background (so it keeps running even when the terminal running node is closed), use `npm run go-live` instead of `npm start`. To stop a server started in this way, use `npm run kill-live`.