var myApp = angular.module('myApp', []);

myApp.controller('HomeworkController', function($scope) {
    $scope.message = "hey y'all";
    $scope.hwList = this;
    $scope.hwList.currentClasses = [
      {class:'COMP 394', done:true},
      {class:'COMP 461', done:false},
      {class:'COMP 325', done:true}
    ];

    $scope.hwList.addClass = function() {
      $scope.hwList.currentClasses.push(
        {class: 'WEBD335', done:false},
        {class: 'WEBD335', done:false});
      alert("You added " + $scope.hwList.currentClasses.pop().class);
    };
});