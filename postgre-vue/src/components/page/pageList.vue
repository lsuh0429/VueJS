<template>
    <div>
        <div>
            <b-button @click="insertPage">등록</b-button>
            <b-button variant="danger" @click="deletePages">삭제</b-button>
        </div>
        <b-table
        :items="pages"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        stacked="md"
        select-mode="multi"
        selectable
        >
        <template #cell(selected)="{ rowSelected }">
            <template v-if="rowSelected">
            <span aria-hidden="true">&check;</span>
            <span class="sr-only">Selected</span>
            </template>
            <template v-else>
            <span aria-hidden="true">&nbsp;</span>
            <span class="sr-only">Not selected</span>
            </template>
        </template>
        
        <template #cell(pageNm)="data">
            <!-- `data.value` is the value after formatted by the Formatter -->
            <a href="javascript:void(0)" @click="updatePage(data.item)">{{ data.value }}</a>
        </template>
        </b-table>
        <b-row>
            <b-col sm="5" md="6" class="my-1">
            <b-form-group
                label="Per page"
                label-for="per-page-select"
                label-cols-sm="6"
                label-cols-md="4"
                label-cols-lg="3"
                label-align-sm="right"
                label-size="sm"
                class="mb-0"
            >
                <b-form-select
                id="per-page-select"
                v-model="perPage"
                :options="pageOptions"
                size="sm"
                ></b-form-select>
            </b-form-group>
            </b-col>
            
            <b-col sm="7" md="6" class="my-1">
            <b-pagination
                v-model="currentPage"
                :total-rows="totalRows"
                :per-page="perPage"
                align="fill"
                size="sm"
                class="my-0"
            ></b-pagination>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
    data() {
        return {
            fields: [
                { key: 'selected', label: '선택', class: 'text-center'},
                { key: 'pageNm', label: '페이지명', sortable: true, class: 'text-center' },
                { key: 'url', label: 'URL' },
                { key: 'registDt', label: '등록일', sortable: true, class: 'text-center' },
            ],
            currentPage: 1,
            perPage: 5,
            pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
            editedItem: {
                pageNm: '',
                url: '',
                btnId: '',
            },
            editedIndex: -1,
            defaultItem: {
                pageNm: '',
                url: '',
                btnId: '',
            }
        }
    },
    computed: {
        pages() {
            return this.$store.state.page.items
        },
        isInsert() {
            return this.$store.state.page.isInsert
        },
        totalRows() {
            return this.$store.state.page.items.length
        }
    },
    created() {
        this.$store.dispatch('page/selectPageList')
    },
    methods: {
        openEdit() {
            this.$store.commit('page/openEdit')
        },
        closeEdit() {
            this.$store.commit('page/closeEdit')
        },
        updatePage(item) {
            this.editedIndex = this.pages.indexOf(item)
            this.editedItem = Object.assign({}, item)

            eventBus.$emit('editedIndex', this.editedIndex)
            eventBus.$emit('editedItem', this.editedItem)
            this.openEdit()
        },
        insertPage() {
            eventBus.$emit('editedIndex', -1)
            eventBus.$emit('editedItem', this.defaultItem)
            this.closeEdit()
            this.openEdit()
        },
        deletePages() {

        }
    }
}
</script>

<style>
button {
    margin-right: 5px !important;
}
table {
    margin-top: 10px;
}
</style>