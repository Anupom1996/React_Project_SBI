<div id="callbackStep1">
<div class="lookingForSub">
<h5 class="htitle">
<?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_CAPTHA_FORM_HEADING']['content_hi']:$keyword_arr['PRODUCTS_CAPTHA_FORM_HEADING']['content_en'];
			  ?>
       </h5>
  <form id="request_call_back" novalidate="" autocomplete="off" class="">
    <div class="form-group">
      <input name="name" placeholder="<?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_CAPTHA_PLACEHOLDER_NAME']['content_hi']:$keyword_arr['PRODUCTS_CAPTHA_PLACEHOLDER_NAME']['content_en'];
			  ?>"
      required="" type="text" id="customerName" class="form-control" onchange="gtmFormInit('Name','portal_product_page_28_callback_form_qqinteraction')">
      <div class="invalid-feedback">
    
      <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_CAPTHA_FORM_NAME']['content_hi']:$keyword_arr['PRODUCTS_CAPTHA_FORM_NAME']['content_en'];
			  ?>
      </div>
    </div>
    <div class="form-group">
      <input name="email" placeholder="<?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_CAPTHA_FORM_EMAIL']['content_hi']:$keyword_arr['PRODUCTS_CAPTHA_FORM_EMAIL']['content_en'];
			  ?>"
       pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" required="" type="email" id="customerEmail" class="form-control" onchange="gtmFormInit('Email','portal_product_page_28_callback_form_qqinteraction')">
      <div class="invalid-feedback">     
      <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_CAPTHA_FORM_ENTET_EMAIL']['content_hi']:$keyword_arr['PRODUCTS_CAPTHA_FORM_ENTET_EMAIL']['content_en'];
			  ?>
      </div>
    </div>
    <div class="form-group">
      <input name="mobile" placeholder="<?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_CAPTHA_FORM_MOBILE']['content_hi']:$keyword_arr['PRODUCTS_CAPTHA_FORM_MOBILE']['content_en'];
			  ?>"
       pattern="^[0-9]{10}$" maxlength="10" required="" type="text" id="customerMobile" class="form-control" onchange="gtmFormInit('Mobile Number','portal_product_page_28_callback_form_qqinteraction')">
      <div class="invalid-feedback">
     
      <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_CAPTHA_FORM_ENTET_MOBILE']['content_hi']:$keyword_arr['PRODUCTS_CAPTHA_FORM_ENTET_MOBILE']['content_en'];
			  ?>
      </div>
    </div>
    <div class="d-flex checkbox-span form-group">
      <div class="form-check">
        <input required="" name="termsCheck" type="checkbox" id="customerAccept" class="form-check-input" onchange="gtmFormInit('Terms','portal_product_page_28_callback_form_qqinteraction')">
        <label title="" for="customerAccept" class="form-check-label">
        
        <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_CAPTHA_LABEL_I_ACCEPT']['content_hi']:$keyword_arr['PRODUCTS_CAPTHA_LABEL_I_ACCEPT']['content_en'];
			  ?>
        </label>
      </div>
      <span>&nbsp;<a target="_blank" rel="noopener noreferrer" href="<?php echo $base_url;?>/website-terms-usage">
     
      <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_CAPTHA_FORM_TERM']['content_hi']:$keyword_arr['PRODUCTS_CAPTHA_FORM_TERM']['content_en'];
			  ?>
      </a></span></div>
    <p class="required">
   
    
    <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_CAPTHA_FORM_IMAGE']['content_hi']:$keyword_arr['PRODUCTS_CAPTHA_FORM_IMAGE']['content_en'];
			  ?>
    <div class="d-flex number-validation form-group">
      <div class="captchaNumber"><span id="capthaOne"></span>+<span id="capthaTwo"></span> =</div>
      <div>
        <input name="type" placeholder="<?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_CAPTHA_PLACEHOLDER_TYPE_HERE']['content_hi']:$keyword_arr['PRODUCTS_CAPTHA_PLACEHOLDER_TYPE_HERE']['content_en'];
			  ?>"
         pattern="^[0-9]*$" required="" type="text" id="customerMathCalculation" class="form-control" onchange="gtmFormInit('Captcha','portal_product_page_28_callback_form_qqinteraction')">
        <div class="invalid-feedback">
       
        <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_SWAL_INVALID_NUMBER']['content_hi']:$keyword_arr['PRODUCTS_SWAL_INVALID_NUMBER']['content_en'];
			  ?>
        </div>
      </div>
    </div>
    <div class="from-action">
      <button type="submit" class="btn btn-primary" onclick="gtmFormInit('form_submit','portal_product_callback_page_3_form_submit')">  <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_GET_QUICK_QUOTE']['content_hi']:$keyword_arr['PRODUCTS_GET_QUICK_QUOTE']['content_en'];
			  ?></button>
    </div>
  </form>
