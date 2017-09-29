//define functions here

$(document).ready(function(){
getIt();
frameIt();
submitIt();
// call functions here

});

function getIt(){
  $('p').click(function(){
    alert('Hey!')
  })
}

function frameIt(){
  $(window).on('load', function(){
  $('img').addClass('tasty');
  })
}

function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.')
  })
}
