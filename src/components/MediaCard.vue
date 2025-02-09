<template>
    <div class="wrapperComponent">
        <div class="filterContainer">
            <div class="filterInputContainer">
                <div class="headerLogo">
                    <a href="/home" className="headerLink _Logo">Logo</a>
                </div>
                <input type="text" placeholder="Пошук..." className="filterInput">
                <button type="button" className="filterButton">Вхід</button>
            </div>
            <div class="filterContainerButton">
                <button type="button" className="filterContainerLinkTo">Серіали</button>
                <button type="button" className="filterContainerLinkTo">Мультсеріали</button>
                <button type="button" className="filterContainerLinkTo">Фільми</button>
                <button type="button" className="filterContainerLinkTo">Мультфільми</button>
                <button type="button" className="filterContainerLinkTo">Добірки</button>
            </div>
        </div>
        <strong className="mediaCardTitle">Дивитися фільми онлайн українською в HD якості</strong>
          <div className="mediaCardContainer">
            <div className="mediaCardEl">
                <ul className="mediaCardUl">
                    <li v-for="movie in movies" :key="movie.id" className="mediaCardElLi">
                      <!-- <img src={{ movie.poster_path }} alt=""> -->
                       <!-- <div class="mediaCardContainer"> -->
                            <div class="mediaCardImageContainer">
                                <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="Movie poster" className="mediaCardImg">
                                <div class="mediaCardImagePlay">&#9654;</div>
                            </div>
                           <div className="mediaCardElTitle">{{ movie.title }}</div>
                       <!-- </div> -->
                    </li>
                </ul>
            </div>
          </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [] 
    };
  },
  mounted() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDUzMThlMjY3NWE1YmRhMWE3OTEyM2E0MWQ2ZGM0YiIsIm5iZiI6MTczOTA4Njk1MS45ODIsInN1YiI6IjY3YTg1YzY3YjkzNjBjM2UzM2UwODYxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lcHcH8zZoo2w7QBLGSSrD57eDcHrdtxhWyQZJ-_ZTSM'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(res => res.json())
      .then(data => {
        this.movies = data.results; 
        console.log(data);
        
      })
      .catch(err => console.error(err));
  }
};
</script>
<style>
.wrapperComponent{
    background-color: white;
    padding: 20px;
    border-radius: 20px;
    box-sizing: border-box;
}
.filterInputContainer{
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}
.filterInput{
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    font-size: 16px;
    margin: 0 15px;
    border-radius: 10px;
    box-shadow: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5));
    border: 1px solid rgba(128, 128, 128, 0.147);
    outline: none;
    cursor: pointer;
}
.filterButton{
    padding: 10px 25px;
    background-color: rgb(33, 33, 220);
    color: white;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    transition: 0.3s;
    cursor: pointer;
}
.filterButton:hover{
    transform: scale(1.1);
    background-color: rgb(24, 24, 193);
}
.filterButton:active{
    transform: scale(1);
    background-color: rgb(21, 21, 172);
}
.filterContainerButton{
    background-color: #ecf0f9;;
    padding: 5px ;
}
.filterContainerLinkTo{
    border: none;
    background-color: rgba(255, 255, 255, 0);
    padding: 10px 0;
    margin-right: 25px;
    font-size: 16px;
    color: rgb(25, 51, 100);
    cursor: pointer;
}
.filterContainerLinkTo:hover{
    color: rgb(202, 151, 24);
}

.mediaCardContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}
.mediaCardImageContainer{
    position: relative;
}
.mediaCardImagePlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 44px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    font-weight: 900;
    cursor: pointer;
}
.mediaCardImagePlay {
    pointer-events: none; /* тестова заглушка, хз чи ок */
}
.mediaCardImageContainer:hover .mediaCardImagePlay {
    opacity: 1;

}
.mediaCardTitle{
    font-size: 28px;
    color: rgb(25, 51, 100);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
}
.mediaCardUl {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
    gap: 20px;
    max-width: 1200px; 
    padding: 0;
}

.mediaCardElLi {
    list-style: none;
    text-align: center;
    width: 180px; 
}

.mediaCardImg {
    width: 100%; 
    border-radius: 10px;
    cursor: pointer;
}

.mediaCardImg {
    transition: opacity 0.3s ease-in-out;
}

.mediaCardImg:hover {
    opacity: 0.4;

}

.mediaCardElTitle {
    font-size: 18px;
    margin-top: 5px;
    color: rgb(25, 51, 100);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
}


</style>