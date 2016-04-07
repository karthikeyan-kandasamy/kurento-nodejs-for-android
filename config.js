var config = {}

config.port = '8080';
config.as_uri = "http://localhost:8080/";
config.ws_uri = "ws://localhost:8888/kurento";
config.outputBitrate = 3000000;
//the url of this server, this is where appRTC connects to
config.appRTCUrl = '10.10.1.65:8080';
//leave uris empty to not use turn
config.turn = {
	"username": "<username>",
	"password": "<password>",
	"uris": [
	]
};

module.exports = config;
