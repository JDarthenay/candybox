var gameMode = {
    setting: "normal",
    eXtended: false,
    unlockHiddenFeatures: false,

    setMode : function(mode){
        this.setting = mode;
        this.setText();
        this.check();
    },

    setText : function() {
        if (this.setting == "eXtended") {
            $("#game_mode").html("You are playing an " + this.setting + " game.");
        } else {
            $("#game_mode").html("You are playing a " + this.setting + " game.");
        }
    },
    
    updateScrollSetList : function() {
        var list = htmlInteraction.getElement("scroll_set_type");
        var nbScrollType = objects.list.magicianHat.have ? 5 : 3;
        
        while (list.options.length < nbScrollType) {
            var option = document.createElement("option");
            var optionText;
            switch (list.options.length) {
                case 0:
                    optionText = potions.list.fireScroll.buttonText;
                break;

                case 1:
                    optionText = potions.list.acidRainScroll.buttonText;
                break;

                case 2:
                    optionText = potions.list.teleportScroll.buttonText;
                break;

                case 3:
                    optionText = potions.list.impInvocationScroll.buttonText;
                break;

                case 4:
                    optionText = potions.list.earthquakeScroll.buttonText;
                break;

            }
            
            if (optionText.endsWith(" scroll")) {
                optionText = optionText.substring(0, optionText.length - 7);
            }
            
            option.text = optionText;
            list.options.add(option);
        }
    },
    
    check : function() {
        this.eXtended = this.setting == "eXtended";
        this.unlockHiddenFeatures = this.eXtended && (candies.nbrThrown >= 100);
        htmlInteraction.revealClass("extended_game_only", this.eXtended);
        this.updateScrollSetList();
    },
    
    onload : function() {
        this.setText();
    }
}
