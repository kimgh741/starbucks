 // 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8',  // 출력하고자 하는 동영상의 ID, 원하는 동영상의 소스코드 복사시 제어가 되지 않으므로 ID만 가져와서 제어한다. 
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생이 true일 경우 반복 재생할 영상의 ID값을 지정해 주어야 한다. 
    },
    events: {
      onReady:function (event) {
        event.target.mute(); // 음소거
      }
    }
  });
}