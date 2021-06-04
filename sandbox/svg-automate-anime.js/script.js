var pathEls = document.querySelectorAll("path");
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute("stroke-dashoffset", offset);
  //console.log(pathEl);
  anime({
    targets: pathEl,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutCubic",
    duration: 400,
    //delay : i*500,
    begin: function (anim) {
      pathEl.setAttribute("stroke", "black");
      pathEl.setAttribute("fill", "none");
    },
    complete: function (anim) {
      pathEl.setAttribute("fill", "black");
    }
    //autoplay: true,
  });
}
