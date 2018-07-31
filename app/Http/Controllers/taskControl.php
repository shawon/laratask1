<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;
use Dotenv\Validator;

class taskControl extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');

    }

    public function fetchTask()
    {
        $tasks = Task::all();
        return $json = json_encode($tasks);
    }

    public function singleTask($id)
    {
        $task = Task::find($id);
        return $json = json_encode($task);
    }

    public function deleteTask($id)
    {
        Task::findOrFail($id)->delete();
    }

    public function insertTask(Request $request)
    {
        $task = new Task;
        $task->name = $request->name;
        $task->assigned_by = $request->assigned_by;
        $task->assigned_to = $request->assigned_to;
        $task->tags = $request->tags;
        $task->save();
    }

    public function updateTask(Request $request)
    {
        $task = Task::find($request->id);
        $task->name = $request->name;
        $task->assigned_by = $request->assigned_by;
        $task->assigned_to = $request->assigned_to;
        $task->tags = $request->tags;
        $task->save();
    }
}
