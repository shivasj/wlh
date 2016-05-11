// Load Header and Footer template
$(function() {

    $('#header').load('templates/header.html', function() {

        var page = "index.html";

        var match = document.location.pathname.match(/[^\/]+$/);
        if(match){
            page = match[0];
        }
        //console.log(page);

        switch(page) {
            case "index.html":
                $('#index_page_menu').addClass("active");
                break;
            case "items.html":
                $('#items_page_menu').addClass("active");
                break;
            case "register.html":
                $('#register_page_menu').addClass("active");
                break;
            case "contact.html":
                $('#contact_page_menu').addClass("active");
                break;
            case "signin.html":
                $('#signin_page_menu').addClass("active");
                break;
            case "itemmaintain.html":
                $('#signin_page_menu').addClass("active");
                break;
            default:
                $('#index_page_menu').addClass("active");
        }

    });

    $('#footer').load('templates/footer.html', function() {});


});