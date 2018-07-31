<!DOCTYPE html>
<html lang="en">
<head>
    <title>LaraTask1</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- CSS And JavaScript -->
    <link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap/dist/css/bootstrap.min.css"/>
    <link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/datatables/1.10.12/css/jquery.dataTables.min.css" type="text/css" rel="stylesheet">
</head>

<body>
<div class="container">
    <nav class="navbar navbar-default">
        <!-- Navbar Contents -->
    </nav>
</div>

    <!-- Using value -->

@yield('content')
<script src="//unpkg.com/axios/dist/axios.min.js"></script>
<script type = "text/javascript" src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script type = "text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/datatables/1.10.12/js/jquery.dataTables.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
<script src="//unpkg.com/babel-polyfill@latest/dist/polyfill.min.js"></script>
<script src="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.js"></script>
<script src="{{ asset('/js/app.js') }}"></script>

</body>
</html>