

let sendButton1 = document.querySelector('#send1')
let sendButton2 = document.querySelector('#send2')
// let sendButton = document.querySelector('button');
function send1() {
  let oneone = $('input:radio:checked[name="oneone"]').val();
  let onetwo = $('input:radio:checked[name="onetwo"]').val();
  let onethree = $('input:radio:checked[name="onethree"]').val();
  let onefour = $('input:radio:checked[name="onefour"]').val();
  let onefive = $('input:radio:checked[name="onefive"]').val();
  let onesix = $('input:radio:checked[name="onesix"]').val();
  if(oneone == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(onetwo == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(onethree == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(onefour == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(onefive == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(onesix == undefined){
    alert("每題皆為必填，請確實填答");
    
  }else{
    localStorage.setItem('oneone', oneone);
    localStorage.setItem('onetwo', onetwo);
    localStorage.setItem('onethree', onethree);
    localStorage.setItem('onefour', onefour);
    localStorage.setItem('onefive', onefive);
    localStorage.setItem('onesix', onesix);
    console.log(oneone);
    console.log(onetwo);
    console.log(localStorage.getItem('oneone'));
    location.href='news2.html'
  }
};

function send2() {
  let twoone = $('input:radio:checked[name="twoone"]').val();
  let twotwo = $('input:radio:checked[name="twotwo"]').val();
  let twothree = $('input:radio:checked[name="twothree"]').val();
  let twofour = $('input:radio:checked[name="twofour"]').val();
  let twofive = $('input:radio:checked[name="twofive"]').val();
  let twosix = $('input:radio:checked[name="twosix"]').val();
  if(twoone == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(twotwo == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(twothree == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(twofour == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(twofive == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(twosix == undefined){
    alert("每題皆為必填，請確實填答");
    
  }else{
    localStorage.setItem('twoone', twoone);
    localStorage.setItem('twotwo', twotwo);
    localStorage.setItem('twothree', twothree);
    localStorage.setItem('twofour', twofour);
    localStorage.setItem('twofive', twofive);
    localStorage.setItem('twosix', twosix);
    console.log(twoone);
    console.log(twotwo);
    console.log(localStorage.getItem('twoone'));
    location.href='news3.html'
  }
};

function send3() {
  let threeone = $('input:radio:checked[name="threeone"]').val();
  let threetwo = $('input:radio:checked[name="threetwo"]').val();
  let threethree = $('input:radio:checked[name="threethree"]').val();
  let threefour = $('input:radio:checked[name="threefour"]').val();
  let threefive = $('input:radio:checked[name="threefive"]').val();
  let threesix = $('input:radio:checked[name="threesix"]').val();
  if(threeone == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(threetwo == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(threethree == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(threefour == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(threefive == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(threesix == undefined){
    alert("每題皆為必填，請確實填答");
    
  }else{
    localStorage.setItem('threeone', threeone);
    localStorage.setItem('threetwo', threetwo);
    localStorage.setItem('threethree', threethree);
    localStorage.setItem('threefour', threefour);
    localStorage.setItem('threefive', threefive);
    localStorage.setItem('threesix', threesix);
    console.log(threeone);
    console.log(threetwo);
    console.log(localStorage.getItem('threeone'));
    location.href='news4.html'
  }
};

function send4() {
  let fourone = $('input:radio:checked[name="fourone"]').val();
  let fourtwo = $('input:radio:checked[name="fourtwo"]').val();
  let fourthree = $('input:radio:checked[name="fourthree"]').val();
  let fourfour = $('input:radio:checked[name="fourfour"]').val();
  let fourfive = $('input:radio:checked[name="fourfive"]').val();
  let foursix = $('input:radio:checked[name="foursix"]').val();
  if(fourone == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(fourtwo == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(fourthree == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(fourfour == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(fourfive == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(foursix == undefined){
    alert("每題皆為必填，請確實填答");
    
  }else{
    localStorage.setItem('fourone', fourone);
    localStorage.setItem('fourtwo', fourtwo);
    localStorage.setItem('fourthree', fourthree);
    localStorage.setItem('fourfour', fourfour);
    localStorage.setItem('fourfive', fourfive);
    localStorage.setItem('foursix', foursix);
    console.log(fourtwo);
    // console.log(onetwo);
    console.log(localStorage.getItem('fourone'));
    location.href='news5.html'
  }
};

function send5() {
  let fiveone = $('input:radio:checked[name="fiveone"]').val();
  let fivetwo = $('input:radio:checked[name="fivetwo"]').val();
  let fivethree = $('input:radio:checked[name="fivethree"]').val();
  let fivefour = $('input:radio:checked[name="fivefour"]').val();
  let fivefive = $('input:radio:checked[name="fivefive"]').val();
  let fivesix = $('input:radio:checked[name="fivesix"]').val();
  if(fiveone == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(fivetwo == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(fivethree == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(fivefour == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(fivefive == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(fivesix == undefined){
    alert("每題皆為必填，請確實填答");
    
  }else{
    localStorage.setItem('fiveone', fiveone);
    localStorage.setItem('fivetwo', fivetwo);
    localStorage.setItem('fivethree', fivethree);
    localStorage.setItem('fivefour', fivefour);
    localStorage.setItem('fivefive', fivefive);
    localStorage.setItem('fivesix', fivesix);
    console.log(fiveone);
    console.log(fivetwo);
    console.log(localStorage.getItem('fiveone'));
    location.href='news6.html'
  }
};

function send6() {
  let sixone = $('input:radio:checked[name="sixone"]').val();
  let sixtwo = $('input:radio:checked[name="sixtwo"]').val();
  let sixthree = $('input:radio:checked[name="sixthree"]').val();
  let sixfour = $('input:radio:checked[name="sixfour"]').val();
  let sixfive = $('input:radio:checked[name="sixfive"]').val();
  let sixsix = $('input:radio:checked[name="sixsix"]').val();
  if(sixone == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(sixtwo == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(sixthree == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(sixfour == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(sixfive == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(sixsix == undefined){
    alert("每題皆為必填，請確實填答");
    
  }else{
    localStorage.setItem('sixone', sixone);
    localStorage.setItem('sixtwo', sixtwo);
    localStorage.setItem('sixthree', sixthree);
    localStorage.setItem('sixfour', sixfour);
    localStorage.setItem('sixfive', sixfive);
    localStorage.setItem('sixsix', sixsix);
    console.log(sixone);
    console.log(sixtwo);
    console.log(localStorage.getItem('oneone'));
    location.href='continueUsage.html'
  }
};

function send7() {
  let sevenone = $('input:radio:checked[name="sevenone"]').val();
  let seventwo = $('input:radio:checked[name="seventwo"]').val();
  let seventhree = $('input:radio:checked[name="seventhree"]').val();
  let sevenfour = $('input:radio:checked[name="sevenfour"]').val();
  let sevenfive = $('input:radio:checked[name="sevenfive"]').val();

  if(sevenone == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(seventwo == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(seventhree == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(sevenfour == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(sevenfive == undefined){
    alert("每題皆為必填，請確實填答");
  }else{
    localStorage.setItem('sevenone', sevenone);
    localStorage.setItem('seventwo', seventwo);
    localStorage.setItem('seventhree', seventhree);
    localStorage.setItem('sevenfour', sevenfour);
    localStorage.setItem('sevenfive', sevenfive);
    console.log(sevenone);
    console.log(seventwo);
    console.log(localStorage.getItem('sevenone'));
    location.href='MBTI.html'
  }
};

function send8() {
  let mbti_1 = $('input:radio:checked[name="mbti_1"]').val();
  let mbti_2 = $('input:radio:checked[name="mbti_2"]').val();
  let mbti_3 = $('input:radio:checked[name="mbti_3"]').val();
  let mbti_4 = $('input:radio:checked[name="mbti_4"]').val();
  let mbti_5 = $('input:radio:checked[name="mbti_5"]').val();
  let mbti_6 = $('input:radio:checked[name="mbti_6"]').val();
  let mbti_7 = $('input:radio:checked[name="mbti_7"]').val();
  let mbti_8 = $('input:radio:checked[name="mbti_8"]').val();
  let mbti_9 = $('input:radio:checked[name="mbti_9"]').val();
  let mbti_10 = $('input:radio:checked[name="mbti_10"]').val();
  let mbti_11 = $('input:radio:checked[name="mbti_11"]').val();
  let mbti_12 = $('input:radio:checked[name="mbti_12"]').val();
  let mbti_13 = $('input:radio:checked[name="mbti_13"]').val();
  let mbti_14 = $('input:radio:checked[name="mbti_14"]').val();
  let mbti_15 = $('input:radio:checked[name="mbti_15"]').val();
  let mbti_16 = $('input:radio:checked[name="mbti_16"]').val();
  let mbti_17 = $('input:radio:checked[name="mbti_17"]').val();
  let mbti_18 = $('input:radio:checked[name="mbti_18"]').val();
  let mbti_19 = $('input:radio:checked[name="mbti_19"]').val();
  let mbti_20 = $('input:radio:checked[name="mbti_20"]').val();
  let mbti_21 = $('input:radio:checked[name="mbti_21"]').val();
  let mbti_22 = $('input:radio:checked[name="mbti_22"]').val();

  if(mbti_1 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(mbti_2 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(mbti_3 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(mbti_4 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(mbti_5 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(mbti_6 == undefined){
    alert("每題皆為必填，請確實填答"); 
  }else if(mbti_7 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(mbti_8 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(mbti_9 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(mbti_10 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(mbti_11 == undefined){
    alert("每題皆為必填，請確實填答"); 
  }else if(mbti_12 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(mbti_13 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(mbti_14 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(mbti_15 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(mbti_16 == undefined){
    alert("每題皆為必填，請確實填答"); 
  }else if(mbti_17 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(mbti_18 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(mbti_19 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(mbti_20== undefined){
    alert("每題皆為必填，請確實填答");
  }else if(mbti_21== undefined){
    alert("每題皆為必填，請確實填答"); 
  }else if(mbti_22== undefined){
    alert("每題皆為必填，請確實填答"); 
  }else{
    localStorage.setItem('mbti_1', mbti_1);
    localStorage.setItem('mbti_2', mbti_2);
    localStorage.setItem('mbti_3', mbti_3);
    localStorage.setItem('mbti_4', mbti_4);
    localStorage.setItem('mbti_5', mbti_5);
    localStorage.setItem('mbti_6', mbti_6);
    localStorage.setItem('mbti_7', mbti_7);
    localStorage.setItem('mbti_8', mbti_8);
    localStorage.setItem('mbti_9', mbti_9);
    localStorage.setItem('mbti_10', mbti_10);
    localStorage.setItem('mbti_11', mbti_11);
    localStorage.setItem('mbti_12', mbti_12);
    localStorage.setItem('mbti_13', mbti_13);
    localStorage.setItem('mbti_14', mbti_14);
    localStorage.setItem('mbti_15', mbti_15);
    localStorage.setItem('mbti_16', mbti_16);
    localStorage.setItem('mbti_17', mbti_17);
    localStorage.setItem('mbti_18', mbti_18);
    localStorage.setItem('mbti_19', mbti_19);
    localStorage.setItem('mbti_20', mbti_20);
    localStorage.setItem('mbti_21', mbti_21);
    localStorage.setItem('mbti_22', mbti_22);

    console.log(mbti_1);
    console.log(mbti_2);
    console.log(localStorage.getItem('mbti_1'));
    location.href='CRT.html'
  }
};
// $('input[name=name]').val(),
function send9() {
  let crt_1 = $('input[name="crt_1"]').val();
  let crt_2 = $('input[name="crt_2"]').val();
  let crt_3 = $('input[name="crt_3"]').val();
  let crt_4 = $('input[name="crt_4"]').val();
  let crt_5 = $('input[name="crt_5"]').val();
  let crt_6 = $('input[name="crt_6"]').val();
  let crt_7 = $('input:radio:checked[name="crt_7"]').val();
  if(crt_1 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(crt_2 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(crt_3 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(crt_4 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(crt_5 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(crt_6 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(crt_7 == undefined){
    alert("每題皆為必填，請確實填答");
    
  }else{
    localStorage.setItem('crt_1', crt_1);
    localStorage.setItem('crt_2', crt_2);
    localStorage.setItem('crt_3', crt_3);
    localStorage.setItem('crt_4', crt_4);
    localStorage.setItem('crt_5', crt_5);
    localStorage.setItem('crt_6', crt_6);
    localStorage.setItem('crt_7', crt_7);
    console.log(crt_1);
    console.log(crt_2);
    console.log(localStorage.getItem('crt_1'));
    location.href='personinfo.html'
  }
};

function send10() {
  let personinfo_1 = $('input:radio:checked[name="personinfo_1"]').val();
  let personinfo_2 = $('input:radio:checked[name="personinfo_2"]').val();
  let personinfo_3 = $('input:radio:checked[name="personinfo_3"]').val();
  let personinfo_4 = $('select[name="personinfo_4"]').val();
  let personinfo_5 = $('input[name="personinfo_5"]').val();


  var oneone = localStorage.getItem('oneone');  
  var onetwo = localStorage.getItem('onetwo');  
  var onethree = localStorage.getItem('onethree');  
  var onefour = localStorage.getItem('onefour');  
  var onefive = localStorage.getItem('onefive');  
  var onesix = localStorage.getItem('onesix');  

  var twoone = localStorage.getItem('twoone');  
  var twotwo = localStorage.getItem('twotwo');  
  var twothree = localStorage.getItem('twothree');  
  var twofour = localStorage.getItem('twofour');  
  var twofive = localStorage.getItem('twofive');  
  var twosix = localStorage.getItem('twosix');  

  var threeone = localStorage.getItem('threeone');  
  var threetwo = localStorage.getItem('threetwo');  
  var threethree = localStorage.getItem('threethree');  
  var threefour = localStorage.getItem('threefour');  
  var threefive = localStorage.getItem('threefive');  
  var threesix = localStorage.getItem('threesix');  

  var fourone = localStorage.getItem('fourone');  
  var fourtwo = localStorage.getItem('fourtwo');  
  var fourthree = localStorage.getItem('fourthree');  
  var fourfour = localStorage.getItem('fourfour');  
  var fourfive = localStorage.getItem('fourfive');  
  var foursix = localStorage.getItem('foursix');  

  var fiveone = localStorage.getItem('fiveone');  
  var fivetwo = localStorage.getItem('fivetwo');  
  var fivethree = localStorage.getItem('fivethree');  
  var fivefour = localStorage.getItem('fivefour');  
  var fivefive = localStorage.getItem('fivefive');  
  var fivesix = localStorage.getItem('fivesix');  

  var sixone = localStorage.getItem('sixone');  
  var sixtwo = localStorage.getItem('sixtwo');  
  var sixthree = localStorage.getItem('sixthree');  
  var sixfour = localStorage.getItem('sixfour');  
  var sixfive = localStorage.getItem('sixfive');  
  var sixsix = localStorage.getItem('sixsix');  

  var sevenone = localStorage.getItem('sevenone');  
  var seventwo = localStorage.getItem('seventwo');  
  var seventhree = localStorage.getItem('seventhree');  
  var sevenfour = localStorage.getItem('sevenfour');  
  var sevenfive = localStorage.getItem('sevenfive');  
 

  var mbti_1 = localStorage.getItem('mbti_1');  
  var mbti_2 = localStorage.getItem('mbti_2');  
  var mbti_3 = localStorage.getItem('mbti_3');  
  var mbti_4 = localStorage.getItem('mbti_4');  
  var mbti_5 = localStorage.getItem('mbti_5');  
  var mbti_6 = localStorage.getItem('mbti_6'); 
  var mbti_7 = localStorage.getItem('mbti_7');  
  var mbti_8 = localStorage.getItem('mbti_8');  
  var mbti_9 = localStorage.getItem('mbti_9');  
  var mbti_10 = localStorage.getItem('mbti_10');  
  var mbti_11 = localStorage.getItem('mbti_11');  
  var mbti_12 = localStorage.getItem('mbti_12');    
  var mbti_13 = localStorage.getItem('mbti_13');  
  var mbti_14 = localStorage.getItem('mbti_14');  
  var mbti_15 = localStorage.getItem('mbti_15');  
  var mbti_16 = localStorage.getItem('mbti_16');  
  var mbti_17 = localStorage.getItem('mbti_17');    
  var mbti_18 = localStorage.getItem('mbti_18');  
  var mbti_19 = localStorage.getItem('mbti_19');  
  var mbti_20 = localStorage.getItem('mbti_20'); 
  var mbti_21 = localStorage.getItem('mbti_21'); 
  var mbti_22 = localStorage.getItem('mbti_22'); 

  var crt_1 = localStorage.getItem('crt_1');  
  var crt_2 = localStorage.getItem('crt_2');  
  var crt_3 = localStorage.getItem('crt_3');  
  var crt_4 = localStorage.getItem('crt_4');  
  var crt_5 = localStorage.getItem('crt_5');  
  var crt_6 = localStorage.getItem('crt_6'); 
  var crt_7 = localStorage.getItem('crt_7'); 


  console.log(localStorage.getItem('oneone'))
  // console.log(oneone)
  if(personinfo_1 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(personinfo_2 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(personinfo_3 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(personinfo_4 == 0){
    alert("每題皆為必填，請確實填答");
  }else{
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbxdem7XPGTXhZ383r_4v4Bq7WUGwqFggB3X3cgowd9_UBZKx98to8wbriSy6dz_yOKA/exec",
      data: {
          "oneone": oneone,
          "onetwo": onetwo,
          "onethree": onethree,
          "onefour": onefour,
          "onefive": onefive,
          "onesix": onesix,

          "twoone": twoone,
          "twotwo": twotwo,
          "twothree": twothree,
          "twofour": twofour,
          "twofive": twofive,
          "twosix": twosix,

          "threeone": threeone,
          "threetwo": threetwo,
          "threethree": threethree,
          "threefour": threefour,
          "threefive": threefive,
          "threesix": threesix,

          "fourone": fourone,
          "fourtwo": fourtwo,
          "fourthree": fourthree,
          "fourfour": fourfour,
          "fourfive": fourfive,
          "foursix": foursix,

          "fiveone": fiveone,
          "fivetwo": fivetwo,
          "fivethree": fivethree,
          "fivefour": fivefour,
          "fivefive": fivefive,
          "fivesix": fivesix,

          "sixone": sixone,
          "sixtwo": sixtwo,
          "sixthree": sixthree,
          "sixfour": sixfour,
          "sixfive": sixfive,
          "sixsix": sixsix,

          "sevenone": sevenone,
          "seventwo": seventwo,
          "seventhree": seventhree,
          "sevenfour": sevenfour,
          "sevenfive": sevenfive,

          "mbti_1": mbti_1,
          "mbti_2": mbti_2,
          "mbti_3": mbti_3,
          "mbti_4": mbti_4,
          "mbti_5": mbti_5,
          "mbti_6": mbti_6,
          "mbti_7": mbti_7,
          "mbti_8": mbti_8,
          "mbti_9": mbti_9,
          "mbti_10": mbti_10,
          "mbti_11": mbti_11,
          "mbti_12": mbti_12,
          "mbti_13": mbti_13,
          "mbti_14": mbti_14,
          "mbti_15": mbti_15,
          "mbti_16": mbti_16,
          "mbti_17": mbti_17,
          "mbti_18": mbti_18,
          "mbti_19": mbti_19,
          "mbti_20": mbti_20,
          "mbti_21": mbti_21,
          "mbti_22": mbti_22,

          "crt_1": crt_1,
          "crt_2": crt_2,
          "crt_3": crt_3,
          "crt_4": crt_4,
          "crt_5": crt_5,
          "crt_6": crt_6,
          "crt_7": crt_7,

          
          "personinfo_1": personinfo_1,
          "personinfo_2": personinfo_2,
          "personinfo_3": personinfo_3,
          "personinfo_4": personinfo_4,
          "personinfo_5": personinfo_5,



      },
      success: function(response) {
        if(response == "成功"){
          location.href='../thanks.html'

        }
      },
    });
  }
};

// sendButton1.addEventListener('click', send1);
// sendButton2.addEventListener('click', send2);



// $('input:radio:checked[name="gender"]').val();


