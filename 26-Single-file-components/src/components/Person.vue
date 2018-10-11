<template>
    <div v-if="person">
        <h3 v-text="personData.name"></h3>
        <h5 v-text="personData.email"></h5>
        <img :src="personData.photo" :alt="personData.name">
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        mounted() {
            axios.get('https://randomuser.me/api/')
                .then((res) => {
                    this.person = res.data.results[0];
                })
        },
        data() {
            return {
                person: null
            }
        },
        computed: {
            personData() {
                return {
                    name: `${this.person.name.first} ${this.person.name.last}`,
                    photo: this.person.picture.large,
                    email: this.person.email
                }
            }
        }
    }
</script>

<style>
</style>