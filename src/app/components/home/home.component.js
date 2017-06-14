import template from './home.html';
import angular from 'angular';

class HomeCtrl {
  constructor() {
    this.name = 'world'
  }

$onInit() {
  this.name = 'world!';
}

changeName () {
  this.name = 'YOU!';
}
 
}


export const HomeComponent = {
  template,
  controller: HomeCtrl,
  bindings: {}
}
    