<?php
	$blog 				= TRUE; 
	require '../retailConfig/header.php';
	
	$uri_path 			= parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
	$uri_segments 		= explode('/', $uri_path);
	$slug 				= trim(@$uri_segments[2]);
	$blogUrl 			= $base_url."/blog-details/".$slug;

	// echo "<pre>"; print_r($uri_segments); echo "</pre>"; exit();
	if(empty($slug)) {
  		header('Location:'.$base_url.'/not-found');
  		exit();
	}
	$page = $_REQUEST['page'];
	// echo $page;exit();
	$blogUrlLink = $media_base_path."/blogs?slug=".$page; 
	$related = $media_base_path."/blogs?id_ne="; 
	#$blogUrlLink = "https://content.sbigeneral.in/blogs?slug=why-is-travel-insurance-important";
	#$blogUrlLink = "https://uatcontent.sbigeneral.in/blogs?slug=world-diabetes-day-what-you-should-know";
	/*$ch = curl_init();  
    curl_setopt($ch,CURLOPT_URL,$blogUrlLink);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    #curl_setopt($ch, CURLOPT_HEADER, false);
    $output=curl_exec($ch); 
    curl_close($ch);
    $output = json_decode($output,true);
    echo "<pre>"; print_r($output); echo "</pre>"; exit();*/

?>
<section class="container-with-no-padding container">
	<div class="innerpageBanner row">
	    <div class="col-4">
	        <figure class="justify-content-between align-items-center argyaBaner"><img src="<?php echo $asset_path;?>/images/retail-head-icon.svg" alt="Arogya Sanjeevani Policy" /></figure>
	    </div>
	    <div class="col-8 d-flex align-items-center">
	        <div class="flex-column">
	            <h1>Samvad</h1>
	            <div class="healgth-productBtnMain">
	                
	            </div>
	        </div>
	    </div>
	    <div class="innerHeadBotomIcon"><img src="<?php echo $asset_path;?>/images/inner-banner-bottom-icon.svg" alt="Arogya Sanjeevani Policy" /></div>
	</div>

</section>
<div class="container">
	<ol class="breadcrumb">
		<li class="breadcrumb-item"><a href="<?=$base_url?>/home">Home</a></li>
		<li class="breadcrumb-item"><a href="<?=$base_url?>/blog">Blogs</a></li>
		<li class="breadcrumb-item active" aria-current="page">
			<span class="active blogTitle"></span>
		</li>
	</ol>
	<div class="blog-details">
		<figure class="blog-details-pic">
			<img class="blogImage" src="">
		</figure>
	</div>
	<div class="blog-details-header hide-mobile">
		<div class="row">
			<div class="col-lg-6 col-sm-12">
				<div class="date">
					<time class="blogCreated"></time>
				</div>

				<div class="social-links">
				    <ul>
				        <li>
				            <a href="#" target="_blank" rel="noreferrer noopener" aria-label="Share on Facebook" title="Share on Facebook" class="sc-bwzfXH ewcqji share-on-facebook">
				                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
				                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
				                </svg>
				            </a>
				        </li>
				        <li>
				            <a href="#" target="_blank" rel="noreferrer noopener" aria-label="Share on Twitter" title="Share on Twitter" class="sc-bwzfXH ewcqji share-on-twitter">
				                <div class="sc-bdVaJa sc-bxivhb fWYWWZ" style="background: none; padding: 5px 0px;">
				                    <div aria-hidden="true" class="sc-htpNat cgeQjm">
				                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
						                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
						                </svg>
				                    </div>
				                </div>
				            </a>
				        </li>
				        <li>
				            <a href="#" target="_blank"rel="noreferrer noopener" aria-label="Share on LinkedIn" title="Share on LinkedIn" class="sc-bwzfXH ewcqji share-on-linkedin">
				                <div class="sc-bdVaJa sc-dnqmqq dWbQzG" style="background: none; padding: 5px 0px;">
				                    <div aria-hidden="true" class="sc-htpNat cgeQjm">
				                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
						                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
						                </svg>
				                    </div>
				                </div>
				            </a>
				        </li>
				    </ul>
				</div>
			</div>

		</div>
	</div>

	<div class="blog-details-content">
		<h2 class="blogTitle"></h2>
		<div class="blogContent"></div>
	</div>
	<div class="subscribe-details hide-mobile">
	    <div class="lt-blue">
	        <h2>Subscribe to Our Blog</h2>
	        <p>Stay up to date with the latest marketing, sales, and service tips and news.</p>
	    </div>
	    <div class="rt-orange">
	        <div class="blog-subscribe-form">
	            <form class="">
	                <div class="row">
	                    <div class="col-lg-8"><input placeholder="Enter email address" type="email" class="form-control subsEmail" value="" /></div>
	                    <div class="col-lg-4"><button type="button" class="btn btn-outline-primary">Subscribe</button></div>
	                </div>
	            </form>
	        </div>
	    </div>
	</div>
	<div class="related-post hide-mobile">
		<h2>Related Posts</h2>
		<div class="row relatedHtml">
			
		</div>
	</div>
