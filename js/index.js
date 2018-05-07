function disableCollapsePanel(){
  var collapsePanel = document.getElementById('detailed-collapsible');
  var menu4TabList = document.getElementById('menu4-tab-list');
  collapsePanel.style.maxHeight = null;
  menu4TabList.style.height = '0px';
}

function changeContent(id) {
  var z = document.querySelectorAll('.active.content');
  var x = document.getElementById(id);

  setTimeout(function(){   document.getElementById('togglable-contents').scrollIntoView({
     behavior: "smooth", // or "auto" or "instant"
     block: "start" // or "end"
   }); }, 100)
  
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
  $('[data-toggle="tooltip"]').tooltip(); 
  
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
      setTimeout(function(){   
        $('.navbar-collapse').collapse('toggle');
      }, 100)
      //$('.navbar-collapse').collapse('toggle');
      $(navButton).toggleClass('is-active');
    }
  });
  
}); //end ready

