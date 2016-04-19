$(document).ready(function(){
var result =[];
$('td').on('click',function(){
var value = $(this).html();
if (value === 'C') {
  result = [];
}else if(result.length < 15) {
 if(value === '='){
 result = eval(result).toString();
 }else if(value === 'sqrt') {
   result = (Math.sqrt(eval(result))).toString();
 } else {
result += value;
}
}
$('h1').html(result);
});

});
