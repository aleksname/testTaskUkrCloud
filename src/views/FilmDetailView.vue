<template>
    <MainContainer>
        <div className="wrapperComponent _detailViev">
            <FilmDetailBackRouting />
            <div v-if="movie" className="detailMediaCardContainer">
                <div class="detailMediaCard">
                    <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="Movie poster" className="mediaCardDetail" />
                    <div class="detailMediaOvervievContainer">
                        <h1 className="detailMediaCardTitle">{{ movie.title }}</h1>
                        <h1 className="detailMediaCardSubTitle">{{ 'Популярність ' + movie.popularity }}</h1>
                        <h1 className="detailMediaCardSubTitle">{{ 'Дата виходу  ' + movie.release_date }}</h1>
                        <h1 className="detailMediaCardSubTitle">{{ 'Оцінка глядачів  ' + movie.vote_average }}</h1>
                        <h1 className="detailMediaCardSubTitle">{{ 'Оцінок  ' + movie.vote_count }}</h1>
                    </div>
                </div>

                <!-- Кнопка для відкриття відео -->
                <div class="startOvervievContainer">
                    <button type="button" className="startOverviev" @click="openVideo">Почати перегляд</button>
                </div>

                <p className="detailMediaCardOverview">{{ movie.overview }}</p>
            </div>
            <div v-else>
                <p>Завантаження...</p>
            </div>
        </div>

        <!-- Модальне вікно з відео -->
        <div v-if="isVideoOpen" class="modal-overlay" @click="closeVideo">
            <div class="modal-content" @click.stop>
                <button class="close-btn" @click="closeVideo">&times;</button>
                <video controls autoplay width="100%">
                    <source src="../../public/12672853_2160_3840_30fps.mp4" />
                </video>
            </div>
        </div>
    </MainContainer>
</template>

<script>
import MainContainer from '@/components/MainContainer.vue';
import FilmDetailBackRouting from '@/components/FilmDetail-BackRouting.vue';

export default {
    components: {
        MainContainer,
        FilmDetailBackRouting,
    },
    data() {
        return {
            movie: null,
            isVideoOpen: false, // Стан модального вікна
        };
    },
    mounted() {
        const movieId = this.$route.params.id;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDUzMThlMjY3NWE1YmRhMWE3OTEyM2E0MWQ2ZGM0YiIsIm5iZiI6MTczOTA4Njk1MS45ODIsInN1YiI6IjY3YTg1YzY3YjkzNjBjM2UzM2UwODYxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lcHcH8zZoo2w7QBLGSSrD57eDcHrdtxhWyQZJ-_ZTSM',
            },
        };

        fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
            .then((res) => res.json())
            .then((data) => {
                this.movie = data;
            })
            .catch((err) => console.error(err));
    },
    methods: {
        openVideo() {
            this.isVideoOpen = true;
        },
        closeVideo() {
            this.isVideoOpen = false;
        },
    },
};
</script>


<style>
._detailViev{
    height: 100vh;
}

.detailMediaCard{
    display: flex;
    margin-bottom: 15px;
}

@media (max-width: 600px){
    .detailMediaCard{
        display: block;
        text-align: center;
    }
    .startOvervievContainer{
        display: flex;
        justify-content: center;
    }
   .detailMediaOvervievContainer{
        margin: 0px;
   }
   ._detailViev{
    height: auto;
}
}
.detailMediaOvervievContainer{
    margin-left: 20px;
}
.mediaCardDetail{
    width: 200px;
    height: auto;
    border-radius: 10px;
}
.detailMediaCardTitle{
    font-size: 25px;
    color: rgb(25, 51, 100);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    margin-bottom: 20px;
}
.detailMediaCardSubTitle{
    font-size: 16px;
    color: rgb(25, 51, 100);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    margin-bottom: 10px;
}
.startOverviev{
    background-color: rgb(16, 16, 222);
    padding: 10px 27px;
    border-radius: 8px;
    border: none;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
    transition: 0.3s;
}
.startOverviev:hover{
    transform: scale(1.1);
    background-color: rgb(14, 14, 201);
}
.startOverviev:active{
    transition: 0.2s;
    transform: scale(1);
    background-color: rgb(27, 27, 158);
}
.detailMediaCardOverview{
    font-size: 18px;
    color: rgb(25, 51, 100);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    line-height: 30px;
}


/* Затемнений фон */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

/*  модальне відео вікно */
.modal-content {
    position: relative;
    background: #000;
    border-radius: 10px;
    max-width: 80%;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 15px;
    background: none;
    border: none;
    color: white;
    font-size: 30px;
    cursor: pointer;
}

.close-btn:hover {
    color: red;
}

</style>