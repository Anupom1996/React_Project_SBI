<?php 
require "../retailConfig/config.php";
$isMobile = isMobile();
$page = "";
	$ch = curl_init();
	$curlConfig = array(
		CURLOPT_URL            => "https://content.sbigeneral.in/translationkeywords?&_limit=2000",    
		CURLOPT_RETURNTRANSFER => true   
	);
	curl_setopt_array($ch, $curlConfig);
	$productArr = curl_exec($ch);
	curl_close($ch);
	$res = json_decode($productArr);
	$keyword_arr = [];
	foreach($res as $key => $val){
		$keyword_arr[$val->keyword]['content_en']=$val->content_en;
		$keyword_arr[$val->keyword]['content_hi']=$val->content_hi;
	}
  
if($_REQUEST['lang']=='hi'){
	$helmetData = "https://content.sbigeneral.in/productdetailtranslations?language_eq=hi&Name_eq=helmetData";
	$productData = "https://content.sbigeneral.in/productdetailtranslations?language_eq=hi&Name_eq=productData";
	$productRequestCallbackData = "https://content.sbigeneral.in/productdetailtranslations?language_eq=hi&Name_eq=productRequestCallbackData";
	$WeProtectYouResourcesData = "https://content.sbigeneral.in/productdetailtranslations?language_eq=hi&Name_eq=WeProtectYouResourcesData";
	$productRelatedResourcesData = "https://content.sbigeneral.in/productdetailtranslations?language_eq=hi&Name_eq=productRelatedResourcesData";	
}else{
	$helmetData = "https://content.sbigeneral.in/productdetailtranslations?language_eq=en&Name_eq=helmetData";
	$productData = "https://content.sbigeneral.in/productdetailtranslations?language_eq=en&Name_eq=productData";
	$productRequestCallbackData = "https://content.sbigeneral.in/productdetailtranslations?language_eq=en&Name_eq=productRequestCallbackData";
	$WeProtectYouResourcesData = "https://content.sbigeneral.in/productdetailtranslations?language_eq=en&Name_eq=WeProtectYouResourcesData";
	$productRelatedResourcesData = "https://content.sbigeneral.in/productdetailtranslations?language_eq=en&Name_eq=productRelatedResourcesData";
}
if(strpos($_SERVER['REQUEST_URI'],'travel-insurance') !== false){
  $page = 'travel-insurance';
} else if(isset($_REQUEST['page']) && !empty($_REQUEST['page'])){
  $page = $_REQUEST['page'];
}
if($page=='health-insurance'){
  header('Location:'.$base_url.'/health-insurance/retail-health');
  exit();
}

######################### Helmet Data #########################
//$helmetArr = json_decode(file_get_contents('../retailConfig/resource/helmetData.json'),true);
$ch = curl_init();
$curlConfig = array(
    CURLOPT_URL            => $helmetData,    
    CURLOPT_RETURNTRANSFER => true   
);
curl_setopt_array($ch, $curlConfig);
$helmetArr = curl_exec($ch);
curl_close($ch);
$res = json_decode($helmetArr);

$metaTitle = $metaKeyword = $metaDesc = '';
if(!empty($helmetArr)){
  foreach ($res[0]->filedata as $key => $value) {
    if (@$value->key == $page) {
      $metaTitle = $value->metaTitle;
      $metaKeyword = $value->keywords;
      $metaDesc = $value->metaDescription;
    }
  }
}

############################ Product Data ##############################
//$productArr = json_decode(file_get_contents('../retailConfig/resource/productData.json'),true);
$ch = curl_init();
$curlConfig = array(
    CURLOPT_URL            => $productData,    
    CURLOPT_RETURNTRANSFER => true   
);
curl_setopt_array($ch, $curlConfig);
$productArr = curl_exec($ch);
curl_close($ch);
$res = json_decode($productArr);
//echo '<pre>33';print_r($res[0]->filedata);die;
$productName = $productStickyName = [];
$productButtons = [];
$tabData = [];
foreach ($res[0]->filedata as $key => $value) {
	/******UNCOMMENT BELOW CONDITION*******/
  if ($value->key == $page) {
    $productName = $value->productName;
    $productStickyName = $value->productStickyName;
    $productButtons = $value->buttons;
    $tabData = $value->tabData;
  }
}

