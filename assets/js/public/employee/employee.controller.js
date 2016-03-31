angular.module('AppModule').controller('EmployeeController', EmployeeController);

EmployeeController.$inject =['MessagesProvider', '$timeout'];

function EmployeeController (messagesProvider, $timeout) {

  var self = this,
  index=-1;

  self.employee={
    name:'',
    birthDate:'',
    skills:[],
    languageSkills:'',
    languageSkillLevel:'',
    workExperience:[]
  };

  self.defaultWorkExperience={
    responsabilitiesCount:[messagesProvider.workExperience.responsibilitiesPlaceholder],
    startDate:new Date()
  };

  self.defaultLanguageSkill={
      language:'',
      level:''
  }

  self.namePlaceholder = messagesProvider.employee.namePlaceholder;

  self.agePlaceholder =messagesProvider.employee.agePlaceholder;

  self.skillsPlaceholder = messagesProvider.employee.skillsPlaceholder;

  self.skillsCount = [messagesProvider.employee.skillsPlaceholder];

  self.languageSkillsCount = [Object.assign({},self.defaultLanguageSkill)];

  self.workExperienceCount = [Object.assign({},self.defaultWorkExperience)];

  self.skillInputButtonLabel = messagesProvider.employee.addLabel;

  self.languageSkillsOptions = [messagesProvider.employee.spanishOption,
  messagesProvider.employee.englishOption];

  self.languageSkillLevelOptions = [messagesProvider.employee.nativeLevel,
  messagesProvider.employee.fluentLevel,messagesProvider.employee.proficientLevel,
  messagesProvider.employee.basicLevel];

  self.addWorkExperienceCollection = addWorkExperienceCollection;

  self.deleteWorkExperienceCollection =deleteWorkExperienceCollection;

  self.addSkillInput = addSkillInput;

  self.deleteSkillInput = deleteSkillInput;

  self.addResponsibilityInput = addResponsibilityInput;

  self.deleteResponsibilityInput = deleteResponsibilityInput;

  self.addLanguageSkill = addLanguageSkill;

  self.deleteLanguageSkill = deleteLanguageSkill;

  self.addEmployee = addEmployee;

  function validateEmployeeData() {
    var languageSkill = null;
          for(var i = 0; i<self.languageSkillsCount.length; i++){
            languageSkill=self.languageSkillsCount[i];
              if(languageSkill == self.defaultLanguageSkill){
                return false;
              }
          }
          languageSkill= null;
          return true;
  }

  function addEmployee() {
      console.log(self.languageSkillsCount);
      validateEmployeeData();
  }

  function addLanguageSkill(languageSkill) {
    $timeout(function() {
      if(languageSkill !== self.defaultLanguageSkill){
        self.languageSkillsCount[self.languageSkillsCount.length-1] = languageSkill;
        self.languageSkillsCount
        .push(Object.assign({},self.defaultLanguageSkill));
      }else{
        /**TODO mostrar mensaje debe agregar este lenguaje antes de agregar otra**/
      }

    }, 0);
  }

  function deleteLanguageSkill(languageSkill) {
    if(self.languageSkillsCount.length>1){
      $timeout(function() {
        index = self.languageSkillsCount.indexOf(languageSkill);
        if(index>-1){
          self.languageSkillsCount.splice(index,1);
        }
      }, 0);
    }else{
      /**TODO mostrar mensaje debe tener al menos una hailidad**/
    }
  }

  function addWorkExperienceCollection(workExperience) {
    $timeout(function() {
      if(workExperience!==self.defaultWorkExperience){
        self.workExperienceCount[self.workExperienceCount.length-1] = workExperience;
        self.workExperienceCount
        .push(Object.assign({},self.defaultWorkExperience));
      }else{
        /**TODO mostrar mensaje debe agregar esta habilidad antes de agregar otra**/
      }

    }, 0);
  }

  function deleteWorkExperienceCollection(workExperience){
    if(self.workExperienceCount.length>1){
      $timeout(function() {
        index = self.workExperienceCount.indexOf(workExperience);
        if(index>-1){
          self.workExperienceCount.splice(index,1);
        }
      }, 0);
    }else{
      /**TODO mostrar mensaje debe tener al menos una hailidad**/
    }
  }



  function addSkillInput(skillInput) {
    $timeout(function() {
      if(skillInput!==messagesProvider.employee.skillsPlaceholder){
        self.skillsCount[self.skillsCount.length-1] = skillInput;
        self.skillsCount.push(messagesProvider.employee.skillsPlaceholder);
      }else{
        /**TODO mostrar mensaje debe agregar esta habilidad antes de agregar otra**/
      }

    }, 0);
  }

  function deleteSkillInput(skillInput) {
    if(self.skillsCount.length>1){
      $timeout(function() {
        index = self.skillsCount.indexOf(skillInput);
        if(index>-1){
          self.skillsCount.splice(index,1);
        }
      }, 0);
    }else{
      /**TODO mostrar mensaje debe tener al menos una hailidad**/
    }
  }

  function addResponsibilityInput(responsabilityInput, workExperience) {
    $timeout(function() {
      if(responsabilityInput!==messagesProvider.workExperience.responsibilitiesPlaceholder){
        workExperience.responsabilitiesCount[workExperience.responsabilitiesCount.length-1] = responsabilityInput;
        workExperience.responsabilitiesCount.push(messagesProvider.workExperience.responsibilitiesPlaceholder);
      }else{
        /**TODO mostrar mensaje debe agregar esta responsablidad antes de agregar otra**/
      }

    }, 0);
  }

  function deleteResponsibilityInput(responsabilityInput, workExperience) {
    if(workExperience.responsabilitiesCount.length>1){
      $timeout(function() {
        index = workExperience.responsabilitiesCount.indexOf(responsabilityInput);
        if(index>-1){
          workExperience.responsabilitiesCount.splice(index,1);
        }
      }, 0);
    }else{
      /**TODO mostrar mensaje debe tener al menos una hailidad**/
    }
  }




}
