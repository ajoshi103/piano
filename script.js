const synth = new Tone.PolySynth(Tone.Synth).toDestination();//

 


function makesound(key) {
  Tone.loaded().then(()=>{
    synth.triggerAttackRelease(key.dataset.note,0.2);
  });
}
document.querySelectorAll(" .key").forEach(key =>{
key.addEventListener("mousedown", function (event){
  
  console.log(event.target);
event.stopPropagation();
makesound(key);

})
});















/*document.querySelectorAll(".key,.red").forEach(key=>{
  key.addEventListener("mousedown", function (event) {
    event.stopPropagation();
    makesound(key);
  });
});

function makesound(key) {
  Tone.loaded().then(()=>{
    synth.triggerAttackRelease(key.dataset.note,0.2);
  });
}

*/


