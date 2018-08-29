<?php

require_once "mylib/Page.php";

class ThisPage extends mylib\Page {
    public function title() { echo "Home Page"; }

    public function content() { echo "Main Content"; }

}

$page = new ThisPage();
$page->generate();
