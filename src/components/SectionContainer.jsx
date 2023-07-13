/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const genres = [
  {
    id: 1,
    title: "EDM",
    artist:
      "Martin Garrix, Avicill, David Guetta, Alan Walker, DJ Snake, Marshmello...",
    background:
      "https://www.youredm.com/wp-content/uploads/2016/07/don-diablo-at-edc-2016_via-twitter.png",
    text: [
      "EDM (Electronic Dance Music) is an umbrella term that refers to a wide variety of similar (but not identical) music genres. The music almost always has a repetitive percussion track and typically includes a melody played by a synthesizer laid over the drumming.",
      `The beginning of EDM can from the disco genre, heavily popular in the late 1970s. Disco music aimed to move crowds of people on the dancefloor, using drum machines and electronic instruments to create synthesized rhythms`,
      `EDM became heavily influenced by live events. ... EDM festivals like Electric Daisy Carnival and Defqon grew in size, emphasising visual experiences, such as video and lighting effects. Major acts like Avicii and Swedish House Mafia were holding concert tours at large arenas rather than just nightclubs.`,
    ],
  },
  {
    id: 2,
    title: "Pop",
    artist: "Ed Sheeran, Adele, Justin Bieber, Taylor Swift, Katty Perry,...",
    background:
      "https://static01.nyt.com/images/2018/12/30/arts/30yearend-pop2/merlin_147857643_8e0c5c65-4549-4946-b51d-49425b9dcf24-superJumbo.jpg",
    text: [
      `Pop music is the genre of popular music that produces the most hits. ... Songs that become hits almost always share certain features that are sometimes called the pop-music formula. They have a good rhythm, a catchy melody, and are easy to remember and sing along to.`,
      `Pop music is a combination of musical genres or types. It originated with the ragtime of the 1890s and early 1900s, the jazz era of the 1920s and 1930s, and the big band era of the 1940s.`,
      `What is important about pop music?
        Instead, the larger point is that taste communities and popular music can be used as exceptionally sharp lenses that can help us understand the ways that people think of themselves politically, culturally, demographically; and the ideas people have about themselves and the world in which they live.`,
    ],
  },
  {
    id: 3,
    title: "Rap/Hip-hop",
    artist: "Eminem, Travis Scott, Kendrick Lamar, Drake, Jay-Z,...",
    background: "https://menback.com/wp-content/uploads/2021/09/hip-hop.jpg",
    text: [
      `Hip hop music, also called hip-hop, rap music, or hip-hop music, is a music genre consisting of a stylized rhythmic music that commonly accompanies rapping, a rhythmic and rhyming speech that is chanted.`,
      `The first major hip-hop deejay was DJ Kool Herc (Clive Campbell), an 18-year-old immigrant who introduced the huge sound systems of his native Jamaica to inner-city parties. Using two turntables, he melded percussive fragments from older records with popular dance songs to create a continuous flow of music.`,
      `Originating in the South Bronx in the late 1970s, hip-hop went global by the end of the '80s. So how did it get its name? According to one explanation, the term pairs the hip that means "trendy" or "fashionable" with the leaping movement hop.`,
    ],
  },
  {
    id: 4,
    title: "Rock n Roll",
    artist:
      "Queen, The Beatles, Pink Floyd, Kiss, Nirvana, U2, Led Zeppelin,...",
    background:
      "https://www.nme.com/wp-content/uploads/2020/05/GettyImages-75509449.jpg",
    text: [
      `Rock 'n' roll is a popular music genre that combines elements of rhythm and blues (R&B), jazz, and country music with the addition of electric instruments. Originally associated with youth revolt and transgression, the genre is known for energetic performances, catchy melodies, and often insightful lyrics`,
      `ROCK 'N' ROLL. Through a series of interesting personalities and promotions, rock 'n' roll was invented in Cleveland in the early 1950s. In the late 1940s, LEO MINTZ, the owner of Record Rendezvous, saw the decrease in sales of big band records`,
      `Rock and roll influenced lifestyles, fashion, attitudes, and language. In addition, rock and roll may have contributed to the civil rights movement because both African-American and white American teens enjoyed the music. Many early rock and roll songs dealt with issues of cars, school, dating, and clothing.`,
    ],
  },
  {
    id: 5,
    title: "Lofi",
    artist: "Various artist",
    background:
      "https://lh6.googleusercontent.com/I8i_0mc9BstUzitQ4BiVS8Af4syQppGIykqlFG5V8uXoCvY56O6yEiOu9TQDikzOUC6mZf7-s_ZZbzJz8FajNFlAAX98ufmKf0GE1T-e9HzpHzqR8nUP0HCrSEUaushDqxQdVb3B",
    text: [
      `Lo-fi, or lofi, refers to a recording with less than professional or flawed sound quality. ... Lo-fi music mixed elements of house, jazz, easy listening, and hip-hop beats and samples with a DIY music aesthetic that emphasized the imperfect, homemade quality of analog recordings`,
      `The term “lo-fi” was first commonly used in the 1950's. It is short for “low-fidelity”, which means low quality. During this decade, young people from all over were inspired to record their own music with the equipment and gear available to them at the time.`,
      `Lofi hip hop or chillhop is a form of downtempo that combines elements of hip hop and chill-out music. It was popularized in the 2010s on YouTube and became an Internet meme.`,
    ],
  },
  {
    id: 6,
    title: "Jazz",
    artist:
      "Miles Davis, Louis Amstrong, Duke Ellington, John Coltrane, Charlie Parker,...",
    background: "https://wallpaperbat.com/img/349490-jazz-music-wallpaper.jpg",
    text: [
      `One way to think about it is that a jazz song is anything sung by a jazz singer, since the term 'jazz' usually refers to a style of performance rather than to a method of composition. ... In addition, a jazz song can be based on blues, pop songs, a poem or any instrumental in the jazz repertoire.`,
      `Because of its popularity in speakeasies, illegal nightclubs where alcohol was sold during Prohibition, and its proliferation due to the emergence of more advanced recording devices, jazz became very popular in a short amount of time, with stars including Duke Ellington, Cab Calloway, and Chick Webb.`,
      `Jazz stimulates the mind and improves focus. Because of jazz's pulsating, rhythmic pattern, our brains tend to mimic the improvisation, and we will see that through increased neural stimulation. Jazz music has been known to help you concentrate and think better.`,
    ],
  },
  {
    id: 7,
    title: "Soundtrack",
    artist:
      "Hans Zimmer, Alexandre Desplat, Ramin Djawadi, Michael Giacchino,...",
    background: "https://cdn.wallpapersafari.com/91/97/C6S2YQ.jpg",
    text: [
      `A soundtrack can include original songs with lyrics written specifically for the programme, as well as popular songs or instrumental music without words or singing`,
      `A soundtrack consists of four different layers: music, sound effects, dialogue, ambience. But that doesn't mean that they always have to play simultaneously. For instance, you can fade out an ambience, if the music plays a loud part.`,
      `A score is the specific musical piece or incidental music that accompanies a scene or moment in the film, and a soundtrack is the compilation of songs and sounds that comprise all of the film's music`,
    ],
  },
  {
    id: 8,
    title: "Anime",
    artist: "Various",
    background: "https://images6.alphacoders.com/842/842336.jpg",
    text: [
      "Just a fucking weeabs song for everyone, YOLO wibu for life!",
      `What? You are not a Weeaboos? What a pathetic person are you?`,
      `Too bad, bro. You just miss a beautiful things ever made`,
      `Just watch them, choose your waifu and marry her. You dipshit!`,
    ],
  },
];

