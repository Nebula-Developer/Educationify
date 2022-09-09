<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Headers: *");

    // check if ?write is set
    if (isset($_GET['write'])) {
        if (isset($_POST['data'])) {
            $data = $_POST['data'];
            // check if amount of { is equal to amount of }
            if (substr_count($data, '{') == substr_count($data, '}')) {
                file_put_contents('data.json', $data);
                echo "WROTE DATA";
            } else {
                echo "INVALID DATA";
            }
        } else {
            echo "NO WRITE DATA";
        }
    } else if (isset($_GET['get_data'])) {
        echo file_get_contents('data.json');
    } else if (isset($_GET['read'])) {
        if (isset($_POST['data'])) {
            $file = file_get_contents($_POST['data']);
            if ($file) {
                echo $file;
            } else {
                echo "FILE NOT FOUND";
            }
        } else {
            echo "NO READ DATA";
        }
    } else {
        echo "NO DATA";
    }
?>

<!-- PHP_SEGMENT_END -->
<br />
<p>This file is a PHP server file. It is not meant to be viewed in a browser.</p>
<p>To use Educationify, please add the userscript, and then open an supported page.</p>