import React, { Component, lazy, Suspense } from "react";
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import * as AppConstant from "../../AppConstant";
import Loader from "react-spinner-material";

const Home = lazy(() => import("../../Home/Home"));
const BaseProduct = lazy(() => import("../../Products/BaseProduct"));
const About = lazy(() => import("../../NonTransactional/About/About"));
// import BoardOfDirectors from "../../NonTransactional/About/BoardOfDirectors";
// import PublicDisclosures from "../../NonTransactional/About/PublicDisclosures";
const BoardOfDirectorDetails = lazy(() => import("../../NonTransactional/About/BoardOfDirectorDetails"));
const Awards = lazy(() => import("../../NonTransactional/Awards/Awards"));
const AwardDetails = lazy(() => import("../../NonTransactional/Awards/AwardDetails"));
const Blog = lazy(() => import("../../NonTransactional/Blog/Blog"));
// const BlogDetails = lazy(() => import("../../NonTransactional/Blog/BlogDetails"));
// import Career from "../../NonTransactional/Career/Career";
//const BharatLaghuUdyamSuraksha = lazy(() => import("../../Products/BharatLaghuUdyamSuraksha"));
//const BharatSookshmaUdyamSuraksha = lazy(() => import("../../Products/BharatSookshmaUdyamSuraksha"));
//const SaralSurakshaBima = lazy(() => import("../../Products/SaralSurakshaBima"));
const WhatCanYouExpect = lazy(() => import("../../NonTransactional/Career/WhatCanYouExpect"));
//import OurReach from "../../NonTransactional/Career/OurReach";
const Contact = lazy(() => import("../../NonTransactional/Contact/Contact"));
const DoNotCall = lazy(() => import("../../NonTransactional/DoNotCall/DoNotCall"));
const FAQ = lazy(() => import("../../NonTransactional/FAQ/FAQ"));
const PolicyRenewal = lazy(() => import("../../NonTransactional/PolicyRenewal/PolicyRenewal"));
const PublicDisclosure = lazy(() => import("../../NonTransactional/PublicDisclosure/PublicDisclosure"));
const SiteMap = lazy(() => import("../../NonTransactional/SiteMap/SiteMap"));
const NotFound = lazy(() => import("../../NotFound"));
const Buy = lazy(() => import("../../Buy/Buy"));
const Explore = lazy(() => import("../../Explore/Explore"));
// const MotorTwoWheeler = lazy(() =>  import("../../Products/MotorTwoWheeler"));
// const MotorPrivateCar = lazy(() =>  import("../../Products/MotorPrivateCar"));
// const MotorLongTermTwoWheeler = lazy(() =>  import("../../Products/MotorLongTermTwoWheeler"));
// const MotorActOnlyTwoWheeler = lazy(() =>  import("../../Products/MotorActOnlyTwoWheeler"));
// const MotorActOnlyPrivateCar = lazy(() =>  import("../../Products/MotorActOnlyPrivateCar"));
// const TravelInsurance = lazy(() =>  import("../../Products/TravelInsurance"));
// const LongTermHomeInsurance = lazy(() =>  import("../../Products/LongTermHomeInsurance"));
// const SimpleHomeInsurance = lazy(() =>  import("../../Products/SimpleHomeInsurance"));
// const HealthInsurance = lazy(() =>  import("../../Products/HealthInsurance"));
// const ArogyaPremier = lazy(() =>  import("../../Products/ArogyaPremier"));
// const ArogyaPlus = lazy(() =>  import("../../Products/ArogyaPlus"));
// const ArogyaTopup = lazy(() =>  import("../../Products/ArogyaTopup"));
// const ArogyaSanjeevani = lazy(() =>  import("../../Products/ArogyaSanjeevani"));
// const GroupHealthInsuranceSBI = lazy(() =>  import("../../Products/GroupHealthInsuranceSBI"));
// const CriticalIllnessInsurance = lazy(() =>  import("../../Products/CriticalIllnessInsurance"));
// const HospitalDailyCash = lazy(() =>  import("../../Products/HospitalDailyCash"));
const IndividualPersonalAccident = lazy(() => import("../../Products/IndividualPersonalAccident"));
const GroupHealthInsurance = lazy(() => import("../../Products/GroupHealthInsurance"));
const MoneyInsurance = lazy(() => import("../../Products/MoneyInsurance"));
const TradeCreditInsurance = lazy(() => import("../../Products/TradeCreditInsurance"));
const PlateGlassInsurance = lazy(() => import("../../Products/PlateGlassInsurance"));
const BurglaryInsurance = lazy(() => import("../../Products/BurglaryInsurance"));
const CommercialMotorInsurance = lazy(() => import("../../Products/CommercialMotorInsurance"));
const TractorAndOtherFarmVehiclesInsurance = lazy(() => import("../../Products/TractorAndOtherFarmVehiclesInsurance"));
const GroupPersonalAccidentInsurance = lazy(() => import("../../Products/GroupPersonalAccidentInsurance"));
const StandardFireAndSpecialPerilsInsurances = lazy(() => import("../../Products/StandardFireAndSpecialPerilsInsurances"));
const ConsequentialLossFireInsurance = lazy(() => import("../../Products/ConsequentialLossFireInsurance"));
const MarineCargoInsurance = lazy(() => import("../../Products/MarineCargoInsurance"));
const IndustrialAllRisksInsurance = lazy(() => import("../../Products/IndustrialAllRisksInsurance"));
const BusinessPackageInsurance = lazy(() => import("../../Products/BusinessPackageInsurance"));
const LatentDefectsInsurancePolicy = lazy(() => import("../../Products/LatentDefectsInsurancePolicy"));
const ElectronicEquipmentInsurance = lazy(() => import("../../Products/ElectronicEquipmentInsurance"));
const ContractorsAllRiskInsurance = lazy(() => import("../../Products/ContractorsAllRiskInsurance"));
const ErectionAllRisksInsurance = lazy(() => import("../../Products/ErectionAllRisksInsurance"));
const ContractorsPlantMachinery = lazy(() => import("../../Products/ContractorsPlantMachinery"));
const MachineryBreakdownInsurance = lazy(() => import("../../Products/MachineryBreakdownInsurance"));
const BoilerPressurePlantInsurance = lazy(() => import("../../Products/BoilerPressurePlantInsurance"));
const ConsequentialLossMachineryBreakdown = lazy(() => import("../../Products/ConsequentialLossMachineryBreakdown"));
const DirectorsAndOfficers = lazy(() => import("../../Products/DirectorsAndOfficers"));
const AviationHullPackage = lazy(() => import("../../Products/AviationHullPackage"));
const SMEPackage = lazy(() => import("../../Products/SMEPackage"));
const BroadformLiability = lazy(() => import("../../Products/BroadformLiability"));
const ProductLiability = lazy(() => import("../../Products/ProductLiability"));
const CellularNetwork = lazy(() => import("../../Products/CellularNetwork"));
const AdvanceLossOfProfit = lazy(() => import("../../Products/AdvanceLossOfProfit"));
const ClinicalTrialProfessionalLiability = lazy(() => import("../../Products/ClinicalTrialProfessionalLiability"));
const CyberDefenseInsurance = lazy(() => import("../../Products/CyberDefenseInsurance"));
const PublicLiability = lazy(() => import("../../Products/PublicLiability"));
const BaggageInsurance = lazy(() => import("../../Products/BaggageInsurance"));
const PortableElectronicEquipment = lazy(() => import("../../Products/PortableElectronicEquipment"));
const WeatherInsurance = lazy(() => import("../../Products/WeatherInsurance"));
const MegaRisk = lazy(() => import("../../Products/MegaRisk"));
const PortPackage = lazy(() => import("../../Products/PortPackage"));
const MarineDelayInStartUp = lazy(() => import("../../Products/MarineDelayInStartUp"));
const MotorTradeTransitRisk = lazy(() => import("../../Products/MotorTradeTransitRisk"));
const AllRiskInsurance = lazy(() => import("../../Products/AllRiskInsurance"));
const ClinicalTrialNoFault = lazy(() => import("../../Products/ClinicalTrialNoFault"));
const NewsDetails = lazy(() => import("../../NonTransactional/About/NewsDetails"));
const LifeAtSbig = lazy(() => import("../../NonTransactional/Career/LifeAtSbig"));
const MeetOurPeople = lazy(() => import("../../NonTransactional/Career/MeetOurPeople"));
const MeetOurPeopleDetails = lazy(() => import("../../NonTransactional/Career/MeetOurPeopleDetails"));
const DevelopingYoungLeaders = lazy(() => import("../../NonTransactional/Career/DevelopingYoungLeaders"));
const MotorCommercialTrailer = lazy(() => import("../../Products/MotorCommercialTrailer"));
const ErrorsAndOmission = lazy(() => import("../../Products/ErrorsAndOmission"));
const PMFasalBima = lazy(() => import("../../Products/PMFasalBima"));
const SignBoard = lazy(() => import("../../Products/SignBoard"));
const NationalAgricultureInsurance = lazy(() => import("../../Products/NationalAgricultureInsurance"));
const MotorActOnly = lazy(() => import("../../Products/MotorActOnly"));
const EventCancellation = lazy(() => import("../../Products/EventCancellation"));
const EmployeesCompensation = lazy(() => import("../../Products/EmployeesCompensation"));
const MotorTradeRoadRisk = lazy(() => import("../../Products/MotorTradeRoadRisk"));
const PublicLiabilityAct = lazy(() => import("../../Products/PublicLiabilityAct"));
const KidnapRansomExtortion = lazy(() => import("../../Products/KidnapRansomExtortion"));
const CommercialGeneralLiability = lazy(() => import("../../Products/CommercialGeneralLiability"));
const MotorTradeInternalRisk = lazy(() => import("../../Products/MotorTradeInternalRisk"));
const FidelityGuarantee = lazy(() => import("../../Products/FidelityGuarantee"));
const OilEnergy = lazy(() => import("../../Products/OilEnergy"));
const AgriculturePumpInsurance = lazy(() => import("../../Products/AgriculturePumpInsurance"));
const CattleInsurance = lazy(() => import("../../Products/CattleInsurance"));
const GraminSamridhiBima = lazy(() => import("../../Products/GraminSamridhiBima"));
const MicroInsurance = lazy(() => import("../../Products/MicroInsurance"));
const SheepGoatInsurance = lazy(() => import("../../Products/SheepGoatInsurance"));
const JewellersBlock = lazy(() => import("../../Products/JewellersBlock"));
// const LoanInsurance = lazy(() =>  import("../../Products/LoanInsurance"));
const GroupLoanInsurance = lazy(() => import("../../Products/GroupLoanInsurance"));
const Shagun = lazy(() => import("../../Products/Shagun"));
const CovidKavach = lazy(() => import("../../Products/CovidKavach"));
const CoronaRakshak = lazy(() => import("../../Products/CoronaRakshak"));
const ArogyaSanjeevaniGroup = lazy(() => import("../../Products/ArogyaSanjeevaniGroup"));
// const VectorBroneDiseaseGroup = lazy(() => import("../../Products/VectorBroneDiseaseGroup"));

