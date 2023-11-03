<template>
    <div>
      <h2>ข้อมูลเตาแก๊สทั้งหมด</h2>
      <h4>จำนวน: {{ gasstoves.length }} เตา <button @click="navigateTo('/gasstove/create')">เพิ่มข้อมูล</button></h4>
     
     
      <div v-for="gasstove in gasstoves" :key="gasstove.id" class="gasstove-item">
        <p>ชื่อรุ่น : {{ gasstove.Model }}</p>
        <p>ระบบป้องกันความร้อน: {{ gasstove.FlameProtection ? 'มี' : 'ไม่มี' }} </p>
        <p>ราคา : {{ gasstove.Price }}</p>
        <p>
          <button @click="navigateTo('/gasstove/' + gasstove.id)">ดูข้อมูล</button>
          <button @click="navigateTo('/gasstove/edit/' + gasstove.id)">แก้ไขข้อมูล</button>
          <button @click="deleteGasstove(gasstove)">ลบข้อมูล</button>
        </p>
       
      </div>
    </div>
  </template>

<script>

import GasstoveService from '@/services/GasstoveService'

export default {
    data() {
        return {
            gasstoves: []
        }
    },

    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },

    methods: {

        navigateTo(route) {
            this.$router.push(route)
        },

        async deleteGasstove(gasstove) {
            let result = confirm("Want to delete?")
            if (result) {
                try {
                    await GasstoveService.delete(gasstove)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },

        async refreshData() {
            this.gasstoves = (await GasstoveService.index()).data
        }
    },

    async created() {
        this.gasstoves = (await GasstoveService.index()).data
    }

}

</script>

<style scoped>
.gasstove-item {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

button {
  margin-right: 10px;
}
</style>
   