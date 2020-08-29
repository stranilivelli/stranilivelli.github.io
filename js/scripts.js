// scroll.on('scroll', func => {
//     var scroll_pos = 0;
//     scroll_pos = scroll.scroll.instance.scroll.y;
//     body_el = document.body;
//
//     if(scroll_pos > 1) {
//         body_el.classList.add( "scroll-down" );
//     } else{
//         body_el.classList.remove( "scroll-down" );
//     }
// });

//For the preloader
window.addEventListener('load',function(){
  document.querySelector('body').classList.add("loaded")
});
