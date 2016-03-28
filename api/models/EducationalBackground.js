/**
 * EducationalBackground.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    graduationDate:{
      type:'string',
      required:true
    },
    title:{
      type:'string',
      required:true
    },
    college:{
      type:'string',
      required:true
    },
    academicDegree:{
      type:'string',
      enum:['Technician','Associate','Bachelor', 'Master','Doctoral'],
    },
    trainingDegree:{
      type:'string',
      enum:['Diploma','Certificate'],
    },
    owner:{
      model:'Employee'
    }

  }
};
