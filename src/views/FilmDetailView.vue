<template>
    <MainContainer>
        <div className="wrapperComponent">
            <FilmDetailBackRouting/>
            <div v-if="movie">
                <div class="detailMediaCard">
                    <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="Movie poster" className="mediaCardDetail"   />
                    <div class="">
                        <h1>{{ movie.title }}</h1>
                        <p>{{ movie.overview }}</p>
                    </div>
                </div>
            </div>
            <div v-else>
              <p>Завантаження...</p>
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
    };
</script>

<style>
.detailMediaCard{
    display: flex;
}
.mediaCardDetail{
    width: 150px;
    height: auto;
    border-radius: 10px;
    margin-right: 30px;
}
</style>