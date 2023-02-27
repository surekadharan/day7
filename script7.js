var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    
      //Q1.  
        var res=result.filter((ele)=>ele.region=="Asia");
      
       console.log(res);
        
    
//Q2.
var res=result.filter((ele)=>ele.population<200000);
var final=res.map((ele)=>ele.name);
console.log(final);

//Q3.
result.forEach((ele)=>console.log(ele.name));
result.forEach((ele)=>console.log(ele.capital));
result.forEach((ele)=>console.log(ele.population));

//Q4.
var res=result.reduce((a,b)=>a+b.population,0);
console.log(res);

//Q5.
var res=result.filter((ele)=>ele.currency=="US Dollar");
var final=res.map((ele)=>ele.name);
console.log(final);