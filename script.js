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
"use strict"a
/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */


const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 0; // x-positie van speler
var spelerY = 550; // y-positie van speler

var spelerSpringt = false;
var spelerValt = false;
var springSnelheid = 0;
var springSnelheidStart = 25;
var zwaartekracht = 15;

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
     spelerY = spelerY -1; 
  }
  if (spelerY < 450 && spelerSpringt === true ) { // begin met vallen
    spelerSpringt = false;
    spelerValt = true;
  }
  if (spelerValt == true) { // bezig met vallen
     spelerY = spelerY +1; 
  }
  if (spelerY > 500 && spelerValt === true) { // klaar met vallen
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
  // botsing speler tegen vijand

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

  // kogel

  // speler
  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);

  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function() {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */
function preload() {
  img = loadImage('assets/laDefense.jpg');
}
/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
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

  }
}
