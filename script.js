function ShowWilderness() {
   var pshow = document.querySelector("#Wilderness")
     var btntext = document.querySelector("#Wildernessbtn")
     if (pshow.style.visibility == "hidden")
     {
       pshow.style.visibility = "visible"
       btntext.innerHTML = `Hide Top Secret`
     }
  else
     {
      pshow.style.visibility = "hidden"
      btntext.innerHTML = `Show Top Secret`
     }
}

function ShowEmu() {
   var pshow = document.querySelector("#Emu")
     var btntext = document.querySelector("#Emubtn")
     if (pshow.style.visibility == "hidden")
     {
       pshow.style.visibility = "visible"
       btntext.innerHTML = `Hide Top Secret`
     }
  else
     {
      pshow.style.visibility = "hidden"
      btntext.innerHTML = `Show Top Secret`
     }
}

function ShowQuarantine() {
   var pshow = document.querySelector("#Quarantine")
     var btntext = document.querySelector("#Quarantinebtn")
     if (pshow.style.visibility == "hidden")
     {
       pshow.style.visibility = "visible"
       btntext.innerHTML = `Hide Top Secret`
     }
  else
     {
      pshow.style.visibility = "hidden"
      btntext.innerHTML = `Show Top Secret`
     }
}