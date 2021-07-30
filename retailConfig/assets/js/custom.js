var initialPopupValues = {
	self: 'Self',
	self_ischecked: false,
	self_dob: '',//new Date(),
	spouse: 'Spouse',
	spouse_ischecked: false,
	spouse_dob: '',
	child1: 'Child1',
	child1_ischecked: false,
	child1_dob: '',
	child1_gender: '',
	child2: 'Child2',
	child2_ischecked: false,
	child2_dob: '',
	child2_gender: ''
};
var capthaOne = Math.floor(Math.random() * 5) + 1;
var capthaTwo = Math.floor(Math.random() * 50) + 1;
var relationIns = "";
var request_id = "";

$(document).ready(function () {
	$('#capthaOne').html(capthaOne);
	$('#capthaTwo').html(capthaTwo);

	$(function () {
		$("#datepicker1").datepicker({
			autoclose: true,
			todayHighlight: true
		});
		$("#datepicker2").datepicker({
			autoclose: true,
			todayHighlight: true
		});
		$("#datepicker3").datepicker({
			autoclose: true,
			todayHighlight: true
		});
		$("#datepicker4").datepicker({
			autoclose: true,
			todayHighlight: true
		});
	});


	// Callback Form Step 1 Validation && Submit
	(function () {
		//alert('hi');
		"use strict";
		window.addEventListener("load", function () {
			var form = document.getElementById("request_call_back");
			form.addEventListener("submit", function (event) {
				event.preventDefault();
				var captchaVal = capthaOne + capthaTwo;
				if (form.checkValidity() == false) {
					event.stopPropagation();
				} else {
					var customerMathCalculation = $('#customerMathCalculation').val().trim();
					if (customerMathCalculation == captchaVal) {
						var requestParam = {};
						let userName = $('#customerName').val().trim();
						let userNameSplit = userName.split(" ");
						let firstName = "";
						let lastName = "";
						let middleName = "";
						// console.log(userNameSplit);

						if (userNameSplit != null && userNameSplit.length > 0) {
							if (userNameSplit.length > 1 && userNameSplit.length <= 2) {
								firstName = userNameSplit[0];
								lastName = userNameSplit[1];
							} else if (userNameSplit.length > 2) {
								firstName = userNameSplit[0];
								middleName = userNameSplit[1];
								lastName = userNameSplit[userNameSplit.length - 1];
							} else {
								firstName = userNameSplit[0];
								lastName = "";
							}
						} else {
							firstName = userName;
							lastName = "";
						}

						let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
						requestParam["ClientId"] = gaUserId;
						requestParam["SBILeadFirstName"] = firstName;
						requestParam["SBILeadMiddleName"] = middleName;
						requestParam["SBILeadLastName"] = lastName;
						requestParam["LeadType"] = "1";
						requestParam["SBIEmailId"] = $('#customerEmail').val();
						requestParam["SBIMobileNum"] = $('#customerMobile').val();
						// let productSlug = sessionStorage.getItem('productSlug');prodEventName
						requestParam["SBIProductName"] = sessionStorage.getItem('productCName');
						const product_type = sessionStorage.getItem('prodEventName');

						//UTM Source Catch
						let sourceParam = getUTMSource();
						let utm_source = sourceParam["utm_source"];
						let utm_medium = sourceParam["utm_medium"];
						let utm_campaign = sourceParam["utm_campaign"];
						let utm_uniqueid = sourceParam["utm_uniqueid"];
						requestParam["utm_source"] = utm_source;
						requestParam["utm_medium"] = utm_medium;
						requestParam["utm_campaign"] = utm_campaign;
						requestParam["utm_uniqueid"] = utm_uniqueid;
						console.log(requestParam);

						$.ajax(trans_api_base_url + '/api/callme', {
							type: 'POST',
							data: JSON.stringify(requestParam),
							success: function (data, status, xhr) {
								console.log(data);
								document.getElementById("request_call_back").reset();
								form.classList.remove("was-validated");
								// let lead_no = data.request_id ? data.request_id : 'NA';
								if (is_health_product == 'yes') {
									$('#callbackStep1').hide();
									$('#callbackStep2').show();
									sessionStorage.setItem('request_id', data.request_id);
								} else {
									// console.log(requestParam);
									let msgText = data.success !== undefined ? data.success : "Request Submitted Successfully";
									$('.swal-icon--success').show();
									$('.swal-icon--error').hide();
									$("#modalSumitTitle").html(msgText);
									$("#modalSumitForm").modal();
								}
								//GTM Added
								window.dataLayer = window.dataLayer || [];
								let productName = requestParam["SBIProductName"];
								let pagetype = sessionStorage.getItem('prodEventName');
								let eventName = 'portal_product_callback_page_27_form_submit';
								if(pagetype=='sanjeevani'){
									eventName = 'portal_product_callback_page_27_form_submit';
								}
								pagetype = "portal_product_callback_page";

								const dataG = {
									'event': eventName,
									'product_name': productName,
									'pagetype': pagetype,
									'client_id': gaUserId,
									'timestamp': gtmCurrentTime(),
									'field_name':'form_submit',
									'quote_no': 'NA',
									'lead_no': "NA",
									'policy_no': 'NA'
								};
								window.dataLayer.push(dataG);

							},
							error: function (jqXhr, textStatus, errorMessage) {
								console.log('Error' + errorMessage);
								document.getElementById("request_call_back").reset();
								form.classList.remove("was-validated");
								if (is_health_product == 'yes') {
									$('#callbackStep1').hide();
									$('#callbackStep2').show();
								} else {
									$('.swal-icon--error').show();
									$('.swal-icon--success').hide();
									$("#modalSumitTitle").html('Something went wrong, please try again');
									$("#modalSumitForm").modal();
								}
							}
						});


					} else {
						$('.swal-icon--error').show();
						$("#modalSumitTitle").html('You Enter Invalid Number');
						$("#modalSumitForm").modal();
					}
				}
				form.classList.add("was-validated");
			}, false);
		}, false);
	}());



	// Stikcy Product div
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 300) {
			$('.stickyWrapper').addClass('fixed-header');
			$('.stickyWrapper').css("display", "block");
		}
		else {
			$('.stickyWrapper').removeClass('fixed-header');
			$('.stickyWrapper').css("display", "none");
		}
	});


	// Menu Open
	$('.togglemeDeskTop').click(function () {
		$('.menuProduct').addClass('openProductMenu');
		$('body').addClass('menuOpen');
	});
	$('.menuclose').click(function () {
		$('.menuProduct').removeClass('openProductMenu');
		$('body').removeClass('menuOpen');
	});


	// Submenu Accordian
	$(function () {
		$('.btn-link').click(function (j) {

			var dropDown = $(this).closest('.card').find('.collapse');
			$(this).closest('.accordion').find('.collapse').not(dropDown).slideUp();

			if ($(this).hasClass('buttonactive')) {
				$(this).removeClass('buttonactive');
			} else {
				$(this).closest('.accordion').find('.btn-link.buttonactive').removeClass('buttonactive');
				$(this).addClass('buttonactive');
			}

			dropDown.stop(false, true).slideToggle();
			j.preventDefault();
		});
	});

	// Home Team Carousel
	$('#prospectus').owlCarousel({
		loop: false,
		dots: false,
		smartSpeed: 450,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		responsive: {
			0: {
				items: 1,
				nav: true,
			},
			600: {
				items: 2,
				nav: true,
			},
			1000: {
				items: 4,
			}
		}
	});

	// Key Feature Show the first tab and hide the rest
	$('.nav-item:first-child .nav-link').addClass('active');
	$('.tab-pane').hide();
	$('.tab-pane:first').show();

	$('.nav-item .nav-link').click(function () {
		$('.nav-item .nav-link').removeClass('active');
		$(this).addClass('active');

		var tabid = $(this).attr("data-key");
		console.log(tabid);
		$('.tab-pane').hide().removeClass('active show');
		$('#' + tabid).show();    // show tab
		$('#' + tabid).addClass('active show');

		return false;
	});


	// Footer Open
	$('.footerTobbleBtn').click(function () {
		$(this).toggleClass('footerOpen');
		$('.footerNavRow').toggleClass('footerNavRowOpen');
	});

	// Footer According open
	$('.footerHead').click(function () {
		$(this).toggleClass('open');
		$(this).next('.panel').toggleClass('footerToggle');
	});

	//Heath Poup Open Modal
	$('.openInsuredModal').click(function () {
		$('#InsuredModalForm').modal({ backdrop: 'static', keyboard: false });
	});

	//Insured Poup checkbox Check 
	$('.selfB, .spouse, .child1, .child2').hide();
	$('#family_Self_check, #family_Spouse_check, #family_child_1_check, #family_Child_2_check').change(function () {
		let idCheck = $(this).attr('id');
		let itemBlock = $(this).attr('data-ga-val');
		var checkBox = document.getElementById(idCheck);
		if (checkBox.checked) {
			$('.' + itemBlock).show();
		} else {
			$('.' + itemBlock).hide();
		}

	});

	$("#InsuredModalForm").on("hidden.bs.modal", function () {
		if (!validateInsuredPopup()) {
			this.relationIns = "";
			$('#familyMembers').val('');
		}
	});

	///GTM Footer
	$('.footerArea a').click(function () {
		window.dataLayer = window.dataLayer || [];
		let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
		let productName = sessionStorage.getItem('productCName');
		let eventName = "sanjeevani_product_page_7_footer_click"
		let pagetype = sessionStorage.getItem('prodEventName');
		if (pagetype != 'sanjeevani') {
		  eventName = 'portal_product_page_7_footer_click';
		}
		pagetype = pagetype + "_product_page";
		const data = {
			'event': eventName,
			'product_name': productName,
			'pagetype': pagetype,
			'client_id': gaUserId,
			'timestamp': gtmCurrentTime(),
			'quote_no': 'NA',
			'lead_no': 'NA',
			'policy_no': 'NA'
		};
		window.dataLayer.push(data);

	})

});

