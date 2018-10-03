$(function ($) {
    'use strict';
var Search = {
    class: {
        searchShow:'js-search-show'
    },
    selector: {
        initialized:'html',
        searchButton: '.js-search'
        
    },
    init:function(){
        $(Search.selector.searchButton).on('click',function(){
            Search.searchToggle.toggle();
        })
    },
    searchToggle:{
        state:false,
        hide:function(){
            if(Search.searchToggle.state){
                $(Search.selector.initialized).removeClass(Search.class.searchShow);                
            }
            Search.searchToggle.state=false;
        },
        show:function(){
            if(!Search.searchToggle.state){
                $(Search.selector.initialized).addClass(Search.class.searchShow);
            }
            Search.searchToggle.state=true;
        },
        toggle:function(){
            if(Search.searchToggle.state){
                Search.searchToggle.hide();
            }else{
                Search.searchToggle.show();
            }
        }
    }
}
Search.init();
});