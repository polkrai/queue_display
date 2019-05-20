## Socket.io Emitter
Simple laravel socket.io emitter based on wisembly/socket.io (socket.io v1.* emitter only)

### Instalation

add to composer

    "require": {
      "timenz/emitter": "dev-master",
    },
    
run 

    composer update
    
add to config/app.php profiders

    'Timenz\Emitter\EmitterServiceProvider',
		
if you want custom name add to aliases
    
    'SocketIo' 			=> 'Timenz\Emitter\Facades\Emitter',

publish config

    php artisan config:publish timenz/emitter
    
test
    
    Emitter::emit('node', array('foo' => 'bar'))
    