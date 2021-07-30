<section class="container-with-no-padding container">
  <div class="innerpageBanner row">
    <div class="col-5">
      <figure class="justify-content-between align-items-center argyaBaner"><img src="<?php echo $asset_path;?>/images/retail-head-icon.svg" alt="Arogya Sanjeevani Policy"></figure>
    </div>
    <div class="col-7 d-flex align-items-center">
      <div class="flex-column">
        <h1>Health Insurance</h1>
        <p>Medical emergencies do not come with a notice. When Amit Bhan’s (name changed) father had a stroke, he wished his father had an insurance policy to cover the expenses. The money that his father had saved for his retirement days were spent on the treatment. While medical emergencies cannot either be predicted nor can be avoided, a better financial planning can help you and your family wade through the troubled times. Health insurance gives you much-needed financial support in case you or your family members are hospitalised.</p>
      </div>
    </div>
    <div class="innerHeadBotomIcon"><img src="<?php echo $asset_path;?>/images/inner-banner-bottom-icon.svg" alt="Arogya Sanjeevani Policy"></div>
  </div>
</section>

<?php
######################### Health Products Data #########################
$healthProducts = json_decode(file_get_contents('../retailConfig/resource/healthProducts.json'),true);
if(!empty($healthProducts)){
?>
<section class="insuranceWrapper">
  <div class="container">
    <h5 class="htitle text-center">Health Insurance Plans</h5>
    <div class="insuranceBtm">
      <div class="owl-carousel owl-theme" id="insurancePlan">
        <?php foreach ($healthProducts as $key => $value) { ?>
        <div class="item">
          <div class="insurance-box">
            <div class="insurance-heding">
              <h4><?php echo $value['productName'];?></h4>
            </div>
            <div class="insurance-content">
              <p><?php echo $value['description'];?></p>
            </div>
            <div class="insuranceLink"><a href="<?php echo $base_url.'/health-insurance/'.$value['key'];?>">Buy Now</a></div>
          </div>
        </div>
      <?php } ?>
      </div>
    </div>
  </div>
</section>
<?php } ?>

<!-- <section class="healthinsuranceWrapper">
  <div class="container">
    <h5 class="htitle text-center">Health Insurance Know-How</h5>
    <p>Morbi fermentum commodo dolor, blandit fermentum nisi commodo nec. Phasellus vel euismod tellus, ac molestie nisi. Sed ullamcorper ultrices accumsan. Curabitur congue, sapien eget suscipit tincidunt, arcu nisl mattis diam, a convallis sapien purus in sapien. Curabitur hendrerit mi at libero feugiat, ac aliquam tortor efficitur. Duis porttitor nisl magna, in iaculis magna hendrerit vitae. Sed iaculis vel est eget pulvinar. Etiam blandit lectus a interdum faucibus. Aliquam erat volutpat. Proin congue, dui id venenatis rutrum, mi lorem sodales diam, at porttitor nulla ante in velit. Proin venenatis, elit venenatis pharetra hendrerit, massa mi dictum eros, ut lobortis lectus arcu eu ex. Mauris accumsan felis ut ornare pulvinar. Quisque et velit vitae risus tempus fermentum in et est. Sed tristique maximus orci eget rutrum. Pellentesque faucibus enim sed nunc lacinia malesuada.</p>
  </div>
</section> -->
<section class="healthinsuranceWrapper">
  <div class="container">
    <h5 class="htitle text-center">Things to check before purchasing health insurance</h5>
    <ul class="scroll-list">
      <li><strong>Levels of coverage:</strong> When you buy a health insurance policy, keep the future needs in mind. Go for a plan that offers extensive coverage.</li>
      <li><strong>Cashless claim feature:</strong> Cash is something that may not be readily available to everyone all the time. Do check how many hospitals are there in the network hospitals where you can avail cashless treatment. </li>
      <li><strong>Entry age:</strong> As per IRDAI regulations, all the insurers are mandatorily required to offer health insurance for an entry age of up to 65 years. Do check if there’s any cap after the age of 65. </li>
      <li><strong>Waiting period:</strong> A waiting period is a time an insured must wait for policy to come into effect. No claim can be made during this period. </li>
      <li><strong>Easy process to buy insurance online:</strong> Be it buying, renewing or registering claims, the process should be paperless, easy, quick and hassle-free. </li>
      <li><strong>Exclusions:</strong> Pre-existing illnesses are often not covered until the waiting period is over. Check individual policies for exclusions.</li>
    </ul>
  </div>
