/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/*
 * instellingen om foutcontrole van je code beter te maken 
 */
///<reference path="p5.global-mode.d.ts" />
"use strict"
/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */


const SPELEN = 1;
const GAMEOVER = 2;
const KeyIsPressed = 10;
var spelStatus = SPELEN;

var spelerX = 0; // x-positie van speler
var spelerY = 550; // y-positie van speler
var vijandX = 650; // x-positie vijand
var vijandY = 550; // y-positie vijand
var objectX = 1200; // x-positie object
var objectY = 550; // y-positie object
var HP = 25;
var img1;  //plaatje
var img2; //plaatje
var img3; //plaatje

var spelerSpringt = false;
var spelerValt = false;
var springSnelheid = 4;
var springSnelheidStart = 8;
var zwaartekracht = 0.22;


var img;

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function() {
  // speler
  if (keyIsDown(37)) { // speler naar links
    spelerX = spelerX -2;
  }

  if (keyIsDown(39)) { // speler naar rechts
    spelerX = spelerX +2;
  }

  if (keyIsDown(32) === true && spelerSpringt === false && spelerValt === false) {  // start sprong
    spelerSpringt = true;
    spelerY = spelerY -1; 
  }
  if (spelerSpringt === true) { // bezig met spring
     spelerY = spelerY -4; 
  }
  if (spelerY < 420 && spelerSpringt === true ) { // begin met vallen
    spelerSpringt = false;
    spelerValt = true;
  }
  if (spelerValt == true) { // bezig met vallen
     spelerY = spelerY +4; 
  }
  if (spelerY > 550 && spelerValt === true) { // klaar met vallen
    spelerValt = false;
    spelerY = 550;
  }
  // vijand

  // kogel
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  if (spelerX - objectX < 30 &&
      spelerX - objectX >-30 &&
      spelerY - objectY <30 &&
      spelerY - objectY > -30) {
    HP = HP -1;
    console.log("botsing");
     }
  // botsing speler tegen vijand
  if (spelerX - vijandX < 30 &&
      spelerX - vijandX >-30 &&
      spelerY - vijandY <30 &&
      spelerY - vijandY > -30) {
    console.log("botsing");
    HP=HP-1;
     }
// botsing speler tegen checkpoint
  if (spelerX - objectX < 30 &&
      spelerX - objectX >-30 &&
      spelerY - objectY <30 &&
      spelerY - objectY > -30) {
    console.log("botsing");
     }

  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  var rightX = 800;  
  // achtergrond
  background(167, 231, 254);
  // The ground
  fill(246,215,176);
  rect(0, 550, 1300, 400); 

  // The sun
  fill(240, 206, 36);
  ellipse(120, 150, 160, 160);  
  //the Cloud
  fill(255, 255, 255)
  noStroke ()
  ellipse(rightX, 150, 180, 180);
  ellipse(rightX+80, 150, 130, 130);
  ellipse(rightX-80, 140, 120, 120)

  // vijand
image(img2, vijandX - 30, vijandY -70, 120, 100);
  // kogel
  //obstakel
  image(img3, objectX - 50, objectY -70, 120, 100);
  

  // speler
  image(img1, spelerX - 30, spelerY -60, 70, 70);
  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function() {
  // check of HP 0 is , of tijd op is, of ...
  if (HP <= 0) {
    return true;
  }
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */


function preload() {
  img1 = loadImage('3zi.png')
  img2 = loadImage('boompje-removebg-preview.png')
  img3 = loadImage('schatkist.jpeg')
  
}
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
    text("game over", 200,200);
  
   if ( KeyIsPressed = SPELEN) {
      spelStatus = SPELEN;
      spelerX = 0;
      spelerY = 500;
      HP = 25;
   }
  }
}