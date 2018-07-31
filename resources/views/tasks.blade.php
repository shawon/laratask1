@extends('layouts.app')

@section('content')

    <!-- Bootstrap Boilerplate... -->
    <div class="container" id="app">

        <div class="panel-body">
            <div class="form-group">
                <b-button variant="primary" href="/laratask/public/logout">logout</b-button>
            </div>
            <div class="form-group">
                <b-btn  variant="success" v-b-modal="'newTask'">New Task</b-btn>
            </div>
            <!-- the modal -->
            <add-task-modal></add-task-modal>
            <!-- Display Validation Errors -->
        @include('common.errors')

        <!-- New Task Form -->
        </div>
        <!-- Current Tasks -->
        @if (count($tasks) > 0)
            <div class="panel panel-default">
                <div class="panel-heading">
                    Current Tasks
                </div>

                <div class="panel-body">
                    <task-table ref="tasktable"></task-table>
                </div>
            </div>
        @endif
    </div>

@endsection