function openInNewTab(slug) {
	//UTM Source Catch
	let sourceParam = getUTMSource();
	let utm_source = sourceParam["utm_source"];
	let utm_medium = sourceParam["utm_medium"];
	let utm_campaign = sourceParam["utm_campaign"];
	let utm_uniqueid = sourceParam["utm_uniqueid"];
	let url = sessionStorage.getItem('TRANSACTION_API_BASE_URL');
	if (slug !== "#") {
		if (slug.indexOf('?') === -1) {
			url = url + slug + '?itm_source=' + utm_source + '&itm_medium=' + utm_medium + '&itm_campaign=' + utm_campaign+'&itm_uniqueid='+utm_uniqueid;
		} else {
			url = url + slug + '&itm_source=' + utm_source + '&itm_medium=' + utm_medium + '&itm_campaign=' + utm_campaign+'&itm_uniqueid='+utm_uniqueid;
		}
		let redirectUrl = '';
		if (slug.indexOf('http') !== -1) {
			redirectUrl = slug;
		} else if(slug.indexOf('/claim/claims-intimation') !== -1){
			redirectUrl = sessionStorage.getItem('BASE_URL') + slug;
		} else {
			redirectUrl = url;
		}
		var win = window.open(redirectUrl, '_blank');
		win.focus();
	}
}

