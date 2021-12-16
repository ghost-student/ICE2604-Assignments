<html>

<head>
    <meta charset="utf-8">
    <title>Website Assignment Page 2</title>
    <style type="text/css">
        h1 { text-align: center; }
        div { text-align: center; }
    </style>
    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>

<body>
    <h1>Page 2</h1>
    <div>
        Paper ID: <input type="text" id="submit" name="submit">
        <button class="btn btn-primary">Submit</button>
    </div>
    <table border=1 class="table table-striped table-hover">
        <thead class="thead-dark">
            <tr>
                <th>Paper ID</th>
                <th style="width:30%">Title</th>
                <th style="width:5%">Year</th>
                <th style="width:20%">Authors</th>
                <th style="width:20%">Keywords</th>
                <th>Venue</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td id="paper_id"></td>
                <td id="title" ></td>
                <td id="year"></td>
                <td id="authors"></td>
                <td id="keywords"></td>
                <td id="venue"></td>
            </tr>
        </tbody>
    </table>

    <script>
    $(document).ready(function() {
        function show_array(array) {
            string = ""
            for (elem of array)
                string += elem + "<br>"
            return string
        }
        $("table").hide()
        $("button").click(function(){
            $.post("search.php", {
                paper_id: $("#submit").val()
            },
            function(data) {
                $("table").show()
                $("#paper_id").html(data.paper_id)
                $("#title").html(data.title)
                $("#year").html(data.year)
                $("#authors").html(show_array(eval(data.authors)))
                $("#keywords").html(show_array(eval(data.keywords)))
                $("#venue").html(data.venue)
            }, "json")
        })
    })
    </script>
</body>

</html>