//Create a variable

var str="Skill Safari"
console.log(str)

//find the length of the string
console.log(str.length)

//convert letters into uppercase
{
  var str="Skill Safari".toUpperCase(str)
console.log(str)
}
//What is the index number of 'a'
var string="Skill Safari"
console.log(string.indexOf("a"))

//Convo between Captain America and Ironman
console.log("The only thing you really fight for is yourself.\n You are not the guy to make the sacrifice play")

//bmi

function calculateBmi() {
  var weight = document.bmiForm.weight.value
  var height = document.bmiForm.height.value
  if(weight > 0 && height > 0){	
  var finalBmi = weight/(height/100*height/100)
  document.bmiForm.bmi.value = finalBmi
  if(finalBmi < 18.5){
  document.bmiForm.meaning.value = "That you are too thin."
  }
  if(finalBmi > 18.5 && finalBmi < 25){
  document.bmiForm.meaning.value = "That you are healthy."
  }
  if(finalBmi > 25){
  document.bmiForm.meaning.value = "That you have overweight."
  }
  }
  else{
  alert("Please Fill in everything correctly")
  }
  }

