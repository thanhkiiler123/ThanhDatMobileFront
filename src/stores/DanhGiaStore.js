import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useDanhGiaStore = defineStore('DanhGia', {
    state: () => ({
        DanhGia: ref([]),
    }),
    actions: {
        async getDanhGia(PK_MaDienThoai) {
            try {
                const URL = process.env.VUE_APP_origin + `/api/v1/danhgia/${PK_MaDienThoai}`
                console.log(URL)
                const result = await axios.get(URL)
                this.DanhGia = await result.data
                console.log(this.DanhGia)
            } catch (error) {
                console.log(error)
            }
        },
        async addDanhGia(TenKhachHang, NoiDungDanhGia, FK_MaDienThoai) {
            try {
                const URL = process.env.VUE_APP_origin + '/api/v1/danhgia/'
                await axios.post(URL, {
                    TenKhachHang: TenKhachHang,
                    NoiDungDanhGia: NoiDungDanhGia,
                    FK_MaDienThoai: FK_MaDienThoai,
                })
                await this.getDanhGia(FK_MaDienThoai)
            } catch (error) {
                console.log(error)
            }
        },
    },
})
