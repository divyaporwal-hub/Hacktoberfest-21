const music =document.querySelector("audio");
	const img= document.querySelector("img");
	const play=document.getElementById("play");
	const artist=document.getElementById("artist");
	const title=document.getElementById("title");
	const prev=document.getElementById("prev");
	const next=document.getElementById("next");
	let isplay = false; songs =[
		{
			name:"audio1",
            image:"audio1",
			title: "GIVE ME SOME SUNSHINE",
            artist: "artist",
		},
		{
			name:"audio2",
			image:"audio2",
			title: "BAAWLA",
            artist: "Badshah",
			
		},
		{
			name:"audio3",
			image:"audio3",
			title: "SHREE GANESHA DEVA",
            artist: "artist",
		},
		{
			name:"audio4",
			image:"audio4",
			title: "ALL IS WELL",
            artist: "artist",
		}

	];
	const playMusic=() =>{
		isplay =true;
		music.play();
		play.classList.replace("fa-play" ,"fa-pause");
		img.classList.add("anime");

	};
	const pauseMusic=() =>{
		
		isplay =false;
		music.pause();
		play.classList.replace("fa-pause","fa-play");
		img.classList.remove("anime");


	};
	play.addEventListener('click',() =>{
		if(isplay)
		{
			pauseMusic();
		}
		else
		{
			playMusic();
		}
	});

	//Changing the music
    const loadSongs = (songs) =>{
          title.textContent=songs.title;
		   artist.textContent=songs.artist;
		   music.src = "music/"+songs.name+".mp3";
		   img.src = "images/" +songs.name+".jpg";
	};
    songIndex=0;
	const nextSong= ()=>{	
		songIndex=(songIndex+1)%songs.length;
    loadSongs(songs[songIndex]);
	playMusic();

	};
	const prevSong=()=>{	
		songIndex=(songIndex-1 + songs.length)%songs.length;
    loadSongs(songs[songIndex]);
	playMusic();
	};
	next.addEventListener("click" , nextSong);
	prev.addEventListener("click" , prevSong);