</section>
<section class="coverageWrapper">
  <div class="container">
    <div class="coverageBase">
      <div class="tab-content">
        <div class="tab-scroll">
          <h5 class="htitle">Benefits of SBI General Insurance Health Plans</h5>
          <ul>
            <li>Cashless treatment:  Choose from 6000+ of our network hospitals in India for cashless claims or opt for a reimbursement.</li>
            <li>24*7 customer support: Call us at our toll-free 1800 22 1111 whenever in need.</li>
            <li>Wide coverage: Starting from Rs 50,000  the coverage can go up to Rs 50 lakh, depending upon the policy you choose.</li>
            <li>Renewability: Select policies come with the option of lifetime renewability.</li>
            <li>Tax exemption: With all our policies, you will tax benefit under Section 80 D of Income Tax Act.</li>
            <li>Pre and post hospitalisation expenses: Expenses 30 days before the hospitalisation and 60 days after the hospitalisation  covered.</li>
            <li>Free medical checkup: For every 4 claim free years, you will get a free medical checkup </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="coveredWrapper">
  <div class="container">
    <h5 class="htitle text-center">What is covered in our insurance policy?</h5>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Important features</th>
          <th scope="col" class="text-center">Arogya Sanjeevani</th>
          <th scope="col" class="text-center">Arogya Premier</th>
          <th scope="col" class="text-center">Arogya Plus</th>
          <th scope="col" class="text-center">Retail Health Insurance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>All hospitalisation, including COVID-19</td>
          <td class="text-center"><i class="fa fa-check" aria-hidden="true"></i></td>
          <td class="text-center"><i class="fa fa-check" aria-hidden="true"></i></td>
          <td class="text-center"><i class="fa fa-check" aria-hidden="true"></i></td>
          <td class="text-center"><i class="fa fa-check" aria-hidden="true"></i></td>
        </tr>
        <tr>
          <td>Pre and Post Hospitalisation Expenses</td>
          <td class="text-center"><i class="fa fa-check" aria-hidden="true"></i></td>
          <td class="text-center"><i class="fa fa-check" aria-hidden="true"></i></td>
          <td class="text-center"><i class="fa fa-check" aria-hidden="true"></i></td>
          <td class="text-center"><i class="fa fa-check" aria-hidden="true"></i></td>
        </tr>
        <tr>
          <td>Nursing expenses</td>
          <td class="text-center"><i class="fa fa-check" aria-hidden="true"></i></td>
          <td class="text-center"><i class="fa fa-check" aria-hidden="true"></i></td>
          <td class="text-center"><i class="fa fa-check" aria-hidden="true"></i></td>
          <td class="text-center"><i class="fa fa-check" aria-hidden="true"></i></td>
        </tr>
         <tr>
          <td>Sum assured reinstatement</td>
          <td class="text-center"><i class="fa fa-times" aria-hidden="true"></i></td>
          <td class="text-center"><i class="fa fa-check" aria-hidden="true"></i></td>
          <td class="text-center"><i class="fa fa-times" aria-hidden="true"></i></td>
          <td class="text-center"><i class="fa fa-times" aria-hidden="true"></i></td>
        </tr>
         <tr>
          <td>Daycare procedures</td>
          <td class="text-center"><i class="fa fa-check" aria-hidden="true"></i></td>
          <td class="text-center"><i class="fa fa-check" aria-hidden="true"></i></td>
          <td class="text-center"><i class="fa fa-times" aria-hidden="true"></i></td>
          <td class="text-center"><i class="fa fa-times" aria-hidden="true"></i></td>
        </tr>
         <tr>
          <td>Room rent capping</td>
          <td class="text-center"><i class="fa fa-check" aria-hidden="true"></i></td>
          <td class="text-center"><i class="fa fa-times" aria-hidden="true"></i></td>
          <td class="text-center"><i class="fa fa-times" aria-hidden="true"></i></td>
          <td class="text-center"><i class="fa fa-check" aria-hidden="true"></i></td>
        </tr>        
      </tbody>
    </table>
  </div>
</section>
<section class="coverageWrapper">
  <div class="container">
    <div class="coverageBase">
      <div class="tab-content">
        <div class="tab-scroll">
          <h5 class="htitle">Steps to purchase SBI General Insurance health plans</h5>
          <p>You can easily and securely buy and renew SBI General Insurance health plans online. With just a few clicks you can do that right from the comforts of your home or office. Here are the easy steps to purchase SBI General Insurance health plans online:</p>
          <ul>
            <li>Step 1: Select the health insurance plan: Whether you are planning to buy health insurance for yourself, your family or your employees, choose the plan accordingly.</li>
            <li>Step 2: Fill in your details: Fill in details like age, date of birth of the person or persons to be insured.</li>
            <li>Step 3: Answer a few questions about lifestyle habits like smoking and illnesses.</li>
            <li>Step 4: Choose the coverage amount carefully: Finalise coverage amount. This is a critical step. Make sure you keep your future health needs in mind.</li>
            <li>Step 5: Select the addons: You can avail some extra benefits with add-ons.</li>
            <li>Step 6: On the basis of the benefits you have selected, an insurance quote will get generated.</li>
            <li>Step 7: Click on ‘buy’. It will take you to a secured payment gateway where you can pay for the insurance policy.</li>
            <li>Step 8: You will receive the policy document once your proposal is accepted.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="healthinsuranceWrapper">
  <div class="container">
    <h5 class="htitle text-center">Health insurance eligibility criteria</h5>
    <p>Adults between 18 to 65 years and children between 3 months to 18 years of age are eligible for the health insurance policy. There is a 1-year waiting period for specified diseases. No pre-policy medical test required for certain policies. Pre-existing disease cover begins after a 4-year waiting period. Specifications may vary from one insurance policy to another.</p>
  </div>
