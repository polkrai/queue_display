var Service = require('node-mac').Service;

    // Create a new service object
    var svc = new Service({
		name:'DisplayQueueServer',
		description: 'The nodejs jvkk queue web server.',
		script: require('path').join(__dirname, 'queue_server.js'),
    });

    // Listen for the "install" event, which indicates the
    // process is available as a service.
    svc.on('install', function(){
    	
		svc.start();
      
    });
    
    svc.on('start',function(){
	
  		console.log(svc.name + ' started!\nVisit http://localhost:1337 to see it in action.\n');
  
	});


    svc.install();