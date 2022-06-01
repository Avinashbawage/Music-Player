/* const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');


const songs=[
    {
        name:"kk1",
        displayName:'Pal',
        artist:'Krishnakumar Kunnath(KK)'
    },
    {
        name:"kk2",
        displayName:'Khuda Jane',
        artist:'Krishnakumar Kunnath(KK)'
    },
    {
        name:"kk3",
        displayName:'Thadap Thadap',
        artist:'Krishnakumar Kunnath(KK)'
    },
    {
        name:"kk4",
        displayName:'Kya mujhe pyaar hain ',
        artist:'Krishnakumar Kunnath(KK)'
    }
]


//play
let isPlaying = false;

function playsong() {
 isPlaying=true;
 playBtn.classList.replace("fa-play","fa-pause");
 playBtn.setAttribute("title","pause");
 music.play();
    
}

function pausesong() {
    isPlaying=false;
    playBtn.classList.replace("fa-pause","fa-play");
    playBtn.setAttribute("title","play");
    music.pause();
       
   }

   playBtn.addEventListener("click",()=>{
  (isPlaying?pausesong():playsong())
}
   )

   let songindex=0;

   function loadsong() {
       title.textContent=songs.displayname;
       artist.textContent=songs.artist;
       music.src=`music/${songs.name}.mp3`
       image.src=`img/${songs.name}.jpg`
       
   }

   function prevsong() {
    songindex--
    loadsong(songs[songindex])
    playsong()

   }


   function nextsong() {
    songindex++
    loadsong(songs[songindex])
    playsong()

   }

   

   loadsong(songs[songindex]);

   prevBtn.addEventListener("click",prevsong()) */

   const image = document.querySelector("img");
   const title = document.getElementById("title");
   const artist = document.getElementById("artist");
   const music = document.querySelector("audio");
   const currentTimeEl = document.getElementById("current-time");
   const durationEl = document.getElementById("duration");
   const progress = document.getElementById("progress");
   const progressContainer = document.getElementById("progress-container");
   const prevBtn = document.getElementById("prev");
   const playBtn = document.getElementById("play");
   const nextBtn = document.getElementById("next");
   
   const songs = [
     {
       name: "kk1",
       displayName: "Pal",
       artist: "Krishnakumar Kunnath(KK)",
     },
     {
       name: "kk2",
       displayName: "Khuda Jane",
       artist: "Krishnakumar Kunnath(KK)",
     },
     {
       name: "kk3",
       displayName: "Thadap Thadap",
       artist: "Krishnakumar Kunnath(KK)",
     },
     {
       name: "kk4",
       displayName: "Kya mujhe pyaar hain ",
       artist: "Krishnakumar Kunnath(KK)",
     },
   ];
   
   //play and pause
   
   //play
   let isPlaying = false;
   function playSong() {
     isPlaying = true;
     playBtn.classList.replace("fa-play", "fa-pause");
     playBtn.setAttribute("title", "pause");
     music.play();
   }
   function pauseSong() {
     isPlaying = false;
     playBtn.classList.replace("fa-pause", "fa-play");
     playBtn.setAttribute("title", "play");
     music.pause();
   }
   playBtn.addEventListener("click", () => {
     isPlaying ? pauseSong() : playSong();
   });
   
   //update dom
   
   function loadSong(song) {
     title.textContent = song.displayName;
     artist.textContent = song.artist;
     music.src = `music/${song.name}.mp3`;
     image.src = `img/${song.name}.jpg`;
   }
   let songIndex = 0;
   //previous
   //3
   //2
   
   function previousSong() {
     songIndex--;
     if (songIndex < 0) {
       songIndex = songs.length - 1;
     }
     loadSong(songs[songIndex]);
     playSong();
   }
   
   //next
   function nextSong() {
     songIndex++;
     if (songIndex > songs.length - 1) {
       songIndex = 0;
     }
     loadSong(songs[songIndex]);
     playSong();
   }
   //load
   loadSong(songs[songIndex]);
   
   function updateProgressBar(e) {
     if (isPlaying) {
       /* console.log(e) */
       const { currentTime, duration } = e.srcElement;
       //change width
       const progressPercentage = (currentTime / duration) * 100;
       progress.style.width = `${progressPercentage}%`;
   
   
   
       const durationMinutes = Math.floor(duration / 60);
       let durationSeconds = Math.floor(duration % 60);
       if(durationSeconds < 10){
           durationSeconds= `0${durationSeconds}`
       }
       //avoid nan 
       if(durationSeconds){
           durationEl.textContent=`${durationMinutes}: ${durationSeconds}`;
   
       }
       const currentMinutes = Math.floor(currentTime / 60);
       let currentSeconds = Math.floor(currentTime % 60);
       if(currentSeconds < 10){
           currentSeconds= `0${currentSeconds}`
       }
     
     currentTimeEl.textContent=`${currentMinutes}: ${currentSeconds}`
     durationEl.textContent=`${durationMinutes}: ${durationSeconds}`
     }
   }
   
   function setProgressBar(e) {
   
       const width= this.clientWidth;
       const progresswidth=e.offsetX;
       const {duration}= music;
       music.currentTime=(progresswidth / width) * duration
   }
   
   prevBtn.addEventListener("click", previousSong);
   nextBtn.addEventListener("click", nextSong);
   music.addEventListener("ended",nextSong)
   music.addEventListener("timeupdate", updateProgressBar);
   progressContainer.addEventListener("click", setProgressBar);
   