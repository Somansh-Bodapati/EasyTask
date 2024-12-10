import 'zone.js/node'; // Required for server-side rendering
import { enableProdMode } from '@angular/core';
import { platformServer } from '@angular/platform-server';
import { AppModule } from './app/app.module';

// Enable production mode for better performance
enableProdMode();

// Bootstrap the AppModule for SSR
const bootstrap = (() => platformServer().bootstrapModule(AppModule));

export default bootstrap;
