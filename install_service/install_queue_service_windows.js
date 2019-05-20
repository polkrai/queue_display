var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
	name:'JvkkDisplayQueue',
	description: 'The nodejs.org jvkk queue web server.',
	//script: 'C:\\path\\to\\helloworld.js',
	script: require('path').join(__dirname, '..\server_queue.js'),
	nodeOptions: [
		'--harmony',
		'--max_old_space_size=4096'
	]
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
	svc.start();
});

svc.install();