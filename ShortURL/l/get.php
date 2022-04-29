<?

    $links=parse_ini_file("links.ini");

    if(isset($_GET["test"]) && array_key_exists($_GET["test"],$links)){
        $link=$links[$_GET["test"]];
        $hostlink = $_SERVER["SERVER_NAME"]."/l/";
        while(str_contains($link,$hostlink))
            $link=$links[str_replace($hostlink,"",$link)];
        header("Location: ".$link);
    }    
    else{
        header("HTTP/1.0 404 Not Found".strval($_GET["test"]));
        echo "Unknown link";
    }
?>