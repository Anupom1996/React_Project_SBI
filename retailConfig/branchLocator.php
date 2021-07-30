<script>
$(document).ready(function(){
  $.ajax('<?php echo $media_base_path;?>/states?_sort=name:asc', {
      type: 'GET',
      success: function (data, status, xhr) {
        var len = data.length;
        $("#stateVal").val('<option>Select State</option>');
        for( var i = 0; i<len; i++){
            var id = data[i]['id'];
            var name = data[i]['name'];
            
            $("#stateVal").append("<option value='"+id+"'>"+name+"</option>");

        }
      },
      error: function (jqXhr, textStatus, errorMessage) {
             console.log('Error' + errorMessage);
      }
  });

  getTotalPageCount();

});

function getCityList(state){
  $.ajax('<?php echo $media_base_path;?>/cities?_sort=name:asc&state='+state, {
      type: 'GET',
      success: function (data, status, xhr) {
        var len = data.length;
        $("#cityVal").val('<option>Select City</option>');
        for( var i = 0; i<len; i++){
            var id = data[i]['id'];
            var name = data[i]['Name'];
            
            $("#cityVal").append("<option value='"+id+"'>"+name+"</option>");

        }
      },
      error: function (jqXhr, textStatus, errorMessage) {
             console.log('Error' + errorMessage);
      }
  });

}

function getTotalPageCount() {
    var city = $("#cityVal").val();
    var state = $("#stateVal").val();
    var queryStr = "";
    if (city > 0) {
        queryStr = "&city=" + city;
    }
    if (stateVal > 0) {
        queryStr = queryStr + "&state=" + stateVal;
    }

     $.ajax('<?php echo $media_base_path;?>/branches/count?'+ queryStr, {
      type: 'GET',
      success: function (data, status, xhr) {
        const pageCount = Math.ceil(data / 8 );
        sessionStorage.setItem("totalBranchItem", data);
        sessionStorage.setItem("totalPageCount", pageCount);
        sessionStorage.setItem("currentPage", 1);
        sessionStorage.setItem("startRange",0);        
      },
      error: function (jqXhr, textStatus, errorMessage) {
             console.log('Error' + errorMessage);
      }
  });    
}


function getBranchList(startRange){

  var city = $("#cityVal").val();
  var state = $("#stateVal").val();
  var queryStr = "";
  if (city > 0) {
      queryStr = "&city=" + city;
  }
  if (stateVal > 0) {
      queryStr = queryStr + "&state=" + stateVal;
  }

   $.ajax('<?php echo $media_base_path;?>/branches?_limit=8&_sort=created_at:desc&_start='+startRange + queryStr, {
    type: 'GET',
    success: function (data, status, xhr) {    

     var len = data.length;
     $('#branchDataList').empty();
                
      for( var i = 0; i<len; i++){
          var id = data[i]['id'];
          var name = data[i]['name'];
          var branch_code = data[i]['branch_code'];
          var address = data[i]['address'];
          var contact_number = data[i]['contact_number'];
          
          $("#branchDataList").append('<div class="col-md-3 col-12">\
            <div class="blist">\
              <h4>'+name+'</h4>\
              <p>'+address+'</p>\
              <div>Send Via <a href="javascript:void(0)">SMS</a>\
              <a href="javascript:void(0)">Email</a></div>\
            <button type="button" class="btn btn-outline-info btn-sm">View Location Map</button>\
          </div>\
        </div>');

      }
      // const pageCount = Math.ceil(data / 8 );
      // sessionStorage.setItem("totalBranchItem", data);
      // sessionStorage.setItem("totalPageCount", pageCount);
      // sessionStorage.setItem("currentPage", 1);
      // sessionStorage.setItem("startRange",0);
    },
    error: function (jqXhr, textStatus, errorMessage) {
           console.log('Error' + errorMessage);
    } 

    });

   if(sessionStorage.getItem("totalPageCount")>1){
      $('#paginateBranch').show();
    } else {
      $('#paginateBranch').hide();
    }
   $('#currentPage').html(sessionStorage.getItem("currentPage"));
   $('#totalPage').html(sessionStorage.getItem("totalPageCount"));
}

function handleArrowClick(isNext){
  var currentPage = eval(sessionStorage.getItem("currentPage"));
  var totalPageCount = eval(sessionStorage.getItem("totalPageCount"));
  var startRange = eval(sessionStorage.getItem("startRange"));
    
    if (isNext) {
        if (currentPage < totalPageCount) {
          sessionStorage.setItem("currentPage", eval(currentPage) + 1);
          sessionStorage.setItem("startRange",eval(startRange) + 8); 
          getBranchList(sessionStorage.getItem("startRange"));                    
        }
    } else {
        if (currentPage > 1) {
          sessionStorage.setItem("currentPage", parseInt(currentPage) - 1);
          sessionStorage.setItem("startRange",parseInt(startRange) - 8); 
          getBranchList(sessionStorage.getItem("startRange"));
        }
    }
  //console.log(currentPage , totalPageCount);
  if(currentPage ===1){
    $('#pagePrev').addClass('add-opticity');
    $('#pagePrev').removeClass('remove-opticity');
  } else {
     $('#pagePrev').addClass('remove-opticity');
    $('#pagePrev').removeClass('add-opticity');
  }

  if(currentPage == totalPageCount){
    $('#pageNext').addClass('add-opticity');
    $('#pageNext').removeClass('remove-opticity');
  } else {
      $('#pageNext').addClass('remove-opticity');
      $('#pageNext').removeClass('add-opticity');
  }

}

