import template from './about.html';

class Ctrl {
  constructor($http) {
    /* @ngInject */
    this.$http = $http;
  }
  $onInit() {
    this.selected = "cats";
    this.list = ["cats", "dogs", "birds"];
    this.data = {value: this.selected};
  }

  submitIt() {
    this.$http.post('https://www.futurestaybeta.com/fstest.php', this.data).
    then(resp=>{
      console.log("success");
      this.returned = resp;
    });
  }
}

export const AboutComponent = {
  template,
  bindings: {},
  controller: Ctrl
}
    