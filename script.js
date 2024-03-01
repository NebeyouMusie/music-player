let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');
let albumArt = document.querySelector('.song-img');

song.onloadedmetadata = function(){
  progress.max = song.ondurationchange;
  progress.value = song.currentTime;
}

function playPause(){
  if(ctrlIcon.classList.contains('fa-pause')){
    song.pause();
    ctrlIcon.classList.remove('fa-pause');
    ctrlIcon.classList.add('fa-play');
    albumArt.style.animationPlayState = 'paused';
  }else{
    song.play();
    ctrlIcon.classList.remove('fa-play');
    ctrlIcon.classList.add('fa-pause');
    albumArt.style.animationPlayState = 'running';
  }
}

if(song.play()){
  setInterval(() => {
    progress.value = song.currentTime;
  },500);
}

progress.onchange = function(){
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.remove('fa-play');
  ctrlIcon.classList.add('fa-pause');
  albumArt.style.animationPlayState = 'running';
}