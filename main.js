window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loadingScreen").style.animation =
      "fadeOut 1s forwards";
  }, 2000); // 1-second delay before fading out
});

const marker = document.querySelector("#marker1");
const model = document.querySelector("#model1");
const focus = document.querySelector("#focus");
// const aud = document.querySelector("#audio1");
const marker2 = document.querySelector("#marker2");
const model2 = document.querySelector("#model2");
const loadingScreen = document.querySelector(".loadingScreen");
let checkinterval1 = null;
let isAnimating1 = false;
let checkinterval = null;
let isAnimating = false;

let audioLoaded = 0;
function checkAudioLoaded() {
  audioLoaded++;
  console.log("Audio loaded");
  if (audioLoaded === 2) {
    setTimeout(() => {
      //
      loadingScreen.style.display = "none"; // Hide loading screen
    }, 1000); // Extra delay for better UX
  }
}

aud = new Howl({
  src: "./flamingo.m4a",
});

aud2 = new Howl({
  src: "./dog.m4a",
});

marker.addEventListener("markerFound", () => {
  console.log("Marker found");
  // checkCrosshairAlignment();
  model.setAttribute("visible", true);
  focus.setAttribute("material", "opacity:0");
  playAudio(aud);
});

marker.addEventListener("markerLost", () => {
  console.log("Marker lost");
  model.setAttribute("visible", false);
  focus.setAttribute("material", "opacity:1");
  // clearInterval(checkinterval);
});

document.addEventListener("click", () => {
  if (marker.getAttribute("visible")) {
    console.log("Model clicked");
    if (isAnimating) {
      model.removeAttribute("animation-mixer");
      console.log("Animation Stopped");
      isAnimating = false;
    } else {
      model.setAttribute("animation-mixer", "loop: repeat");
      console.log("Animation Started");
      playAudio(aud);
      isAnimating = true;
    }
    console.log(model.getAttribute("animation-mixer"));
    console.log(marker);
  }
});
document.addEventListener("touchstart", () => {
  if (marker.getAttribute("visible")) {
    console.log("Model clicked");
    if (isAnimating) {
      model.removeAttribute("animation-mixer");
      console.log("Animation Stopped");
      isAnimating = false;
    } else {
      model.setAttribute("animation-mixer", "loop: repeat");
      console.log("Animation Started");
      playAudio(aud);
      isAnimating = true;
    }
    console.log(model.getAttribute("animation-mixer"));
    console.log(marker);
  }
});

// function checkCrosshairAlignment() {
//     const camera = document.querySelector("a-entity[camera]");
//     if (checkinterval) {
//         clearInterval(checkinterval);
//     }
//     checkinterval = setInterval(() => {
//         const markerPos = marker.object3D.position;
//         const cameraPos = camera.object3D.position;

//         // Calculate distance between camera and marker
//         const distance = Math.sqrt(
//             Math.pow(markerPos.x - cameraPos.x, 2) +
//             Math.pow(markerPos.y - cameraPos.y, 2) +
//             Math.pow(markerPos.z - cameraPos.z, 2)
//         );

//         console.log("Distance to Marker:", distance);

//         if (distance < 2.7) { // Adjust threshold as needed

//             console.log("Model Visible!");
//         } else {
//             model.setAttribute("visible", false);
//             focus.setAttribute("material", "opacity:1");
//         }
//     }, 500); // Check alignment every 500ms

// }ss

function playAudio(audioElement) {
  audioElement.play();
  console.log(`playing audio`);
}
marker2.addEventListener("markerFound", () => {
  console.log("Marker2 found");
  // checkCrosshairAlignment1();
  model2.setAttribute("visible", true);
  focus.setAttribute("material", "opacity:0");
  playAudio(aud2);
});

marker2.addEventListener("markerLost", () => {
  console.log("Marker2 lost");
  model2.setAttribute("visible", false);
  focus.setAttribute("material", "opacity:1");
  // clearInterval(checkinterval1);
});

document.addEventListener("click", () => {
  if (model2.getAttribute("visible")) {
    console.log("Model2 clicked");
    if (isAnimating1) {
      model2.removeAttribute("animation-mixer");
      console.log("Animation Stopped");
      isAnimating1 = false;
    } else {
      model2.setAttribute("animation-mixer", "loop: repeat");
      console.log("Animation Started");
      playAudio(aud2);
      isAnimating1 = true;
    }
    console.log(model2.getAttribute("animation-mixer"));
    console.log(marker2);
  }
});

document.addEventListener("touchstart", () => {
  if (model2.getAttribute("visible")) {
    console.log("Model clicked");
    if (isAnimating1) {
      model2.removeAttribute("animation-mixer");
      console.log("Animation Stopped");
      isAnimating1 = false;
    } else {
      model2.setAttribute("animation-mixer", "loop: repeat");
      console.log("Animation Started");
      playAudio(aud2);
      isAnimating1 = true;
    }
    console.log(model2.getAttribute("animation-mixer"));
    console.log(marker2);
  }
});

// function checkCrosshairAlignment1() {
//     const camera = document.querySelector("a-entity[camera]");
//     if (checkinterval1) {
//         clearInterval(checkinterval1);
//     }
//     checkinterval1 = setInterval(() => {
//         const marker2Pos = marker2.object3D.position;
//         const cameraPos = camera.object3D.position;

//         // Calculate distance between camera and marker2
//         const distance = Math.sqrt(
//             Math.pow(marker2Pos.x - cameraPos.x, 2) +
//             Math.pow(marker2Pos.y - cameraPos.y, 2) +
//             Math.pow(marker2Pos.z - cameraPos.z, 2)
//         );

//         console.log("Distance to Marker2:", distance);

//         if (distance < 2.7) { // Adjust threshold as needed

//             console.log("Model2 Visible!");
//         } else {
//             model2.setAttribute("visible", false);
//             focus.setAttribute("material", "opacity:1");
//         }
//     }, 500); // Check alignment every 500ms
// }
