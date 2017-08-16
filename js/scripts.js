//user interface

//business logic
var pigLatin = function(inputString){
  var vowels = ['a','A','i','I','o','O','u','U','e','E','y','Y'];
  var data;
  var updatedString;
  var CCNo;
  var stringIndex =0;
  var vowelFinder = function(data,index) {
    if(index == 0 && (vowel == 'y' || vowel == 'Y' )){
      return false;
    }
    else {
      vowels.map(function(vowel){
        if(vowel == data){
          return true;
        }else {
          return false;
        }
      })
    }
  }




  if(data.match([/a-z A-Z/g])){
    var arr = inputString.split("");
      var vFinder = vowelFinder(arr[stringIndex],stringIndex);
      if(vFinder){
        updatedString = inputString + "way";
      }else{
        updatedString = (inputString.shift()).push(arr[stringIndex]);
        for(var i=1; i<inputString.length;i++ ){

          var vowel = vowelFinder(inputString.charAt(i), i);
          if(vowel){
            if(inputString.charAt(i) == 'u'|| inputString.charAt(i) == 'U'){
              updatedString = (inputString.shift()).push(arr[stringIndex]);
            }else{
              updatedString = (inputString.shift()).push(arr[stringIndex]);
            }
          }
        }

      }

  }else{
    updatedString = inputString;

  }
  return updatedString;

}
