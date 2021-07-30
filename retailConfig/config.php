<?php 
//  $base_url = 'https://uatweb.sbigeneral.in';
//  $api_url = "http://localhost:1337";
//  $trans_api_base_url = 'https://uatweb.sbigeneral.in/buy-online';
//  $media_base_path = "http://uatcontent.sbigeneral.in";

$base_url = 'https://www.sbigeneral.in/portal';
$api_url = "http://localhost:1337";
$trans_api_base_url = 'https://www.sbigeneral.in/portal/buy-online';
$media_base_path = "https://content.sbigeneral.in";
$asset_path = "../retailConfig/assets";

function isMobile(){
	return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
}

function getHeaderMenu()
{
	global $api_url;
	$url = $api_url."/menucategories?menu_type=HeaderMenu";
    $ch = curl_init();  
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
//  curl_setopt($ch,CURLOPT_HEADER, false); 
    $output=curl_exec($ch); 
    curl_close($ch);
    // echo '<pre>';
    // print_r($output);die;
    $output = json_decode($output,true);
    $data = array();
    if(!empty($output)){
    	$data = $output[0]['sub_menu_items'];
    }
    return $data;
}

function getFooterTopMenu()
{
	global $api_url;
	$url = $api_url."/menucategories?menu_type=FooterTopMenu&_sort=display_order:ASC";
    $ch = curl_init();  
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
//  curl_setopt($ch,CURLOPT_HEADER, false); 
    $output=curl_exec($ch); 
    curl_close($ch);
    // echo '<pre>';
    // print_r($output);die;
    $output = json_decode($output,true);
    $data = array();
    if(!empty($output)){
    	$data = $output[0]['sub_menu_items'];
    }
    return $data;
}

function getFooterMenu()
{
	global $api_url;
	$url = $api_url."/menucategories?menu_type=FooterMenu&_sort=display_order:ASC";
    $ch = curl_init();  
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
//  curl_setopt($ch,CURLOPT_HEADER, false); 
    $output=curl_exec($ch); 
    curl_close($ch);
    // echo '<pre>';
    // print_r($output);die;
    $output = json_decode($output,true);
    $data = array();
    if(!empty($output)){
    	$data = $output;
    }
    return $data;
}

function getKeyword()
{
	global $api_url;
	$url = $api_url."/productdetailtranslations?language_eq=en&Name_eq=WeProtectYouResourcesData";
    $ch = curl_init();  
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
//  curl_setopt($ch,CURLOPT_HEADER, false); 
    $output=curl_exec($ch); 
    curl_close($ch);
    // echo '<pre>';
    // print_r($output);die;
    $output = json_decode($output,true);
    $data = array();
    /*if(!empty($output)){
    	$data = $output[0]['sub_menu_items'];
    }*/
    return $output;
}
