// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "jquery": ["http://libs.baidu.com/jquery/2.0.3/jquery", "js/jquery"],
    } 
});

// Load the main app module to start the app
requirejs(["app/main"]);
requirejs(["app/decoderlogic"]);
