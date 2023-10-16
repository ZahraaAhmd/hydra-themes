// TO DO: reveal more content on click of button "See More" on the home page (index.html)


const moreButton = document.querySelector('.seeMoreBtn');
const moreNewsBtn= document.querySelector('.seeMoreNewsBtn');
const newsWrapper = document.querySelector('.news');
const newsListWrapper= document.querySelector('.news-list ');
const buttonParagraph = document.querySelector('.buttonShowMoreOrLess');
const newsBtnMore = document.querySelector('.buttonShowMoreOrLessNews');



console.log('more button',moreButton);
console.log('news wrapper',newsWrapper);
moreButton.addEventListener('click', () => {
    newsWrapper.classList.toggle('showMore');
    newsWrapper.classList.toggle('showLess');
    if (newsWrapper.classList.contains('showMore')) {
        buttonParagraph.innerHTML = 'اعرض أقل';

    }
    else {
        buttonParagraph.innerHTML = 'اعرض المزيد';
    }


});

newsBtnMore.addEventListener('click', () => {
    newsListWrapper.classList.toggle('showMore');
    newsListWrapper.classList.toggle('showLess');
    if (newsListWrapper.classList.contains('showMore')) {
        newsBtnMore.innerHTML = 'اعرض أقل';
    }
    else {
        newsBtnMore.innerHTML = 'اعرض المزيد';
    }
});


