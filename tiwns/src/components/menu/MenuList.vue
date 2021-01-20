<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="menus"
            :items-per-page="10"
            class="elevation-1"
            style="mb-10">

            <template v-slot:top>
                <v-toolbar
                    flat
                >
                    <v-toolbar-title>메뉴관리</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-dialog
                        v-model="dialog"
                        max-width="500px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                            color="primary"
                            dark
                            class="mb-2"
                            v-bind="attrs"
                            v-on="on"
                            >
                            메뉴 추가
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>
                            <v-card-text>
                                <v-form
                                ref="form"
                                v-model="valid"
                                lazy-validation
                                >
                                    <v-container>
                                        <v-row>
                                            <v-col
                                                cols="12"
                                                sm="6"
                                                md="4"
                                            >
                                                <v-text-field
                                                    v-model="editedItem.menuNm"
                                                    :counter="10"
                                                    :rules="[v => !!v || 'Item is required']"
                                                    label="메뉴명"
                                                    required
                                                ></v-text-field>
                                            </v-col>
                                            <v-col
                                                cols="12"
                                                sm="6"
                                                md="4"
                                            >
                                                <v-text-field
                                                    v-model="editedItem.pageUrl"
                                                    :rules="[v => !!v || 'Item is required']"
                                                    label="Page URL"
                                                    required
                                                ></v-text-field>
                                            </v-col>
                                            <v-col
                                                cols="12"
                                                sm="6"
                                                md="4"
                                            >
                                                <v-text-field
                                                    v-model="editedItem.menuIcon"
                                                    :rules="[v => !!v || 'Item is required']"
                                                    label="아이콘"
                                                    required    
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-form>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="close"
                                >
                                    취소
                                </v-btn>
                                <v-btn
                                    :disabled="!valid"
                                    color="primary"
                                    @click="validate"
                                    >
                                    저장
                                    </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialogDelete" max-width="500px">
                        <v-card>
                            <v-card-title class="headline">삭제하시겠습니까?</v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeDelete">취소</v-btn>
                                <v-btn color="primary"  @click="deleteItemConfirm">삭제</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
            <v-icon
                small
                class="mr-2"
                @click="editItem(item)"
            >
                mdi-pencil
            </v-icon>
            <v-icon
                small
                @click="deleteItem(item)"
            >
                mdi-delete
            </v-icon>
            </template>
        </v-data-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            dialogDelete: false,
            valid: true,
            headers: [
                { text: '번호', align: 'center', sortable: true, value: 'menuSeq'},
                { text: '메뉴명',  value: 'menuNm' ,sortable: false,},
                { text: 'Page URL', value: 'pageUrl' },
                { text: '아이콘(mdi)', value: 'menuIcon' },
                { text: 'Actions', value: 'actions', sortable: false }
            ],
            editedIndex: -1,
            editedItem: {
                menuSeq: '',
                menuNm: '',
                pageUrl: '',
                menuIcon: '',
            },
            defaultItem: {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0,
            },
        }
    },
    created() {
        this.$store.dispatch('menu/selectMenuList')
    },
    methods: {
        editItem (item) {
            this.editedIndex = this.menus.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem (item) {
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm () {
            this.$store.dispatch('menu/deleteMenu',this.editedItem)
            this.closeDelete()
        },

        close () {
            this.dialog = false
            this.$nextTick(() => {
                this.editedIndex = -1
                this.reset()
            })
        },

        closeDelete () {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save () {
            if (this.editedIndex > -1) {
                this.$store.dispatch('menu/updateMenu', this.editedItem)
            } else {
                this.$store.dispatch('menu/insertMenu', this.editedItem)
            }
            this.close()
        },
        validate () {
            if(this.$refs.form.validate()) {
                this.save();
            }
        },
        reset () {
            this.$refs.form.reset()
        }
    },
    computed: {
        formTitle () {
            return this.editedIndex === -1 ? 'New Menu' : 'Edit Menu'
        },
        menus () {
            return this.$store.state.menu.items
        }
        
    },
    watch: {
        dialog (val) {
        val || this.close()
        },
        dialogDelete (val) {
        val || this.closeDelete()
        }
    }
}
</script>