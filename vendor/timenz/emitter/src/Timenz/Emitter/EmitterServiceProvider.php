<?php namespace Timenz\Emitter;

use Illuminate\Foundation\AliasLoader;
use Illuminate\Support\ServiceProvider;

class EmitterServiceProvider extends ServiceProvider {

	/**
	 * Indicates if loading of the provider is deferred.
	 *
	 * @var bool
	 */
	protected $defer = false;

	/**
	 * Register the service provider.
	 *
	 * @return void
	 */
	public function register()
	{
		//
		\Config::package('timenz/emitter', __DIR__.'/../../../../../config');

		$this->app['emitter'] = $this->app->share(function($app){
			return new Emitter;
		});

		$this->app->booting(function(){
			$loader = AliasLoader::getInstance();
			$loader->alias('Emitter', 'Timenz\Emitter\Facades\Emitter');
		});


	}

	/**
	 * Get the services provided by the provider.
	 *
	 * @return array
	 */
	public function provides()
	{
		return array();
	}

//	public function boot(){
//		$this->package('timenz/emitter', null, __DIR__.'/../../..');
//	}

}