function getUTMSource() {
	let paramPage;
	if (sessionStorage.getItem('paramPage')) {
		paramPage = sessionStorage.getItem('paramPage');
		paramPage = JSON.parse(paramPage);
	}
	let utm_source = '';
	let utm_medium = '';
	let utm_campaign = '';
	let utm_uniqueid = '';
	if (typeof paramPage.gclid !== 'undefined') {
		utm_source = 'google';
		utm_medium = typeof paramPage.utm_medium !== 'undefined' ? paramPage.utm_medium : 'cpc';
		utm_campaign = typeof paramPage.utm_campaign !== 'undefined' ? paramPage.utm_campaign : '';
	} else {
		if (typeof paramPage.utm_source !== 'undefined') {
			utm_source = paramPage.utm_source
			utm_medium = typeof paramPage.utm_medium !== 'undefined' ? paramPage.utm_medium : '';
			utm_campaign = typeof paramPage.utm_campaign !== 'undefined' ? paramPage.utm_campaign : '';
		} else {
			let pageReferrer = document.referrer;
			if (pageReferrer) {
				if (pageReferrer.indexOf('google') !== -1) {
					utm_source = 'google';
					utm_medium = 'Organic';
				} else if (pageReferrer.indexOf('sbigeneral') !== -1) {
					utm_source = 'direct';
					utm_medium = 'none';
				} else {
					utm_source = pageReferrer;
					utm_medium = 'referral';
				}
			} else {
				utm_source = 'direct';
				utm_medium = 'none';
			}

		}
	}
	let sourceParam = [];
	sourceParam["utm_source"] = utm_source;
	sourceParam["utm_medium"] = utm_medium;
	sourceParam["utm_campaign"] = utm_campaign;
	sourceParam["utm_uniqueid"] = utm_uniqueid;
	return sourceParam;
}

