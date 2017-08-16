import angular from 'angular';
import { AboutModule } from './about/about.module';

export const ComponentsModule = angular.module('componentsModule', [AboutModule])
  .name;