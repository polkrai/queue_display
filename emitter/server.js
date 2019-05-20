var server     = require('http').createServer(),
    io         = require('socket.io')(server),
    winston    = require('winston'),
    port       = 1337;

var logger = winston.createLogger({
        transports: [
                new winston.transports.Console(),
                new winston.transports.File({filename: 'combined.log', level: 'info'}),
				new winston.transports.File({filename: 'errors.log', level: 'error'})
        ]
    });

winston.info('SocketIO > listening on port ' + port);

io.on('connection', function (socket){
	
    //var nb = 0;

    logger.info('SocketIO > Connected socket ' + socket.id);

    socket.on('broadcast', function (message) {
		
        //++nb;
		
		io.emit('broadcast', message);
        logger.info('SocketIO emit to Client :' + JSON.stringify(message));
    });

    socket.on('disconnect', function () {
		
        //logger.info('SocketIO : Received ' + nb + ' messages');
        logger.info('SocketIO > Disconnected socket ' + socket.id);
		
    });
});

server.listen(port);

