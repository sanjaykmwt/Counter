var sw = {
  
  etime : null, 
  erst : null, 
  ego : null, 
  init : function () {
    
    sw.etime = document.getElementById("sw-time");
    sw.erst = document.getElementById("sw-rst");
    sw.ego = document.getElementById("sw-go");

    sw.erst.addEventListener("click", sw.stop);
    sw.erst.disabled = false;
    sw.ego.addEventListener("click", sw.start);
    sw.ego.disabled = false;
  },

  timer : null, 
  now : 1000, 
  tick : function () {
    
    sw.now++;
    var remain = sw.now;
    sw.etime.innerHTML = "$" + remain;
  },
  
  
  start : function () {
    sw.timer = setInterval(sw.tick, 1000);
    sw.ego.removeEventListener("click", sw.start);
  },

 
  stop  : function () {
    clearInterval(sw.timer);
    sw.timer = null;
    sw.ego.value = "Start";
    sw.ego.removeEventListener("click", sw.stop);
    sw.ego.addEventListener("click", sw.start);
  },
};
window.addEventListener("load", sw.init);