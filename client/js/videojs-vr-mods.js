
// if samsung set samsung optional vr background
if ('SamsungChangeSky' in window) {
  window.SamsungChangeSky({ sphere: 'samples/milford-sound.jpg' });
}

// set up videojs and tell it to use 360 project
(function(){
    var player = videojs( '#video', {
        techOrder: ['html5']
    });
    player.vr({projection: "360"});

    // console log some camera shit
    setInterval( function() {
      console.log("cameraVector");
      console.log(player.vr.cameraVector);
      console.log("Three JS perspective camera");
      console.log(player.vr.threeJs.camera);
      console.log("Three JS Scene");
      console.log(player.vr.threeJs.scene);
      console.log("Three JS renderer");
      console.log(player.vr.threeJs.renderer);
    }, 1000);

})();