function validateInsuredPopup() {
	let fields = this.initialPopupValues;
	let errors = {};
	let formIsValid = true;

	if (fields.self_ischecked) {
		if (fields.self_dob === '') {
			formIsValid = false;
			errors['self_dob'] = "Select DOB";
		}
	} else {
		//formIsValid = false;
		//errors['common'] = "Please Enter Self Details Before Proceed";
		let check_count = 0;
		if (fields.spouse_ischecked) { check_count++; }
		if (fields.child1_ischecked) { check_count++; }
		if (fields.child2_ischecked) { check_count++; }

		if (check_count > 1) {
			formIsValid = false;
			errors['common'] = "Please Enter Self Details Before Proceed";
		} else if (check_count === 1 && (fields.child1_ischecked || fields.child2_ischecked)) {
			formIsValid = false;
			errors['common'] = "Please Enter Self Details Before Proceed";
		}
	}
	if (fields.spouse_ischecked) {
		if (fields.spouse_dob === '') {
			formIsValid = false;
			errors['spouse_dob'] = "Select DOB";
		}
	}

	if (fields.self_ischecked === false && fields.spouse_ischecked === false && fields.child1_ischecked === false && fields.child2_ischecked === false) {
		formIsValid = false;
		errors['common'] = "Select Atleast An Applicant";
	}
	//console.log(errors);      
	return formIsValid;
}

function handleChange(name, val) {
	let initialPopupValue = {
		self: this.initialPopupValues.self,
		self_ischecked: name === 'self_ischecked' ? val : (this.initialPopupValues.self_ischecked),
		self_dob: name === 'self_dob' ? val : (this.initialPopupValues.self_dob),
		spouse: this.initialPopupValues.spouse,
		spouse_ischecked: name === 'spouse_ischecked' ? val : (this.initialPopupValues.spouse_ischecked),
		spouse_dob: name === 'spouse_dob' ? val : (this.initialPopupValues.spouse_dob),
		child1: this.initialPopupValues.child1,
		child1_ischecked: name === 'child1_ischecked' ? val : (this.initialPopupValues.child1_ischecked),
		child1_dob: name === 'child1_dob' ? val : (this.initialPopupValues.child1_dob),
		child1_gender: name === 'child1_gender' ? val : (this.initialPopupValues.child1_gender),
		child2: this.initialPopupValues.child2,
		child2_ischecked: name === 'child2_ischecked' ? val : (this.initialPopupValues.child2_ischecked),
		child2_dob: name === 'child2_dob' ? val : (this.initialPopupValues.child2_dob),
		child2_gender: name === 'child2_gender' ? val : (this.initialPopupValues.child2_gender)
	};

	this.initialPopupValues = initialPopupValue;
	console.log(this.initialPopupValues);
	gtmEvntHandler('portal_product_callback_page_24_form_interaction',name);
}

function popupSubmit() {
	if (this.validateInsuredPopup()) {
		let relation = '';
		let fields = this.initialPopupValues;
		//console.log(fields);
		if (fields.self_ischecked) {
			relation += 'Self, ';
		}
		if (fields.spouse_ischecked) {
			relation += 'Spouse, ';
		}
		if (fields.child1_ischecked) {
			relation += 'Child 1, ';
		}
		if (fields.child2_ischecked) {
			relation += 'Child 2';
		}
		relation = relation.replace(/,\s*$/, "");
		console.log(relation);
		$('#familyMembers').val(relation);
		$('#InsuredModalForm').modal('hide');
	} else {
		this.relationIns = "";
		$('#familyMembers').val('');
	}
}

function formatDate(date) {
	if (date) {
		var d = new Date(date),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2)
			month = '0' + month;
		if (day.length < 2)
			day = '0' + day;
		return [year, month, day].join('-');
	}
	return null;
}


