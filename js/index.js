function disableCollapsePanel(){
  var collapsePanel = document.getElementById('detailed-collapsible');
  collapsePanel.style.maxHeight = null;
}

function changeContent(id) {
  var z = document.querySelectorAll('.active.content');
  var x = document.getElementById(id);

  setTimeout(function(){   document.getElementById('togglable-contents').scrollIntoView({
     behavior: "smooth", // or "auto" or "instant"
     block: "start" // or "end"
   }); }, 500);
  
  var i;
  if (!x.classList.contains("active")){
    x.classList.add("active");
  }
  for (i = 0; i < z.length; i++) {
    if (x != z[i]){
      z[i].classList.remove("active");
    }
  }
}

$(document).ready(function() {
  
  $('.nav-pills li a').click(function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    $(this).tab('show')  
  });
  
  $('#menu4-tab').click(function(){
    var collapsePanel = document.getElementById('detailed-collapsible');
    if (collapsePanel.style.maxHeight){
    } else {
      collapsePanel.style.maxHeight = collapsePanel.scrollHeight + "px";
    } 
  });
  
  //activate nav link and deactive other active nav links on click
  $(".nav-link.navLinkBar").click(function() {
    $(".nav-link.navLinkBar").removeClass("is-active");
    $(this).addClass("is-active");  
  });
  
  //activate nav button on click
  var navButton = document.getElementById('navButton');
  $(navButton).click(function() {
    $(this).toggleClass('is-active');
  })
  
  //collapse navbar on item select
  $('.navbar-collapse a').click(function (e) {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;  
    if (width < 767){
      $('.navbar-collapse').collapse('toggle');
    }
  });
  
}); //end ready