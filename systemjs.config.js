(function(global) {
  // map tells where the system loader to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs',

  };

  // packages tells System loader how to load when no filename or extension
  var packages = {
    'app':                        { main: 'main.js', defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  };

  // The names of the angular packages that will be used
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];

  // Add package entries for angular packages (ngPackageNames)
  ngPackageNames.forEach(function(pkgName) {
    packages['@angular/' + pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages
  };

  System.config(config);
})(this);
