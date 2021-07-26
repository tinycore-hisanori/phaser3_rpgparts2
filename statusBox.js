class statusBox {
    constructor(that) {
      this.currentThis = that;
      this.background_ = this.currentThis.add.rectangle(
        400,
        20,
        750,
        100,
        0x6666ff
      );
      this.background_.setFillStyle(0x0, 64);
      this.background_.visible = false;
    
      this.txtMessage_ = this.currentThis.add
        .text(50, 20, "messageArea")
        .setFontSize("32px")
        .setColor("#ffffff")
        .setPadding(0, 6, 0, 0);
      this.txtMessage_.visible = false;
    }
  
    show(jsonStatus_) {
      var mess_text = jsonStatus_.name 
        + " HP:" +  jsonStatus_.HP 
        + " STR:" +  jsonStatus_.STR
        + " INT:" +  jsonStatus_.INT
        + " " +  jsonStatus_.GOLD + "G";

      this.background_.visible = true;
      this.txtMessage_.text = mess_text;

      this.txtMessage_.visible = true;
    }

    updateHP(HP_,jsonStatus_) {
      var mess_text = jsonStatus_.name 
        + " HP:" +  HP_ 
        + " STR:" +  jsonStatus_.STR
        + " INT:" +  jsonStatus_.INT
        + " " +  jsonStatus_.GOLD + "G";

      this.background_.visible = true;
      this.txtMessage_.text = mess_text;

      this.txtMessage_.visible = true;
    }

    hide() {
      this.background_.visible = false;

      this.txtMessage_.visible = false;

      this.txtMessage_.setColor("#ffffff");
    }
    setMessageColor(code_) {
      this.txtMessage_.setColor(code_);
    }
  }