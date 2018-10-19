// ==UserScript==
// @name         Autoreader for Lhtranslation
// @version      3.0
// @description  Plugin broken...
// @author       LittleEndu
// @include      http://lhtranslation.net/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @grant        none
// ==/UserScript==

$(function() {
    // Insert our buttons into each article
    $('#content').find('article').each(function (index){
        var $button = $('<div class=readMore><a href="javascript:void(0)" style="width: 155px;">New disqus broke plugin :(</a></div>');
        $(this).append($button);
    });
    // Apply our css
    $('.readMore').css('margin', '15px 0px 0px 10px').find('a').css('display','block').css('text-align','center');
});
