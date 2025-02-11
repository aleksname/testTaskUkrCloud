<template>
    <MainContainer >
        <div className="testContainer">
            <h1>test filter</h1>
            <div>
                <ul>
                    <li v-for="product in products"
                        :key="product"
                    >
                    {{ product.name }}
                    </li>
                </ul>
            </div>
        </div>
    </MainContainer>
</template>

<script>
import MainContainer from '@/components/MainContainer.vue';
import { ref } from 'vue';

export default {
    components: {
        MainContainer,
    },

    setup() {
        const products = ref([
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Banana'},
            {id: 3, name: 'Kivi'},
        ])

        return {products}
    }
}
</script>

<style>
    .testContainer{
        color:white;
    }
</style>