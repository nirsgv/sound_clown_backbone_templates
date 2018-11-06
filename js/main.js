// made to bootstrap the app
// global configuration

require.config({
   paths: {
       jquery: 'lib/jquery-min',
       underscore: 'lib/underscore-min',
       backbone: 'lib/backbone-min'
   }
});

// only need app to require all other modules
define(['app'], function(App){
    App.initialize();
});