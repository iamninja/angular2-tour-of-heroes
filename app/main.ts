// Imports for in-memory-web-api
import { provide }                            from '@angular/core';
import { XHRBackend }                         from '@angular/http';

import { InMemoryBackendService, SEED_DATA }  from 'angular2-in-memory-web-api';
import { InMemoryDataService }                from './in-memory-data.service';

// Usual imports
import { bootstrap }                          from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS }                     from '@angular/http';
import { AppComponent }                       from './app.component';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  provide(XHRBackend, { useClass: InMemoryBackendService }), //in-memory server
  provide(SEED_DATA, { useClass:InMemoryDataService }) // in-memory server data
]);
