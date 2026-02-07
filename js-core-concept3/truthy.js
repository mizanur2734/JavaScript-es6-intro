let data 
console.log('value of data', data)

data = 0;
data =""; // empty string is falsy
data = " "; // has an white space
data = "0"
if(data){
    console.log("value of data is truthy")
}else{
    console.log(data, "is falsy")
}