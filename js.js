jQuery(document).ready(function($){
    let currentLanguage = 'ru'
    $('.language-change-button').click(function() {
        if (currentLanguage === "en"){
            $('.menu-list').css({'gap':'156px'})
        }else $('.menu-list').css({'gap':'146px'})
        
        for (let key in langArr)
        {
            $('#'+key).text(langArr[key][currentLanguage])
        }

        if (currentLanguage === "en"){
            currentLanguage = "ru"
        }else currentLanguage = "en" 
    })
})