</div>
</div>
<div id="callbackStep2" style="display: none;">
  <div class="lookingForSub calbackreatail">
    <h5 class="htitle">
   
    <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_FORM_HELP_US']['content_hi']:$keyword_arr['PRODUCTS_FORM_HELP_US']['content_en'];
			  ?>
    </h5>
    <form id="request_call_back_2" novalidate="" autocomplete="off" class="">
      <div class="form-group">
        <select name="gender" required="" id="customerGender" class="form-control" onchange="gtmFormInit('Gender')">
        
        <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_FORM_SELECT_GENDER']['content_hi']:$keyword_arr['PRODUCTS_FORM_SELECT_GENDER']['content_en'];
			  ?>
        </select>
        <div class="invalid-feedback">

         
        <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_FORM_PLEASE_SELECT_GENDER']['content_hi']:$keyword_arr['PRODUCTS_FORM_PLEASE_SELECT_GENDER']['content_en'];
			  ?>
        </div>
      </div>
      <div class="form-group">
      <select name="city" required="" id="customerCity" class="form-control" onchange="gtmFormInit('Location','portal_product_callback_page_24_form_interaction')">
      <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_FORM_SELECT_OPTION']['content_hi']:$keyword_arr['PRODUCTS_FORM_SELECT_OPTION']['content_en'];
			  ?>
        </select>
        <div class="invalid-feedback">
        
        <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_FORM_SELECT_CITY']['content_hi']:$keyword_arr['PRODUCTS_FORM_SELECT_CITY']['content_en'];
			  ?>
        </div>
      </div>
      <div class="d-flex calbackreatailInput">
        <div class="d-flex form-group">
          <input name="relation" placeholder="<?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_FORM_LOOKING_TO_ENSURE']['content_hi']:$keyword_arr['PRODUCTS_FORM_LOOKING_TO_ENSURE']['content_en'];
			  ?>"
           required="" type="text" readonly="" id="familyMembers" class="form-control openInsuredModal" value="">
          <div class="invalid-feedback">
         
          <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_FORM_PLEASE_ADD_MEMBER']['content_hi']:$keyword_arr['PRODUCTS_FORM_PLEASE_ADD_MEMBER']['content_en'];
			  ?>
          </div>
        </div>
        <a class="cwvnPlusLink openInsuredModal" href="javascript:void(0);">
          <img alt="" src="<?php echo $asset_path;?>/images/plus-sign-white.svg">
        </a>
      </div>
     
      
      <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_FORM_PLEASE_ADD_FAMILY']['content_hi']:$keyword_arr['PRODUCTS_FORM_PLEASE_ADD_FAMILY']['content_en'];
			  ?>
      <div class="from-action">
        <button type="button" class="btn btn-primary" onclick="step2Submit(this)">
        
        <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_FORM_GO']['content_hi']:$keyword_arr['PRODUCTS_FORM_GO']['content_en'];
			  ?>
        </button>
      </div>
    </form>
  </div>
</div>
<div class="btn-holder"></div>

<!-- <button class="btn btn-success" data-toggle="modal" data-target="#modalForm">
    Open Contact Form
</button> -->

<!-- Submission Popup -->
<div class="modal fade submissionModal" id="modalSumitForm" tabindex="1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <div class="swal-icon swal-icon--success" style="display: none;">
          <span class="swal-icon--success__line swal-icon--success__line--long"></span>
          <span class="swal-icon--success__line swal-icon--success__line--tip"></span>
          <div class="swal-icon--success__ring"></div>
          <div class="swal-icon--success__hide-corners"></div>
        </div>
        <div class="swal-icon swal-icon--error" style="display: none;">
          <div class="swal-icon--error__x-mark">
            <span class="swal-icon--error__line swal-icon--error__line--left"></span>
            <span class="swal-icon--error__line swal-icon--error__line--right"></span>
          </div>
        </div>
        <h3 class="modal-title" id="modalSumitTitle"></h3>
      </div>
      <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">
         
          <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_FORM_OK']['content_hi']:$keyword_arr['PRODUCTS_FORM_OK']['content_en'];
			  ?>
          </button>
      </div>
    </div>
  </div>
</div>


<!-- <button class="btn btn-success" data-toggle="modal" data-target="#InsuredModalForm">
  Add Family Members
</button> -->

<!-- Add Family Members to be Insured Popup -->
<div class="modal fade custom-modal" id="InsuredModalForm" tabindex="2" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content modal-content-member">
      <!-- Modal Header -->
<div class="modal-header">
  <h4 class="modal-title">
 
  <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_FORM_ADD_FAMILY_MEMBER']['content_hi']:$keyword_arr['PRODUCTS_FORM_ADD_FAMILY_MEMBER']['content_en'];
			  ?>
  </h4>
  <button type="button" class="close" data-dismiss="modal">×</button>
