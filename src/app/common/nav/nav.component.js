import template from './nav.html';

class NavCtrl {
  constructor($http) {
    /* @ngInject */
    this.$http = $http;
  }
  $onInit() {
    this.$http.get('https://dog.ceo/api/breeds/list/all')
    .then(resp => {
      const dogNames = Object.keys(resp.data.message);
      this.threeDogs = [dogNames[0], dogNames[1], dogNames[2]];
      }
    )
  }
}
  


export const NavComponent = {
  controller: NavCtrl,
  template,
  bindings: {}
}
    