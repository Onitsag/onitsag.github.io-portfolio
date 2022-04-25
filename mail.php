

<?php

$name = strip_tags($_POST["name"]);
$email = strip_tags($_POST["email"]);
$subject = strip_tags($_POST["subject"]);
$msg = strip_tags($_POST["msg"]);

$mailheader = "De:".$name."<".$email.">\r\n";

$desti = "gasti.tim@gmail.com";

mail($desti, $subject, "Message provenant du Portfolio. Expéditeur : ".$name." Email :".$email."\r\n".$msg, $mailheader) or die("Erreur.");

echo'

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <link rel="stylesheet" href="css/style.css" type="text/css" />

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css">

    <title>Onitsag - Portfolio</title>

</head>
<body>
    <div class="container">
        <h1>Message envoyé !</h1>
        <p>Retour au <a href="index.html">Site</a>.</p>
    </div>
</body>
</html>

';

?>