<?php
$tel=$_POST['t'];
$name=$_POST['n'];
$email=$_POST['e'];

$row='<div class="row">';
$col4='<div class="col-sm-4">';
$col8='<div class="col-sm-8">';

$output='<div class="container resp">';
$output.=$row.$col4.'<strong>Имя:</strong></div>'.$col8.$name.'</div></div>';
$output.=$row.$col4.'<strong>Тел.:</strong></div>'.$col8.$tel.'</div></div>';
$output.=$row.$col4.'<strong>email:</strong></div>'.$col8.$email.'</div></div>';
$output.='<div class="row justify-content-center"><div class="col-8"><div class="clearbutton">Сбросить</div></div></div>';
$output.='</div>';

echo $output;
?>