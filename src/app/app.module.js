import "babel-polyfill";
import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.css';
import './main.scss';
import { CommonModule } from './common/common.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import uiRouter from '@uirouter/angularjs';


export const AppModule = angular.module('app', [CommonModule, ComponentsModule, uiRouter])
  .component('app', AppComponent)
  .config(/* @ngInject */($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.when('', '/about');
    $urlRouterProvider.otherwise('/about');
    $stateProvider
      .state('about', {
        url: '/about',
        component: 'about'
      })
  })
  .name;
