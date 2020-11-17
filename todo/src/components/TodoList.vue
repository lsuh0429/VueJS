<template>
    <div>
        <Todo 
            v-for="todo in todos" 
            :key="todo.id" 
            :todo="todo"
            @toggle-checkbox="toggleCheckbox"
            @click-delete="deleteTodo"
    />
    </div>
   
</template>

<script>
import Todo from '@/components/Todo.vue';

export default {
    components: {
      Todo  
    },
    methods: {
        toggleCheckbox(value) {
            //this.$emit('toggle-checkbox', value);
            this.$store.commit('TOGGLE_TODO', value)
        },
        deleteTodo(todoId) {
            //this.$emit('click-delete', todoId);
            this.$store.commit('DELETE_TODO', todoId)
        }
    },
    computed: {
        todos() {
            return this.$store.state.todos;
        }
    }
}
</script>

<style>

</style>