</section>
<section class="thingsWrapper">
  <div class="container">
    <h5 class="htitle text-center">Important things to know</h5>
    <div class="tab-scroll">
      <ul class="scroll-list">
        <li><strong>Is COVID-19 covered under your Health Insurance Policy?</strong>
          <p>Yes, hospitalisation expenses on account of COVID-19 will be covered under the policy in accordance with the policy terms and conditions.</p></li>
        <li><strong>What is great about SBI General  Health Insurance Policy?</strong>
          <p>SBI General Health Insurance policies come with a myriad of benefits. There plans to suit every budget and need.</p></li>
        <li><strong>Why should you get a health Insurance Policy?</strong>
          <p>Health Insurance protects policyholder’s or his/her family’s health against any various unforeseen health issues like sickness, illness, diseases or accident. Health insurance helps to pay for medical expenses without having to put strain on his or her finances.</p></li>
        <li><strong>Does SBI General Insurance cover Homeopathic treatment?</strong>
          <p>Alternative Treatment, like Ayurvedic, Homeopathy or Unani, taken in a government hospital or in any institute recognised by government and/or accredited by Quality Council of India/ National Accreditation Board on Health) is covered.</p></li>
        <li><strong>If I don’t make a claim during the policy period, will I get a refund of my money?</strong>
          <p>No, you will not get a refund of your money. But throughout the policy period for which you have paid the premium, you will get the tax benefit.</p></li>
      </ul>
    </div>
  </div>
</section>
<section class="coverageWrapper">
  <div class="container">
    <div class="coverageBase">
      <div class="tab-content">
        <div class="tab-scroll">
          <h5 class="htitle">Reasons you should buy health insurance from SBI General Insurance</h5>
          <p>With the constant rising medical costs, health insurance today is a dire necessity. Having a health insurance policy provides people with a much needed financial backup at times of medical emergencies. Medical emergencies, be it an illness or an accident, are a part of life. You cannot plan and fall ill sick but you can certainly be prepared for the financial aspect. Moreover, there has been a huge change in the lifestyle which has made people more prone to a wide range of health disorders. Hectic work schedules, stress, and wrong eating habits, have increased the risk of developing health problems.</p>
          <p>If you are planning to buy health insurance policies, SBI General Insurance has several plans to suit your medical needs and budgets.</p>
          <ul>
            <li><strong>Comprehensive cover:</strong> The policies offered by SBI General Insurance cover your hospital room rent, boarding expenses and doctor fees, operation theatre and intensive care charges, nursing expenses, medicines that you consume during the hospital stay and Pre and Post hospitalisation expenses up to 30 and 60 days respectively. The specifications can vary policy to policy. Please read the policy document for more details.</li>
            <li><strong>Family floater option available:</strong> In a floater option, a single policy covers all in the family. The policyholder can get his or her spouse and children covered under a single policy.  The sum insured is shared by all family members. </li>
            <li><strong>Family policy plan:</strong> Under policyholder can get his or her spouse and children covered. Each family members get their own individual sum insured. </li>
            <li><strong>Claim paying ability:</strong> SBI General Insurance has handled claims worth over ₹ 11000 Crore. It also retains the iAAA rating for its "highest claim paying ability"</li>
            <li><strong>Tax benefit:</strong> You will have a tax exemption on the premium paid towards health insurance for self, spouse, dependent children and dependent parents under section 80D of Income Tax Act.</li>
            <li><strong>Alternative Treatment:</strong> Alternative Treatment, like Ayurvedic, Homeopathy or Unani, taken in a government hospital or in any institute recognised by the government and/or accredited by Quality Council of India/ National Accreditation Board on Health) is covered under the policy up to Sum Insured.</li>
            <li><strong>Domiciliary hospitalisation:</strong> If the insured person is in a condition that he cannot be taken to the hospital, then select policies cover the expenses of medical care availed at home. </li>
            <li><strong>Wide network of hospitals:</strong>  SBI General Insurance has a network of over 6,000 hospitals in 110 cities in India. You can search for the nearest network hospital and avail cashless facility. </li>
            <li><strong>Hassle-free claim settlement:</strong> If you are getting hospitalised at an in-network hospital, call on the 24x& toll-free number before the getting admitted. In case of an emergency, inform us within the 24 hours of hospitalisation or as mentioned in the policy document. We will settle the medical bills directly with the network hospital. In case the hospital is outside the network. Collect all the relevant documents and mail them to us for reimbursement. </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="healthinsuranceWrapper">
  <div class="container">
    <h5 class="htitle text-center">5 misconceptions about health insurance that need to be debunked</h5>
    <p>Many people do not buy health insurance policies because they think that health insurance is not needed by everyone. For you we are debunking some of the common myths: </p>
    <ul>
      <li><strong>Myth 1:</strong>  Health insurance is for young people: This is one of the most prevalent myths about health insurance. Though nobody wants to fall ill, anyone can fall ill any time any day. Health insurance in such a scenario reimburses the medical costs that you would be incurring. It is better to buy at a young age as you will get better coverage at an affordable premium. Moreover, health insurance covers all kinds of medical emergencies, including accident-related hospitalisation.  Illnesses. If you are healthy and young, you can easily exhaust the waiting period. </li>
      <li><strong>Myth 2:</strong> Health insurance cover is effective from day 1: Often people think that they can buy health insurance when they need it. Well, it’s a terrible mistake. All health insurance policies have a certain waiting period for the coverage to come into effect. In the case of pre-existing illnesses, the waiting period can be up to years. </li>
      <li><strong>Myth 3:</strong> Not disclosing medical history will help you: If you have any pre-existing illness at the time of buying health insurance, hiding it is not a good idea. If you will conceal crucial details about health, this can lead to your claim being rejected at the time when you would need the money most. It’s best not to hide medical details.</li>
      <li><strong>Myth 4:</strong> Medical insurance only covers 24-hour hospitalisation: You don’t need to be hospitalised for more than 24 hours to avail medical insurance. There are several daycare procedures, which do not require hospitalisation, are also covered. </li>
      <li><strong>Myth 5:</strong>  If you don’t renew the policy, you will lose benefits: It goes without saying that you should renew your policy without fail. But in case, you missed to make the payment, there is a grace period till that time your policy is in force. Though you will be uninsured for that time period, after making the payment you will get all the benefits. </li>
    </ul>
    <p>Considering today’s lifestyle and rising medical expenses, health insurance is a dire necessity. Instead of falling for misconceptions about insurance, it’s best to get the right information.</p>
  </div>
