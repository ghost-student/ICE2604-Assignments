<html>

<head>
    <meta charset="utf-8">
    <title>Website Assignment Page 1</title>
    <style type="text/css">
        h1 { text-align: center; }
    </style>
    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>

<body>
    <h1>Page 1</h1>
    <?php
    $a = array();
    for ($b = 0; $b < 10; $b = $b + 1) {
        $k = 0;
        $f = 1;
        do {
            $k = mt_rand(0, 9999);
            $f = 1;
            for ($c = 0; $c < $b; $c = $c + 1) {
                if ($k === $a[$c]) {
                    $f = 0;
                }
            }
        } while ($f === 0);
        $a[] = $k;
    }
    ?>
    
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
            <?php
            $link = mysqli_connect("server.acemap.cn:13306", 'ee101_web', 'ee101_web', 'ee101_web');
            $link->set_charset("utf8");
            for ($i = 0; $i < 10; $i += 1) {
                $result = mysqli_query($link, "SELECT * from paper where paper_id='$a[$i]'");
                if ($result) {
                    $paper = mysqli_fetch_array($result);
                    echo "<tr>";
                    echo "<td>" . $paper['paper_id'] . "</td>";
                    echo "<td>" . $paper['title'] . "</td>";
                    echo "<td>" . $paper['year'] . "</td>";
					echo "<td>";
                    echo str_replace(',', "<br>", str_replace("\"", '', 
                        str_replace("[", '', str_replace("]", '', $paper['authors']))));
					echo "</td>";
					echo "<td>";
                    echo str_replace(',', "<br>", str_replace("\"", '', 
                        str_replace("[", '', str_replace("]", '', $paper['keywords']))));
					echo "</td>";
                    echo "<td>" . $paper['venue'] . "</td>";
                    echo "</tr>";
                }
            }
            ?>
        </tbody>
    </table>
</body>

</html>