const favArtists = [
  {
    id: 1,
    name: "Pink Floyd",
    image:
      "https://asset.kompas.com/crops/u_QIJqeHWImEwVL_0SSielsns4k=/551x193:1237x650/750x500/data/photo/2020/09/22/5f69c0ab34730.png",
    album: [`Dark side of the Moon`, `Wish you were here`, "The wall"],
    song: [
      "Money",
      "Time",
      "Wish you were here",
      "Another brick in the wall",
      "Comfortably Numb",
    ],
    spotify: "https://open.spotify.com/artist/0k17h0D3J5VfsdmQ1iZtE9",
  },
  {
    id: 2,
    name: "9mm Parabellum Bullets",
    image:
      "http://musicscore.ms/uploads/musicscore/performer_photos/9mm-parabellum-bullet-2366.jpg",
    album: ["BABEL", "Dawning", "DEEP BLUE"],
    song: [
      "インフェルノ",
      "ガラスの街のアリス",
      "ハートに火をつけて",
      "Answer and Answer",
    ],
    spotify: "https://open.spotify.com/artist/3v0nHmnUcf9GAhjQOTctQu",
  },
  {
    id: 3,
    name: "Ciggarettes after Sex",
    image:
      "https://resources.tidal.com/images/c7acc14e/f949/4984/8973/1e1c83e8af9b/750x750.jpg",
    album: ["Ciggarettes after Sex", "Cry"],
    song: ["Apocalypse", "K", "Sunsetz", "Sweet", "Cry"],
    spotify: "https://open.spotify.com/artist/1QAJqy2dA3ihHBFIHRphZj",
  },
  {
    id: 4,
    name: "Kenshi Yonezu",
    image:
      "https://skream.jp/news/2019/04/23/images/%E7%B1%B3%E6%B4%A5AP_1main.jpg",
    album: ["STRAY SHEEP", "YANKEE", "BOOTLEG", "Pale Blue"],
    song: ["Lemon", "アイネクライネ", "LOSER", "カムパネルラ"],
    spotify: "https://open.spotify.com/artist/1snhtMLeb2DYoMOcVbb8iB",
  },
  {
    id: 5,
    name: "Hans Zimmer",
    image:
      "https://variety.com/wp-content/uploads/2018/04/hans-zimmer-bw-e1532552133820.jpg",
    album: [
      "Inception",
      "The Dark Knight Trilogy",
      "Batman v Superman",
      "Insterstella",
    ],
    song: [
      "Time",
      "S.T.AY",
      "Is she still with you",
      "Moutains",
      "Cornfield Chase",
    ],
    spotify: "https://open.spotify.com/artist/0YC192cP3KPCRWx8zr8MfZ",
  },
  {
    id: 6,
    name: "Lana Del Rey",
    image:
      "https://pbs.twimg.com/media/FjaTHBGWYAM_9WA?format=jpg&name=4096x4096",
    album: [
      "Born To Die",
      "Norman Fucking Rockwell",
      "Ultraviolence",
      "Did you know that there's a tunnel under the Ocean Blvd",
    ],
    song: [
      "Summertime Sadness",
      "Love",
      "Lost at Sea",
      "Norman Fucking Rockwell",
      "Queen of Disaster",
    ],
    spotify: "https://open.spotify.com/artist/00FQb4jTyendYWaN8pK0wa",
  },

  {
    id: 7,
    name: "Radiohead",
    image:
      "https://i0.wp.com/www.musikblog.de/wp-content/uploads/2021/11/Radiohead_Credits_Tom_Sheehan.jpg?fit=1200%2C725&ssl=1",
    album: ["OK Computer", "The Bends", "KID A MNESIA", "Pablo Honey"],
    song: [
      "No Surprises",
      "Creep",
      "How to Disappear Completely",
      "Fake Plastic Trees",
      "Black Start",
    ],
  },
  {
    id: 8,
    name: "The Beatles",
    image:
      "https://media.npr.org/assets/img/2019/09/06/rs286_ar_press02-the-beatles-twickenham-april-9-1969-photo-by-bruce-mcbroom-apple-corps-ltd.-b69841e515e37d270dec9130100e5a097d96c2ef.jpg",
    album: ["Abbey Road", "Revolver", "Sgt. Pepper's Lonely Hearts Club Band"],
    song: [
      "Here Comes The Sun",
      "Come Together",
      "Hey Jude",
      "In My Life",
      "Yesterday",
    ],
  },
];

