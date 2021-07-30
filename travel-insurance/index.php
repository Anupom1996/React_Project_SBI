<?php require '../retailConfig/header.php'; ?>

<section class="container-with-no-padding container">
      <div class="innerpageBanner row">
        <div class="col-4">
          <figure class="justify-content-between align-items-center argyaBaner"><img src="<?php echo $asset_path;?>/images/travel-banner.svg" alt="Travel Insurance Policy"></figure>
        </div>
        <div class="col-8 d-flex align-items-center">
          <div class="flex-column">
            <h1><?php echo $productName; ?></h1>
            <div class="healgth-productBtnMain">
            <?php 
            $stickyBuySlug = '#';
            foreach($productButtons as $buttons){ 
              if(strpos($buttons->name,'Get Quote') !== false){
                $stickyBuySlug = $buttons->slug;
              }
              ?>
              <div class="healgth-productBtn pl-0">
              	<a class="d-flex color-purple" href="javascript:void(0);" onclick="openInNewTab('<?php echo $buttons->slug;?>');gtmBtnClickHandler('<?php echo $buttons->name;?>')">
                <figure><img src="<?php echo $asset_path;?>/images/buy-policy-icon.svg" alt=""></figure>
                <p><?php echo $buttons->name;?></p>
                </a>
              </div>
            <?php } ?>
            </div>
          </div>
        </div>
        <div class="innerHeadBotomIcon"><img src="<?php echo $asset_path;?>/images/travel-right-side.svg" alt="Travel Insurance Policy"></div>
      </div>
    </section>
    <div class="stickyWrapper" style="display: none;">
      <div>
        <div style="padding-bottom: 0px;"></div>
        <div style="z-index: 999; transform: translateZ(0px);" id="stickyNav">
          <div class="retailHealthButtonWRapper">
            <div class="retailHealthStaticBtn">
              <div class="innerHead"><?php echo $productStickyName; ?></div>
              <a href="javascript:void(0);" onclick="openInNewTab('<?php echo $stickyBuySlug;?>');gtmBtnClickHandler('Buy Now');"><?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['BUY_NOW']['content_hi']:$keyword_arr['BUY_NOW']['content_en'];
			  ?></a></div>
          </div>
        </div>
      </div>
    </div>
    <section class="protectWrapper motor-protectWrapper innerPageSection">
      <div class="container">
        <div class="rotectRow row">
          <div class="weProtect col-lg-8 col-12">
            <h5 class="htitle"><?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_LIABILITY_WE_PROTECT']['content_hi']:$keyword_arr['PRODUCTS_LIABILITY_WE_PROTECT']['content_en'];
			  ?></h5>
            <div class="weProtectSub color-purple">
              <ul class="d-flex flex-wrap">
              	<?php 
					############################ We Protect You Resources  ##############################
					// $productArr = json_decode(file_get_contents('../retailConfig/resource/WeProtectYouResourcesData.json'),true);
					// $productDisclaimer = '';
					// $relatedData = [];
					// foreach ($productArr as $key => $value) {
					// 	if ($value['key']== $page) {
					// 		$relatedData = $value['related_data'];
					// 	}
					// }
					// 
          $ch = curl_init();
$curlConfig = array(
  CURLOPT_URL            => $WeProtectYouResourcesData,    
  CURLOPT_RETURNTRANSFER => true   
);
curl_setopt_array($ch, $curlConfig);
$productArr = curl_exec($ch);
curl_close($ch);
$res = json_decode($productArr);
//echo '<pre>';print_r($res[0]->filedata);die;
$productDisclaimer = '';
$relatedData = [];
foreach ($res[0]->filedata as $key => $value) {
  if ($value->key== $page) {
    $relatedData = $value->related_data;
  }
}
				 foreach($relatedData as $rData){ ?>	
                <li>
                  <figure class="justify-content-between align-items-center">
                  	<img src="<?php echo $asset_path;?>/images/product-icons/we-protect-you/<?php echo $rData->resource_icon;?>" alt="<?php echo strip_tags($rData->label);?>"></figure>
                  <?php echo $rData->label;?>
                </li>
                <?php } ?>
              </ul>
            </div>
          </div>
          <div class="lookingFor col-lg-4 col-12">
           
           <?php require '../retailConfig/callbackForm.php'; ?>
          </div>
        </div>
      </div>
    </section>

    <?php 
	
	if(!empty($tabData)){ ?>
   
    <section class="coverageWrapper">
      <div class="container">
        <div class="coverageBase">
          <div class="tabmainProduct nav nav-pills" role="tablist">
          	<?php foreach($tabData as $key => $val) { ?>
            <div class="nav-item">
            	<a onclick="gtmClickHandler('<?php echo $val->name;?>')" href="#" role="tab" data-key="tabmain_<?php echo $key;?>" aria-selected="true" class="nav-link <?php echo $key==0?'active':'';?>">
             	<div>
                <figure><img src="<?php echo $asset_path;?>/images/<?php echo $val->icon;?>" alt=""></figure>
                <?php echo $val->name;?></div>
              </a>
          	</div>
          <?php } ?>
          </div>
          <div class="tab-content">
          	<?php foreach($tabData as $key => $val) { ?>
            <div role="tabpanel" aria-hidden="false" class="fade tab-pane <?php echo $key==0?'active show':'';?>" id="tabmain_<?php echo $key;?>">
             <div class="tab-scroll">
                <h5 class="htitle"> <?php echo $val->name;?></h5>
                  <?php echo $val->content;?>
              </div>
            </div>
            <?php } ?>
          </div>
        </div>
      </div>
    </section>

<?php } ?>

