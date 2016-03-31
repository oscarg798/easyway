angular.module('AppModule').service('MessagesProvider', MessagesProvider);

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
        levelLabel:'Nivel',
        personalInformationLabel:'Información Personal',
        languagesTitleLabel:'Habilidades en Idiomas'
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
      addButtonLabel:'Agregar',
      deleteButtonLabel:'Borrar',
      deleteLabel:'delete',
      selectOptionLabel:'Seleccione una opción',
      title:'Employee'
  };

  $rootScope.i18n = self;

  return self;

}
