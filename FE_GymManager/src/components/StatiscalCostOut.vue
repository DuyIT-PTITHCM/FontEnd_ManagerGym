<template>
<div class="row">
    <div id="admin" class="col s12">
        <div class="card material-table">
            <div class="table-header">
                <span class="table-title">Thống Kê Các Thiết Bị Đã Mua Trong Năm</span>
            </div>
            <table id="datatable">
                <thead>
                    <tr>
                        <th>Purchasing </th>
                        <th>Name</th>
                        <th>Date Buy </th>
                        <th>Department</th>
                        <th>Price Buy</th>
                        <th>Price Sales</th>

                    </tr>
                </thead>
                <tbody>

                    <tr v-for="item of data1" :key="item.id">
                        <td>{{(item.purchasing)?item.purchasing.name:'Không Có Nhá'}}</td>
                        <td>{{item.name}}</td>
                        <td>{{(item.created_at)?formatDate(item.created_at):'Không Có Nhá'}}</td>
                        <td>{{(item.department)?item.department.name:'Không Có Nhá'}}</td>
                        <td>{{formatPrice(item.pricebuy)}} VNĐ</td>
                        <td>
                            {{formatPrice(item.pricesales)}} VNĐ
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
        <h4> Tổng Chi Phí Xuất Thiết Bị Trong Năm {{ (new Date()).getFullYear() }} : {{formatPrice(sumOut)}} VNĐ</h4>

    </div>
</div>
</template>

<script>
import {
    mapActions,
    mapGetters,
    mapState
} from 'vuex'
export default {
  computed: {
        ...mapState({
            data1: state => state.cost.dataList1
        }),
        ...mapGetters('cost', ['sumOut'])
    },
    methods: {
         ...mapActions('cost', ['getCostOut']),
        formatPrice(value) {
            let val = (value / 1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        formatDate(date) {
            let d = new Date(date);
            return d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear();
        }
    },
    created() {
        this.getCostOut();
    }
}
</script>
