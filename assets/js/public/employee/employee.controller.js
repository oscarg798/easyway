angular.module('EmployeeModule').controller('EmployeeController', EmployeeController);

EmployeeController.$inject =['MessagesProvider'];

function EmployeeController (messagesProvider) {

  var self = this;

  self.employee={
    name:'',
    birthDate:'',
    skills:[]
  }

  self.namePlaceholder = messagesProvider.employee.namePlaceholder;

  self.agePlaceholder =messagesProvider.employee.agePlaceholder;

  self.skillsPlaceholder = messagesProvider.employee.skillsPlaceholder;
}
