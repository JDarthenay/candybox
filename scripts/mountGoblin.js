var mountGoblin = {

    // Variables
    basicChestProbability : 50,

    // Functions
    onload : function(){
        land.addLand("Mount Goblin", 28, 1, this.load.bind(this), this.getText.bind(this));
    },
    
    setBasicChestProbability : function(value){
        this.basicChestProbability = value;
    },
    
    load : function(){
        var addChest = false;
        for(var i = 1; i < quest.things.length; i++){
            if(random.flipACoin()){
                // If we're not at the top of the mount
                if(i < 12 || i > 15){
                    // 1 chance out of x we spawn a CHS (chest !!)
                    if (gameMode.unlockHiddenFeatures) {
                        addChest = random.oneChanceOutOf(35);
                    } else if (gameMode.eXtended) {
                        addChest = random.oneChanceOutOf(50);
                    } else {
                        addChest = random.oneChanceOutOf(this.basicChestProbability);
                        if(addChest){
                            this.setBasicChestProbability(this.basicChestProbability + 50);
                        }
                    }
                    
                    if (addChest) {
                        quest.things[i] = quest.makeBasicChest();
                    }
                    // 1 chance out of 7 we spaw a GSB
                    else if(random.oneChanceOutOf(7)) quest.things[i] = land.createMob("GSB", 20, 5 + random.getRandomIntUpTo(5), "claws", "A sick goblin. It smells.", [drops.createDrop("candies", 3 + random.getRandomIntUpTo(3))]);
                    // Else we spawn a GOB
                    else quest.things[i] = land.createMob("GOB", 20, 20, "claws", "A nasty goblin.", [drops.createDrop("candies", 3 + random.getRandomIntUpTo(3)), drops.createDrop("health potions", 1, gameMode.unlockHiddenFeatures && random.oneChanceOutOf(25))]);
                }
                else{
                    quest.things[i] = land.createMob("GTB", 30, 30, "dagger", "A tenacious goblin. Oh, he has a dagger, too.", [drops.createDrop("candies", 9 + random.getRandomIntUpTo(9) + ((gameMode.unlockHiddenFeatures && random.oneChanceOutOf(3)) ? 0 : (30 + random.getRandomIntUpTo(60)))), drops.createDrop("lollipops", 1 + random.getRandomIntUpTo(2), gameMode.unlockHiddenFeatures && random.oneChanceOutOf(10)), drops.createDrop("health potions", 1, gameMode.unlockHiddenFeatures && random.oneChanceOutOf(7)), drops.createDrop("object", "key", random.oneChanceOutOf(2)), drops.createDrop("object", "boots", random.oneChanceOutOf(5)), drops.createDrop("object", "swampMap", random.oneChanceOutOf(5)), drops.createDrop("object", "hutMap", random.oneChanceOutOf(15))]);
                }
            }
        }
    },
    
    getText : function(){
        var text = "";
        
        text += "                                    "; for(var i = 12; i < 16; i++) text += quest.things[i].text; text += "\n";
        text += "                           "; for(var i = 9; i < 12; i++) text += quest.things[i].text; text += "/ \\/ \\/ \\/ \\"; for(var i = 16; i < 19; i++) text += quest.things[i].text; text += "\n";
        text += "                  "; for(var i = 6; i < 9; i++) text += quest.things[i].text; text += "/ \\/ \\/ \\  /   \\  \\  / \\/ \\/ \\"; for(var i = 19; i < 22; i++) text += quest.things[i].text; text += "\n";
        text += "         "; for(var i = 3; i < 6; i++) text += quest.things[i].text; text += "/ \\/ \\/ \\   \\ /   \\/     \\  \\/  /   \\  / \\/ \\/ \\"; for(var i = 22; i < 25; i++) text += quest.things[i].text; text += "\n";
        text += ""; for(var i = 0; i < 3; i++) text += quest.things[i].text; text += "/ \\/ \\/ \\  /  /   \\   /    /       \\ /  /     \\/  /   \\  / \\/ \\/ \\"; for(var i = 25; i < 28; i++) text += quest.things[i].text;
    
        return text;
    }

};