</section>
<section class="healthinsuranceWrapper">
  <div class="container">
    <h5 class="htitle text-center">How to choose the insurance policy that suits your needs</h5>
    <p>Health insurance is a very important financial tool and, thus, you should choose one carefully. Many people just focus on the monthly premium that they have to pay. Well, there are many other important factors like your age, family income, health risks, and the number of dependants in the family that you should take into consideration when buying a health insurance policy.</p>
    <ol>
      <li><strong>Individual health insurance plan or family floater:</strong> For nuclear families, family floater plans work well. Newly-married couples may opt for a health insurance policy that covers maternity expenses. </li>
      <li><strong>Dependant parents:</strong> There are many policies that give you the option of getting your parents covered under a single policy. You can also buy separate individual policies for them as the premium is calculated as per the age of the eldest member of the family. The premium of a family floater plan will shoot up on covering aged parents. </li>
      <li><strong>Existing illness: </strong> Though there is a waiting period for covering pre-existing illness, choosing a health insurance plan as per your existing illness or any other health risks make sense. Though a pre-existing health problem will increase the premium, in the long-run, it is still cost-effective when compared to medical expenses.</li>
      <li><strong>Coverage amount: </strong> Buying a health insurance policy is a long-term commitment. Instead of settling for a policy with the lowest premium, opt for one keeping your future medical needs in mind. Think about your medical and financial requirements covering coverage amount, monthly premiums, co-payments, deductibles etc. It helps you assess the needs and priorities so you know what you look out in a plan.</li>
      <li><strong>Top-up plan:</strong> Opting for a top plan will be an extra expenditure but it will help you to meet expenses that arise out of single illness and are beyond the limit of the existing cover. Top-up insurance plan is for those who already have a mediclaim policy.</li>
    </ol>
  </div>
