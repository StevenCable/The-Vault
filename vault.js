'use strict';
module.exports = function(){
  
  var security = {};

  function setValue(key,value){

      security[key] = value;

    return security;

  }

  function getValue(key){
    if(security.hasOwnProperty(key)){


    return security[key];
      
    }else{

    return null;

    }

  }
  
  return{
    setValue: setValue,
    getValue: getValue
  };
};