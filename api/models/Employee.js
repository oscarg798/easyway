/**
 * Nurse.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      name:{
        type:'String',
        required:true
      },
      birthDate:{
        type:'String',
        required:true
      },
      skills:{
        type:'array',
        required:true
      },
      languageSkill:{
        type:'string',
        enum:['Spanish','English'],
        required:true,
      },
      languageSkillLevel:{
        type:'string',
        enum:['Native','Fluent', 'Proficient','Basic'],
        required:true
      },
      workExperience:{
        collection:'WorkExperience',
        via:'owner'
      },
      educationalBackground:{
        collection:'EducationalBackground',
        via:'o\wner'
      },
      employeeType:{
        type:'string',
        enum:['Nurse','Doctor'],
        required:true
      }

  }
};
