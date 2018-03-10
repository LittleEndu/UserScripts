// ==UserScript==
// @name         Autoreader for Lhtranslation
// @version      2.1
// @description  Inserts a button which takes you to reader automatically.
// @author       LittleEndu
// @include      http://lhtranslation.net/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @grant        none
// ==/UserScript==

$(function() {
    // Insert our buttons into each article
    $('#content').find('article').each(function (index){
        var url = $(this).find('.readMore').find('a').attr('href'); // url for AJAX
        var $button = $('<div class=readMore><a href="javascript:void(0)" style="width: 155px;">Find online reader</a></div>');
        $button.click(function(){
            $button.find('a').text('Searching');
            // Find the reader
            $.ajax({
                url: url,
                success: function(data){
                    var reader = null;
                    $(data).find('.commentlist').find('a').each(function(){
                    if (this.href.match(/https?:\/\/read\.lhtranslation\.com\/.*/))
                        reader = this.href;
                        return false;
                    });
                    if (reader){
                        $button.find('a').attr('href', reader);
                        $button.find('a').text('Read online NOW');
                    }else{
                        $button.find('a').text('No reader :\'(');
                    }
                },
                error: function(xhr){
                    $button.find('a').text(xhr.status + ' Error');
                }
            });
            // Make button only clickable once
            $button.off('click');
        });
        $(this).append($button);
    });
    // Apply our css
    $('.readMore').css('margin', '15px 0px 0px 10px').find('a').css('display','block').css('text-align','center');
});
