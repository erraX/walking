<template>
    <div>
        <span class="breadcrumb">Home > Server</span>
        <div class="list">
            <el-table
                :data="serverList"
                stripe
                style="width: 100%"
            >
                <el-table-column
                    prop="name"
                    label="名称"
                    width="180"
                >
                </el-table-column>
                <el-table-column
                    prop="port"
                    label="端口"
                    width="180"
                >
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="状态"
                >
                </el-table-column>
            </el-table>
            <el-pagination
                class="pagination"
                background
                layout="prev, pager, next"
                :total="1000"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            serverList: [
                {
                    name: 'AAA平台',
                    port: '9822',
                    status: '关机'
                },
                {
                    name: 'BBB平台',
                    port: '8888',
                    status: '运行中'
                }
            ]
        };
    }
}
</script>

<style lang="less">
.pagination {
    text-align: right;
    margin-top: 20px;
}
</style>