function submitBranch () {
  this.getBranchList(0);
  this.getTotalPageCount(); 
  
  var currentPage = eval(sessionStorage.getItem("currentPage"));
  var totalPageCount = eval(sessionStorage.getItem("totalPageCount"));
  if(currentPage == totalPageCount){
    $('#pageNext').addClass('add-opticity');
    $('#pageNext').removeClass('remove-opticity');
  } else {
      $('#pageNext').addClass('remove-opticity');
      $('#pageNext').removeClass('add-opticity');
  }
   if(sessionStorage.getItem("totalPageCount")>1){
      $('#paginateBranch').show();
    } else {
      $('#paginateBranch').hide();
    }
//GTM Handler
    window.dataLayer = window.dataLayer || [];
		let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
		let productName = sessionStorage.getItem('productCName');
		// let pagetype = sessionStorage.getItem('prodEventName');
    // pagetype = pagetype + "_product_page";
    let eventName = "sanjeevani_product_page_6_location_filter_click"
    let pagetype = sessionStorage.getItem('prodEventName');
    if (pagetype != 'sanjeevani') {
      eventName = 'portal_product_page_6_location_filter_click';
    }
    pagetype = pagetype + "_product_page";
    let stateName = $('#stateVal').find('option:selected').text();
    let cityName = $('#cityVal').find('option:selected').text();
		const data = {
			'event': eventName,
			'product_name': productName,
			'pagetype': pagetype,
			'client_id': gaUserId,
			'timestamp': gtmCurrentTime(),
			'quote_no': 'NA',
			'lead_no': 'NA',
      'policy_no': 'NA',
      'selected_state': stateName,
      'selected_city': cityName
		};
		window.dataLayer.push(data);
}
</script>

<section class="weAreWrapper">
      <div class="container">
        <h5 class="htitle text-center">
        <?php
			  echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_RETAIL_FOOTER_TEXT']['content_hi']:$keyword_arr['PRODUCTS_RETAIL_FOOTER_TEXT']['content_en'];
			  ?>
        </h5>
        <div class="garage-form">
          <form action="#" id="branchLocation">
            <div class="form-row">
              <div class="form-group col">
                <select name="stateVal" id="stateVal" class="form-control" onchange="getCityList(this.value)">
                  <option>
                  <?php
          echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_SELECT_STATE']['content_hi']:$keyword_arr['PRODUCTS_SELECT_STATE']['content_en'];
          ?>
                  </option>                 
                </select>
              </div>
              <div class="form-group col">
                <select name="cityVal" class="form-control" id="cityVal">
                  <option>
                  <?php
          echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_SELECT_CITY']['content_hi']:$keyword_arr['PRODUCTS_SELECT_CITY']['content_en'];
          ?>
                  </option>
                </select>
              </div>
              <div class="form-action">
                <button type="button" class="btn btn-primary" onclick="submitBranch ();">
                <?php
          echo ($_REQUEST['lang']=='hi')?$keyword_arr['PRODUCTS_FILTER_RESULT']['content_hi']:$keyword_arr['PRODUCTS_FILTER_RESULT']['content_en'];
          ?>
                </button>
              </div>
            </div>
          </form>
        </div>


        <div class="row" id="branchDataList"> </div>

        <div id="paginateBranch" class="text-center prev-next-panel blog-carousel-control" style="display: none;">
          <span class="active" id="currentPage"></span> / <span id="totalPage"></span>
          <img id="pagePrev" onclick="handleArrowClick(false)" class="add-opticity pagePrev" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkE4QzUzMTUwMjExMTFFQTg0MTdFRTdCQjMwMDg1NjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkE4QzUzMTYwMjExMTFFQTg0MTdFRTdCQjMwMDg1NjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2QThDNTMxMzAyMTExMUVBODQxN0VFN0JCMzAwODU2NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2QThDNTMxNDAyMTExMUVBODQxN0VFN0JCMzAwODU2NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkgTJkoAAACXSURBVHjaYmTAAbq6ugz+//+/Hsj8yIJLAZDaz8jIKACkHzLhUgDEAkCTPgLpAEZ8CoAmOZSVlV1gJKQAJMdISAFYESEFIAByeANIAVgHFgUwRRtgHKBJBdiCBOamBCA1H6pwYXl5eQKGIkIK0cMJq0JGLCGOoZARR9yhKGTCpggYDAuAVCKUG8DIgAeAAvrv378fAAIMAEppaqTDcbiMAAAAAElFTkSuQmCC" alt="">

          <img id="pageNext" onclick="handleArrowClick(true)" class="remove-opticity pageNext" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAABHNCSVQICAgIfAhkiAAAAJVJREFUKFOF0lENwzAMBNA7BUDHYIMwCoUwBFNJmELkoCiFMRiDDsIglEEmV2mkLknjL388nyzZVNUPgIHkQ0SsL4ohhC+AK4AVwFiDhu4xxjfJoQVp2T24oR7M6AweUAsWaIcAlrTJq4pUdSb5TGgq0D8QkfmAasDSMmqBjM7AhnpgR2u622RLVr/Ae39zzl1ab2JDP0dRXiv2mKk6AAAAAElFTkSuQmCC" alt="">
        </div>

      </div>
    </section>