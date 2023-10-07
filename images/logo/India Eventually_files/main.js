let nav = document.getElementById('show');
let show = document.querySelector('.rigt-links');
nav.addEventListener('click',function(){
  show.classList.toggle('showclass');
});


window.onscroll = () => {
  toggleTopButton();
}
function scrollToTop(){
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function toggleTopButton() {
  if (document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20) {
    document.getElementById('back-to-up').classList.remove('d-none');
  } else {
    document.getElementById('back-to-up').classList.add('d-none');
  }
}
$(document).ready(function(){
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('ul.tabs li').removeClass('current2');
        $('.tab-content').removeClass('current2');
        $(this).addClass('current2');
        $("#"+tab_id).addClass('current2');
        console.log(tab_id);
    })
})

$(document).ready(function(){

    $('#show').click(function(){
        $('.close-btn').addClass('showbtn-close')
        $('.mobile-logo').addClass('mobile-logoshow')
    });
    $('#show').click(function(){
        $('.back-drop').addClass('showdrop')
    });

    $('.close-btn').click(function(){
        $('.rigt-links').removeClass('showclass')
        $('.close-btn').removeClass('showbtn-close')
        $('.back-drop').removeClass('showdrop')
        $('.mobile-logo').removeClass('mobile-logoshow')
    });

    $('.mobiel_viewClick').click(function(){
        $('.rigt-links').removeClass('showclass')
        $('.close-btn').removeClass('showbtn-close')
        $('.back-drop').removeClass('showdrop')
        $('.mobile-logo').removeClass('mobile-logoshow')
        
    })
    $('.rigt-links li a').on('click', function (e) {
    $('.set-padding').toggleClass('managemnt_ag-padding');
      var href = $(this).attr('href');
      $('html, body').animate({
          scrollTop: $(href).offset().top - 90
      }, '200');
      e.preventDefault(); 
  });

        ///navbar_scroll
        $(window).scroll(function () {
          if ($(window).scrollTop() >= 150) {
              $('.navigation').addClass('fixed-header');
           
          }
          else {
             
              $('.navigation').removeClass('fixed-header');
            
          }
      });
    
      $('.cleints_slider').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        nav:false,
        autoplay: true, // time for slides changes
        smartSpeed: 1000, // duration of change of 1 slide
        dots:false,
        responsive:{
            0:{
                items:2,
                nav:false,
                dots:true,
            },
            600:{
                items:3,
                nav:false,
                dots:false,
            },
            1000:{
                items:6,
            }
        }
    });

    $('.related_eventsSlider').owlCarousel({
        loop:true,
        autoplay:true,
        margin:20,
        dots:false,
        responsiveClass:true,
        nav:true,
        navText: [
            '<i class="fa-solid fa-arrow-left"></i>',
            '<i class="fa-solid fa-arrow-right"></i>'
        ],
        responsive:{
            0:{
                items:1,
               
            },
            600:{
                items:2,
               
            },
            1000:{
                items:3,
            }
        }
    });

    $('.gallery_slider').owlCarousel({
        loop:true,
        autoplay:true,
        margin:20,
        dots:false,
        responsiveClass:true,
        nav:true,
        navText: [
            '<i class="fa-solid fa-arrow-left"></i>',
            '<i class="fa-solid fa-arrow-right"></i>'
        ],
        responsive:{
            0:{
                items:1,
               
            },
            600:{
                items:2,
               
            },
            1000:{
                items:3,
            }
        }
    });
  

    var items = $(".list-wrapper .list-item");
    var numItems = items.length;
    var perPage = 16;

    items.slice(perPage).hide();

    $('#pagination-container').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "&laquo;",
        nextText: "&raquo;",
        onPageClick: function (pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
    });

 
      
});




AOS.init({

    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
});
