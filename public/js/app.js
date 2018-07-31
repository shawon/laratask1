Vue.component("add-task-modal",{
    data() {
        return {
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            name:'',assigned_by:'',assigned_to:'',tags:''
        }
    },
    template:'<b-modal id="newTask" title="New Task?">\n' +
    '                <form id="addForm" action="/task" method="POST" class="form-horizontal" @submit.prevent="addTask">\n' +
    '                    <input type="hidden" name="_token" :value="csrf">\n' +
    '                    <div class="form-group">\n' +
    '                        <label for="task" class="col-sm-3 control-label">Task</label>\n' +
    '\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="text" name="name" v-model="name" id="task-name" class="form-control">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label for="assigned_to" class="col-sm-3 control-label">Assigned To</label>\n' +
    '\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="text" name="assigned_to" v-model="assigned_to" id="assigned_to" class="form-control">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label for="assigned_by" class="col-sm-3 control-label">Assigned By</label>\n' +
    '\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="text" name="assigned_by" v-model="assigned_by" id="assigned_by" class="form-control">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label for="tags" class="col-sm-3 control-label">Tags</label>\n' +
    '\n' +
    '                        <div class="col-sm-12">\n' +
    '                            <input type="text" name="tags" v-model="tags" id="tags" class="form-control">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <!-- Add Task Button -->\n' +
    '                    <div class="form-group">\n' +
    '                        <div class="col-sm-offset-3 col-sm-6">\n' +
    '                            <button type="submit" class="btn btn-success">\n' +
    '                                <i class="fa fa-plus"></i> Add Task\n' +
    '                            </button>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                </form>\n' +
    '                <div slot="modal-footer" class="w-100">\n' +
    '                    <p class="float-left"></p>\n' +
    '\n' +
    '\n' +
    '                </div>\n' +
    '            </b-modal>',
    methods: {
    addTask: function () {
        // make ajax request and pass the data. I'm not certain how to do it with axios but something along the lines of this
        axios.post('task/', {
            name: this.name,
            assigned_to: this.assigned_to,
            assigned_by: this.assigned_by,
            tags: this.tags
        });
        this.hideModal();
        this.name='';
        this.assigned_to='';
        this.assigned_by='';
        this.tags='';
        //this.fetchTask();
        //this.hideModal();
        vm.$refs.tasktable.getData();
    },
    fetchTask: function () {
        // make ajax request and pass the data. I'm not certain how to do it with axios but something along the lines of this
        axios.get('/fetchtask/');
    },
    showModal: function () {
        this.$root.$emit('bv::show::modal','newTask')
    },
    hideModal: function () {
        this.$root.$emit('bv::hide::modal','newTask')
        }
}
});







