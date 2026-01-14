//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
var typeGame=1;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="'Times New Roman', Times, serif";
var timeOnMessage=5; messageOk="Excellent! You completed the daily routine activity correctly."; messageTime=""; messageError="Some answers are incorrect. Please check and try again."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<img tabindex="0" alt="" class="imaup imaLeft" src="Text_daily_routine.index_resources/media/c1_vector-illustration-cute-children-daily-260nw-2405785327__1_.jpg"  align="left"><img alt="play" id="playSound" class="imaRight" src="Text_daily_routine.index_resources/media/sound.png" alt="Sound"  align="right"><p>I <select aria-label="Item 1" name="item1" id="item1" class="ardoraCombo"></select> up at 6:00 a.m. every day. </p><p> Then, I <select aria-label="Item 2" name="item2" id="item2" class="ardoraCombo"></select> my teeth and <select aria-label="Item 3" name="item3" id="item3" class="ardoraCombo"></select> a shower. </p><p> I <select aria-label="Item 4" name="item4" id="item4" class="ardoraCombo"></select> breakfast with my family. </p><p> After that, I <select aria-label="Item 5" name="item5" id="item5" class="ardoraCombo"></select> to school in the morning. </p><p> In the afternoon, I <select aria-label="Item 6" name="item6" id="item6" class="ardoraCombo"></select> my homework. </p><p> In the evening, I <select aria-label="Item 7" name="item7" id="item7" class="ardoraCombo"></select> TV or read a book. </p><p> Finally, I <select aria-label="Item 8" name="item8" id="item8" class="ardoraCombo"></select> to bed at 9:00 p.m. </p><p> </p>'];
var b=["NQ==","NQ==","MTE=","OA==","Mg==","Ng==","MjA=","MQ==","MTc=","MTQ=","Nw==","NA==","MjM=","Mg==","Mw==","OA=="];
var c=[2,4,3,2,5,2,3,4,4,4,5,4,5,5,4,4];
var answers=["go","wash","eat","go","brush","do","see","wake","make","walk","watch","have","sleep","sleep","take","make"];
var a=["5","2","4","8","2","6","7","1","6","5","7","4","8","1","3","3"];
var itemCorr=["0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="VGV4dF9kYWlseV9yb3V0aW5lLmluZGV4"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=false;
var textBNext="Next";
var fHelp="Verdana, Geneva, sans-serif";
var imaW=["300","300","300","300"];
var imaH=["120","225","225","225"];
var info=["","","",""];
