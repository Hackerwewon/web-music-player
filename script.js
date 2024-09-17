var arr = [
    { songName: "Dil Jhoom", url: "./songs/Dil Jhoom.mp3", img: "./images/DilJhoom.jpg", c: 0 },
    { songName: "Qaafirana", url: "./songs/Qaafirana.mp3", img: "./images/Qaafirana.jpg", c: 1 },
    { songName: "Aankhein Khuli", url: "./songs/Aankhein Khuli.mp3", img: "./images/Aankheinkhuli.jpg", c: 2 },
    { songName: "Sweetheart", url: "./songs/Sweetheart.mp3", img: "./images/Sweetheart.jpg", c: 3 },
    { songName: "Chand Taare", url: "./songs/Chand Tare.mp3", img: "./images/ChandTare.jpg", c: 4 }
]
var audio = new Audio();
var allsong = document.querySelector("#songs");
var select = 0;
var mains = document.querySelector("#main");
var poster = document.querySelector("#left");
var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");

function main() {
    var clutter = "";
    arr.forEach(function(val) {
        clutter += `<div class="song1" id="${val.c}">
                    <div class="song">
                        <img src="${val.img}" alt="">
                        <h3>${val.songName}</h3>
                    </div>
                    <h3>3:19</h3>
                </div>`;

    })
    audio.src = arr[select].url;
    allsong.innerHTML = clutter;
    poster.style.backgroundImage = `url(${arr[select].img})`;
    // mains.style.backgroundImage = `url(${arr[select].img})`;
}

function selctor() {
    document.querySelector("#songs").addEventListener("click", function(vak) {
        select = vak.target.id;
        main();
        audio.play();
        flag = 0;
        play.innerHTML = `<i class="ri-pause-line"></i>`;
    })
}

function player() {
    var flag = 0;
    play.addEventListener("click", function() {
        if (flag == 0) {
            play.innerHTML = `<i class="ri-play-line"></i>`;
            flag = 1;
            audio.pause();
        } else {
            play.innerHTML = `<i class="ri-pause-line"></i>`;
            flag = 0;
            audio.play();
        }
    })

    forward.addEventListener("click", function() {
        if (select < arr.length - 1) {
            select++;
            main();
            audio.play();
            play.innerHTML = `<i class="ri-pause-line"></i>`;
            backward.style.opacity = 1;
        } else {
            forward.style.opacity = 0.3;
        }
    })

    backward.addEventListener("click", function() {
        if (select > 0) {
            select--;
            main();
            audio.play();
            play.innerHTML = `<i class="ri-pause-line"></i>`;
            forward.style.opacity = 1;
        } else {
            backward.style.opacity = 0.3;
        }
    })

}

function sort() {
    var searchInput = document.querySelector("#songSearch");
    searchInput.addEventListener("focus", function() {
        document.querySelector("#main").style.backgroundColor = "#111";
        document.querySelector("#sign").style.backgroundColor = "#111";
    })
    searchInput.addEventListener("blur", function() {
        document.querySelector("#main").style.backgroundColor = "black";
        document.querySelector("#sign").style.backgroundColor = "black";
    })

    searchInput.addEventListener("input", function() {
        var query = searchInput.value.toLowerCase();
        var filteredSongs = arr.filter(function(song) {
            return song.songName.toLowerCase().includes(query);
        });
        displaySongs(filteredSongs);
    });
}

function displaySongs(songs) {
    var clutter = "";

    songs.forEach(function(val) {
        clutter += `<div class="song1" id="${val.c}">
                     <div class="song">
                         <img src="${val.img}" alt="">
                         <h3>${val.songName}</h3>
                     </div>
                     <h3>3:19</h3>
                 </div>`;
    });
    allsong.innerHTML = clutter;
    document.querySelector("#songs").addEventListener("click", function(vak) {
        select = vak.target.id;
        main();
        audio.play();
        flag = 0;
        play.innerHTML = `<i class="ri-pause-line"></i>`;
    })

}

main();
selctor();
sort();
player();