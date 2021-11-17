//const app = require('express')();
const server = require('http').Server();

const io = require('socket.io')(server,  {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

//const Redis = require('ioredis');
// const redis = new Redis({ host: 'redis' });
//
// redis.subscribe('product-channel');
//
// redis.on('message', (channel, message) => {
//     console.log("sub channel " + channel + ": " + message);
//
// });
var redis = require('redis');

var redisClient = redis.createClient({host: 'redis'});

redisClient.subscribe('laravel_database_product-channel');

redisClient.on("message", function(channel, message) {
    console.log("mew message in queue "+ message + "channel");

    message = JSON.parse(message);
    console.log(channel+':'+ message.event, message);

    io.emit(channel+':'+ message.event, message.data);
});

console.log('Middleware is running on port on 8002');

server.listen(8002);