</section>
<section class="healthinsuranceWrapper">
  <div class="container">
    <h5 class="htitle text-center">Critical illness plans and health insurance policies: Why you need both </h5>
    <p>When Manav’s father was diagnosed with cancer, he was glad that his father had a medical insurance policy. But the relief was short-lived when he realised that the medical expenses of cancer will exhaust the sum insured and they would still be needing more. As his father would be spending more time in the treatment, Manav would have to quit his job to look after the family business. Had Manav bought a critical insurance policy along with a medical insurance policy for his father, he would not have been in such a financial dilemma. Like Manav, many people think that a medical insurance policy is sufficient to deal with health problems but they forget about critical illnesses.</p>
    <ol>
      <li><strong>Basic feature:</strong> A medical insurance policy will cover medical and OPD expenses during hospitalisation, but it will not be cover long-term treatment required in case you are critically ill. A critical illness policy is designed to cover the exorbitant medical expenses. Treatment for critical illnesses like cancer, stroke, multiple sclerosis, paralysis, are long-drawn and expensive. </li>
      <li><strong>Medical and non-medical expenses:</strong> A standard medical insurance policy that covers hospitalisation expenses. The sum insured cannot be used for expenses other than those which are medical in nature. A critical Illness insurance policy gives a fixed pay-out on being diagnosed with any of the critical ailments as mentioned in the policy document. It is up to the policyholder to decide how to use the pay-out. This money can be used for childcare, household expenses or for fulfilling other financial obligations. </li>
      <li><strong>Loss of income:</strong> Having a personal health cover is important to meet your medical expenses. But a critical illness requires not just money but also a long recovery period which may adversely affect your income potential. The loss of income can change your family’s financial future. Having critical illness insurance will help you cover your medical as well as non-medical expenses. </li>
      <li><strong>Tax exemption:</strong> For both medical insurance and critical illness insurance, you will get tax exemption under section 80D of the Income Tax Act. The critical insurance pay-out is also exempted from taxes.</li>
    </ol>
    <p>Having purchased a medical insurance policy and a critical insurance policy will alleviate your financial worry at the emotionally critical time of your life. </p>
  </div>
</section>
<section class="healthinsuranceWrapper">
  <div class="container">
    <h5 class="htitle text-center">Common mistakes people make while buying health insurance </h5>
    <p>Buying health insurance is a wise decision to make given the increased cost of medical care. Trips to the doctor are not only expensive but also unavoidable at times. While it is good to buy health insurance policies to protect yourself and your family from high medical costs, overlooking important aspects of it may result in an unpleasant experience. Over here we discuss some common mistakes that people make while buying insurance so you can avoid them:</p>
    <ul>
      <li><strong>Not buying adequate coverage:</strong> One needs health insurance but one should get sufficient cover. To save on the cost of the premium, many people tend to opt for insufficient insurance coverage. While the premium is one of the most important factors to take into consideration, it should not be the sole deciding factor. The whole idea of buying health insurance is to ensure that you do not incur heavy financial losses when a medical emergency strikes. But when a person buys insufficient cover, the policy fails to fulfil this purpose. Make sure you buy a policy that is adequate for you and your family. In case it is not, then you should opt for top-up to increase the coverage. </li>
      <li><strong>Taking just the basic cover:</strong> Going for a basic cover instead of comprehensive health insurance plan may save you money but you will not get the benefits of personal accident rider and critical illness rider and other such added benefits. When you buy a comprehensive cover it makes your health insurance cover complete. As you cannot predict the kind of medical emergency you may get into, it is best to go for a comprehensive policy that offers various benefits. </li>
      <li><strong>Not buying personal health insurance cover:</strong> Many working professionals get group health insurance coverage from their employers. Group health insurance comes with several benefits but those benefits are chosen by the employer and are not tailored according to your needs. Moreover, the policy will terminate once you will leave the job. Having a personal health insurance policy ensures that you are covered always, whether you are employed or not. </li>
      <li><strong>Not sharing medical history:</strong> Some people tend to hide existing medical ailments or previous medical history fearing that their proposal to buy health insurance will be rejected or the insurance premium would be higher. You must remember that the insurer relies on the information provided by the insured at the time of policy purchase in good faith. Hiding medical conditions and lifestyle habits from the insurer may get a lower premium. But at the time of rasing claim, the insurer conducts an exhaustive check. If the claim is due to a pre-existing illness then your claim would be rejected. Being truthful about medical conditions may mean a higher premium, but your claim will be duly honoured by the insurer. </li>
      <li><strong>Buying insurance just to save tax:</strong> Health insurance is a great tax-saving tool. But buying health insurance solely for saving taxes is indeed not a good idea. If you will only focus on just saving taxes, then you may end up with a policy that may not address your and your family’s medical needs in the need of the hour. Buying health insurance with adequate coverage should be your primary focus. </li>
    </ul>
  </div>
