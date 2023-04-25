jQuery(document).ready(function($){
    let currentLanguage = 'ru'
    $('.language-change-button').click(function() {
        // if (currentLanguage === "en"){
        //     $('.menu-list').css({'gap':'156px'})
        //     $('.my-info').css({'gap':'212px'})
        // }else ($('.menu-list').css({'gap':'146px'}), $('.my-info').css({'gap':'226px'}))

        // $("body").addClass("data-lang-" + currentLanguage)

        $("body").attr("data-lang", currentLanguage)
        for (let key in langArr)
        {
            $('#'+key).text(langArr[key][currentLanguage])
        }

        if (currentLanguage === "en"){
            currentLanguage = "ru"
        }else currentLanguage = "en" 

        console.log($("body").attr("lang"))

    })
})