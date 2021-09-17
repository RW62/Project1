$(".baseBN").on('click', start)

function start() {

  var N1 = generateRun();
  var N2 = generateRun();
  var S = selectWin(N1,N2);
  var C1 = selectclass1(N1,N2)
  var C2 = selectclass2(N1,N2)
  var A = selectaudio(N1,N2)
  $("#first").attr('src' , 'PHOTO/'+N1+'.png');
  $("#second").attr('src' , 'PHOTO/'+N2+'.png');
  $(".baseH1").text(S);
  $("#first").attr('class' ,'white '+ C1 )
  $("#second").attr('class' ,'white '+ C2 )

  var audio = new Audio('AUDIO/'+A+'.mp3');
    audio.play();


}

function generateRun() {
  var R = Math.floor((Math.random() * 6))+1
  return R
}

function selectWin(A1,A2) {
var Win = "";
  if (A1 > A2) {
    Win = "First Person"
  }
  else if (A1 === A2) {
    Win = "تعادل"
  }
  else  {
    Win = "Second Person"
  }
    return Win
}

function selectclass1(A1,A2) {
  var E = '' ;
  if (A1 > A2) {
    E = 'green'
  }
  else if (A1 === A2) {
    E = 'red'
  }
  else  {
    E = 'white'
  }
    return E
}

function selectclass2(A1,A2) {
  var H = '' ;
  if (A2 > A1) {
    H = 'green'
  }
  else if (A2 === A1) {
    H = 'red'
  }
  else  {
    H = 'white'
  }
    return H
}

function selectaudio(A1,A2) {
  var Z = '' ;
   if (A1 === A2) {
    Z = 'same'
  }
  else  {
    Z = 'win'
  }
    return Z
}