</div>

<script type="text/javascript">
	$(document).ready(function(){
		var _facebook 	= "https://facebook.com/sharer/sharer.php?u=";
		var _twitter 	= "https://twitter.com/intent/tweet/?";
		var _linkedin 	= "https://www.linkedin.com/shareArticle?mini=true";
		$.get("<?=$blogUrlLink?>", function(data){
			console.log(data);
			var obj = data[0];
			$(".blogTitle, title").html(obj.blog_title);
			$(".blogContent").html(obj.blog_post);
			$(".blogImage").attr("src", "<?=$media_base_path?>"+obj.featured_image.url);
			$(".blogCreated").html(getDate(obj.created_at));

			_facebook 	= _facebook + "<?=$blogUrl?>";
			$(".share-on-facebook").attr("href", _facebook);

			_twitter 	= _twitter + "text=" + obj.blog_title + "&url=<?=$blogUrl?>";
			$(".share-on-twitter").attr("href", _twitter);

			_linkedin 	= _linkedin + "&url=<?=$blogUrl?>" + "&title=" + obj.blog_title + "&summary=" + obj.blog_title + "&source=<?=$blogUrl?>";
			$(".share-on-linkedin").attr("href", _linkedin);

			$.get("<?=$related?>"+obj.id+"&_limit=3&blogcategory="+obj.blogcategory.id, function(relatedData){
				console.log(relatedData);
				$.each(relatedData, function(key, value) {
					var title = value.blog_title;
					title = (title.length > 45) ? value.blog_title.substring(0, 45)+'...' : value.blog_title;
				  	var relatedHtml = '<div class="col-lg-4 col-sm-12">'+
					    '<div class="blog-box">'+
					        '<figure class="blog-figure">'+
					            '<a href="<?=$base_url.'/blog-details/'?>'+value.slug+'"><img class="img-fluid" src="<?=$media_base_path?>'+value.featured_image.url+'" /></a>'+
					        '</figure>'+
					        '<div class="blog-content">'+
					            '<div class="blog-head">'+
					                '<div class="blog-category">'+obj.blogcategory.blog_category+'</div>'+
					                '<div class="blog-time"><time>'+getDate(value.created_at)+'</time></div>'+
					            '</div>'+
					            '<h2 class="blog-title"><a href="<?=$base_url.'/blog-details/'?>'+value.slug+'">'+title+'</a></h2>'+
					        '</div>'+
					    '</div>'+
					'</div>';
					$(".relatedHtml").append(relatedHtml);
				});
			});
		});

		$(".btn-outline-primary").click(function(){
			var _email = $(".subsEmail").val();
			if(_email != "" && ValidateEmail(_email)){
				$.post("<?=$media_base_path.'/blogsubscribtions'?>", {email:_email, is_active:true}, function(data){
					if(data.is_active == true){
						swal("", "Subscribed Successfully!", "success");
					}
				})
			} else{
				swal("", "Please Enter Valid Email Id.", "error");
			}
		});
	});

	function getDate(strDate){
		var d 		= new Date(strDate);
		var lMonths 	= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var sMonths 	= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		return d.getDate()+' '+sMonths[d.getMonth()]+', '+d.getFullYear();
	}

	function ValidateEmail(mail) {
	 	if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
	    	return (true)
	  	}
	    return (false)
	}
</script>


<?php require '../retailConfig/footer.php';  ?>