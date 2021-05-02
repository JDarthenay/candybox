var gameMode = {
    setting: "normal",

    setMode : function(mode){
        this.setting = mode;
        this.setText();
    },

    setText : function() {
        $("#game_mode").html("You are playing a " + this.setting + " game.");
    },
    
    onload : function() {
        this.setText();
    }
}
