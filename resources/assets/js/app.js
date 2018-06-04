var app = new Vue({
    el: '#app'
})
var form=new Vue({
    el: '#addForm',
    data: {
        name: '', // initialise this to an empty string
        assigned_by: '', // same thing
        assigned_to: '', // same thing
        tags: '', // same thing
    },

    methods: {
        addTask() {
            // make ajax request and pass the data. I'm not certain how to do it with axios but something along the lines of this
            axios.post('/task/', {
                name: this.name,
                assigned_to: this.assigned_to,
                assigned_by: this.assigned_by,
                tags: this.tags
            });
            this.
        },
        hideModal () {
            this.$refs.newTask.hide()
        }

    }
});