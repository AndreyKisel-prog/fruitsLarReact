<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="css/app.css">
    <title>Fruits</title>
</head>
<body>
<div id="root" fruits='{{ $fruits }}'></div>
</body>
<script src="js/app.js"></script>
</html>