</section>
<section class="healthinsuranceWrapper">
  <div class="container">
    <h5 class="htitle text-center">Types of health insurance</h5>
    <p>That the costs of health care are rising in India is not news. Even a simple medical procedure can burn a hole in your pocket. Buying health insurance is a cost-effective way of taking care of unexpected medical expenses. But when you are buying health insurance, you must understand the different types of health insurance plans. Here is the rundown of the different types of health insurance that you can consider as per the needs of your family:</p>
    <ul>
      <li><strong>Individual Health Insurance:</strong> As the name suggests, it covers the medical expenses of an insured individual. The premium is charged as per the age, medical history and the sum insured of the individual buying the plan. </li>
      <li><strong>Family Floater Health Insurance:</strong> If a person wants to cover his or her family  under one single policy, he or she can opt for family floater health insurance plan for additional payment. This plans offers coverage to all the members of the family but they will have to share the sum insured for the policy period. The premium of the plan is calculated as per the age of the eldest member of the family. This policy works well for a nuclear family as the total sum insured will be sufficient for all the members. </li>
      <li><strong>Family Individual Health Insurance:</strong> A family health plan is a cost-effective way to ensure your family members under one single policy. A family individual health insurance plan is recommended for big families, especially the ones with senior members, like parents and parents in-law. Unlike a family floater plan, the sum insured is not shared by the family members. Each family member gets a fixed sum insured. In a family floater, if a family member exhausts the entire sum insured, there would nothing left for other members during that policy period. But in a family individual health insurance plan, each family members gets separate cover under one policy. </li>
      <li><strong>Critical Illness Insurance:</strong> Critical illness insurance covers the expenses involved in treating the life-threatening diseases like cancer, kidney failure and others. Such policies pay a fixed amount to insured person on the diagnosis of illnesses covered in the policy document. This policy is for certain specific illnesses. On the diagnosis of certain illnesses, a pre-decided amount id paid to the policyholder, irrespective of expenses. </li>
      <li><strong>Hospital Daily Cash Benefit Plans:</strong> This insurance plan can be taken as an add to your regular health insurance plan as well as a standalone cover. As per this plan, you get a fixed amount for each day that you are hospitalised. The amount paid is fixed at the time of taking the policy and remains fixed throughout. </li>
      <li><strong>Group Health Insurance:</strong> Group health insurance plans are purchased by employers for their employees. The premium in group insurance is lower than individual health insurance policy. Group health plans are usually standardised in nature and offer the same benefits to all employees. The coverage can be extended to the family members of employees in the same policy by paying an extra premium. But this will depend on the employers. You are covered under the policy till the time you are employed with the employer offering the insurance.</li>
    </ul>
  </div>
</section>
<section class="healthinsuranceWrapper">
  <div class="container">
    <h5 class="htitle text-center">What’s covered in critical illness insurance?</h5>
    <p>Heart attack, cancer, stroke and kidney failure are some of the critical illnesses that claim millions of lives every year in India. While these illnesses are life-threatening, the treatment of these illnesses entail are long-drawn and exorbitant. These illnesses require comprehensive care and continuous monitoring, which can adversely affect the financial situation. A standard health insurance policy will not be able to cover long-term medical expenses. Here critical illness insurance comes into the picture. Critical insurance provides you with a fixed coverage amount, decided at the time of buying the policy. Upon the diagnosis of any one of the illnesses mentioned in the policy document, the payout is given to the policyholder, irrespective of actual medical expenses incurred.</p>
  </div>
</section>
<section class="healthinsuranceWrapper">
  <div class="container">
    <h5 class="htitle text-center">Who should buy critical illness policy?</h5>
    <p>Given the rise of lifestyle diseases and increasing medical costs, everyone should have both medical insurance as well as critical insurance. Critical insurance is particularly important for the following people:</p>
    <ul>
      <li>Those who have a family history of critical illnesses.</li>
      <li>People who are above the age of 40.</li>
      <li>Primary breadwinners of the family.</li>
      <li>Those who are high-pressure jobs.</li>
    </ul>
    <p>Read on to learn more about critical illness insurance and what does it cover: </p>
    <ul>
      <li><strong>Diseases covered:</strong> While a standard health insurance plan provides comprehensive coverage including hospitalisation expenses, nursing expenses, pre and post-hospital expenses, and room rent, etc, a critical insurance plan covers life-threatening illnesses like cancer, kidney failure and stroke. There is a specific list of critical illnesses mentioned in the policy document that is covered. In case of critical illness insurance, the pay-out is given upon the diagnosis itself.</li>
      <li><strong>Hospitalisation not needed:</strong> To make a claim, hospitalisation is not required in the case of critical insurance. Diagnosis is enough to avail the policy benefits. In standard health insurance, to make a claim one needs to be hospitalised and the health insurance policy covers only expenses incurred. The policyholder has to either submit bills for reimbursement or avail the cashless facility at a network hospital to avail a standard health insurance policy. </li>
      <li><strong>Non-medical expenses:</strong> A standard health insurance policy only covers medical expenses incurred. However, the payout received from a critical insurance plan can be used for both medical and non-medical expenses. It is up to the discretion of the policyholder as to how to spend money. </li>
      <li>Treatment taken outside India: Many standard health insurance policies do not cover treatment taken outside India. With a critical insurance policy, it doesn’t matter where you seek the treatment, the payout will be given upon the diagnosis of any one of the illnesses covered in the policy document. </li>
      <li><strong>Waiting period:</strong> A standard health insurance policy has a waiting period of 30 days. The waiting period in critical insurance policy depends on the severity of the illness. </li>
      <li><strong>One-time claim:</strong> A critical illness insurance policy lapses once the payment is made by the insurer. Once the policyholder makes a claim and the claim has been honoured, then the policy lapses. You will get only a one-time payment for one critical illness. You can buy more than one critical illness policy and each of these policies will pay for the illness. </li>
    </ul>
  </div>
