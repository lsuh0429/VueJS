<template>
    <b-card style="margin-bottom: 2rem;" v-if="isEdit">
        <div>
            <b-form ref="insertForm" @submit.stop.prevent="onSubmit">
                <b-form-group
                    id="pageNmInput"
                    label="페이지명(*)"
                    label-for="pageNm"
                >
                    <b-form-input
                    id="pageNm"
                    name="pageNm"
                    v-model="editedItem.pageNm"
                    type="text"
                    v-validate="{ required: true }"
                    :state="validateState('pageNm')"
                    ></b-form-input>
                    <b-form-invalid-feedback id="input-live-feedback">
                        필수항목입니다.
                    </b-form-invalid-feedback>
                </b-form-group>

                <b-form-group id="urlInput" label="페이지URL(*)" label-for="url">
                    <b-form-input
                    id="url"
                    name="url"
                    v-model="editedItem.url"
                    v-validate="{ required: true }"
                    :state="validateState('url')"
                    ></b-form-input>
                    <b-form-invalid-feedback id="input-live-feedback">
                        필수항목입니다.
                    </b-form-invalid-feedback>
                </b-form-group>

                <b-form-group id="btnIdInput" label="Button ID" label-for="btnId">
                    <b-form-input
                    id="btnId"
                    v-model="editedItem.btnId"
                    ></b-form-input>
                </b-form-group>
                
                <div style="text-align: center;">
                    <b-button type="submit" variant="primary">저장</b-button>
                    <b-button  variant="danger" @click="closeEdit">취소</b-button>
                </div>
            </b-form>
        </div>
    </b-card>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
    data() {
        return {
            editedItem: {
            pageNm: '',
            url: '',
            btnId: '',
            },
            editedIndex: -1
        }
    },
    created() {
        eventBus.$on('editedIndex', (data) => {
            this.editedIndex = data
        })
        eventBus.$on('editedItem', (data) => {
            this.editedItem = data
        })
    },
    computed: {
        isEdit() {
            this.$validator.pause();
            this.$nextTick( () => {
                this.$validator.resume();
            })
            return this.$store.state.page.isEdit
        }
    },
    methods: {
        closeEdit() {
            this.onReset()
            this.$store.commit('page/closeEdit')
        },
        save() {
            if (this.editedIndex > -1) {
                this.$store.dispatch('page/updatePage', this.editedItem)
                this.closeEdit()
            } else {
                this.$store.dispatch('page/insertPage', this.editedItem)
                this.closeEdit()
            }
        },
        onReset() {
            //event.preventDefault()
            //this.$refs.insertForm.reset()
            this.editedItem.pageNm = ''
            this.editedItem.url = ''
            this.editedItem.btnId = ''
        },
        onSubmit() {
            this.$validator.validateAll().then(result => {
                if (!result) {
                    return;
                }
                this.save()
            });
        },
        validateState(ref) {
            if (
                this.veeFields[ref] &&
                (this.veeFields[ref].dirty || this.veeFields[ref].validated)
            ) {
                return !this.veeErrors.has(ref);
            }
            return null;
        }
    }
}
</script>

<style>

</style>