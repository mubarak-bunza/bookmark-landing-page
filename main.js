// navigations 
let close = document.querySelector('#close');
let open = document.querySelector('#open');

let smNav = document.querySelector('#smNav');
let lgNav = document.querySelector('#lgNav');

close.addEventListener('click', function(){
    smNav.classList.remove('show');
    smNav.classList.add('hide');
    lgNav.classList.remove('hide');
    lgNav.classList.add('show');
});

open.addEventListener('click', function(){
    if(smNav.classList.contains('hide')){
        smNav.classList.remove('hide');
        smNav.classList.add('show');
        lgNav.classList.remove('show')
        lgNav.classList.add('hide');
    }
});

// features-tab
let bookmarkBtn = document.querySelector('#bookmarkBtn');
let searchingBtn = document.querySelector('#searchingBtn');
let sharingBtn = document.querySelector('#sharingBtn');

let bookmark = document.querySelector('#bookmark');
let searching = document.querySelector('#searching')
let sharing = document.querySelector('#sharing');

bookmarkBtn.addEventListener('click', function(){
    bookmarkBtn.classList.add('bottom-border');
    searchingBtn.classList.remove('bottom-border');
    sharingBtn.classList.remove('bottom-border');

    if(bookmark.classList.contains('hide')){
        bookmark.classList.remove('hide');
        bookmark.classList.add('active');
    }

    if(searching.classList.contains('active')){
        searching.classList.remove('active');
        searching.classList.add('hide');
    }

    if(sharing.classList.contains('active')){
        sharing.classList.remove('active');
        sharing.classList.add('hide');
    }
});

searchingBtn.addEventListener('click', function(){
    
    bookmarkBtn.classList.remove('bottom-border');
    searchingBtn.classList.add('bottom-border');
    sharingBtn.classList.remove('bottom-border');

    if(bookmark.classList.contains('active')){
        bookmark.classList.remove('active');
        bookmark.classList.add('hide');
    }

    if(searching.classList.contains('hide')){
        searching.classList.remove('hide');
        searching.classList.add('active');
    }

    if(sharing.classList.contains('active')){
        sharing.classList.remove('active');
        sharing.classList.add('hide');
    }
});

sharingBtn.addEventListener('click', function(){
    
    bookmarkBtn.classList.remove('bottom-border');
    searchingBtn.classList.remove('bottom-border');
    sharingBtn.classList.add('bottom-border');

    if(bookmark.classList.contains('active')){
        bookmark.classList.remove('active');
        bookmark.classList.add('hide');
    }

    if(searching.classList.contains('active')){
        searching.classList.remove('active');
        searching.classList.add('hide');
    }

    if(sharing.classList.contains('hide')){
        sharing.classList.remove('hide');
        sharing.classList.add('active');
    }
});

// faq-accordion
let accordionBtn1 = document.querySelector('#accordionBtn1');
let accordionBtn2 = document.querySelector('#accordionBtn2');
let accordionBtn3 = document.querySelector('#accordionBtn3');
let accordionBtn4 = document.querySelector('#accordionBtn4');

let accordionBody1 = document.querySelector('#accordionBody1');
let accordionBody2 = document.querySelector('#accordionBody2');
let accordionBody3 = document.querySelector('#accordionBody3');
let accordionBody4 = document.querySelector('#accordionBody4');

let arrowDown1 = document.querySelector('#arrowDown1');


accordionBtn1.addEventListener('click', function(){
    accordionBody1.classList.toggle('hide');
    accordionBody1.classList.toggle('show');

    accordionBody2.classList.add('hide');
    accordionBody3.classList.add('hide');
    accordionBody4.classList.add('hide');
});

accordionBtn2.addEventListener('click', function(){
    accordionBody1.classList.add('hide');

    accordionBody2.classList.toggle('hide');
    accordionBody2.classList.toggle('show');    
    
    accordionBody3.classList.add('hide');
    accordionBody4.classList.add('hide');

});

accordionBtn3.addEventListener('click', function(){
    accordionBody1.classList.add('hide');
    accordionBody2.classList.add('hide');

    accordionBody3.classList.toggle('hide');
    accordionBody3.classList.toggle('show');

    accordionBody4.classList.add('hide');
});

accordionBtn4.addEventListener('click', function(){
    accordionBody1.classList.add('hide');
    accordionBody2.classList.add('hide');
    accordionBody3.classList.add('hide');
    
    accordionBody4.classList.toggle('hide');
    accordionBody4.classList.toggle('show');
});