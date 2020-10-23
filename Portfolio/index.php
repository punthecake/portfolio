<?php
$page = (isset($_GET['page']) && $_GET['page'] != '') ? $_GET['page']: '';
?>
<html>
<head>
    <title> Portfolio | Jubelag</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500;700&display=swap" rel="stylesheet">
</head>
    <body>
        <div class="wrapper">
        <div class="navbar">
            <a href="index.php?page=home">Home</a>
            <div class="dropdown">
            <button class="dropbtn">Learning Evidences</button>
            <div class="dropdown-content">
            <a href="LE/CLE1/index.php" target="_blank">CLE1</a>
            </div>
            </div>
            <div class="dropdown">
            <button class="dropbtn">Learning Tasks</button>
            <div class="dropdown-content">
            <a href="index.php?page=LT2_2">Learning Task 2.2(Prelim)</a>
            <a href="index.php?page=LT2_3">Learning Task 2.3(Prelim)</a>
            <a href="index.php?page=LT3_2">Learning Task 3.2(Prelim)</a>
            <a href="index.php?page=LT3_3">Learning Task 3.3(Prelim)</a>
            <a href="index.php?page=LT4_1">Learning Task 4.1(Prelim)</a>
            <a href="https://jubelag-engage-svg.herokuapp.com" target="_blank">Learning Task 5.4(Midterm)</a>
            <a href="index.php?page=LE6_1">Learning Task 6.1(Midterm)</a>
            <a href="index.php?page=LE6_2">Learning Task 6.2(Midterm)</a>
    
            </div>
            </div>
        </div>
        <div class="content">
        <?php
        switch($page){
            case 'LT2_2':
                require_once ('LT2_2.php');
            break;
            case 'LT2_3':
                require_once ('LT2_3.php');
            break;
            case 'LT3_2':
                require_once ('LT3_2.php');
            break;
            case 'LT3_3':
                require_once ('LT3_3.php');
            break;
            case 'LT4_1':
                require_once ('LT4_1.php');
            break;
            case 'LE6_1':
                require_once ('LE6_1.php');
            break;
            case 'LE6_2':
                require_once ('LE6_2.php');
            break;
            default:
                require_once ('home.php');
            break;
        }
        ?>
        </div>
        <div class="footer">
        <p>Jubelag, Francisco XV © 2020</p>
        </div>
        </div>
    </body>
</html>