function step2Submit(event) {
	var form2 = document.getElementById("request_call_back_2");
	// event.preventDefault();		  	
	if (form2.checkValidity() == false) {
		event.stopPropagation();
	} else {
		let requestParam = {};
		requestParam["request_id"] = sessionStorage.getItem('request_id');
		requestParam["gender"] = $('#customerGender').val();
		requestParam["location"] = $('#customerCity').val();
		let fields = this.initialPopupValues;
		requestParam['family'] = {};
		if (fields.self_ischecked) {
			requestParam['family'][0] = {
				'type': 'Self',
				'dob': formatDate(fields.self_dob),
				'gender': requestParam["gender"],
			};
		}
		if (fields.spouse_ischecked) {
			requestParam['family'][1] = {
				'type': 'Spouse',
				'dob': formatDate(fields.spouse_dob),
				'gender': requestParam["gender"] === 'Male' ? ('Female') : ('Male'),
			};
		}
		if (fields.child1_ischecked) {
			requestParam['family'][2] = {
				'type': 'Child_1',
				'dob': formatDate(fields.child1_dob),
				'gender': fields.child1_gender,
			};
		}
		if (fields.child2_ischecked) {
			requestParam['family'][3] = {
				'type': 'Child_2',
				'dob': this.formatDate(fields.child2_dob),
				'gender': fields.child2_gender,
			};
		}

		console.log(requestParam);
		$.ajax(trans_api_base_url + '/api/callme', {
			type: 'POST',
			data: JSON.stringify(requestParam),
			success: function (data, status, xhr) {
				console.log(data);
				if (data.success) {
					//GTM Added
					window.dataLayer = window.dataLayer || [];
					let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
					let productName = sessionStorage.getItem('productCName');
					let pagetype = sessionStorage.getItem('prodEventName');
					let eventName = 'portal_product_callback_page_27_form_submit';
				
					pagetype = "portal_product_callback_page";
					const dataG = {
						'event': eventName,
						'product_name': productName,
						'pagetype': 'portal_product_callback_page',
						'client_id': gaUserId,
						'timestamp': gtmCurrentTime(),
						'quote_no': 'NA',
						'lead_no': "NA",
						'policy_no': 'NA',
						'field_name':'form_submit'
					};
					window.dataLayer.push(dataG);
					// console.log(requestParam);
				}
				document.getElementById("request_call_back_2").reset();
				form2.classList.remove("was-validated");
				$('#callbackStep1').show();
				$('#callbackStep2').hide();
				let msgText = data.success !== undefined ? data.success : "Request Submitted Successfully";
				$('.swal-icon--success').show();
				$('.swal-icon--error').hide();
				$("#modalSumitTitle").html(msgText);
				$("#modalSumitForm").modal();
			},
			error: function (jqXhr, textStatus, errorMessage) {
				console.log('Error' + errorMessage);
				document.getElementById("request_call_back_2").reset();
				form2.classList.remove("was-validated");
				$('#callbackStep1').show();
				$('#callbackStep2').hide();
				$('.swal-icon--error').show();
				$('.swal-icon--success').hide();
				$("#modalSumitTitle").html('Something went wrong, please try again');
				$("#modalSumitForm").modal();
			}
		});

	}
	form2.classList.add("was-validated");
	this.capthaOne = Math.floor(Math.random() * 5) + 1;
	this.capthaTwo = Math.floor(Math.random() * 50) + 1;
	$('#capthaOne').html(this.capthaOne);
	$('#capthaTwo').html(this.capthaTwo);
}

function gtmFormInit(formField,eventName) {
	eventName = eventName || 'portal_product_page_2_callback_form_interaction';
	window.dataLayer = window.dataLayer || [];

	let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
	let productName = sessionStorage.getItem('productCName');
	let pagetype = sessionStorage.getItem('prodEventName');
	pagetype ="portal_product_callback_page";
	const data = {
		'event': eventName,
		'product_name': productName,
		'pagetype': 'portal_product_callback_page',
		'client_id': gaUserId,
		'timestamp': gtmCurrentTime(),
		'field_name': formField,
		'quote_no': 'NA',
		'lead_no': 'NA',
		'policy_no': 'NA'
	};
	window.dataLayer.push(data);
}

function gtmCurrentTime() {
	return (moment().format('YYYY-MM-DD HH:mm:ss'));
}