</div>
<!-- Modal body -->
<form id="family_form" method="post" action="" autocomplete="off" novalidate="novalidate">
  <div class="modal-body">
    <div class="row formSection">
      <div class="col-md-4">
        <label class="customCheckBox formGrp">
       
        <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_FORM_SELF']['content_hi']:$keyword_arr['PRODUCTS_FORM_SELF']['content_en'];
			  ?>
          <input type="checkbox" name="family_Self_check" class="user-self gaClass" id="family_Self_check" data-ga-val="selfB" onchange="handleChange('self_ischecked', this.checked)">
          <span class="checkmark mL-0"></span> <span class="error-message"> </span> </label>
      </div>

      <div class="col-md-4">
        <label class="selfB formGrp">
          <div id="datepicker1" class="input-group date" data-date-format="mm-dd-yyyy">
            <input class="gaClass hasDatepicker" type="text" readonly name="family_Self_dob" id="family_Self_dob" onchange="handleChange('self_dob', this.value)" placeholder="Select DOB" />
            <span class="input-group-addon"></span>
          </div>
          <span class="error-message"> </span> 
        </label>
      </div>     

    </div>
    <div class="row formSection">
      <div class="col-md-4">
        <label class="customCheckBox formGrp">
        
        <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_FORM_SPOUSE']['content_hi']:$keyword_arr['PRODUCTS_FORM_SPOUSE']['content_en'];
			  ?>
          <input type="checkbox" class="user-self gaClass" name="family_Spouse_check" id="family_Spouse_check" data-ga-val="spouse" onchange="handleChange('spouse_ischecked', this.checked)">
          <span class="checkmark mL-0"></span><span class="error-message"> </span> </label>
      </div>
      <div class="col-md-4">
        <label class="spouse formGrp">
          <div id="datepicker2" class="input-group date" data-date-format="mm-dd-yyyy">
            <input class="gaClass hasDatepicker" type="text" readonly name="family_Spouse_dob" id="family_Spouse_dob" onchange="handleChange('spouse_dob', this.value)" placeholder="Select DOB" />
            <span class="input-group-addon"></span>
          </div>
          <span class="error-message"> </span> 
        </label>
      </div> 
    </div>
    <div class="row formSection">
      <div class="col-md-4">
        <label class="customCheckBox  formGrp">
     
        <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_FORM_CHILD1']['content_hi']:$keyword_arr['PRODUCTS_FORM_CHILD1']['content_en'];
			  ?>
          <input type="checkbox" class="user-self gaClass" name="family_child_1_check" id="family_child_1_check" data-ga-val="child1" onchange="handleChange('child1_ischecked', this.checked)">
          <span class="checkmark mL-0"></span> <span class="error-message"> </span> </label>
      </div>
      <div class="col-md-4">
        <label class="child1 formGrp">
          <div id="datepicker3" class="input-group date" data-date-format="mm-dd-yyyy">
            <input class="gaClass hasDatepicker" type="text" readonly name="family_Child_1_dob" id="family_Child_1_dob" onchange="handleChange('child1_dob', this.value)" placeholder="Select DOB" />
            <span class="input-group-addon"></span>
          </div>
          <span class="error-message"> </span> 
        </label>
      </div> 
      <div class="col-md-4">
        <label class="child1 formGrp">
          <select name="family_Child_1_gender" id="family_Child_1_gender" class="gaClass" onchange="handleChange('child1_gender', this.value)">
           
            <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_FORM_GENDER']['content_hi']:$keyword_arr['PRODUCTS_FORM_GENDER']['content_en'];
			  ?>
          </select>
          <span class="error-message"> </span> </label>
      </div>
    </div>
    <div class="row formSection">
      <div class="col-md-4">
        <label class="customCheckBox  formGrp">
        
        <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_FORM_CHILD2']['content_hi']:$keyword_arr['PRODUCTS_FORM_CHILD2']['content_en'];
			  ?>
          <input type="checkbox" class="user-self gaClass" name="family_Child_2_check" id="family_Child_2_check" data-ga-val="child2" onchange="handleChange('child2_ischecked', this.checked)">
          <span class="checkmark mL-0"></span> <span class="error-message"> </span></label>
      </div>
      <div class="col-md-4">
        <label class="child2 formGrp">
        <div id="datepicker4" class="input-group date" data-date-format="mm-dd-yyyy">
          <input class="gaClass hasDatepicker" type="text" readonly name="family_Child_2_dob" id="family_Child_2_dob" onchange="handleChange('child2_dob', this.value)" placeholder="Select DOB"/>
          <span class="input-group-addon"></span>
        </div>
          <span class="error-message"> </span> </label>
      </div> 
      <div class="col-md-4">
        <label class="child2 formGrp">
          <select name="family_Child_2_gender" id="family_Child_2_gender" class="gaClass" onchange="handleChange('child2_gender', this.value)">
          
          <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_FORM_GENDER']['content_hi']:$keyword_arr['PRODUCTS_FORM_GENDER']['content_en'];
			  ?>
        </select>
          <span class="error-message"> </span> </label>
      </div>
    </div>
    <div class="btnGroup text-center  mt-0">
      <input type="button" id="add_btn" value="Select" class="btn btnPrimary gaClass" data-ga-val="Added family members" onclick="popupSubmit()">
    </div>
  </div>
</form>

    </div>
  </div>
</div>

