// ==UserScript==
// @name         IMABI Romaji remover
// @version      0.1
// @description  Removes romaji so you don't have to read it
// @author       LittleEndu
// @include      http://www.imabi.net/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @grant        none
// ==/UserScript==

$(function() {
    // Join up multiple italic tags that are right after one another
    $('i').each(function(index){
        try{
            this.parentElement.outerHTML = this.parentElement.outerHTML.split("</i><i>").join("")
        } finally {
            return
        }
    })
    
    // Find text in italic,
    // check if the next or previous character is Japanese (or not ascii in this case)
    // and remove if so
    $('i').each(function(index){
        var pos = this.parentElement.outerHTML.indexOf(this.outerHTML)
        var len = this.outerHTML.length
        if (this.parentElement.outerHTML.charAt(pos + len + 1).match(/[^\x00-\x7F]/)
            || this.parentElement.outerHTML.charAt(pos - 6).match(/[^\x00-\x7F]/)){
            this.parentNode.removeChild(this)
            return
        }
    })
})();