Vue.component("task-table",{
    data() {
        return {
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            tasklists:[],taskid:'',name:'',assigned_to:'',assigned_by:'',tags:''

        }
    },
template:'<div><table class="table table-striped task-table">\n' +
'                        <thead>\n' +
'                        <th>Task</th>\n' +
'                        <th>Assigned By</th>\n' +
'                        <th>Assigned To</th>\n' +
'                        <th>Tags</th>\n' +
'                        <th>Created</th>\n' +
'                        <th>&nbsp;</th>\n' +
'                        </thead>\n' +
'                        <tbody>\n' +
'                            <tr v-for="tasklist in tasklists">\n' +
'                                <td class="table-text"><div> {{ tasklist.name }}</div></td>\n' +
'                                <td class="table-text"><div>{{ tasklist.assigned_by }}</div></td>\n' +
'                                <td class="table-text"><div>{{ tasklist.assigned_to }}</div></td>\n' +
'                                <td class="table-text"><div>{{ tasklist.tags }}</div></td>\n' +
'                                <td class="table-text"><div>{{ tasklist.created_at }}</div></td>\n' +
'\n' +
'                                <!-- Task Delete Button -->\n' +
'                                <td>\n' +
'                                    <form method="POST" @submit.prevent="deleteTask(`${tasklist.id}`)">\n' +
'                                        <button type="submit" class="btn btn-danger">\n' +
'                                            <i class="fa fa-btn fa-trash"></i>Delete\n' +
'                                        </button>\n' +
'                                    </form>\n' +
'                                    <form method="POST" @submit.prevent="editTask(`${tasklist.id}`)">\n' +
'                                        <button type="submit" class="btn btn-success">\n' +
'                                            <i class="fa fa-btn fa-pen"></i>Edit\n' +
'                                        </button>\n' +
'                                    </form>\n' +
'                                </td>\n' +
'                            </tr></tbody>\n' +
'                        </tbody>\n' +
'                    </table>\n'+'<b-modal id="editTask" title="Edit Task?">\n' +
'                <form id="addForm" action="/task" method="POST" class="form-horizontal" @submit.prevent="updateTask">\n' +
'                    <input type="hidden" name="_token" :value="csrf"><input type="hidden" name="taskid" v-model="taskid">\n' +
'                    <div class="form-group">\n' +
'                        <label for="task" class="col-sm-3 control-label">Task</label>\n' +
'\n' +
'                        <div class="col-sm-12">\n' +
'                            <input type="text" name="name" v-model="name" id="task-name" class="form-control">\n' +
'                        </div>\n' +
'                    </div>\n' +
'                    <div class="form-group">\n' +
'                        <label for="assigned_to" class="col-sm-3 control-label">Assigned To</label>\n' +
'\n' +
'                        <div class="col-sm-12">\n' +
'                            <input type="text" name="assigned_to" v-model="assigned_to" id="assigned_to" class="form-control">\n' +
'                        </div>\n' +
'                    </div>\n' +
'                    <div class="form-group">\n' +
'                        <label for="assigned_by" class="col-sm-3 control-label">Assigned By</label>\n' +
'\n' +
'                        <div class="col-sm-12">\n' +
'                            <input type="text" name="assigned_by" v-model="assigned_by" id="assigned_by" class="form-control">\n' +
'                        </div>\n' +
'                    </div>\n' +
'                    <div class="form-group">\n' +
'                        <label for="tags" class="col-sm-3 control-label">Tags</label>\n' +
'\n' +
'                        <div class="col-sm-12">\n' +
'                            <input type="text" name="tags" v-model="tags" id="tags" class="form-control">\n' +
'                        </div>\n' +
'                    </div>\n' +
'\n' +
'                    <!-- Add Task Button -->\n' +
'                    <div class="form-group">\n' +
'                        <div class="col-sm-offset-3 col-sm-6">\n' +
'                            <button type="submit" class="btn btn-success">\n' +
'                                <i class="fa fa-plus"></i> Update Task\n' +
'                            </button>\n' +
'                        </div>\n' +
'                    </div>\n' +
'\n' +
'                </form>\n' +
'                <div slot="modal-footer" class="w-100">\n' +
'                    <p class="float-left"></p>\n' +
'\n' +
'\n' +
'                </div>\n' +
'            </b-modal></div>',
mounted() {
    this.getData();


},methods: {
        getData() {

            axios.get('fetchtask/').then(jsonData => {
                this.tasklists = jsonData.data;
            }).catch(e => {
                console.log('Error', e);
            });
        },deleteTask(taskId){
            axios({
                method: 'DELETE',
                url: 'task/'+taskId,
                data: {
                    _token: this.csrf
                }
            });
            this.getData();
        },editTask(taskId){
            this.$root.$emit('bv::show::modal','editTask')
            var context=this;
            axios({
                method: 'GET',
                url: 'task/'+taskId,
                data: {
                    _token: this.csrf
                }
            }).then(function(response) {
                context.name=response.data.name;
                context.assigned_by=response.data.assigned_by;
                context.assigned_to=response.data.assigned_to;
                context.taskid=response.data.id;
                context.tags=response.data.tags;
            });
            //this.getData();
        }, updateTask () {
            // make ajax request and pass the data. I'm not certain how to do it with axios but something along the lines of this
            axios.put('task/'+this.taskid, {
                name: this.name,
                assigned_to: this.assigned_to,
                assigned_by: this.assigned_by,
                tags: this.tags
            });
            this.$root.$emit('bv::hide::modal','editTask')
            this.name='';
            this.assigned_to='';
            this.assigned_by='';
            this.tags='';
            //this.fetchTask();
            //this.hideModal();
            this.getData();
        }
    }
});
var vm=new Vue({
    el: '#app'
});
