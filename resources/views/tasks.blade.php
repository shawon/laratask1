@extends('layouts.app')

@section('content')

        <!-- Bootstrap Boilerplate... -->
<div class="container" id="app">
<div class="panel-body">
    <div class="form-group">
    <b-button variant="primary" href="/logout">logout</b-button>
    </div>
    <div class="form-group">
    <b-btn  variant="success" v-b-modal="'newTask'">New Task</b-btn>
    </div>
    <!-- the modal -->
    <b-modal id="newTask" title="New Task?">
        <form id="addForm" action="/task" method="POST" class="form-horizontal" @submit.prevent="addTask">
        {{ csrf_field() }}
            <div class="form-group">
                <label for="task" class="col-sm-3 control-label">Task</label>

                <div class="col-sm-12">
                    <input type="text" name="name" v-model="name" id="task-name" class="form-control">
                </div>
            </div>
            <div class="form-group">
                <label for="assigned_to" class="col-sm-3 control-label">Assigned To</label>

                <div class="col-sm-12">
                    <input type="text" name="assigned_to" v-model="assigned_to" id="assigned_to" class="form-control">
                </div>
            </div>
            <div class="form-group">
                <label for="assigned_by" class="col-sm-3 control-label">Assigned By</label>

                <div class="col-sm-12">
                    <input type="text" name="assigned_by" v-model="assigned_by" id="assigned_by" class="form-control">
                </div>
            </div>
            <div class="form-group">
                <label for="tags" class="col-sm-3 control-label">Tags</label>

                <div class="col-sm-12">
                    <input type="text" name="tags" v-model="tags" id="tags" class="form-control">
                </div>
            </div>

            <!-- Add Task Button -->
            <div class="form-group">
                <div class="col-sm-offset-3 col-sm-6">
                    <button type="submit" class="btn btn-success">
                        <i class="fa fa-plus"></i> Add Task
                    </button>
                </div>
            </div>

        </form>
        <div slot="modal-footer" class="w-100">
            <p class="float-left"></p>


        </div>
    </b-modal>
    <!-- Display Validation Errors -->
    @include('common.errors')

            <!-- New Task Form -->
</div>
</div>
<div class="container"><!-- Current Tasks -->
@if (count($tasks) > 0)
    <div class="panel panel-default">
        <div class="panel-heading">
            Current Tasks
        </div>

        <div class="panel-body">
            <table class="table table-striped task-table">
                <thead>
                <th>Task</th>
                <th>Assigned By</th>
                <th>Assigned To</th>
                <th>Tags</th>
                <th>Created</th>
                <th>&nbsp;</th>
                </thead>
                <tbody>
                @foreach ($tasks as $task)
                    <tr>
                        <td class="table-text"><div>{{ $task->name }}</div></td>
                        <td class="table-text"><div>{{ $task->assigned_by }}</div></td>
                        <td class="table-text"><div>{{ $task->assigned_to }}</div></td>
                        <td class="table-text"><div>{{ $task->tags }}</div></td>
                        <td class="table-text"><div>{{ $task->created_at }}</div></td>

                        <!-- Task Delete Button -->
                        <td>
                            <form action="{{ url('task/'.$task->id) }}" method="POST">
                                {{ csrf_field() }}
                                {{ method_field('DELETE') }}

                                <button type="submit" class="btn btn-danger">
                                    <i class="fa fa-btn fa-trash"></i>Delete
                                </button>
                            </form>
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    </div>
    @endif
    </div>
    @endsection