angular.module('AppServices', []).service('MessagesProvider', MessagesProvider);

function MessagesProvider() {

  var self = {
      employee:{
        namePlaceholder:'Nombre',
        agePlaceholder:'Edad',
        skillsPlaceholder:'Habilidades'
      }
  };

  return self;

}
