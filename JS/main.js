
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector('#to-top');
// window는 브라우저 창을 의미 ( 우리가 보고 있는 화면 자체 )
// 스크롤 이벤트 사용시 자주 사용되는 함수 
//_.throttle(함수, 실행시간(ms))
window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    //배지 숨기기 
    // gsap.to(요소, 지속시간, 옵션 );
    gsap.to(badgeEl, .6, {
      opacity:0,
      display:'none'
    });
    // 페이지 업 버튼 보이기 
    gsap.to(toTopEl, .2, {
      x: 0
    });
  }else {
    //배지 보이기 
    gsap.to(badgeEl, .6, {
      opacity:1,
      display:'block'
    });
    // 페이지 업 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });

  }
},300));

// 화면 스크롤 위로 옮김
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {  // 요소를 window로 설정하여 우리가 보는 화면을 설정해 줌 
    scrollTo: 0  // scroll을 영으로 옮겨준다 ( scrollToPlugin 설치 이유 )
  });
});


// title 그림 순차적 애니메이션 
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 시간, 옵션(객체형{}))
  gsap.to(fadeEl,1,{
    delay: (index + 1) * .7, // 0.7 , 1.4 , 2.1 , 2.7 초씩 순서대로 동작 됨 
    opacity: 1    
  });
});

// 공지사항 Swiper 
// new Swiper('선택자', 옵션 );
new Swiper('.notice-line .swiper-container', {
  direction:'vertical',
  autoplay:true,
  loop:true
});

// 가로 슬라이드 swiper
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10,  // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기 
  loop:true, // 반복 적용 
  autoplay:{
    delay:5000,
  },
  pagination: {
    el:'.promotion .swiper-pagination',  // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 
  },
  navigation: {
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});
//awards slide 생성
new Swiper('.awards .swiper-container',{
  slidesPerView: 5, 
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  }
});



// toggle-promotion 동작 
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    // 숨김처리 
    promotionEl.classList.add('hide');
  }else{
    // 보임 처리 
    promotionEl.classList.remove('hide');
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
//floating 애니메이션 
function floatingObject(selector, delay, size) {
  // gsap.to(요서, 시간, 옵션);
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 에니메이션 동작 시간 
    {  // 옵션
      y:size,  // y 축으로 동작 하는 애니메이션
      repeat:-1,  // 무한 반복 
      yoyo: true, // 한번 재생된 애니메니션이 다시 반대로 재생되도록 하는 옵션 
      ease: Power1.easeInOut,
      delay: random(0,delay) // 랜덤 딜레이 시간 
    }
  );
};
floatingObject('.floating1',1, 15);
floatingObject('.floating2',.5, 15);
floatingObject('.floating3',1.5, 20);


// scrollMagic library
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
      .Scene({
        triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정 
        triggerHook: .8 // 동작할 위치를 뷰포트( 0 ~ 1 )에서 지정 ( 시작 : 0 끝 : 1)
      })
      .setClassToggle(spyEl,'show')
      .addTo(new ScrollMagic.Controller());
});
