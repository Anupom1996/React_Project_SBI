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

	switch ($page) {
		case "what-is-the-difference-between-group-health-insurance-and-individual-retail-health-insurance":
		echo '<script type="application/ld+json">
				{
					"@context": "https://schema.org/",
					"@type": "BreadcrumbList",
					"itemListElement": [{
					"@type": "ListItem",
					"position": 1,
					"name": "Home",
					"item": "https://www.sbigeneral.in/portal/" 
					},{
					"@type": "ListItem",
					"position": 2,
					"name": "Blog",
					"item": "https://www.sbigeneral.in/portal/blog"
					},{
					"@type": "ListItem",
					"position": 3,
					"name": "Group Health Insurance and Individual (Retail) Health Insurance",
					"item": "https://www.sbigeneral.in/portal/blog-details/what-is-the-difference-between-group-health-insurance-and-individual-retail-health-insurance" 
					}]
				}
				</script>
				<script type="application/ld+json">
					{
					"@context": "https://schema.org/" ,
					"@type": "BlogPosting",
					"mainEntityOfPage": {
					"@type": "WebPage",
					"@id": "https://www.sbigeneral.in/portal/blog-details/what-is-the-difference-between-group-health-insurance-and-individual-retail-health-insurance"
					},
					"headline": "What is the difference between group health insurance and individual (Retail) Health Insurance?",
					"image": ["https://content.sbigeneral.in/uploads/0a5483868138406d95b1d0e781f7952f.jpg"],
					"datePublished": "2020-07-24T08:53:21+00:00",
					"dateModified": "2020-07-24T08:53:21+00:00",
					"author": {
					"@type": "Organization",
					"name": "SBI General Insurance"
					},
					"publisher": {
					"@type": "Organization",
					"name": "SBI General Insurance",
					"logo": {
					"@type": "ImageObject",
					"url": "https://www.sbigeneral.in/portal/static/media/logo.be3c6e72.svg"
					}
					},
					"description": "Group and individual health insurance plans have several advantages & benefits. Visit SBI General Insurance to understand in detail about the difference between individual and group insurance. Know more."
					}
				</script>';
		break;
		
		case "common-mistakes-people-make-while-buying-car-insurance":
		echo '<script type=""application/ld+json"">
		{
		  ""@context"": ""https://schema.org/"", 
		  ""@type"": ""BreadcrumbList"", 
		  ""itemListElement"": [{
			""@type"": ""ListItem"", 
			""position"": 1, 
			""name"": ""Home"",
			""item"": ""https://www.sbigeneral.in/portal/""  
		  },{
			""@type"": ""ListItem"", 
			""position"": 2, 
			""name"": ""Blog"",
			""item"": ""https://www.sbigeneral.in/portal/blog "" 
		  },{
			""@type"": ""ListItem"", 
			""position"": 3, 
			""name"": ""Common Mistakes Made While Buying A Car"",
			""item"": ""https://www.sbigeneral.in/portal/blog-details/common-mistakes-people-make-while-buying-car-insurance"" 
		  }]
		}
		</script>
		
		<script type=""application/ld+json"">
        {
        ""@context"": ""https://schema.org/"" ,
        ""@type"": ""BlogPosting"",
        ""mainEntityOfPage"": {
          ""@type"": ""WebPage"",
        ""@id"": ""https://www.sbigeneral.in/portal/blog-details/common-mistakes-people-make-while-buying-car-insurance""
        },
        ""headline"": ""Common Mistakes People Make While Buying Car Insurance"",
        ""image"": [
       "" https://content.sbigeneral.in/uploads/51bf22ed5d52483f872f68b4fa52ec5f.png""
],
         ""datePublished"": ""2020-04-13T08:53:21+00:00"",
        ""dateModified"": ""2020-04-13T08:53:21+00:00"",
        ""author"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance""
        },
        ""publisher"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance"",
        ""logo"": {
        ""@type"": ""ImageObject"",
        ""url"": ""https://www.sbigeneral.in/portal/static/media/logo.be3c6e72.svg""
        }
        },
        ""description"": ""Car Insurance Mistakes: If you plan to buy car insurance, here are five basic mistakes that an individual should avoid when buying car insurance. Know more.""
         }
    </script>';
		break;

