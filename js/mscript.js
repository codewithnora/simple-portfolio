!function(){
    var e=$(window);
    
    t=function(t){function n(){t.toggleClass("is-fixed"),a=!a}var a=!1;e.scroll(function(){e.scrollTop()>80?a||n():a&&n()})}
    
    a=function(e){
            $("a[href*=#]:not([href=#],[href=#modalAbout])").click(function(){
                if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){
                    var t=$(this.hash);
                    if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)
                    return $("html,body").animate({scrollTop:t.offset().top-e.height()},1e3),!1}
        });
    };
      
    modalNews = function(){
        $('a.modalDialogAbout[href^=#]').click(function() {
            
            var popID = $(this).attr('rel'); 
            var popURL = $(this).attr('href');
    
            var query= popURL.split('m');
            var dim= query[1].split('&amp;');
            var popWidth = dim[0].split('=')[1];
 console.log("DONNEES = popID : " + popID + " popURL : " + popURL + " query : " + query + " dim : " + dim + " popWidth : " + popWidth);
            $('#' + popID).fadeIn().css({
                    'width': Number(popWidth)
            }).prepend('<a href="#close" class="close"><img id="img_about_close" src="img/media/close.png" alt="close about"></a>');
            $('#more').attr('style', 'display : none');
            return false;
        });

        $('body').on('click', 'a.close', function() {
                    $('.modalDialog').fadeOut(function() { 
                        $('a.close').remove();
                        $('#more').attr('style', 'display : inline-block');
                    });
                    return false;
         });
    };
    
    modalClose = function(){
             $('.modalDialog').fadeOut('slow');
    };
    
   /*customScrollBar = function(){
     
     var customScrollElement = new SimpleBar(document.getElementById('modalContentScroll'), {
         autoHide: false,
      })
   };*/
    
    $(document).ready(function(){console.log("ready"); var e=$(".nav-bar");t(e),a(e),modalNews()})
}();