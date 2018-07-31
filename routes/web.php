<?php
use App\Task;
use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('/task', 'taskControl@insertTask')->middleware('auth');

Route::delete('/task/{id}', 'taskControl@deleteTask',['$id'])->middleware('auth');

Route::get('/task/{id}', 'taskControl@singleTask',['$id'])->middleware('auth');

Route::put('/task/{id}', 'taskControl@updateTask')->middleware('auth');


Route::get('/', function () {
    $tasks = Task::orderBy('created_at', 'asc')->get();

    return view('tasks', [
        'tasks' => $tasks
    ]);
})->middleware('auth');


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/logout', function () {
    Auth::logout();
    return redirect('/');
});

Route::get('/fetchtask', 'taskControl@fetchTask')->middleware('auth');
