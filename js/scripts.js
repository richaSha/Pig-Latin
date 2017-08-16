//business logic
var pigLatin = function(inputString){
  var vowels = ['a','A','i','I','o','O','u','U','e','E','y','Y'];
  var data;
  var updatedString;
  var isFirstLetterVowel;
  var stringIndex =0;
  var consonantArray =[];
  var arrayList = inputString.split("");

  var firstWord = arrayList[stringIndex];

  var vowelFinder = function(data,index) {
    if(index == 0 && (data == 'y' || data == 'Y' )){
      return false;
    }
    else {
      if(data.match(/[a i o u e]/g)){
        return true;
      }else {
        return false;
      }
    }
  }

  var consonantArray = function(){
    arrayList.push(arrayList[stringIndex])
    delete arrayList[stringIndex]

    firstWord = arrayList[stringIndex+1];
    isFirstLetterVowel = vowelFinder(firstWord, 2)
    if(isFirstLetterVowel){
      arrayList.push('ay');
      updatedString = (arrayList.toString()).replace(/,/g, '');
    }else{
        stringIndex += 1;
        if(stringIndex < inputString.length){
          consonantArray(arrayList);
        }else{
          arrayList.push('ay');
          updatedString = (arrayList.toString()).replace(/,/g, '');
        }
    }
  }

  if(firstWord.match(/[a-z A-Z]/g)){
    isFirstLetterVowel = vowelFinder(firstWord, stringIndex);
    if(isFirstLetterVowel){
      updatedString = inputString + "way";
    }
    else {
      if(firstWord == 'q'){
        var secondWord = arrayList[stringIndex+1];
        if(secondWord == 'u'){
          arrayList.push(arrayList[stringIndex])
          arrayList.push(arrayList[stringIndex+1])
          delete arrayList[stringIndex]
          delete arrayList[stringIndex+1]
          arrayList.push('ay');
          updatedString = (arrayList.toString()).replace(/,/g, '');
        }
      }else {
        consonantArray();
      }

    }
  }else{
    updatedString = inputString;
  }
  return updatedString;
}

//user interface
$(document).ready(function() {
  $('button').click(function() {
    var inputString = $('input').val();
    var newString = pigLatin(inputString);
    $('.result').text(newString);
  })
})