</section>
<section class="healthinsuranceWrapper">
  <div class="container">
    <h5 class="htitle text-center">Process to avail health insurance</h5>
    <p>The process to make health insurance claims  hassle-free. Contact the toll-free number of SBI General Insurance to register your claim. Submit all the original medical documents along with a duly-filled claim form to the insurer in order to initiate the claim. SBI General Insurance will settle admissible claims within 30 days of receipt of the relevant documents. The approval or rejection of a health insurance claim is carried out by the insurer as per the policy terms and conditions.</p>
  </div>
</section>

<!-- 
<section class="insurancePolicyWrapper">
  <div class="container">
    <h5 class="htitle text-center">Features of health insurance policy</h5>
    <div class="insurancePolicySub">
      <ul class="d-flex flex-wrap">
        <li>
          <figure class="justify-content-between align-items-center"><img src="<?php echo $asset_path;?>/images/cashless-icon.svg" alt="Features of health insurance policy"></figure>
          <h6>Cashless<span>treatment</span></h6>
          <p>Morbi fermentum commodo dolor, blandit fermentum nisi commodo nec. Phasellus vel euismod tellus.</p>
        </li>
        <li>
          <figure class="justify-content-between align-items-center"><img src="<?php echo $asset_path;?>/images/coverage-icon.svg" alt="Features of health insurance policy"></figure>
          <h6>Coverage for <span>the entire family</span></h6>
          <p>Morbi fermentum commodo dolor, blandit fermentum nisi commodo nec. Phasellus vel euismod tellus.</p>
        </li>
        <li>
          <figure class="justify-content-between align-items-center"><img src="<?php echo $asset_path;?>/images/customer-icon.svg" alt="Features of health insurance policy"></figure>
          <h6>24*7<span>Customer support</span></h6>
          <p>Morbi fermentum commodo dolor, blandit fermentum nisi commodo nec. Phasellus vel euismod tellus.</p>
        </li>
        <li>
          <figure class="justify-content-between align-items-center"><img src="<?php echo $asset_path;?>/images/renewability-icon.svg" alt="Features of health insurance policy"></figure>
          <h6>Renewability</h6>
          <p>Morbi fermentum commodo dolor, blandit fermentum nisi commodo nec. Phasellus vel euismod tellus.</p>
        </li>
        <li>
          <figure class="justify-content-between align-items-center"><img src="<?php echo $asset_path;?>/images/wide-icon.svg" alt="Features of health insurance policy"></figure>
          <h6>Wide-coverage</h6>
          <p>Morbi fermentum commodo dolor, blandit fermentum nisi commodo nec. Phasellus vel euismod tellus.</p>
        </li>
        <li>
          <figure class="justify-content-between align-items-center"><img src="<?php echo $asset_path;?>/images/tax-icon.svg" alt="Features of health insurance policy"></figure>
          <h6>Tax exemption</h6>
          <p>Morbi fermentum commodo dolor, blandit fermentum nisi commodo nec. Phasellus vel euismod tellus.</p>
        </li>
        <li>
          <figure class="justify-content-between align-items-center"><img src="<?php echo $asset_path;?>/images/hospitalization-icon.svg" alt="Features of health insurance policy"></figure>
          <h6>Pre & post<span>hospitalization expenses</span></h6>
          <p>Morbi fermentum commodo dolor, blandit fermentum nisi commodo nec. Phasellus vel euismod tellus.</p>
        </li>
        <li>
          <figure class="justify-content-between align-items-center"><img src="<?php echo $asset_path;?>/images/nursing-icon.svg" alt="Features of health insurance policy"></figure>
          <h6>Nursing<span>expenses</span></h6>
          <p>Morbi fermentum commodo dolor, blandit fermentum nisi commodo nec. Phasellus vel euismod tellus.</p>
        </li>
      </ul>
    </div>
  </div>
</section>

