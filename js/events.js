//define functions here

$(document).ready(function(){
getIt();
// call functions here

});

function getIt(){
  $('p').click(function(){
    alert('Hey!')
  })
}

function frameIt(){
  $('img').load(function(){
    append('.tasty');
  })
}
