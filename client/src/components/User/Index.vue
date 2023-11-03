<template>
    <div>

        <h2>Get all waters</h2>
        <h4>จํานวนผู้ใช้งาน {{ waters.length }}</h4>
        <hr>
        <div v-for="water in waters" v-bind:key="water.id">
            <p>ID : {{ water.id }}</p>
            <p>ชื่อ : {{ water.name }} </p>
            <p>นามสกุล : {{ water.lastname }}</p>
            <p>
                <button v-on:click="navigateTo('/water/' + water.id)">ดูข้อมูลผู้ใช้</button>
                <button v-on:click="navigateTo('/water/edit/' + water.id)">edit water</button>
                <button v-on:click="deleteWater(water)">delete water</button>

            </p>
            <hr>
        </div>

    </div>
</template>

<script>

import WatersService from '@/services/WatersService'

export default {
    data() {
        return {
            waters: []
        }
    },

    methods: {
        navigateTo(route) {
            // ตรง$router ต้องตั้งให้ตรง folder ของ route
            this.$router.push(route)
        }
    },

    methods: {

        navigateTo(route) {
            this.$router.push(route)
        },

        async deleteWater(water) {
            let result = confirm("Want to delete?")
            if (result) {
                try {
                    await WatersService.delete(water)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },

        async refreshData() {
            this.waters = (await WatersService.index()).data
        }
    },

    async created() {
        this.waters = (await WatersService.index()).data
    }

}

</script>

<style scoped></style>
   