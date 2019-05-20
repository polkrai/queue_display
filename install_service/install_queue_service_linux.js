var Service = require('node-linux').Service;

  // Create a new service object
  var svc = new Service({
	name:'Jvkk Queue',
	description: 'The nodejs.org example web server.',
	script: require('path').join(__dirname, 'queue_server.js'),
	template: 'node_modules/node-linux/lib/templates/systemv/debian',
	env: {
      name: "NODE_ENV",
      value: "production"
    }
  });

  // Listen for the "install" event, which indicates the
  // process is available as a service.
  svc.on('install',function(){
  	
  	console.log('\nInstallation Complete\n---------------------');
    //svc.start();
    
  });
  
  svc.on('alreadyinstalled',function(){
  	
	  console.log('This service is already installed.');
	  console.log('Attempting to start it.');
	  
	  svc.start();
  });
  
  svc.on('start',function(){
	
	console.log(svc.name + ' started!\nVisit http://localhost:1337 to see it in action.\n');

  });

  svc.install();