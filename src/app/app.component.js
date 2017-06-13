import angular from 'angular';
import template from './app.html';


class AppCtrl {
   constructor () {
   }
  
$onInit() {
  this.name = 'World!';
}

changeName() {
  this.name = 'You!'
}
};



export const AppComponent = {
  template,
  controller: AppCtrl,
  bindings: {}
}
    