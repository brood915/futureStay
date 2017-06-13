import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/style/main.scss';
import { CommonModule } from './common/common.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';

export const AppModule = angular.module('app', [CommonModule, ComponentsModule])
  .component('app', AppComponent)
  .name;