var drops = {
    
    createDrop : function(type, param1, param2){
        return {type:type, param1:param1, param2:param2};
    },
    
    getText : function(){
        var text = "";
        
        // Candies found
        if(quest.candiesFound == 0) {
            if (quest.lollipopsFound == 0) {
                text += "You found no candy yet.";
            } else if (quest.lollipopsFound == 1) {
                text += "You found 1 lollipop.";
            } else {
                text += "You found " + quest.lollipopsFound + " lollipops.";
            }
        } else {
            if(quest.candiesFound != 1) {
                text += "You found " + quest.candiesFound + " candies";
            } else {
                text += "You found 1 candy";
            }
            
            if (quest.lollipopsFound == 0) {
                text += ".";
            } else if (quest.lollipopsFound == 1) {
                text += " and 1 lollipop.";
            } else {
                text += " and " + quest.lollipopsFound + " lollipops.";
            }
        }
        
        // Potions found
        if (quest.healthPotionsFound + quest.berserkPotionsFound == 1) {
            text += "\nYou found 1 potion.";
        } else if (quest.healthPotionsFound > 0 || quest.berserkPotionsFound > 0) {
            text += "\nYou found " + (quest.healthPotionsFound + quest.berserkPotionsFound) + " potions.";
        }
    
        // Objects found
        for(obj in objects.list){
            if(objects.list[obj].found){
                text += "\n<b>You found " + objects.list[obj].text + ".</b>";
            }
        }
        
        // Notice
        text += "\n\nThings found will be yours only if you finish the quest without dying.";
        
        return text;
    },
    
    gainDrops : function(){
        // Gain the candies
        candies.setNbrOwned(candies.nbrOwned + quest.candiesFound);
        
        // Gain the lollipops
        lollipops.setNbrOwned(lollipops.nbrOwned + quest.lollipopsFound);
        
        // Gain the potions
        if (quest.healthPotionsFound > 0) {
            potions.getPotions(potions.list.health, quest.healthPotionsFound);
        }
        if (quest.berserkPotionsFound > 0) {
            potions.getPotions(potions.list.berserk, quest.berserkPotionsFound);
        }
        
        // Gain the objects
        for(obj in objects.list){
            if(objects.list[obj].found){ // If we found this object but didn't have it already
                objects.setHaveObject(obj, true);
            }
        }
    },
    
    getAllDropsFromList : function(list){
        for(var i = 0; i < list.length; i++){
            switch(list[i].type){
                case "candies":
                    quest.setCandiesFound(quest.candiesFound + list[i].param1);
                break;
                case "lollipops":
                    if(list[i].param2 == true) quest.setLollipopsFound(quest.lollipopsFound + list[i].param1);
                break;
                case "health potions":
                    if(list[i].param2 == true) quest.setHealthPotionsFound(quest.healthPotionsFound + list[i].param1);
                break;
                case "berserk potions":
                    if(list[i].param2 == true) quest.setBerserkPotionsFound(quest.berserkPotionsFound + list[i].param1);
                break;
                case "object":
                    if(list[i].param2 == true) this.foundObject(list[i].param1);
                break;
            }
        }
    },
    
    foundObject : function(name){
        // If we don't already have this object, then we just found it !
        if(objects.list[name].have == false) objects.list[name].found = true;
    }
    
};
    
