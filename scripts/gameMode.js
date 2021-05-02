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
    
    check : function() {
        this.eXtended = this.setting == "eXtended";
        this.unlockHiddenFeatures = this.eXtended && (candies.nbrThrown >= 100);
    },
    
    onload : function() {
        this.setText();
    }
}
