<?

    function save($url){
        $links=parse_ini_file("l/links.ini");
        $syn_link="";
        if(in_array($url,$links)){
            $syn_link = array_search($url,$links);
        }
        else{
         //   $syn_link = substr( md5(time()),0,6);

            do{
                $syn_link = substr( md5(time()),0,6);

            }while(array_key_exists($syn_link,$links));
            $ini_file = fopen("l/links.ini","a");
            fwrite($ini_file,"\n".$syn_link." = ".$url);
        }

        return $_SERVER["SERVER_NAME"]."/l/".$syn_link;

    }

    if(isset($_POST["url"])){
        $url=$_POST["url"];
        echo save($url);
    }

?>