<section class="healthinsuranceWrapper">
  <div class="container">
    <h5 class="htitle text-center"> Process to avail health insurance</h5>
    <p>Morbi fermentum commodo dolor, blandit fermentum nisi commodo nec. Phasellus vel euismod tellus, ac molestie nisi. Sed ullamcorper ultrices accumsan. Curabitur congue, sapien eget suscipit tincidunt, arcu nisl mattis diam, a convallis sapien purus in sapien.
    <p>
    <p>Curabitur hendrerit mi at libero feugiat, ac aliquam tortor efficitur. Duis porttitor nisl magna, in iaculis magna hendrerit vitae. Sed iaculis vel est eget pulvinar. Etiam blandit lectus a interdum faucibus. Aliquam erat volutpat. Proin congue, dui id venenatis rutrum, mi lorem sodales diam, at porttitor nulla ante in velit. Proin venenatis, elit venenatis pharetra hendrerit, massa mi dictum eros, ut lobortis lectus arcu eu ex. Mauris accumsan felis ut ornare pulvinar. Quisque et velit vitae risus tempus fermentum in et est. Sed tristique maximus orci eget rutrum. Pellentesque faucibus enim sed nunc lacinia malesuada.</p>
  </div>
</section>
<section class="coverageWrapper">
  <div class="container">
    <div class="coverageBase">
      <div class="tab-content">
        <div class="tab-scroll">
          <h5 class="htitle">Cashless Hospital List</h5>
          <ul>
            <li>Morbi fermentum commodo dolor, blandit fermentum nisi commodo nec</li>
            <li>Morbi fermentum commodo dolor, blandit fermentum nisi commodo nec</li>
            <li>Morbi fermentum commodo dolor, blandit fermentum nisi commodo nec</li>
            <li>Morbi fermentum commodo dolor, blandit fermentum nisi commodo nec</li>
            <li>Morbi fermentum commodo dolor, blandit fermentum nisi commodo nec</li>
            <li>Morbi fermentum commodo dolor, blandit fermentum nisi commodo nec</li>
            <li>Morbi fermentum commodo dolor, blandit fermentum nisi commodo nec</li>
            <li>Morbi fermentum commodo dolor, blandit fermentum nisi commodo nec</li>
            <li>Morbi fermentum commodo dolor, blandit fermentum nisi commodo nec</li>
            <li>Morbi fermentum commodo dolor, blandit fermentum nisi commodo nec</li>
            <li>Morbi fermentum commodo dolor, blandit fermentum nisi commodo nec</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="healthinsuranceWrapper">
  <div class="container">
    <h5 class="htitle text-center">Health Insurance Eligibility Criteria</h5>
    <p>Morbi fermentum commodo dolor, blandit fermentum nisi commodo nec. Phasellus vel euismod tellus, ac molestie nisi. Sed ullamcorper ultrices accumsan. Curabitur congue, sapien eget suscipit tincidunt, arcu nisl mattis diam, a convallis sapien purus in sapien. Curabitur hendrerit mi at libero feugiat, ac aliquam tortor efficitur. Duis porttitor nisl magna, in iaculis magna hendrerit vitae. Sed iaculis vel est eget pulvinar. Etiam blandit lectus a interdum faucibus. Aliquam erat volutpat. Proin congue, dui id venenatis rutrum, mi lorem sodales diam, at porttitor nulla ante in velit. Proin venenatis, elit venenatis pharetra hendrerit, massa mi dictum eros, ut lobortis lectus arcu eu ex. Mauris accumsan felis ut ornare pulvinar. Quisque et velit vitae risus tempus fermentum in et est. Sed tristique maximus orci eget rutrum. Pellentesque faucibus enim sed nunc lacinia malesuada.</p>
  </div>
</section>
<section class="importantWrapper">
  <div class="container">
    <h5 class="htitle text-center">Important Pointers to be covered:</h5>
    <div class="acc">
      <div class="acc__card">
        <div class="acc__title">your Health Insurance Policy?</div>
        <div class="acc__panel">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
      <div class="acc__card">
        <div class="acc__title">What is great about SBIG Health Insurance Policy?</div>
        <div class="acc__panel">
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
      </div>
      <div class="acc__card">
        <div class="acc__title">Does this policy cover treatment by Homeopathy method?</div>
        <div class="acc__panel">
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </div>
      </div>
      <div class="acc__card">
        <div class="acc__title">Why should you get a health Insurance Policy?</div>
        <div class="acc__panel">
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </div>
      </div>
      <div class="acc__card">
        <div class="acc__title">If I don’t claim in a policy period, can I get a refund of my money?</div>
        <div class="acc__panel">
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
      </div>
    </div>
    <div class="text-right blog-carousel-control col-lg-12 col-sm-12"> <span class="active">1</span> / 16 <img class="add-opticity pagePrev" src="<?php echo $asset_path;?>/images/arrow-left.png" alt=""> <img class="remove-opticity pageNext" src="<?php echo $asset_path;?>/images/arrow-right.png" alt=""> </div>
  </div>
</section> -->