<?php
$paper_id = isset($_POST['paper_id']) ? htmlspecialchars($_POST['paper_id']) : '';
$link = mysqli_connect("server.acemap.cn:13306", 'ee101_web', 'ee101_web', 'ee101_web');
$link->set_charset("utf8");
$result = mysqli_query($link, "SELECT * from paper where paper_id='$paper_id'");
if ($result) {
  $paper = mysqli_fetch_array($result);
  echo json_encode($paper);
}
?>