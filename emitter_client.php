<?php

require_once("vendor/autoload.php"); 

use ElephantIO\Client;
use ElephantIO\Engine\SocketIO\Version1X;

//require __DIR__ . '/../../../../vendor/autoload.php';

$client = new Client(new Version1X('http://localhost:1337'));

$client->initialize();

$client->emit('broadcast', ['foo' => 'bar']);

$client->close();