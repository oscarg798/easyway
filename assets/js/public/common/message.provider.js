angular.module('App', []).service('MessagesProvider', MessagesProvider);

MessagesProvider.$inject = ['$rootScope'];

function MessagesProvider($rootScope) {

  var self = {
      employee:{
        namePlaceholder:'Nombre',
        agePlaceholder:'Fecha de nacimiento',
        skillsPlaceholder:'Habilidades',
        spanishOption:'Español',
        englishOption:'Ingles',
        proficientLevel:'Competente',
        fluentLevel:'Fluido',
        nativeLevel:'Nativo',
        basicLevel:'Basico',
        languageLabel:'Idioma',
        levelLabel:'Nivel'
      },
      workExperience:{
        rolePlaceholder:'Cargo',
        startDatePlaceholder:'Fecha de Inicio',
        endDatePlaceHolder:'Fecha de fin',
        companyPlaceHolder:'Empresa',
        responsibilitiesPlaceholder:'Funciones',
        workExperienceLabel:'Experiencia Laboral'
      },
      addLabel:'add',
      deleteLabel:'delete',
      selectOptionLabel:'Seleccione una opción'
  };

  $rootScope.i18n = self;

  return self;

}