//remove trailing slash from uri
if(!empty($_SERVER['QUERY_STRING'])){
  if( ($_SERVER['REQUEST_URI'] != "/") and preg_match('{/$}',$_SERVER['REQUEST_URI']) ) {
    header ('Location: '.preg_replace('{/$}', '', $_SERVER['REQUEST_URI']));
    exit();
  }   
}

//echo '<pre>';print_r($productName);die;echo '</pre>';
if(empty($productName)) {
  header('Location:'.$base_url.'/not-found');
  exit();
} 

####################### Product Callback Data ###########################
//$callbackData = json_decode(file_get_contents('../retailConfig/resource/productRequestCallbackData.json'),true);
$ch = curl_init();
$curlConfig = array(
    CURLOPT_URL            => $productRequestCallbackData,    
    CURLOPT_RETURNTRANSFER => true   
);
curl_setopt_array($ch, $curlConfig);
$callbackData = curl_exec($ch);
curl_close($ch);
$res = json_decode($callbackData);
//echo '<pre>';print_r($res);echo '</pre>';die;
$productCName = $prodEventName = '';
foreach ($res[0]->filedata as $key => $value) {
  if ($value->key== $page) {
    $productCName = $value->productName;
    $prodEventName = $value->prodEventName;
  }
}

$heathProductArr = ['arogya-sanjeevani-policy','arogya-premier-policy','arogya-plus-policy','arogya-topup-policy','retail-health','critical-illness-insurance','hospital-daily-cash','group-health-insurance'];
$isHealthProduct = 'no';
if(in_array($page, $heathProductArr)){
  $isHealthProduct = 'yes';
}

$urlParent = $_SERVER['REQUEST_URI'];
$pageGroup = "";
if (strpos($urlParent, '/health-insurance') !== false) {
   $pageGroup = "health";
}
// echo $pageGroup;exit;
if($pageGroup == "health" && empty($productName)){
  $metaTitle = "Health Insurance, SBI General Insurance Company Limited";
  $metaKeyword = $metaDesc = '';
}

