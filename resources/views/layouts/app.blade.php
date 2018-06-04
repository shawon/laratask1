<!DOCTYPE html>
<html lang="en">
<head>
    <title>LaraTask1</title>

    <!-- CSS And JavaScript -->
    <link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap/dist/css/bootstrap.min.css"/>
    <link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css"/>
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
<script src="//cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
<script src="//unpkg.com/babel-polyfill@latest/dist/polyfill.min.js"></script>
<script src="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.js"></script>
<script src="{{ asset('/js/app.js') }}"></script>

</body>
</html>