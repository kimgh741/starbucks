const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  // Logic.. 
  searchInputEl.focus();
});
// focus가 될때 동작 하는 코드 
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});

// focus 해제( blur )가 되면 동작 하는 코드 
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});



// 날짜 자동 계산 
const thisYear = document.querySelector('.thisyear');
// .textcontent 속성 : 해당 요소가 가지고 있는 글자 내용을 읽어 오거나 쓰기를 할 수 있음.  
thisYear.textContent = new Date().getFullYear(); //  해당하는 년도를 생성함. 