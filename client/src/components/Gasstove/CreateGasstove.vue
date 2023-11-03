<template>
    <center>

        <div>
            <h1>เพิ่มข้อมูล</h1>
            <form v-on:submit.prevent="createGasstove">
                <p>ชื่อรุ่น : <input type="text" v-model="gasstove.Model"></p>
                <p>BTU : <input type="text" v-model="gasstove.BTU"> </p>
                <p>จำนวนเตา : <input type="text" v-model="gasstove.Burners"> </p>
                <p>วัสดุ: <input type="text" v-model="gasstove.Material"> </p>
                <p>ระบบป้องกันความร้อน:
                    <select v-model="gasstove.FlameProtection">
                        <option value="true">มี</option>
                        <option value="false">ไม่มี</option>
                    </select>
                </p>
                
                <p>ผู้ผลิต : <input type="text" v-model="gasstove.Manufacturer"> </p>
                <p>ราคา(บาท) : <input type="text" v-model="gasstove.Price"> </p>
                <p><button type="submit">ยืนยัน</button></p>
            </form>
        </div>
    </center>
</template>
<script>

import GasstoveService from '@/services/GasstoveService'
export default {
    data() {
        return {

            gasstove: {
                Model: "",
                BTU: "",
                Burners: "",
                Material: "",
                FlameProtection: "",
                Manufacturer: "",
                Price: ""
            }
        }
    },
    methods: {
        async createGasstove() {
            try {
                await GasstoveService.post(this.gasstove)
                this.$router.push({
                    name: 'gasstoves',
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
};
</script>
<style scoped></style>