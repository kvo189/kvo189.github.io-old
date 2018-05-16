window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


function disableCollapsePanel(){
  var collapsePanel = document.getElementById('detailed-collapsible');
  var menu4TabList = document.getElementById('menu4-tab-list');
  collapsePanel.style.maxHeight = null;
  menu4TabList.style.height = '0px';
}

function scrollToItem(item) {
    var diff=(item.offsetTop-window.scrollY)/8
    if (Math.abs(diff)>1) {
        window.scrollTo(0, (window.scrollY+diff))
        clearTimeout(window._TO)
        window._TO=setTimeout(scrollToItem, 5, item)
    } else {
        window.scrollTo(0, item.offsetTop)
    }
}

function changeContent(id, classLink) {
  var z = document.querySelectorAll('.active.content');
  var y = document.querySelectorAll('.link');
  var x = document.getElementById(id);

  scrollToItem(x);

  // setTimeout(function(){
  //   document.getElementById('body-carousel').scrollIntoView({
  //   }); 
  // }, 100)

  var i;
  if (!x.classList.contains("active")){
    x.classList.add("active");
  }
  for (i = 0; i < z.length; i++) {
    if (x != z[i]){
      z[i].classList.remove("active");
    }
  }
  for (i = 0; i < y.length; i++) {
    if (!y[i].classList.contains(classLink)){
      y[i].classList.remove("is-active");
    }else{
      y[i].classList.add('is-active');
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
  
  //activate nav link and deactive other active nav links on click
  // $(".nav-link.navLinkBar").click(function() {
  //   $(".nav-link.navLinkBar").removeClass("is-active");
  //   $(this).addClass("is-active");  
  // });
  
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

