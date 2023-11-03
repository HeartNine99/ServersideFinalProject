<template>

    <div>
        <h1>เตาแก๊ส ID : {{ gasstove.id }} </h1>
        <hr>
        <p>ชื่อรุ่น : {{ gasstove.Model }}</p>
        <p>BTU : {{ gasstove.BTU }}</p>
        <p>จำนวนเตา : {{ gasstove.Burners }}</p>
        <p>วัสดุของเตา : {{ gasstove.Material }}</p>
        <p>ระบบป้องกันความร้อน : {{ gasstove.FlameProtection }}</p>
        <p>ผู้ผลิต : {{ gasstove.Manufacturer }}</p>
        <p>ราคา : {{ gasstove.Price }}</p>
        <p>
        <!-- <button v-on:click="navigateTo('/gasstove/edit/'+gasstove.id)">edit gasstove</button> -->
        <button v-on:click="navigateTo('/')">กลับ</button>
        </p>
        <hr>
    </div>

</template>

<script>

import GasstoveService from '@/services/GasstoveService'

export default {

    data() {
        return {
            gasstove: null
        }
    },

    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },

    async created() {
        try {
            let gasstoveId = this.$route.params.gasstoveId
            this.gasstove = (await GasstoveService.show(gasstoveId)).data
        } catch (error) {
            console.log(error)
        }
    }

}

</script>

<style scoped></style>