const Claims = lazy(() => import('../../NonTransactional/Claims/Claims'));
const CareerProgression = lazy(() => import("../../NonTransactional/Career/CareerProgression"));
const CurrentOpening = lazy(() => import("../../NonTransactional/Career/CurrentOpening"));
const LearnHowWeHire = lazy(() => import("../../NonTransactional/Career/LearnHowWeHire"));
const Downloads = lazy(() => import("../../NonTransactional/Downloads/Downloads"));
const CmsPage = lazy(() => import("../../NonTransactional/CmsPage/CmsPage"));
const GrievanceRedressal = lazy(() => import("../../NonTransactional/GrievanceRedressal/GrievanceRedressal"));
const ImportantLinks = lazy(() => import('../../NonTransactional/ImportantLinks/ImportantLinks'));
const Agent = lazy(() => import('../../NonTransactional/Agent/Agent'));
const Tender = lazy(() => import("../../NonTransactional/Tender/Tender"));
const history = lazy(() => import("./history"));
const UnclaimedPolicyDetails = lazy(() => import('../../NonTransactional/Claims/UnclaimedPolicyDetails'));
const ChannelPartner = lazy(() => import('../../ChannelPartner/ChannelPartner'));
const GiSimplified = lazy(() => import('../../GiSimplified/GiSimplified'));
const BharatLaghuUdyamSuraksha = lazy(() => import("../../Products/BharatLaghuUdyamSuraksha"));
const BharatSookshmaUdyamSuraksha = lazy(() => import("../../Products/BharatSookshmaUdyamSuraksha"));
const SaralSurakshaBima = lazy(() => import("../../Products/SaralSurakshaBima"));
// const BlogInner = lazy(() => import('../../GiSimplified/BlogInner'));