const SectionContainer = () => {
  const [value, setValue] = useState(0);
  const { title, artist, background, text } = genres[value];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = favArtists.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    } else if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, favArtists]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  const sectionStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
  };

  return (
    <section className="section">
      <article className="section-article-info" id="about">
        <div className="content">
          <h2>
            My hobby I like the most is listening to music{" "}
            <i className="fas fa-music"></i>
          </h2>
          <p>
            <i className="fas fa-music"></i>I started listen music when I was a
            middle high-school boy. I have usually spent my free time to listen
            the best songs. I'm still listening 'til this days. And my taste of
            music has changed a lot.<i className="fas fa-music"></i>
          </p>
          <h5>Just keep scrolling to discovery my favourite genre of muscis</h5>
        </div>
      </article>

      <article
        className="section-article-genre"
        style={sectionStyle}
        id="music"
      >
        <div className="btn-container">
          {genres.map((item, index) => {
            return (
              <button
                type="button"
                key={item.id}
                className={`btn genre-btn ${index === value && "active-btn"}`}
                onClick={() => setValue(index)}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        <div className="genre-info">
          <h3>{title}</h3>
          <h6>Popular artists: {artist}</h6>
          {text.map((item, index) => {
            return (
              <div className="text" key={index}>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      </article>

      <article className="section-article-artist">
        <div className={`background-image image-${index}`}></div>
        <h2>
          Here are some of my favourite artists, you can give a try to listen
          them on{" "}
          <a href="https://open.spotify.com/">
            <FontAwesomeIcon icon="fa-brands fa-spotify" /> Spotify
          </a>
        </h2>
        <div className="artist-container">
          {favArtists.map((person, personIndex) => {
            const { id, name, image, album, song, spotify } = person;

            let position = "nextSlide";

            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === favArtists.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <div className={position} key={id}>
                <img src={image} alt={name} />
                <h3>{name}</h3>
                <ul className="album-container">
                  <h4>Best album:</h4>
                  {album.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
                <ul className="song-container">
                  <h5>Famous song:</h5>
                  {song.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
                <p>
                  Listen now:{" "}
                  <a href={spotify}>
                    <FontAwesomeIcon icon="fa-brands fa-spotify" />
                  </a>
                </p>
              </div>
            );
          })}
          <button className="btn prev" onClick={() => setIndex(index - 1)}>
            <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
          </button>
          <button className="btn next" onClick={() => setIndex(index + 1)}>
            <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
          </button>
        </div>
      </article>

      <article className="section-article-text">
        <div className="text">
          <h2>
            Which one is your genre of music? What is your favourite band, or
            singer, or musician? Contact me on those links below
          </h2>
          <p>
            You can listen my music list here:{" "}
            <a href="https://open.spotify.com/playlist/56vuiaJWlpnsGJKD77N5dO">
              <i className="fab fa-spotify"></i>
            </a>{" "}
            (i still updating manually :v)
          </p>
        </div>
      </article>
    </section>
  );
};

export default SectionContainer;
