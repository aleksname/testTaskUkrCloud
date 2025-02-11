<template>
    <MainContainer>
        <div class="testContainer">
            <h1>test filter</h1>
            <div>
                <input 
                    type="search"
                    placeholder="Пошук елментів"
                    v-model="query"
                >
                <!-- <div class="">{{  query}}</div> -->
                <ul>
                    <li v-for="product in queryElement" :key="product">
                        {{ product }}
                    </li>
                </ul>
            </div>
        </div>
    </MainContainer>
</template>

<script>
import MainContainer from '@/components/MainContainer.vue';
import { ref, computed } from 'vue';

export default {
    components: {
        MainContainer,
    },
    setup() {
        const query = ref('')
        const queryElement = computed(() => {
            return products.value.filter((product) =>
                product.toLocaleLowerCase().includes(query.value.toLocaleLowerCase())
        )})
        const products = ref([
            'Apple',
            'Banana',
            'ets..',
            'ets2..',
        ]);
        return { products,query,queryElement };

    }
};
</script>

<style>
.testContainer {
    color: white;
}
</style>