function gtmClickHandler(click_text) {
	//GTM Implementation
	window.dataLayer = window.dataLayer || [];
	let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
	let productName = sessionStorage.getItem('productCName');
	// let pagetype = sessionStorage.getItem('prodEventName');
	// pagetype = pagetype + "_product_page";
	let pagetype = sessionStorage.getItem('prodEventName');
	let eventName = pagetype + '_product_page_4_product_features_click';
	if (pagetype != 'sanjeevani') {
		eventName = 'portal_product_page_4_product_features_click';
	}
	pagetype = pagetype + "_product_page";
	const data = {
		'event': eventName,
		'product_name': productName,
		'pagetype': pagetype,
		'client_id': gaUserId,
		'click_text': click_text,
		'timestamp': gtmCurrentTime(),
		'quote_no': 'NA',
		'lead_no': 'NA',
		'policy_no': 'NA'
	};
	window.dataLayer.push(data);
}

function gtmBtnClickHandler(click_text) {
	//GTM Implementation
	window.dataLayer = window.dataLayer || [];
	let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
	let productName = sessionStorage.getItem('productCName');
	let pagetype = sessionStorage.getItem('prodEventName');
	let eventName = pagetype + '_product_page_1_policy_action_click';
	if(click_text=='Buy Now'){
		eventName = 'sanjeevani_product_page_24_buy_policy_click';
	}
	if (pagetype != 'sanjeevani') {
		eventName = 'portal_product_page_1_policy_action_click';
		if(click_text=='Buy Now'){
			eventName = 'portal_product_page_24_buy_policy_click';
		}
	}

	pagetype = pagetype + "_product_page";
	const data = {
		'event': eventName,
		'product_name': productName,
		'pagetype': pagetype,
		'client_id': gaUserId,
		'click_text': click_text,
		'timestamp': gtmCurrentTime(),
		'quote_no': 'NA',
		'lead_no': 'NA',
		'policy_no': 'NA'
	};
	window.dataLayer.push(data);
}

function gtmFormStep1ClickHandler(click_text) {
	//GTM Implementation
	window.dataLayer = window.dataLayer || [];
	let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
	let productName = sessionStorage.getItem('productCName');
	let pagetype = sessionStorage.getItem('prodEventName');
	let eventName = pagetype + '_product_page_1_policy_action_click';
	if (pagetype != 'sanjeevani') {
		eventName = 'portal_product_page_1_policy_action_click';
	}
	pagetype = pagetype + "_product_page";
	const data = {
		'event': eventName,
		'product_name': productName,
		'pagetype': pagetype,
		'client_id': gaUserId,
		'click_text': click_text,
		'timestamp': gtmCurrentTime(),
		'quote_no': 'NA',
		'lead_no': 'NA',
		'policy_no': 'NA'
	};
	window.dataLayer.push(data);
}

function gtmEvntHandler(eventName,fieldName) {
	window.dataLayer = window.dataLayer || [];

	let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
	let productName = sessionStorage.getItem('productCName');
	let pagetype = sessionStorage.getItem('prodEventName');
	if (pagetype != 'sanjeevani') {
		eventName = 'portal_product_page_1_policy_action_click';
	}
	if(pagetype == 'sanjeevani'){
		eventName = eventName.replace("portal_", "sanjeevani_");
	}
	pagetype = pagetype + "_product_page";
	const data = {
		'event': eventName,
		'product_name': productName,
		'pagetype': pagetype,
		'client_id': gaUserId,
		'timestamp': gtmCurrentTime(),
		'quote_no': 'NA',
		'lead_no': 'NA',
		'policy_no': 'NA',
		'field_name': fieldName
	};
	window.dataLayer.push(data);
}

function gtmPdfHandler(click_text) {
	window.dataLayer = window.dataLayer || [];

	let gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split('.').slice(-2).join(".");
	let productName = sessionStorage.getItem('productCName');
	// let pagetype = sessionStorage.getItem('prodEventName');
	// pagetype = pagetype + "_product_page";;
	let eventName = "sanjeevani_product_page_5_pdf_download_click"
	let pagetype = sessionStorage.getItem('prodEventName');
	if (pagetype != 'sanjeevani') {
		eventName = 'portal_product_page_5_pdf_download_click';
	}
	pagetype = pagetype + "_product_page";
	const data = {
		'event': eventName,
		'product_name': productName,
		'pagetype': pagetype,
		'client_id': gaUserId,
		'timestamp': gtmCurrentTime(),
		'quote_no': 'NA',
		'lead_no': 'NA',
		'policy_no': 'NA',
		'click_text':click_text
	};
	window.dataLayer.push(data);
}