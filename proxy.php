<?php

////header('Content-type: application/xml');
//
//$url = 'http://newsapi.org/v2/top-headlines?country=in&apiKey=1de7475b68d64bfbbac7b9ced5a61047';
//// echo $url;
//$handle = fopen($url, "r");
//if ($handle) {
////    while(!feof($handle)){
////        $buffer=fgets($handle,4096);
////        echo $buffer;
////    }
//    $returnValue = '';
//    while ($line = fgets($handle)) {
//        $returnValue = $returnValue . $line;
//    }
//    echo $returnValue;
//    fclose($handle);

class crossOriginProblemSolver {

    var $apiKey = '1de7475b68d64bfbbac7b9ced5a61047';
    var $countryName, $newsPortalName;

    public function __construct($countryName, $newsPortalName) {
        $this->countryName = $countryName;
        $this->newsPortalName = $newsPortalName;
    }

    public function urlGenaretor() {
        $url = '';
        if ($this->newsPortalName == '') {
            $url = 'http://newsapi.org/v2/top-headlines?country=' . $this->countryName . '&apiKey=' . $this->apiKey;
        } else {
            $url = 'http://newsapi.org/v2/top-headlines?sources=' . $this->newsPortalName . '&apiKey=' . $this->apiKey;
        }
        return $url;
    }

    public function fetchData() {
        $returnData = '';
        $file = fopen($this->urlGenaretor(), 'r');
        if ($file) {
            while ($line = fgets($file)) {
                $returnData = $returnData . $line;
            }            
            fclose($file);
        } else {
            $returnData = 'Warning';
        }
        echo $returnData;
    }

}

if (isset($_GET['country']) && isset( $_GET['portal'])) {
    $proxyGiver=new crossOriginProblemSolver($_GET['country'],$_GET['portal']);
    $proxyGiver->fetchData();
} else {
    echo 'Warning';
}
?>

