/**
 * WorkExperience.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    role:{
      type:'string',
      required:true
    },
    startDate:{
      type:'string',
      required:true
    },
    endDate:{
      type:'string',
      required:true
    },
    company:{
      type:'string',
      required:true
    },
    responsibilities:{
      type:'array',
      required:true
    },
    owner:{
      model:'Employee'
    }

  }
};
