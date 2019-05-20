<?php namespace Timenz\Emitter\Facades;

use Illuminate\Support\Facades\Facade;

class Emitter extends Facade{

    protected static function getFacadeAccessor(){
        return 'emitter';
    }
}