<?php 
############################ Product Related Resources  ##############################
// $productArr = json_decode(file_get_contents('../retailConfig/resource/productRelatedResourcesData.json'),true);
// $productDisclaimer = '';
// $relatedData = [];
// foreach ($productArr as $key => $value) {
// 	if ($value['key']== $page) {
// 		$productDisclaimer = $value['product_disclaimer'];
// 		$relatedData = $value['related_data'];
// 	}
// }

$ch = curl_init();
$curlConfig = array(
  CURLOPT_URL            =>$productRelatedResourcesData ,
  CURLOPT_RETURNTRANSFER => true  
);
curl_setopt_array($ch, $curlConfig);
$productArr = curl_exec($ch);
curl_close($ch);
$res = json_decode($productArr);
//echo '<pre>';print_r($res[0]->filedata);die;
$productDisclaimer = '';
$relatedData = [];
foreach ($res[0]->filedata as $key => $value) {
  if ($value->key== $page) {
    $relatedData = $value->related_data;
    $productDisclaimer = $value->product_disclaimer;
  }
}
		?>

    <section class="prospectusWrapper">
      <div class="container">
        <div class="prospectusTop ">
        <?php echo $productDisclaimer; ?>
        </div>
        <div class="hideExtra"></div>
       
        <div class="prospectusBtm">
       <div class="owl-carousel owl-theme" id="prospectus">

		<?php foreach($relatedData as $rData){ ?>       	
              <div class="item">
                <div class="prospectusBtmSingle text-center">
                <?php
                if($rData->file_url=="maintenance"){
                  $filepath=$base_url."/maintenance-page";
                }
                else{
                  $filepath=$media_base_path.$rData->file_url;
                }
                ?>
                	<a target="_blank" href="<?php echo $filepath;?>" 
                  onclick="gtmPdfHandler('<?php echo $rData->label;?>')">
	                  	<figure>
	                  		<img src="<?php echo $asset_path;?>/images/<?php echo $rData->resource_icon;?>" alt="<?php echo $rData->label;?>">
	                  	</figure>
                 		<?php echo $rData->label;?>
              		</a>
              	</div>
              </div>            
     	<?php } ?>
        </div>
      </div>

       </div>
      </div>
    </section>

    <?php require '../retailConfig/branchLocator.php'; ?>

    <section class="healthWrapper">
      <div class="container">
        <div class="healthContainer">
          <h5 class="htitle">
          <?php
          echo ($_REQUEST['lang']=='hi')?$keyword_arr['products']['content_hi']:$keyword_arr['products']['content_en'];
			  ?>
          </h5>
          <p class="mainTxt">
          <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_HEALTH_INSURENCE_TEXT']['content_hi']:$keyword_arr['PRODUCTS_HEALTH_INSURENCE_TEXT']['content_en'];
			  ?></p>
          <ul>
            <li>
              <figure class="justify-content-between align-items-center"><img src="<?php echo $asset_path;?>/images/rura-banks-icon.svg" alt=""></figure>
              <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_HEALTH_INSURENCE_6400']['content_hi']:$keyword_arr['PRODUCTS_HEALTH_INSURENCE_6400']['content_en'];
			  ?>
            </li>
            <li>
              <figure class="justify-content-between align-items-center"><img src="<?php echo $asset_path;?>/images/cities-icon.svg" alt=""></figure>
              <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_HEALTH_INSURENCE_24000']['content_hi']:$keyword_arr['PRODUCTS_HEALTH_INSURENCE_24000']['content_en'];
			  ?>
            </li>
            <li>
              <figure class="justify-content-between align-items-center"><img src="<?php echo $asset_path;?>/images/map-locations-icon.svg" alt=""></figure>
              <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_HEALTH_INSURENCE_114']['content_hi']:$keyword_arr['PRODUCTS_HEALTH_INSURENCE_114']['content_en'];
			  ?>
            </li>
            <li>
              <figure class="justify-content-between align-items-center"><img src="<?php echo $asset_path;?>/images/real-estate-agent-icon.svg" alt=""></figure>
              <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_HEALTH_INSURENCE_10000']['content_hi']:$keyword_arr['PRODUCTS_HEALTH_INSURENCE_10000']['content_en'];
			  ?>
            </li>
            <li>
              <figure class="justify-content-between align-items-center"><img src="<?php echo $asset_path;?>/images/broker-icon.svg" alt=""></figure>
              <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_HEALTH_INSURENCE_350']['content_hi']:$keyword_arr['PRODUCTS_HEALTH_INSURENCE_350']['content_en'];
			  ?>
            </li>
          </ul>
        </div>
      </div>
    </section>

<?php require '../retailConfig/footer.php';  ?>