?>
<!doctype html>
<html lang="en">
<head>
    <base href="./">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
    <meta name="Keywords" content="<?php echo($metaKeyword);?>" />
    <meta name="Description" content="<?php echo $metaDesc;?>" />
    <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js"></script>
    <title><?php echo $metaTitle;?></title>
    <link href="<?php echo $asset_path;?>/css/bootstrap.css" rel="stylesheet" media="all">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/css/datepicker.css" rel="stylesheet" type="text/css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <?php if( empty($productName) ) { ?>
    <link href="<?php echo $asset_path;?>/css/landing_style.css" rel="stylesheet" media="all">
    <link href="<?php echo $asset_path;?>/css/landing_custom.css" rel="stylesheet" media="screen" />
    <link href="<?php echo $asset_path;?>/css/landing_responsive.css" rel="stylesheet" media="screen" />
    <link href="<?php echo $asset_path;?>/css/owl.carousel.min.css" rel="stylesheet" media="all">
    <link href="<?php echo $asset_path;?>/css/owl.theme.default.min.css" rel="stylesheet" media="all">
    <?php } else { ?>
    <link href="<?php echo $asset_path;?>/css/style.css" rel="stylesheet" media="all">
    <link href="<?php echo $asset_path;?>/css/custom.css" rel="stylesheet" media="screen" />
    <link href="<?php echo $asset_path;?>/css/responsive.css" rel="stylesheet" media="screen" />
    <?php } ?>    
    <script>
    !function (e, t, a, n, g) { e[n] = e[n] || [], e[n].push({ "gtm.start": (new Date).getTime(), event: "gtm.js" }); var m = t.getElementsByTagName(a)[0], r = t.createElement(a); r.async = !0, r.src = "https://www.googletagmanager.com/gtm.js?id=GTM-KTLFW3", m.parentNode.insertBefore(r, m) }(window, document, "script", "dataLayer")
  </script>
  <style type="text/css">
	body { background: #98dbf9; font-family: 'Open Sans', sans-serif; }
	
	/** Custom Select **/
	.custom-select-wrapper { position: relative; display: inline-block; user-select: none; }
	.custom-select-wrapper select { display: none; }
	.custom-select1 { position: relative; display: inline-block; }
	.custom-select-trigger { position: relative; display: block; width: 75px; padding: 0; font-size: 17px; font-weight: 600; color: #5c0566; line-height: 40px; background: #98dbf9; border-radius: 4px; cursor: pointer; margin: 0 20px; }
	.custom-select-trigger:after { position: absolute; display: block; content: ''; width: 8px; height: 8px; top: 50%; right: 2px; margin-top: -3px; border-bottom: 1px solid #5c0566; border-right: 1px solid #5c0566; transform: rotate(45deg) translateY(-50%); transition: all .4s ease-in-out; transform-origin: 50% 0; }
	.custom-select1.opened .custom-select-trigger:after { margin-top: 3px; transform: rotate(-135deg) translateY(-50%); }
	.custom-options { position: absolute; display: block; top: 100%; left: 0; right: 0; min-width: 100%; margin: 0; border-radius: 15px; box-sizing: border-box; box-shadow: 0 0 10px #639bb5; background: #fff; transition: all .4s ease-in-out; opacity: 0; visibility: hidden; pointer-events: none; transform: translateY(-15px); }
	.custom-select1.opened .custom-options { opacity: 1; visibility: visible; pointer-events: all; transform: translateY(0); }
	.custom-options:before { position: absolute; display: block; content: ''; bottom: 100%; right: 25px; width: 7px; height: 7px; margin-bottom: -4px; border-top: 1px solid #b5b5b5; border-left: 1px solid #b5b5b5; background: #fff; transform: rotate(45deg); transition: all .4s ease-in-out; display: none; }
	.option-hover:before { background: #f9f9f9; }
	.custom-option { position: relative; display: block; padding: 0 10px; font-size: 17px; font-weight: 600; color: #666666; line-height: 47px; cursor: pointer; transition: all .4s ease-in-out; }
	.custom-option:first-of-type { border-radius: 15px 15px 0 0; }
	.custom-option:last-of-type { border-bottom: 0; border-radius: 0 0 15px 15px; }
	.custom-option:hover, .custom-option.selection { background: #ececec; color: #5c0566; }
</style>

  <script type="text/javascript">
    var trans_api_base_url = '<?php echo $trans_api_base_url;?>';
    var is_health_product = '<?php echo $isHealthProduct ?>';

    // if(!sessionStorage.getItem('paramPage')){
    //   var search = location.search.substring(1);
    //   var paramPage = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
    //   sessionStorage.setItem('paramPage', JSON.stringify(paramPage));
    // }

    if(!sessionStorage.getItem('TRANSACTION_API_BASE_URL')){
      sessionStorage.setItem('TRANSACTION_API_BASE_URL', '<?php echo $trans_api_base_url;?>');
    }
    if(!sessionStorage.getItem('BASE_URL')){
      sessionStorage.setItem('BASE_URL', '<?php echo $base_url;?>');
    }

    sessionStorage.setItem('productSlug', '<?php echo $page;?>');
    sessionStorage.setItem('productCName', '<?php echo $productCName;?>');
    sessionStorage.setItem('prodEventName', '<?php echo $prodEventName;?>');

    function getQueryStrings() { 
      var assoc  = {};
      var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
      var queryString = location.search.substring(1); 
      var keyValues = queryString.split('&'); 

      for(var i in keyValues) { 
        var key = keyValues[i].split('=');
        if (key.length > 1) {
          assoc[decode(key[0])] = decode(key[1]);
        }
      } 

      return assoc; 
    } 
    let paramPage;
    if(sessionStorage.getItem('paramPage')){
      paramPage = sessionStorage.getItem('paramPage');
    } else {
      paramPage = getQueryStrings();
      sessionStorage.setItem('paramPage', JSON.stringify(paramPage));
    }

  </script>
</head>

<body class="other-page">
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KTLFW3" height="0" width="0"
            style="display:none;visibility:hidden"></iframe>
    </noscript>
    <noscript>SBI General Insurance</noscript>
<div id="root">
  <div class="react-wrapper">
<?php 

$headerMenuData = getHeaderMenu();
//echo'<pre>';print_r($headerMenuData); 
?>
<nav class="sbi-top-nav navbar navbar-expand navbar-light">
      <div class="container">
        <a class="navbar-brand" id="logo_click" href="<?php echo $base_url;?>/">
          <img alt="" src="<?php echo $asset_path;?>/images/logo.svg"></a>
        <div class="navbar-collapse collapse" id="basic-navbar-nav">
          <div class="mr-auto navbar-nav">
            <?php foreach ($headerMenuData as $key => $value) { ?>
             <a class="nav-link" href="<?php echo $base_url.$value['menu_link'];?>">
             <?php 
             if($_REQUEST['lang']=='hi'){
              echo ($value['title_hi'])? $value['title_hi']:$value['title'];
             }else{
              echo $value['title'];
             }             
             ?></a>
            <?php } ?>            
            </div>
          <div class="righthead d-flex">
            <ul class="linkninfo">
              <li class="call"><a class="nav-link" href="tel:18001021111" title="1800 102 1111"></a>
              </li>
              <li class="quickassist"><a class="nav-link" href="<?php echo $base_url;?>/buy-online/quick-assist" target="_blank" rel="noopener noreferrer">            
              </a></li>
              <li class="login"><a class="nav-link" href="<?php echo $base_url;?>/channel-partner-login">            
              </a></li>                  
            </ul>            
          </div>          
            <select name="sources" id="langsources" class="custom-select1 sources" placeholder="English" >
              <option value="en" <?php echo ($_GET['lang']=='en')?'selected':''; ?>>English</option>
              <option value="hi" <?php echo ($_GET['lang']=='hi')?'selected':''; ?>>हिन्दी</option>
            </select>
        </div>
        <button type="button" class="togglemeDeskTop btn btn-primary">
          <img alt="" src="<?php echo $asset_path;?>/images/menulines.svg"></button>
        <button type="button" class="toggleme btn btn-primary">
        <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['HOME_TAB_MENU']['content_hi']:$keyword_arr['HOME_TAB_MENU']['content_en'];
			  ?>
        </button>
      </div>
    </nav>
    <section class="menuProduct" id="menuProduct">
      <div class="menuheading"><span>
      <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['HOME_TAB_MENU']['content_hi']:$keyword_arr['HOME_TAB_MENU']['content_en'];
			  ?>
      </span>
        <div class="menuclose">
          <svg xmlns="http://www.w3.org/2000/svg" width="17.035" height="20.884" viewBox="0 0 17.035 20.884">
            <g id="Group_1518" data-name="Group 1518" transform="translate(-1318 -34)">
              <g id="back" transform="translate(1324 34)">
                <path id="Path_16066" data-name="Path 16066" d="M122.118,10.441,112.687,1.01a.591.591,0,0,1,.836-.836l9.852,9.851a.589.589,0,0,1,0,.836l-9.852,9.847a.6.6,0,0,1-.416.175.576.576,0,0,1-.416-.175.589.589,0,0,1,0-.836Z" transform="translate(-112.513 0)" fill="#073b68"></path>
              </g>
              <g id="back-2" data-name="back" transform="translate(1318 34)">
                <path id="Path_16066-2" data-name="Path 16066" d="M122.118,10.441,112.687,1.01a.591.591,0,0,1,.836-.836l9.852,9.851a.589.589,0,0,1,0,.836l-9.852,9.847a.6.6,0,0,1-.416.175.576.576,0,0,1-.416-.175.589.589,0,0,1,0-.836Z" transform="translate(-112.513 0)" fill="#073b68"></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="menuitem">
        <div class="quickassist quickassistMenu"><a href="https://www.sbigeneral.in/portal/buy-online/quick-assist" target="_blank" rel="noopener noreferrer">
        <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['HOME_HEADER_QUICK_ASSIST']['content_hi']:$keyword_arr['HOME_HEADER_QUICK_ASSIST']['content_en'];
			  ?>
        </a></div>
        <div class="accordion">
          <div class="card">
            <div class="card-header">
              <button type="button" class="btn btn-link">
              <div><img src="<?php echo $asset_path;?>/images/health.svg" alt=""></div>
              <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['HOME_TAB_HEALTH']['content_hi']:$keyword_arr['HOME_TAB_HEALTH']['content_en'];
			  ?>
              </button>
            </div>
            <div class="collapse">
              <div class="card-body">
                <a class="nav-link ftProduct" href="<?php echo $base_url;?>/health-insurance/arogya-sanjeevani-policy<?php echo ($_REQUEST['lang']=='hi')?"?lang=hi":"?lang=en"; ?>">
                <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['HOME_BODY_AROGYA_NEW']['content_hi']:$keyword_arr['HOME_BODY_AROGYA_NEW']['content_en'];
			  ?>
                </a>
                <a class="nav-link" href="<?php echo $base_url;?>/health-insurance/arogya-premier-policy<?php echo ($_REQUEST['lang']=='hi')?"?lang=hi":"?lang=en"; ?>">
                <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['RENEW_POLICY_BLOG_HP_AROGYA_PREMIER']['content_hi']:$keyword_arr['RENEW_POLICY_BLOG_HP_AROGYA_PREMIER']['content_en'];
			  ?>
                </a>
                <a class="nav-link" href="<?php echo $base_url;?>/health-insurance/arogya-plus-policy<?php echo ($_REQUEST['lang']=='hi')?"?lang=hi":"?lang=en"; ?>">
                <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['SIDE_MENU_HELTH_AROGYA_PLUS']['content_hi']:$keyword_arr['SIDE_MENU_HELTH_AROGYA_PLUS']['content_en'];
			  ?>
                </a>
                <a class="nav-link" href="<?php echo $base_url;?>/health-insurance/arogya-topup-policy<?php echo ($_REQUEST['lang']=='hi')?"?lang=hi":"?lang=en"; ?>">
                <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['SIDE_MENU_HELTH_AROGYA_TOP_UP']['content_hi']:$keyword_arr['SIDE_MENU_HELTH_AROGYA_TOP_UP']['content_en'];
			  ?>
                </a>
                <a class="nav-link" href="<?php echo $base_url;?>/health-insurance/retail-health<?php echo ($_REQUEST['lang']=='hi')?"?lang=hi":"?lang=en"; ?>">
                <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['SIDE_MENU_HELTH_RETAIL_HEALTH']['content_hi']:$keyword_arr['SIDE_MENU_HELTH_RETAIL_HEALTH']['content_en'];
			  ?>
                </a>
                <a class="nav-link" href="<?php echo $base_url;?>/health-insurance/critical-illness-insurance<?php echo ($_REQUEST['lang']=='hi')?"?lang=hi":"?lang=en"; ?>">
                <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['SIDE_MENU_HELTH_CRITICAL_ILLNESS']['content_hi']:$keyword_arr['SIDE_MENU_HELTH_CRITICAL_ILLNESS']['content_en'];
			  ?>
                </a>
                <a class="nav-link" href="<?php echo $base_url;?>/health-insurance/hospital-daily-cash<?php echo ($_REQUEST['lang']=='hi')?"?lang=hi":"?lang=en"; ?>">
                <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['SIDE_MENU_HELTH_HOSPITAL_DAILY_CASH']['content_hi']:$keyword_arr['SIDE_MENU_HELTH_HOSPITAL_DAILY_CASH']['content_en'];
			  ?>
                </a>
                <a class="nav-link" href="<?php echo $base_url;?>/health-insurance/group-health-insurance<?php echo ($_REQUEST['lang']=='hi')?"?lang=hi":"?lang=en"; ?>">
                <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['SIDE_MENU_HELTH_GROUP_HELTH']['content_hi']:$keyword_arr['SIDE_MENU_HELTH_GROUP_HELTH']['content_en'];
			  ?>
                </a>
                <a class="nav-link" href="<?php echo $base_url;?>/health-insurance/loan-insurance<?php echo ($_REQUEST['lang']=='hi')?"?lang=hi":"?lang=en"; ?>">
                <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['SIDE_MENU_HELTH_LOAN']['content_hi']:$keyword_arr['SIDE_MENU_HELTH_LOAN']['content_en'];
			  ?>
                </a></div>
            </div>
          </div>
          
          <div class="card">
            <div class="card-header">
              <button type="button" class="btn btn-link">
              <div><img src="<?php echo $asset_path;?>/images/travel-icon.svg" alt=""></div>
              <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['HOME_TAB_TRAVEL']['content_hi']:$keyword_arr['HOME_TAB_TRAVEL']['content_en'];
			  ?>
             </button>
            </div>
            <div class="collapse">
              <div class="card-body"><a class="nav-link" href="<?php echo $base_url;?>/travel-insurance<?php echo ($_REQUEST['lang']=='hi')?"?lang=hi":"?lang=en"; ?>">
              <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['SIDE_MENU_TRAVEL_INSURENCE']['content_hi']:$keyword_arr['SIDE_MENU_TRAVEL_INSURENCE']['content_en'];
			  ?>
              </a></div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <button type="button" class="btn btn-link">
              <div><img src="<?php echo $asset_path;?>/images/taxi.svg" alt=""></div>
              <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['HOME_TAB_MOTOR']['content_hi']:$keyword_arr['HOME_TAB_MOTOR']['content_en'];
			  ?>
            </button>
            </div>
            <div class="collapse">
              <div class="card-body">
                <a class="nav-link" href="<?php echo $base_url;?>/motor-insurance/private-car-insurance<?php echo ($_REQUEST['lang']=='hi')?"?lang=hi":"?lang=en"; ?>">
                <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['SIDE_MENU_MOTOR_PRIVATE_CAR']['content_hi']:$keyword_arr['SIDE_MENU_MOTOR_PRIVATE_CAR']['content_en'];
			  ?>
                </a>
                <a class="nav-link" href="<?php echo $base_url;?>/motor-insurance/two-wheeler-insurance<?php echo ($_REQUEST['lang']=='hi')?"?lang=hi":"?lang=en"; ?>">
                <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['SIDE_MENU_MOTOR_TWO_WHEELER']['content_hi']:$keyword_arr['SIDE_MENU_MOTOR_TWO_WHEELER']['content_en'];
			  ?>
                </a>
                <a class="nav-link" href="<?php echo $base_url;?>/motor-insurance/long-term-two-wheeler-insurance<?php echo ($_REQUEST['lang']=='hi')?"?lang=hi":"?lang=en"; ?>">
                <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['SIDE_MENU_MOTOR_LONG_TERM']['content_hi']:$keyword_arr['SIDE_MENU_MOTOR_LONG_TERM']['content_en'];
			  ?>
               </a>
                <a class="nav-link" href="<?php echo $base_url;?>/motor-insurance/motor-act-only-two-wheeler-insurance<?php echo ($_REQUEST['lang']=='hi')?"?lang=hi":"?lang=en"; ?>">
                <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['SIDE_MENU_MOTOR_ACT_ONLY']['content_hi']:$keyword_arr['SIDE_MENU_MOTOR_ACT_ONLY']['content_en'];
			  ?>
              </a>
                <a class="nav-link" href="<?php echo $base_url;?>/motor-insurance/motor-act-only-private-car-insurance<?php echo ($_REQUEST['lang']=='hi')?"?lang=hi":"?lang=en"; ?>">
                <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['SIDE_MENU_MOTOR_ACT_ONLY_3']['content_hi']:$keyword_arr['SIDE_MENU_MOTOR_ACT_ONLY_3']['content_en'];
			  ?> 
               </a>
                <a class="nav-link" href="<?php echo $base_url;?>/commercial-motor-insurance<?php echo ($_REQUEST['lang']=='hi')?"?lang=hi":"?lang=en"; ?>">
                <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['SIDE_MENU_MOTOR_TRAILER_INSURENCE']['content_hi']:$keyword_arr['SIDE_MENU_MOTOR_TRAILER_INSURENCE']['content_en'];
			  ?>
                </a>
                <a class="nav-link" href="<?php echo $base_url;?>/tractor-and-other-farm-vehicle-insurance<?php echo ($_REQUEST['lang']=='hi')?"?lang=hi":"?lang=en"; ?>">
                <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['SIDE_MENU_MOTOR_VEHICLE']['content_hi']:$keyword_arr['SIDE_MENU_MOTOR_VEHICLE']['content_en'];
			  ?>
                </a>
                <a class="nav-link" href="<?php echo $base_url;?>/motor-act-only<?php echo ($_REQUEST['lang']=='hi')?"?lang=hi":"?lang=en"; ?>">
                <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['SIDE_MENU_ACT_ONLY_INSURENCE']['content_hi']:$keyword_arr['SIDE_MENU_ACT_ONLY_INSURENCE']['content_en'];
			  ?>
                </a></div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <button type="button" class="btn btn-link">
              <div><img src="<?php echo $asset_path;?>/images/personal-accident.svg" alt=""></div>
              <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['HOME_MENU_PERSONAL_ACCIDENT']['content_hi']:$keyword_arr['HOME_MENU_PERSONAL_ACCIDENT']['content_en'];
			  ?>
            </button>
            </div>
            <div class="collapse">
              <div class="card-body">
                <a class="nav-link" href="<?php echo $base_url;?>/personal-accident-insurance/individual-pa-insurance<?php echo ($_REQUEST['lang']=='hi')?"?lang=hi":"?lang=en"; ?>">
                <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['SIDE_MENU_PERSONAL_ACCIDENT_INDIVIDUAL']['content_hi']:$keyword_arr['SIDE_MENU_PERSONAL_ACCIDENT_INDIVIDUAL']['content_en'];
			  ?>
                </a>
              </div>
            </div>
          </div>
          <div class="card">
              <div class="card-header">
                <button type="button" class="btn btn-link">
                <div><img src="<?php echo $asset_path;?>/images/value-added-services.svg" alt=""></div>
                <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_SIDE_MENU_VALUE_ADDED_SERVICE']['content_hi']:$keyword_arr['PRODUCTS_SIDE_MENU_VALUE_ADDED_SERVICE']['content_en'];
			  ?></button>
              </div>
              <div class="collapse">
                <div class="card-body">
                  <a class="nav-link" href="<?php echo $base_url;?>/">1MG</a>
                  <a class="nav-link" href="<?php echo $base_url;?>/"><?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['HOME_MENU_FITERNITY']['content_hi']:$keyword_arr['HOME_MENU_FITERNITY']['content_en'];
			  ?></a>
                </div>
              </div>
            </div>
        </div>
        <!-- <div class="menuQRCode"><img src="<?php echo $asset_path;?>/images/qr-footer-mobile.png" alt="SBIPay"></div> -->
      </div>
    </section>
    <section class="menudesktop">
      <div class="nav">
        <button class="closemenu">×</button>
        <a class="nav-link" href="/portal/policy-renewal">
        <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['HOME_FOOTER_RENEW_POLICY']['content_hi']:$keyword_arr['HOME_FOOTER_RENEW_POLICY']['content_en'];
			  ?>
        </a><a class="nav-link" href="/portal/product">
        <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['HOME_DYNAMIC_PRODUCTS']['content_hi']:$keyword_arr['HOME_DYNAMIC_PRODUCTS']['content_en'];
			  ?>
        </a><a class="nav-link" href="/portal/contact-us">
        <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['CONTACT_US']['content_hi']:$keyword_arr['CONTACT_US']['content_en'];
			  ?>
        </a><a class="nav-link" href="/portal/about-us">
        <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['ABOUT_US_BANNER_TEXT_ABOUT_US']['content_hi']:$keyword_arr['ABOUT_US_BANNER_TEXT_ABOUT_US']['content_en'];
			  ?>
        </a><a class="nav-link" href="/portal/motor-insurance/two-wheeler-insurance">
        <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_RETAIL_MOTOR_TWO_WHEELER']['content_hi']:$keyword_arr['PRODUCTS_RETAIL_MOTOR_TWO_WHEELER']['content_en'];
			  ?>
         </a><a class="nav-link" href="/portal/motor-insurance/long-term-two-wheeler-insurance">
         <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['HOME_BODY_LONG_TERM_2']['content_hi']:$keyword_arr['HOME_BODY_LONG_TERM_2']['content_en'];
			  ?>
         </a><a class="nav-link" href="/portal/health-insurance/motor-act-only-two-wheeler">
         <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['SIDE_MENU_MOTOR_LONG']['content_hi']:$keyword_arr['SIDE_MENU_MOTOR_LONG']['content_en'];
			  ?>
         </a><a class="nav-link" href="/portal/motor-insurance/motor-act-only-private-car-insurance">
         <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['SIDE_MENU_MOTOR_PRIVATE_LONG']['content_hi']:$keyword_arr['SIDE_MENU_MOTOR_PRIVATE_LONG']['content_en'];
			  ?>
         </a><a class="nav-link" href="/portal/health-insurance/simple-home-insurance">
         <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_RETAIL_SIMPLE_INSURENCE']['content_hi']:$keyword_arr['PRODUCTS_RETAIL_SIMPLE_INSURENCE']['content_en'];
			  ?>
         </a></div>
    </section>
    <script type="text/javascript">
		$(".custom-select1").each(function() {
      
			var classes = $(this).attr("class"),
				id = $(this).attr("id"),
				name = $(this).attr("name");
			var template = '<div class="' + classes + '">';
      <?php if($_GET['lang']=='hi'){      ?>
			template += '<span class="custom-select-trigger">हिन्दी</span>';
      <?php }else{?>
        template += '<span class="custom-select-trigger">English</span>';
        <?php }?>
			template += '<div class="custom-options">';
			$(this).find("option").each(function() {
				template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
			});
			template += '</div></div>';
//alert(template);
			$(this).wrap('<div class="custom-select-wrapper"></div>');
			$(this).hide();
			$(this).after(template);
		});
		$(".custom-option:first-of-type").hover(function() {
			$(this).parents(".custom-options").addClass("option-hover");
		}, function() {
			$(this).parents(".custom-options").removeClass("option-hover");
		});
		$(".custom-select-trigger").on("click", function() {
			$('html').one('click', function() {
				$(".custom-select1").removeClass("opened");
			});
			$(this).parents(".custom-select1").toggleClass("opened");
			event.stopPropagation();
		});
		$(".custom-option").on("click", function() {
			$(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
			$(this).parents(".custom-options").find(".custom-option").removeClass("selection");
			$(this).addClass("selection");
			$(this).parents(".custom-select1").removeClass("opened");
			$(this).parents(".custom-select1").find(".custom-select-trigger").text($(this).text());

      var lang = $( "#langsources" ).val();
      var uri = window.location.toString();
        if (uri.indexOf("?") > 0) {
            var clean_uri = uri.substring(0, uri.indexOf("?"));           
            window.location.replace(clean_uri+'?lang='+lang);
        }
		});
   
    // function changeLanuage(){
    //   var lang = $( "#langsources" ).val();
    //   var uri = window.location.toString();
    //     if (uri.indexOf("?") > 0) {
    //         var clean_uri = uri.substring(0, uri.indexOf("?"));           
    //         window.location.replace(clean_uri+'?lang='+lang);
    //     }
    // }
    $(document).on('click','.dropdown-item', function (e) {
      console.log($(this).val());
    });
	</script>
   