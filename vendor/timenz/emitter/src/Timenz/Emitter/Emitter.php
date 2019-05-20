<?php namespace Timenz\Emitter;

use Aws\CloudFront\Exception\Exception;
use ElephantIO\Client;
use ElephantIO\Engine\SocketIO\Version1X;
use Config;
use ElephantIO\Exception\ServerConnectionFailureException;

class Emitter{
    public static function emit($node, $message){
        try{
            $url = Config::get('emitter::host').':'.Config::get('emitter::port');
            $client = new Client(new Version1X($url));

            $client->initialize();
            $client->emit($node, $message);
            $client->close();
        }catch (ServerConnectionFailureException $ex){
            \Log::alert('failed to connect socket io stream on '.$url);
            return false;
        }
        return true;

    }
}