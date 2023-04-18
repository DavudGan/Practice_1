jQuery(document).ready(function($){
    let currentLanguage = 'ru'
    $('.language-change-button').click(function() {
        for (let key in langArr)
        {
            $('#'+key).text(langArr[key][currentLanguage])
        }
        if (currentLanguage === "en"){
            currentLanguage = "ru"
        }else currentLanguage = "en"
    })
})