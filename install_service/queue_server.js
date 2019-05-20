var server	= require('http').createServer(),
    io      = require('socket.io')(server),
    winston = require('winston'),
    port    = 1337;

var logger = winston.createLogger({
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({ filename: 'queue_server.log' })
        ]
    });
    
// Logger config
logger.info('SocketIO > listening on port ' + port);

io.on('connection', function (socket){
	
    logger.info('SocketIO > Connected socket ' + socket.id);

    socket.on('disconnect', function () {
    	
        logger.info('SocketIO > Disconnected socket ' + socket.id);
    });

    socket.on('broadcast', function (message) {
    	
        logger.info('ElephantIO broadcast > ' + JSON.stringify(message));
    });
});

server.listen(port);