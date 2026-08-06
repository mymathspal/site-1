<?php

$formData = json_decode(file_get_contents("php://input"),true);

    http_response_code(204);

var_dump($formData);