//CR6650 
//const GiSimplified = lazy(() => import('../../GiSimplified/GiSimplified'));

const LanguagePreference = lazy(() => import("../../NonTransactional/LanguagePreference/LanguagePreference"));
const LanguageProductFeatures = lazy(() => import("../../NonTransactional/LanguagePreference/LanguageProductFeatures"));
const MaintenancePage = lazy(() => import("../../NonTransactional/Maintenance/MaintenancePage"));
class Routes extends Component {

    render() {
        let loader = <div style={{ width: '100%', height: '100%', position: 'fixed', left: '0', top: '0', zIndex: '999' }}>
            <div style={{ textAlign: 'center', position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)', top: '50%', width: '50px', height: '50px', }}>
                <Loader size={50}  visible={true} />
            </div>
        </div>
        // const pathname = window.location.pathname;
        return (
            <div className="react-wrapper">
                <Suspense fallback={loader}>
                    <Router history={history} basename={AppConstant.BASE_PATH}>
                        <ScrollToTop>
                            <Switch>
                                {/* Removes trailing slashes */}
                                <Route
                                    path="/:url*(/+)"
                                    exact
                                    strict
                                    render={({ location }) => (
                                        <Redirect to={location.pathname.replace(/\/+$/, "")} />
                                    )}
                                />
                                <Route exact path="/" component={Home} />
                                <Route exact path="/home" component={Home} />
                                <Route path="/product" component={BaseProduct} />
                                <Route path="/claim" component={Claims} />
                                <Route path="/about-us" component={About} />
                                <Route exact path="/awards" component={Awards} />
                                <Route exact path="/maintenance-page" component={MaintenancePage} />
                                <Route exact path="/award-details/:slug" component={AwardDetails} />
                                <Route exact path="/blog/:slug?" component={Blog} />
                                <Route exact path="/language-preference/:productname?" component={LanguagePreference} />
                                <Route exact path="/product-features/:product_code/:tag" component={LanguageProductFeatures} />
                                <Route exact path="/bharat-laghu-udyam-suraksha" component={BharatLaghuUdyamSuraksha} />
                                <Route exact path="/bharat-sookshma-udyam-suraksha" component={BharatSookshmaUdyamSuraksha} />
                                <Route exact path="/saral-suraksha-bima" component={SaralSurakshaBima} />
                                {/* <Route path="/blog-details/:slug" component={BlogDetails} /> */}

                                {/* <Route exact path="/career" component={Career} />
                                <Route path='/careers' render={() => (
                                    <Redirect to="/career" />
                                )}/> */}

                                <Route exact path="/what-you-expect" component={WhatCanYouExpect} />
                                <Route exact path="/our-reach" component={Home} />
                                <Route path="/contact-us" component={Contact} />
                                <Route exact path="/do-not-call" component={DoNotCall} />
                                <Route exact path="/faq" component={FAQ} />
                                <Route exact path="/policy-renewal" component={PolicyRenewal} />
                                <Route exact path="/public-disclosure2" component={PublicDisclosure} />
                                <Route exact path="/sitemap" component={SiteMap} />
                                <Route exact path="/buy" component={Buy} />
                                <Route exact path="/explore" component={Explore} />
                                {/* <Route exact path="/motor-insurance/two-wheeler-insurance" component={MotorTwoWheeler} />
                                <Route exact path="/motor-insurance/private-car-insurance" component={MotorPrivateCar} />
                                <Route exact path="/motor-insurance/long-term-two-wheeler-insurance" component={MotorLongTermTwoWheeler} />
                                <Route exact path="/motor-insurance/motor-act-only-two-wheeler-insurance" component={MotorActOnlyTwoWheeler} />                            
                                <Route exact path="/motor-insurance/motor-act-only-private-car-insurance" component={MotorActOnlyPrivateCar} />
                                {/* <Route exact path="/travel-insurance" component={TravelInsurance} /> 
                                <Route exact path="/home-insurance/long-term-home-insurance" component={LongTermHomeInsurance} />
                                <Route exact path="/home-insurance/simple-home-insurance" component={SimpleHomeInsurance} />*/}
                                <Route exact path="/personal-accident-insurance/individual-pa-insurance" component={IndividualPersonalAccident} />
                                <Route path='/health-insurance/health-insurance' render={() => (
                                    <Redirect to="/health-insurance/arogya-sanjeevani-policy" />
                                )} />
                                {/* <Route exact path="/health-insurance/retail-health" component={HealthInsurance} />
                                <Route exact path="/health-insurance/arogya-premier-policy" component={ArogyaPremier} />
                                <Route exact path="/health-insurance/arogya-plus-policy" component={ArogyaPlus} />
                                <Route exact path="/health-insurance/arogya-topup-policy" component={ArogyaTopup} />
                                <Route exact path="/health-insurance/arogya-sanjeevani-policy" component={ArogyaSanjeevani} />
                                <Route exact path="/health-insurance/critical-illness-insurance" component={CriticalIllnessInsurance} />
                                <Route exact path="/health-insurance/hospital-daily-cash" component={HospitalDailyCash} />
                                <Route exact path="/health-insurance/group-health-insurance" component={GroupHealthInsuranceSBI} />
                                <Route exact path="/health-insurance/loan-insurance" component={LoanInsurance} /> */}
                                <Route exact path="/group-health-insurance" component={GroupHealthInsurance} />
                                <Route exact path="/group-loan-insurance" component={GroupLoanInsurance} />

                                <Route exact path="/shagun" component={Shagun} />
                                <Route exact path="/covid-kavach" component={CovidKavach} />
                                <Route exact path="/corona-rakshak" component={CoronaRakshak} />

                                <Route exact path="/money-insurance" component={MoneyInsurance} />
                                <Route exact path="/plate-glass-insurance" component={PlateGlassInsurance} />
                                <Route exact path="/burglary-insurance" component={BurglaryInsurance} />
                                <Route exact path="/commercial-motor-insurance" component={CommercialMotorInsurance} />
                                <Route exact path="/tractor-and-other-farm-vehicle-insurance" component={TractorAndOtherFarmVehiclesInsurance} />
                                <Route exact path="/group-personal-accident-insurance" component={GroupPersonalAccidentInsurance} />
                                <Route exact path="/standard-fire-and-special-perils-insurances" component={StandardFireAndSpecialPerilsInsurances} />
                                <Route exact path="/consequential-loss-fire-insurance" component={ConsequentialLossFireInsurance} />
                                <Route exact path="/marine-cargo-insurance" component={MarineCargoInsurance} />
                                <Route exact path="/industrial-all-risks-insurance" component={IndustrialAllRisksInsurance} />
                                <Route exact path="/business-package-insurance" component={BusinessPackageInsurance} />
                                <Route exact path="/latent-defects-insurance-policy" component={LatentDefectsInsurancePolicy} />
                                <Route exact path="/electronic-equipment-insurance" component={ElectronicEquipmentInsurance} />
                                <Route exact path="/contractors-all-risk-insurance" component={ContractorsAllRiskInsurance} />
                                <Route exact path="/erection-all-risks-insurance" component={ErectionAllRisksInsurance} />
                                <Route exact path="/contractors-plant-machinery" component={ContractorsPlantMachinery} />
                                <Route exact path="/machinery-breakdown-insurance" component={MachineryBreakdownInsurance} />
                                <Route exact path="/boiler-pressure-plant-insurance" component={BoilerPressurePlantInsurance} />
                                <Route exact path="/consequential-loss-machinery-breakdown" component={ConsequentialLossMachineryBreakdown} />
                                <Route exact path="/directors-and-officers" component={DirectorsAndOfficers} />
                                <Route exact path="/trade-credit-insurance" component={TradeCreditInsurance} />
                                <Route exact path="/aviation-hull-package" component={AviationHullPackage} />
                                <Route exact path="/sme-package" component={SMEPackage} />
                                <Route exact path="/broadform-liability" component={BroadformLiability} />
                                <Route exact path="/product-liability" component={ProductLiability} />
                                <Route exact path="/cellular-network" component={CellularNetwork} />

                                <Route exact path="/advance-lossof-profit" component={AdvanceLossOfProfit} />
                                <Route exact path="/clinical-trial-professional-liability" component={ClinicalTrialProfessionalLiability} />
                                <Route exact path="/cyber-defense-insurance" component={CyberDefenseInsurance} />
                                <Route exact path="/public-liability" component={PublicLiability} />
                                <Route exact path="/baggage-insurance" component={BaggageInsurance} />
                                <Route exact path="/portable-electronic-equipment" component={PortableElectronicEquipment} />
                                <Route exact path="/weather-insurance" component={WeatherInsurance} />
                                <Route exact path="/mega-risk" component={MegaRisk} />
                                <Route exact path="/port-package" component={PortPackage} />
                                <Route exact path="/marine-delay-start" component={MarineDelayInStartUp} />
                                <Route exact path="/motor-trade-transit-risks" component={MotorTradeTransitRisk} />
                                <Route exact path="/all-risk-insurance" component={AllRiskInsurance} />
                                <Route exact path="/clinical-trial-no-fault" component={ClinicalTrialNoFault} />
                                <Route exact path="/motor-commercial-trailer" component={MotorCommercialTrailer} />
                                <Route exact path="/errors-and-omissions" component={ErrorsAndOmission} />
                                <Route exact path="/pradhan-mantri-fasal-bima-yojna" component={PMFasalBima} />
                                <Route exact path="/sign-board" component={SignBoard} />
                                <Route exact path="/national-agriculture-insurance" component={NationalAgricultureInsurance} />
                                <Route exact path="/motor-act-only" component={MotorActOnly} />
                                <Route exact path="/event-cancellation" component={EventCancellation} />
                                <Route exact path="/employees-compensation-ec" component={EmployeesCompensation} />
                                <Route exact path="/motor-trade-road-risks" component={MotorTradeRoadRisk} />
                                <Route exact path="/public-liability-act" component={PublicLiabilityAct} />
                                <Route exact path="/kidnap-ransom-and-extortion" component={KidnapRansomExtortion} />
                                <Route exact path="/commercial-general-liability" component={CommercialGeneralLiability} />
                                <Route exact path="/motor-trade-internal-risks" component={MotorTradeInternalRisk} />
                                <Route exact path="/fidelity-guarantee" component={FidelityGuarantee} />
                                <Route exact path="/oil-energy" component={OilEnergy} />
                                <Route exact path="/agriculture-pumpset-insurance-policy" component={AgriculturePumpInsurance} />
                                <Route exact path="/cattle-insurance-policy" component={CattleInsurance} />
                                <Route exact path="/gramin-samriddhi-bima" component={GraminSamridhiBima} />
                                <Route exact path="/micro-insurance-policy" component={MicroInsurance} />
                                <Route exact path="/sheep-goat-insurance-policy" component={SheepGoatInsurance} />
                                <Route exact path="/jewellers-block" component={JewellersBlock} />
                                <Route exact path="/arogya-sanjeevani-group-policy" component={ArogyaSanjeevaniGroup} />
                                {/* <Route exact path="/vector-borne-disease-cover" component={VectorBroneDiseaseGroup} /> */}

                                <Route exact path="/board-of-director-details" component={BoardOfDirectorDetails} />
                                <Route exact path="/life-at-sbig" component={LifeAtSbig} />
                                <Route exact path="/meet-our-people" component={MeetOurPeople} />
                                <Route exact path="/career-progression" component={CareerProgression} />
                                <Route exact path="/meet-our-people-details/:id" component={MeetOurPeopleDetails} />
                                <Route exact path="/developing-young-leaders" component={DevelopingYoungLeaders} />
                                {/* <Route exact path="/claimphilosophy" component={Claims} /> */}
                                <Route exact path="/current-opening" component={CurrentOpening} />
                                <Route exact path="/learn-how-we-hire" component={LearnHowWeHire} />
                                <Route exact path="/news-details/:headline/:id" component={NewsDetails} />
                                <Route exact path="/member-details/:name/:id" component={BoardOfDirectorDetails} />
                                <Route exact path="/downloads" component={Downloads} />
                                <Route exact path="/privacy-policy" render={props => <CmsPage hemetDataSetFor="Cms-PrivacyPolicy" {...props} />} />
                                <Route exact path="/website-terms-usage" render={props => <CmsPage hemetDataSetFor="Cms-WebsiteTermsUsage" {...props} />} />
                                <Route exact path="/ucc-disclaimer" render={props => <CmsPage hemetDataSetFor="Cms-UccDisclaimer" {...props} />} />
                                <Route exact path="/website-medical-declaration" render={props => <CmsPage hemetDataSetFor="Cms-WebsiteMedicalDeclaration" {...props} />} />
                                <Route exact path="/grievance-redressal" component={GrievanceRedressal} />
                                <Route path='/hi/शिकायत-निवारण' render={() => (
                                    <Redirect to="/grievance-redressal" />
                                )} />
                                <Route exact path="/important-links" component={ImportantLinks} />
                                <Route exact path="/agent" component={Agent} />
                                <Route exact path="/tender" component={Tender} />
                                <Route exact path="/unclaimed-policy-details/" component={UnclaimedPolicyDetails} />
                                <Route exact path='/channel-partner-login' component={ChannelPartner} />
                                <Route path="/gi-simplified" component={GiSimplified} />
                                <Route component={NotFound} />
                            </Switch>
                        </ScrollToTop>
                    </Router>
                </Suspense>
            </div>
        );
    }
}

export default Routes;
