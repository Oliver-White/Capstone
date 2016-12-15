"use strict";
var monsters = [];

//Encounter difficulties 
var easyThreshold = 0;
var mediumThreshold = 0;
var hardThreshold = 0;
var deadlyThreshold = 0;

function getEncounterMultiplier() {
    var multipliers = [0.5, 1, 1.5, 2, 2.5, 3, 4];
    var multiplierIndex = 1;
    var totalXp = 0;
    var avgXp = totalXp / monsters.length;
    var monsterCount = 0;
    var limit = monsters.length;
    var i;

    for (i = 0; i < limit; i += 1) {
        totalXp += monsters[i].xp;
    }
    for (i = 0; i < limit; i += 1) {
        if (monsters[i].xp >= (avgXp * 0.5)) {
            monsterCount += 1;
        }
    }
}



















