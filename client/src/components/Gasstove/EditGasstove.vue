<template>
    <center>

<div>
    <h1>เพิ่มข้อมูล</h1>
    <form v-on:submit.prevent="editGasstove">
        <p>ชื่อรุ่น : <input type="text" v-model="gasstove.Model"></p>
        <p>BTU : <input type="text" v-model="gasstove.BTU"> </p>
        <p>จำนวนเตา : <input type="text" v-model="gasstove.Burners"> </p>
        <p>วัสดุ: <input type="text" v-model="gasstove.Material"> </p>
        <p>ระบบป้องกันความร้อน:
            <select v-model="gasstove.FlameProtection">
                        <option value="มี">มี</option>
                <option value="ไม่มี">ไม่มี</option>
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
        async editGasstove() {
            try {
                await GasstoveService.put(this.gasstove)
                this.$router.push({
                    name: 'gasstoves'
                })
            } catch (err) {
                console.log(err)
            }
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