case "how-to-get-health-insurance-quotes":
			echo '<script type=""application/ld+json"">
			{
			  ""@context"": ""https://schema.org/"" , 
			  ""@type"": ""BreadcrumbList"", 
			  ""itemListElement"": [{
				""@type"": ""ListItem"", 
				""position"": 1, 
				""name"": ""Home"",
				""item"": ""https://www.sbigeneral.in/portal/ "" 
			  },{
				""@type"": ""ListItem"", 
				""position"": 2, 
				""name"": ""Blog"",
				""item"": ""https://www.sbigeneral.in/portal/blog""  
			  },{
				""@type"": ""ListItem"", 
				""position"": 3, 
				""name"": ""How To Get Insurance Quotes"",
				""item"": ""https://www.sbigeneral.in/portal/blog-details/how-to-get-health-insurance-quotes"" 
			  }]
			}
			</script>
			

		<script type=""application/ld+json"">
        {
        ""@context"": ""https://schema.org/"" ,
        ""@type"": ""BlogPosting"",
        ""mainEntityOfPage"": {
          ""@type"": ""WebPage"",
        ""@id"": ""https://www.sbigeneral.in/portal/blog-details/how-to-get-health-insurance-quotes""
        },
        ""headline"": ""How to get health insurance quotes"",
        ""image"": [
      ""https://content.sbigeneral.in/uploads/d3e9da5899314ce6bcd50994bcaa8dc2.png""
],
         ""datePublished"": ""2020-08-26T08:53:21+00:00"",
        ""dateModified"": ""2020-08-26T08:53:21+00:00"",
        ""author"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance""
        },
        ""publisher"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance"",
        ""logo"": {
        ""@type"": ""ImageObject"",
        ""url"": ""https://www.sbigeneral.in/portal/static/media/logo.be3c6e72.svg""
        }
        },
        ""description"": ""Learn how to get an individual or group health insurance quotes with SBI General Insurance. Keep Reading about health insurance quotes and apply for medical coverage..""
         }
    </script>';
		break;

		case "group-health-insurance-what-are-the-advantages":
			echo '<script type=""application/ld+json"">
			{
			  ""@context"": ""https://schema.org/"" , 
			  ""@type"": ""BreadcrumbList"", 
			  ""itemListElement"": [{
				""@type"": ""ListItem"", 
				""position"": 1, 
				""name"": ""Home"",
				""item"": ""https://www.sbigeneral.in/portal/ ""
			  },{
				""@type"": ""ListItem"", 
				""position"": 2, 
				""name"": ""Blog"",
				""item"": ""https://www.sbigeneral.in/portal/blog""  
			  },{
				""@type"": ""ListItem"", 
				""position"": 3, 
				""name"": ""Advantages Of Group Health Insurance"",
				""item"": ""https://www.sbigeneral.in/portal/blog-details/group-health-insurance-what-are-the-advantages""
			  }]
			}
			</script>

			<script type=""application/ld+json"">
			{
			""@context"": ""https://schema.org/"" ,
			""@type"": ""BlogPosting"",
			""mainEntityOfPage"": {
			  ""@type"": ""WebPage"",
			""@id"": ""https://www.sbigeneral.in/portal/blog-details/group-health-insurance-what-are-the-advantages""
			},
			""headline"": ""Group Health Insurance: What Are The Advantages?"",
			""image"": [
		   ""https://content.sbigeneral.in/uploads/b7f2b64dcc5b4291ae6529c0f6b011d2.jpg""
	],
			 ""datePublished"": ""2020-11-13T08:53:21+00:00"",
			""dateModified"": ""2020-11-13T08:53:21+00:00"",
			""author"": {
			  ""@type"": ""Organization"",
			""name"": ""SBI General Insurance""
			},
			""publisher"": {
			  ""@type"": ""Organization"",
			""name"": ""SBI General Insurance"",
			""logo"": {
			""@type"": ""ImageObject"",
			""url"": ""https://www.sbigeneral.in/portal/static/media/logo.be3c6e72.svg""
			}
			},
			""description"": ""Group health insurance is a medical insurance policy for employees of a company. Read in detail about six benefits of group health insurance here at SBI General Insurance..""
			 }
		</script>';
		break;


		case "whats-a-heart-health-check":
			echo '<script type=""application/ld+json"">
			{
			  ""@context"": ""https://schema.org/"" , 
			  ""@type"": ""BreadcrumbList"", 
			  ""itemListElement"": [{
				""@type"": ""ListItem"", 
				""position"": 1, 
				""name"": ""Home"",
				""item"": "" https://www.sbigeneral.in/portal/ ""
			  },{
				""@type"": ""ListItem"", 
				""position"": 2, 
				""name"": ""Blog"",
				""item"": ""https://www.sbigeneral.in/portal/blog""  
			  },{
				""@type"": ""ListItem"", 
				""position"": 3, 
				""name"": ""How to Check Heart Health?"",
				""item"": ""https://www.sbigeneral.in/portal/blog-details/whats-a-heart-health-check""
			  }]
			}
			</script>
			
			"<script type=""application/ld+json"">
        {
        ""@context"": ""https://schema.org/"" ,
        ""@type"": ""BlogPosting"",
        ""mainEntityOfPage"": {
          ""@type"": ""WebPage"",
        ""@id"": ""https://www.sbigeneral.in/portal/blog-details/whats-a-heart-health-check""
        },
        ""headline"": ""What is A Heart Health Check?"",
        ""image"": [
      ""https://content.sbigeneral.in/uploads/64c92eb8edff41be8e1dce9c3456b960.jpg""
],
         ""datePublished"": ""2020-09-04T08:53:21+00:00"",
        ""dateModified"": ""2020-09-04T08:53:21+00:00"",
        ""author"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance""
        },
        ""publisher"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance"",
        ""logo"": {
        ""@type"": ""ImageObject"",
        ""url"": ""https://www.sbigeneral.in/portal/static/media/logo.be3c6e72.svg""
        }
        },
        ""description"": ""Visit SBI General Insurance to read few important screening tests that will help you better understand your risk of a heart attack or stroke. Read what is a heart health check & best way to check heart health.""
         }
    </script>';
		break;


		case "can-two-wheeler-insurance-be-done-online":
			echo '<script type=""application/ld+json"">
			{
			  ""@context"": ""https://schema.org/"" , 
			  ""@type"": ""BreadcrumbList"", 
			  ""itemListElement"": [{
				""@type"": ""ListItem"", 
				""position"": 1, 
				""name"": ""Home"",
				""item"": ""https://www.sbigeneral.in/portal/""  
			  },{
				""@type"": ""ListItem"", 
				""position"": 2, 
				""name"": ""Blog"",
				""item"": ""https://www.sbigeneral.in/portal/blog""  
			  },{
				""@type"": ""ListItem"", 
				""position"": 3, 
				""name"": ""Can two wheeler insurance be done online ?"",
				""item"": ""https://www.sbigeneral.in/portal/blog-details/can-two-wheeler-insurance-be-done-online""
			  }]
			}
			</script>

		<script type=""application/ld+json"">
        {
        ""@context"": ""https://schema.org/"" ,
        ""@type"": ""BlogPosting"",
        ""mainEntityOfPage"": {
          ""@type"": ""WebPage"",
        ""@id"": ""https://www.sbigeneral.in/portal/blog-details/can-two-wheeler-insurance-be-done-online""
        },
        ""headline"": ""Can two wheeler insurance be done online? "",
        ""image"": [
      ""https://content.sbigeneral.in/uploads/26780bd258cd4a2fbca1604e82ff31c8.png""
],
         ""datePublished"": ""2020-04-09T08:53:21+00:00"",
        ""dateModified"": ""2020-04-09T08:53:21+00:00"",
        ""author"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance""
        },
        ""publisher"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance"",
        ""logo"": {
        ""@type"": ""ImageObject"",
        ""url"": ""https://www.sbigeneral.in/portal/static/media/logo.be3c6e72.svg""
        }
        },
        ""description"": ""Check out the steps to buy and renew two wheeler insurance online in India. Buy 2 wheeler insurance easily online at SBI General Insurance.""
         }
    </script>';
		break;
		
		case "how-to-be-a-smart-healthcare-consumer":
			echo '<script type=""application/ld+json"">
			{
			  ""@context"": ""https://schema.org/"" , 
			  ""@type"": ""BreadcrumbList"", 
			  ""itemListElement"": [{
				""@type"": ""ListItem"", 
				""position"": 1, 
				""name"": ""Home"",
				""item"":  ""https://www.sbigeneral.in/portal/""  
			  },{
				""@type"": ""ListItem"", 
				""position"": 2, 
				""name"": ""Blog"",
				""item"":  ""https://www.sbigeneral.in/portal/blog""  
			  },{
				""@type"": ""ListItem"", 
				""position"": 3, 
				""name"": ""How to be A Smart Healthcare Consumer ? "",
				""item"":  ""https://www.sbigeneral.in/portal/blog-details/how-to-be-a-smart-healthcare-consumer""
			  }]
			}
			</script>

			<script type=""application/ld+json"">
        {
        ""@context"": ""https://schema.org/"" ,
        ""@type"": ""BlogPosting"",
        ""mainEntityOfPage"": {
          ""@type"": ""WebPage"",
        ""@id"": ""https://www.sbigeneral.in/portal/blog-details/how-to-be-a-smart-healthcare-consumer""
        },
        ""headline"": "" How To Be A Smart Healthcare Consumer? "",
        ""image"": [
     "" https://content.sbigeneral.in/uploads/5d3cb8c248534a34b25f1d5ddf5b16d1.png""
],
         ""datePublished"": ""2020-04-06T08:53:21+00:00"",
        ""dateModified"": ""2020-04-06T08:53:21+00:00"",
        ""author"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance""
        },
        ""publisher"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance"",
        ""logo"": {
        ""@type"": ""ImageObject"",
        ""url"": ""https://www.sbigeneral.in/portal/static/media/logo.be3c6e72.svg""
        }
        },
        ""description"": ""This articles helps you to explain the tips to be a smart healthcare consumer at a time when medical expenses are sky-rocketing. Read more at SBI General Insurance..""
         }
    </script>';
		break;
		
			
		case "checklist-for-car-insurance-buyers-in-india":
			echo '<script type=""application/ld+json"">
			{
			  ""@context"": ""https://schema.org/"" , 
			   ""@type"": ""BreadcrumbList"",
			  ""itemListElement"": [{
				""@type"": ""ListItem"", 
				""position"": 1, 
				""name"": ""Home"",
				""item"":  ""https://www.sbigeneral.in/portal/""  
			  },{
				""@type"": ""ListItem"", 
				""position"": 2, 
				""name"": ""Blog"",
				""item"":  ""https://www.sbigeneral.in/portal/blog""  
			  },{
				""@type"": ""ListItem"", 
				""position"": 3, 
				""name"": "" Checklist For Car Insurance Buyers "",
				""item"":  ""https://www.sbigeneral.in/portal/blog-details/checklist-for-car-insurance-buyers-in-india""
			  }]
			}
			</script>

			<script type=""application/ld+json"">
        {
        ""@context"": ""https://schema.org/"" ,
        ""@type"": ""BlogPosting"",
        ""mainEntityOfPage"": {
          ""@type"": ""WebPage"",
        ""@id"": ""https://www.sbigeneral.in/portal/blog-details/checklist-for-car-insurance-buyers-in-india""
        },
        ""headline"": ""Checklist for Car Insurance Buyers in India "",
        ""image"": [
      ""https://content.sbigeneral.in/uploads/fac8ecdb6b544387bfe35e2f8986a732.png""
],
         ""datePublished"": ""2020-04-10T08:53:21+00:00"",
        ""dateModified"": ""2020-04-10T08:53:21+00:00"",
        ""author"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance""
        },
        ""publisher"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance"",
        ""logo"": {
        ""@type"": ""ImageObject"",
        ""url"": ""https://www.sbigeneral.in/portal/static/media/logo.be3c6e72.svg""
        }
        },
        ""description"": ""Buying right car insurance is necessary as per our need. Read this blog at SBI General Insurance to understand the checklist for buying car insurance in India. Read More!.""
         }
    </script>';
		break;
		
		case "why-should-you-get-an-eye-exam-annually":
			echo '<script type=""application/ld+json"">
			{
			  ""@context"": ""https://schema.org/"" , 
			   ""@type"": ""BreadcrumbList"",
			  ""itemListElement"": [{
				""@type"": ""ListItem"", 
				""position"": 1, 
				""name"": ""Home"",
				""item"":  ""https://www.sbigeneral.in/portal/ ""
			  },{
				""@type"": ""ListItem"", 
				""position"": 2, 
				""name"": ""Blog"",
				""item"":  ""https://www.sbigeneral.in/portal/blog""
			  },{
				""@type"": ""ListItem"", 
				""position"": 3, 
				""name"": "" Why Should You Get an Eye Exam Annually? "",
				""item"":  ""https://www.sbigeneral.in/portal/blog-details/why-should-you-get-an-eye-exam-annually""
			  }]
			}
			</script>

		<script type=""application/ld+json"">
        {
        ""@context"": ""https://schema.org/"" ,
        ""@type"": ""BlogPosting"",
        ""mainEntityOfPage"": {
          ""@type"": ""WebPage"",
        ""@id"": ""https://www.sbigeneral.in/portal/blog-details/why-should-you-get-an-eye-exam-annually""
        },
        ""headline"": ""Why Should You Get an Eye Exam Annually? "",
        ""image"": [
      ""https://content.sbigeneral.in/uploads/849e6e92f66b4f80b0c916d83da4f323.jpg""
],
         ""datePublished"": ""2020-08-27T08:53:21+00:00"",
        ""dateModified"": ""2020-08-27T08:53:21+00:00"",
        ""author"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance""
        },
        ""publisher"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance"",
        ""logo"": {
        ""@type"": ""ImageObject"",
        ""url"": ""https://www.sbigeneral.in/portal/static/media/logo.be3c6e72.svg""
        }
        },
        ""description"": ""Know the reasons why you should schedule an eye test every year. Know more about importance of eye exams & critical illness insurance at SBI General Insurance.""
         }
    </script>';
		break;
		
		case "what-illnesses-are-covered-under-critical-illness-insurance":
			echo '<script type=""application/ld+json"">
			{
			  ""@context"": ""https://schema.org/"" , 
			   ""@type"": ""BreadcrumbList"",
			  ""itemListElement"": [{
				""@type"": ""ListItem"", 
				""position"": 1, 
				""name"": ""Home"",
				""item"":  ""https://www.sbigeneral.in/portal/ ""
			  },{
				""@type"": ""ListItem"", 
				""position"": 2, 
				""name"": ""Blog"",
				""item"":  ""https://www.sbigeneral.in/portal/blog""
			  },{
				""@type"": ""ListItem"", 
				""position"": 3, 
				""name"": """" Illnesess Covered Under Critical Illness  """",
				""item"":  https://www.sbigeneral.in/portal/blog-details/what-illnesses-are-covered-under-critical-illness-insurance
			  }]
			}
			</script>

			<script type=""application/ld+json"">
        {
        ""@context"": ""https://schema.org/"" ,
        ""@type"": ""BlogPosting"",
        ""mainEntityOfPage"": {
          ""@type"": ""WebPage"",
        ""@id"": ""https://www.sbigeneral.in/portal/blog-details/what-illnesses-are-covered-under-critical-illness-insurance""
        },
        ""headline"": ""What Illnesses Are Covered Under Critical Illness Insurance? "",
        ""image"": [
      ""https://content.sbigeneral.in/uploads/8451e85b53d84d8e9f0f58703adc463b.png""
],
         ""datePublished"": ""2020-04-09T08:53:21+00:00"",
        ""dateModified"": ""2020-04-09T08:53:21+00:00"",
        ""author"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance""
        },
        ""publisher"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance"",
        ""logo"": {
        ""@type"": ""ImageObject"",
        ""url"": ""https://www.sbigeneral.in/portal/static/media/logo.be3c6e72.svg""
        }
        },
        ""description"": ""Check out the critical illnesses covered under SBI General’s Critical Illness Insurance Policy. Read more to know everything about Critical Illness Insurance.""
         }
    </script>';
		break;
		

		case "why-is-home-insurance-important":
			echo '<script type=""application/ld+json"">
			{
			  ""@context"": ""https://schema.org/"" , 
			   ""@type"": ""BreadcrumbList"",
			  ""itemListElement"": [{
				""@type"": ""ListItem"", 
				""position"": 1, 
				""name"": ""Home"",
				""item"":  ""https://www.sbigeneral.in/portal/ ""
			  },{
				""@type"": ""ListItem"", 
				""position"": 2, 
				""name"": ""Blog"",
				""item"":  ""https://www.sbigeneral.in/portal/blog""
			  },{
				""@type"": ""ListItem"", 
				""position"": 3, 
				""name"": "" Importance Of Home Insurance "",
				""item"":  ""https://www.sbigeneral.in/portal/blog-details/why-is-home-insurance-important""
			  }]
			}
			</script>
			
			
		<script type=""application/ld+json"">
        {
        ""@context"": ""https://schema.org/"" ,
        ""@type"": ""BlogPosting"",
        ""mainEntityOfPage"": {
          ""@type"": ""WebPage"",
        ""@id"": ""https://www.sbigeneral.in/portal/blog-details/why-is-home-insurance-important""
        },
        ""headline"": "" Why Is Home Insurance Important? "",
        ""image"": [
      ""https://content.sbigeneral.in/uploads/cef3e08a84f6420ea2ce833252adc3eb.jpg""
],
         ""datePublished"": ""2020-11-13T08:53:21+00:00"",
        ""dateModified"": ""2020-11-13T08:53:21+00:00"",
        ""author"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance""
        },
        ""publisher"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance"",
        ""logo"": {
        ""@type"": ""ImageObject"",
        ""url"": ""https://www.sbigeneral.in/portal/static/media/logo.be3c6e72.svg""
        }
        },
        ""description"": ""The importance of property insurance - Read in detail four important reasons to buy home insurance SBI General Insurance. Keep reading & buy a Home Insurance policy with us.""
         }
    </script>';
		break;

		case "what-is-third-party-insurance-for-a-car":
			echo '<script type=""application/ld+json"">
			{
			  ""@context"": ""https://schema.org/"" , 
			   ""@type"": ""BreadcrumbList"",
			  ""itemListElement"": [{
				""@type"": ""ListItem"", 
				""position"": 1, 
				""name"": ""Home"",
				""item"":  ""https://www.sbigeneral.in/portal/ ""
			  },{
				""@type"": ""ListItem"", 
				""position"": 2, 
				""name"": ""Blog"",
				""item"":  ""https://www.sbigeneral.in/portal/blog""
			  },{
				""@type"": ""ListItem"", 
				""position"": 3, 
				""name"": "" Thirty Party Insurance For A Car "",
				""item"":  ""https://www.sbigeneral.in/portal/blog-details/what-is-third-party-insurance-for-a-car""
			  }]
			}
			</script>
			<script type=""application/ld+json"">
        {
        ""@context"": ""https://schema.org/"" ,
        ""@type"": ""BlogPosting"",
        ""mainEntityOfPage"": {
          ""@type"": ""WebPage"",
        ""@id"": ""https://www.sbigeneral.in/portal/blog-details/what-is-third-party-insurance-for-a-car""
        },
        ""headline"": "" What Is Third Party Insurance For A Car? "",
        ""image"": [
      ""https://content.sbigeneral.in/uploads/5e5638bdae3443fc93137bead18fb6ae.jpg""
],
         ""datePublished"": ""2020-11-06T08:53:21+00:00"",
        ""dateModified"": ""2020-11-06T08:53:21+00:00"",
        ""author"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance""
        },
        ""publisher"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance"",
        ""logo"": {
        ""@type"": ""ImageObject"",
        ""url"": ""https://www.sbigeneral.in/portal/static/media/logo.be3c6e72.svg""
        }
        },
        ""description"": ""Third-party insurance is the type of insurance that offers protection against damages to the third-party by the insured vehicle. Know in detail what is covered under the third party insurance & how it works. Know more.""
         }
    </script>';
		break;


		case "what-is-third-party-insurance-for-a-car":
			echo '<script type=""application/ld+json"">
			{
			  ""@context"": ""https://schema.org/"" , 
			   ""@type"": ""BreadcrumbList"",
			  ""itemListElement"": [{
				""@type"": ""ListItem"", 
				""position"": 1, 
				""name"": ""Home"",
				""item"":  ""https://www.sbigeneral.in/portal/ ""
			  },{
				""@type"": ""ListItem"", 
				""position"": 2, 
				""name"": ""Blog"",
				""item"":  ""https://www.sbigeneral.in/portal/blog""
			  },{
				""@type"": ""ListItem"", 
				""position"": 3, 
				""name"": ""What Is Travel Insurance And How Does It Work?  "",
				""item"":  ""https://www.sbigeneral.in/portal/blog-details/what-is-travel-insurance-and-how-does-it-work""
			  }]
			}
			</script>
			
			<script type=""application/ld+json"">
        {
        ""@context"": ""https://schema.org/"" ,
        ""@type"": ""BlogPosting"",
        ""mainEntityOfPage"": {
          ""@type"": ""WebPage"",
        ""@id"": ""https://www.sbigeneral.in/portal/blog-details/what-is-travel-insurance-and-how-does-it-work""
        },
        ""headline"": "" What is Travel Insurance and How Does It Work? "",
        ""image"": [
     "" https://content.sbigeneral.in/uploads/545cd7c7595749be92cf5199cd38c81d.jpg""
],
         ""datePublished"": ""2020-11-13T08:53:21+00:00"",
        ""dateModified"": ""2020-11-13T08:53:21+00:00"",
        ""author"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance""
        },
        ""publisher"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance"",
        ""logo"": {
        ""@type"": ""ImageObject"",
        ""url"": ""https://www.sbigeneral.in/portal/static/media/logo.be3c6e72.svg""
        }
        },
        ""description"": ""Travel insurance is a plan that protects you from any financial risks & losses that can occur while traveling. Know in detail what travel insurance covers, does not cover & how does travel insurance work.""
         }
    </script>';
		break;

		case "why-is-travel-insurance-important":
			echo '<script type=""application/ld+json"">
			{
			  ""@context"": ""https://schema.org/"" , 
			   ""@type"": ""BreadcrumbList"",
			  ""itemListElement"": [{
				""@type"": ""ListItem"", 
				""position"": 1, 
				""name"": ""Home"",
				""item"":  ""https://www.sbigeneral.in/portal/ ""
			  },{
				""@type"": ""ListItem"", 
				""position"": 2, 
				""name"": ""Blog"",
				""item"":  ""https://www.sbigeneral.in/portal/blog""
			  },{
				""@type"": ""ListItem"", 
				""position"": 3, 
				""name"": ""Why Is Travel Insurance Important? "",
				""item"":  ""https://www.sbigeneral.in/portal/blog-details/why-is-travel-insurance-important""
			  }]
			}
			</script>
			
			<script type=""application/ld+json"">
        {
        ""@context"": ""https://schema.org/"" ,
        ""@type"": ""BlogPosting"",
        ""mainEntityOfPage"": {
          ""@type"": ""WebPage"",
        ""@id"": ""https://www.sbigeneral.in/portal/blog-details/why-is-travel-insurance-important""
        },
        ""headline"": "" Why is Travel Insurance Important? "",
        ""image"": [
      ""https://content.sbigeneral.in/uploads/4e891f4d785d4694a92c6ccd9d7285e6.jpg""
],
         ""datePublished"": ""2020-11-13T08:53:21+00:00"",
        ""dateModified"": ""2020-11-13T08:53:21+00:00"",
        ""author"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance""
        },
        ""publisher"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance"",
        ""logo"": {
        ""@type"": ""ImageObject"",
        ""url"": ""https://www.sbigeneral.in/portal/static/media/logo.be3c6e72.svg""
        }
        },
        ""description"": ""The importance of travel insurance - Visit SBI General Insurance to read in detail key reasons why travel insurance is important for overseas travellers. Keep reading & buy a travel insurance policy with us.""
         }
    </script>';
		break;

		case "prevention-planner-for-men-between-20-and-40":
			echo '<script type=""application/ld+json"">
			{
			  ""@context"": ""https://schema.org/"" , 
			   ""@type"": ""BreadcrumbList"",
			  ""itemListElement"": [{
				""@type"": ""ListItem"", 
				""position"": 1, 
				""name"": ""Home"",
				""item"":  ""https://www.sbigeneral.in/portal/ ""
			  },{
				""@type"": ""ListItem"", 
				""position"": 2, 
				""name"": ""Blog"",
				""item"":  ""https://www.sbigeneral.in/portal/blog""
			  },{
				""@type"": ""ListItem"", 
				""position"": 3, 
				""name"": "" Prevention Planner For Men Between 20 & 40 "",
				""item"":  ""https://www.sbigeneral.in/portal/blog-details/prevention-planner-for-men-between-20-and-40""
			  }]
			}
			</script>

			<script type=""application/ld+json"">
        {
        ""@context"": ""https://schema.org/"" ,
        ""@type"": ""BlogPosting"",
        ""mainEntityOfPage"": {
          ""@type"": ""WebPage"",
        ""@id"": ""https://www.sbigeneral.in/portal/blog-details/prevention-planner-for-men-between-20-and-40""
        },
        ""headline"": ""  Prevention Planner for Men Between 20 & 40 "",
        ""image"": [
      ""https://content.sbigeneral.in/uploads/173fd22ec6474a859e2add19e71513d0.png""
],
         ""datePublished"": ""2020-09-04T08:53:21+00:00"",
        ""dateModified"": ""2020-09-04T08:53:21+00:00"",
        ""author"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance""
        },
        ""publisher"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance"",
        ""logo"": {
        ""@type"": ""ImageObject"",
        ""url"": ""https://www.sbigeneral.in/portal/static/media/logo.be3c6e72.svg""
        }
        },
        ""description"": ""Men full health check: Visit SBI General Insurance to read some standard screening tests every man should have between 20 & 40 to detect the hidden disease if any & get them controlled or treated at the right time.""
         }
    </script>';

			
		break;

		case "reasons-you-should-buy-health-insurance-and-a-critical-illness-policy-separately":
			echo '<script type=""application/ld+json"">
			{
			  ""@context"": ""https://schema.org/"" , 
			   ""@type"": ""BreadcrumbList"",
			  ""itemListElement"": [{
				""@type"": ""ListItem"", 
				""position"": 1, 
				""name"": ""Home"",
				""item"":  ""https://www.sbigeneral.in/portal/ ""
			  },{
				""@type"": ""ListItem"", 
				""position"": 2, 
				""name"": ""Blog"",
				""item"":  ""https://www.sbigeneral.in/portal/blog""
			  },{
				""@type"": ""ListItem"", 
				""position"": 3, 
				""name"": "" Reasons To Buy Health Insurance & A Critical Illness Policy Separately "",
				""item"":  ""https://www.sbigeneral.in/portal/blog-details/reasons-you-should-buy-health-insurance-and-a-critical-illness-policy-separately""
			  }]
			}
			</script>
			
		<script type=""application/ld+json"">
        {
        ""@context"": ""https://schema.org/"" ,
        ""@type"": ""BlogPosting"",
        ""mainEntityOfPage"": {
          ""@type"": ""WebPage"",
        ""@id"": ""https://www.sbigeneral.in/portal/blog-details/reasons-you-should-buy-health-insurance-and-a-critical-illness-policy-separately""
        },
        ""headline"": "" Reasons You Should Buy Health Insurance And A Critical Illness Policy Separately "",
        ""image"": [
      ""https://content.sbigeneral.in/uploads/307901351ffa41d4b928642e9c4f89ab.jpg""
],
         ""datePublished"": ""2020-09-04T08:53:21+00:00"",
        ""dateModified"": ""2020-09-04T08:53:21+00:00"",
        ""author"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance""
        },
        ""publisher"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance"",
        ""logo"": {
        ""@type"": ""ImageObject"",
        ""url"": ""https://www.sbigeneral.in/portal/static/media/logo.be3c6e72.svg""
        }
        },
        ""description"": ""It would be best to opt for separate critical illness insurance as your health insurance policy may not cover your critical diseases. Know the difference between health insurance and critical illness insurance.""
         }
    </script>';

			
		break;


		case "what-is-covered-by-third-party-car-insurance":
			echo '<script type=""application/ld+json"">
			{
			  ""@context"": ""https://schema.org/"" , 
			   ""@type"": ""BreadcrumbList"",
			  ""itemListElement"": [{
				""@type"": ""ListItem"", 
				""position"": 1, 
				""name"": ""Home"",
				""item"":  ""https://www.sbigeneral.in/portal/ ""
			  },{
				""@type"": ""ListItem"", 
				""position"": 2, 
				""name"": ""Blog"",
				""item"":  ""https://www.sbigeneral.in/portal/blog""
			  },{
				""@type"": ""ListItem"", 
				""position"": 3, 
				""name"": "" What Is Covered By Third Party Car Insurance? "",
				""item"":  ""https://www.sbigeneral.in/portal/blog-details/what-is-covered-by-third-party-car-insurance""
			  }]
			}
			</script>

			<script type=""application/ld+json"">
        {
        ""@context"": ""https://schema.org/"" ,
        ""@type"": ""BlogPosting"",
        ""mainEntityOfPage"": {
          ""@type"": ""WebPage"",
        ""@id"": ""https://www.sbigeneral.in/portal/blog-details/what-is-covered-by-third-party-car-insurance""
        },
        ""headline"": ""What is Covered By Third Party Car Insurance?"",
        ""image"": [
      ""https://content.sbigeneral.in/uploads/8de49630a3a84d949dc148ef6c04a3cf.jpg""
],
         ""datePublished"": ""2020-11-06T08:53:21+00:00"",
        ""dateModified"": ""2020-11-06T08:53:21+00:00"",
        ""author"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance""
        },
        ""publisher"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance"",
        ""logo"": {
        ""@type"": ""ImageObject"",
        ""url"": ""https://www.sbigeneral.in/portal/static/media/logo.be3c6e72.svg""
        }
        },
        ""description"": ""Third-Party Car Insurance offers cover for any destruction caused to someone else property. Know in detail what does third party insurance cover & not cover. Keep Reading & buy car insurance policy here..""
         }
    </script>';

			
		break;

		case "secure-your-home-against-burglary-with-these-tips":
			echo '<script type=""application/ld+json"">
			{
			  ""@context"": ""https://schema.org/"" , 
			   ""@type"": ""BreadcrumbList"",
			  ""itemListElement"": [{
				""@type"": ""ListItem"", 
				""position"": 1, 
				""name"": ""Home"",
				""item"":  ""https://www.sbigeneral.in/portal/ ""
			  },{
				""@type"": ""ListItem"", 
				""position"": 2, 
				""name"": ""Blog"",
				""item"":  ""https://www.sbigeneral.in/portal/blog""
			  },{
				""@type"": ""ListItem"", 
				""position"": 3, 
				""name"": ""Tips To Secure Your Home Against Burglary "",
				""item"":  ""https://www.sbigeneral.in/portal/blog-details/secure-your-home-against-burglary-with-these-tips""
			  }]
			}
			</script>
			<script type=""application/ld+json"">
        {
        ""@context"": ""https://schema.org/"" ,
        ""@type"": ""BlogPosting"",
        ""mainEntityOfPage"": {
          ""@type"": ""WebPage"",
        ""@id"": ""https://www.sbigeneral.in/portal/blog-details/secure-your-home-against-burglary-with-these-tips""
        },
        ""headline"": ""Secure Your Home Against Burglary With These Tips "",
        ""image"": [
     "" https://content.sbigeneral.in/uploads/68d20081fc0444a9a49cf1415f2aa82c.jpg""
],
         ""datePublished"": ""2020-11-13T08:53:21+00:00"",
        ""dateModified"": ""2020-11-13T08:53:21+00:00"",
        ""author"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance""
        },
        ""publisher"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance"",
        ""logo"": {
        ""@type"": ""ImageObject"",
        ""url"": ""https://www.sbigeneral.in/portal/static/media/logo.be3c6e72.svg""
        }
        },
        ""description"": ""Visit SBI General Insurance to read some common factors that put a house at risk. Understand how to protect your house from burglars & invest in the right home insurance to protect your household contents..""
         }
    </script>';

			
		break;


		case "faqs-on-covid":
			echo '<script type=""application/ld+json"">
			{
			  ""@context"": ""https://schema.org/"" , 
			   ""@type"": ""BreadcrumbList"",
			  ""itemListElement"": [{
				""@type"": ""ListItem"", 
				""position"": 1, 
				""name"": ""Home"",
				""item"":  ""https://www.sbigeneral.in/portal/ ""
			  },{
				""@type"": ""ListItem"", 
				""position"": 2, 
				""name"": ""Blog"",
				""item"":  ""https://www.sbigeneral.in/portal/blog""
			  },{
				""@type"": ""ListItem"", 
				""position"": 3, 
				""name"": ""FAQs On Covid "",
				""item"": "" https://www.sbigeneral.in/portal/blog-details/faqs-on-covid""
			  }]
			}
			</script>
		<script type=""application/ld+json"">
        {
        ""@context"": ""https://schema.org/"" ,
        ""@type"": ""BlogPosting"",
        ""mainEntityOfPage"": {
          ""@type"": ""WebPage"",
        ""@id"": ""https://www.sbigeneral.in/portal/blog-details/faqs-on-covid""
        },
        ""headline"": ""FAQs on COVID-19 "",
        ""image"": [
      ""https://content.sbigeneral.in/uploads/5549ba8da0d94035aae27290855966be.jpg""
],
         ""datePublished"": ""2020-09-04T08:53:21+00:00"",
        ""dateModified"": ""2020-09-04T08:53:21+00:00"",
        ""author"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance""
        },
        ""publisher"": {
          ""@type"": ""Organization"",
        ""name"": ""SBI General Insurance"",
        ""logo"": {
        ""@type"": ""ImageObject"",
        ""url"": ""https://www.sbigeneral.in/portal/static/media/logo.be3c6e72.svg""
        }
        },
        ""description"": ""Visit SBI General Insurance to read in detail what is a coronavirus, Covid-19 symptoms, simple precautions to reduce your chances of getting infected by Covid-19. Keep reading.""
         }
    </script>';

			
		break;
		case "why-may-your-house-be-at-risk-from-burglars":
			echo '<script type=""application/ld+json"">
			{
			""@context"": ""https://schema.org/"" ,
			""@type"": ""BlogPosting"",
			""mainEntityOfPage"": {
			  ""@type"": ""WebPage"",
			""@id"": ""https://www.sbigeneral.in/portal/blog-details/why-may-your-house-be-at-risk-from-burglars""
			},
			""headline"": "" Why May Your House Be At Risk From Burglars? "",
			""image"": [
		  ""https://content.sbigeneral.in/uploads/31734ca5c09a45a7854d92c042f1d7c5.jpg""
	],
			 ""datePublished"": ""2020-11-13T08:53:21+00:00"",
			""dateModified"": ""2020-11-13T08:53:21+00:00"",
			""author"": {
			  ""@type"": ""Organization"",
			""name"": ""SBI General Insurance""
			},
			""publisher"": {
			  ""@type"": ""Organization"",
			""name"": ""SBI General Insurance"",
			""logo"": {
			""@type"": ""ImageObject"",
			""url"": ""https://www.sbigeneral.in/portal/static/media/logo.be3c6e72.svg""
			}
			},
			""description"": ""Burglars look for houses that are easy targets. Visit SBI General Insurance to understand & know some common factors that put a house at risk. Keep Reading & buy Home Insurance Policy that will help you insure your house against burglary and theft.""
			 }
		</script>';

			
		break;
		default:
		  
	  }

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