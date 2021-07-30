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
              if(strpos($buttons['name'],'Get Quote') !== false){
                $stickyBuySlug = $buttons['slug'];
              }
              ?>
              <div class="healgth-productBtn pl-0">
              	<a class="d-flex color-purple" href="javascript:void(0);" onclick="openInNewTab('<?php echo $buttons['slug'];?>');gtmBtnClickHandler('<?php echo $buttons['name'];?>')">
                <figure><img src="<?php echo $asset_path;?>/images/buy-policy-icon.svg" alt=""></figure>
                <p><?php echo $buttons['name'];?></p>
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
              <a href="javascript:void(0);" onclick="openInNewTab('<?php echo $stickyBuySlug;?>');gtmBtnClickHandler('Buy Now');">Buy Now</a></div>
          </div>
        </div>
      </div>
    </div>
    <section class="protectWrapper motor-protectWrapper innerPageSection">
      <div class="container">
        <div class="rotectRow row">
          <div class="weProtect col-lg-8 col-12">
            <h5 class="htitle">We Protect you</h5>
            <div class="weProtectSub color-purple">
              <ul class="d-flex flex-wrap">
              	<?php 
					############################ We Protect You Resources  ##############################
					$productArr = json_decode(file_get_contents('../retailConfig/resource/WeProtectYouResourcesData.json'),true);
					$productDisclaimer = '';
					$relatedData = [];
					foreach ($productArr as $key => $value) {
						if ($value['key']== $page) {
							$relatedData = $value['related_data'];
						}
					}
					?>
				<?php foreach($relatedData as $rData){ ?>	
                <li>
                  <figure class="justify-content-between align-items-center">
                  	<img src="<?php echo $asset_path;?>/images/product-icons/we-protect-you/<?php echo $rData['resource_icon'];?>" alt="<?php echo strip_tags($rData['label']);?>"></figure>
                  <?php echo $rData['label'];?>
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

    <?php if(!empty($tabData)){ ?>
   
    <section class="coverageWrapper">
      <div class="container">
        <div class="coverageBase">
          <div class="tabmainProduct nav nav-pills" role="tablist">
          	<?php foreach($tabData as $key => $val) { ?>
            <div class="nav-item">
            	<a onclick="gtmClickHandler('<?php echo $val['name'];?>')" href="#" role="tab" data-key="tabmain_<?php echo $key;?>" aria-selected="true" class="nav-link <?php echo $key==0?'active':'';?>">
             	<div>
                <figure><img src="<?php echo $asset_path;?>/images/<?php echo $val['icon'];?>" alt=""></figure>
                <?php echo $val['name'];?></div>
              </a>
          	</div>
          <?php } ?>
          </div>
          <div class="tab-content">
          	<?php foreach($tabData as $key => $val) { ?>
            <div role="tabpanel" aria-hidden="false" class="fade tab-pane <?php echo $key==0?'active show':'';?>" id="tabmain_<?php echo $key;?>">
             <div class="tab-scroll">
                <h5 class="htitle"> <?php echo $val['name'];?></h5>
                  <?php echo $val['content'];?>
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
$productArr = json_decode(file_get_contents('../retailConfig/resource/productRelatedResourcesData.json'),true);
$productDisclaimer = '';
$relatedData = [];
foreach ($productArr as $key => $value) {
	if ($value['key']== $page) {
		$productDisclaimer = $value['product_disclaimer'];
		$relatedData = $value['related_data'];
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
                	<a target="_blank" href="<?php echo $media_base_path.$rData['file_url'];?>" 
                  onclick="gtmPdfHandler('<?php echo $rData['label'];?>')">
	                  	<figure>
	                  		<img src="<?php echo $asset_path;?>/images/<?php echo $rData['resource_icon'];?>" alt="<?php echo $rData['label'];?>">
	                  	</figure>
                 		<?php echo $rData['label'];?>
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
          <h5 class="htitle">Why SBI General Insurance?</h5>
          <p class="mainTxt">SBI General Insurance is the trusted insurance partner for a transforming India, helping you get back on your feet when times get rough.</p>
          <ul>
            <li>
              <figure class="justify-content-between align-items-center"><img src="<?php echo $asset_path;?>/images/rura-banks-icon.svg" alt=""></figure>
              <h2>6400+</h2>
              <p>Rural Banks</p>
            </li>
            <li>
              <figure class="justify-content-between align-items-center"><img src="<?php echo $asset_path;?>/images/cities-icon.svg" alt=""></figure>
              <h2>24000+</h2>
              <p>SBI Branches</p>
            </li>
            <li>
              <figure class="justify-content-between align-items-center"><img src="<?php echo $asset_path;?>/images/map-locations-icon.svg" alt=""></figure>
              <h2>114</h2>
              <p>Locations</p>
            </li>
            <li>
              <figure class="justify-content-between align-items-center"><img src="<?php echo $asset_path;?>/images/real-estate-agent-icon.svg" alt=""></figure>
              <h2>10000+</h2>
              <p> Agents</p>
            </li>
            <li>
              <figure class="justify-content-between align-items-center"><img src="<?php echo $asset_path;?>/images/broker-icon.svg" alt=""></figure>
              <h2>350+</h2>
              <p>Brokers</p>
            </li>
          </ul>
        </div>
      </div>
    </section>

<?php require '../retailConfig/footer.php';  ?>