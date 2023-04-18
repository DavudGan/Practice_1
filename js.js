
jQuery(document).ready(function($){
    $('.language-change-button').click(function() {
        for (let key in langArr)
        {
            $('.'+key).text(langArr[key]['ru'])
        }
    })
})