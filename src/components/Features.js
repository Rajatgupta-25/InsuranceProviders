import React from 'react';
import NavBar from './Navbar';
import Images from './Images';

export default function Features(){
    return (
        <>
        <NavBar />
        <div className="container">
            <div className="row mt-4">
                <div className="col-4 mt-3 text-left">
                <img style={{position: 'fixed'}} src={Images.features_insurance} width="30%" height="600px"></img>
                </div>
                <div className="col-2"></div>
                <div className="col-6 mt-5 text-left">
                    <p>Insurance is the most effective risk management tool which can protect individuals and businesses from financial risks arising out of various contingencies. The emotional and psychological loss can never be compensated, but at least the financial loss can be compensated with insurance. Though there are uncertainties in life which you cannot mitigate, but insurance will surely help you transfer the financial risk associated with the same.</p>
                    <h4 className="mt-5 text-muted">What is Insurance?</h4>
                    <p>Insurance is a legal contract between two parties- the insurance company (insurer) and the individual (insured), wherein the insurance company promises to compensate for financial losses due to insured contingencies in return for the premiums paid by the insured individual. In simple words, insurance is a risk transfer mechanism, where you transfer your risk to the insurance company and get the cover for financial loss that you may face due to unforeseen events. And the amount that you pay for this arrangement is called premium. There is insurance available for various risks, starting from your life to mobile phones that you use. In the end, it’s essential to protect what is ‘important’ to you.</p>
                    <h4 className="mt-5 text-muted">How does Insurance work?</h4>
                    <p>The concept of insurance works on the basis of ‘risk pooling’. When you buy any type of insurance policy from the insurance company for a specified period with specific cover, you will make regular payments (referred to as premiums) towards the policy. Similarly, Insurance Company collects premium from all of its clients (referred to as insured) and pools the money collected to pay for losses arising out of an insured event. In case the insured event takes place, and you make a claim, losses will be compensated by the insurance company from the pool of policyholder’s premiums. In case you don’t make a claim during the specified policy period, no benefits will be paid to you. However, there are various types of products offered by insurance companies today which also involve savings element attached to it.</p>
                    <h4 className="mt-5 text-muted">Types of Insurance available</h4>
                    <p>There are various types of insurance products available in India. Mainly, insurance products are classified as:</p>
                    <p style={{textIndent: '25px'}}>1. Life insurance products</p>
                    <p style={{textIndent: '25px'}}>2. General insurance products</p>
                    <p>Life insurance covers you against the risk of death. Life insurance policies come in many variants such as term plans, endowment plans, whole life insurance plans, money back plans and unit-linked investment plans etc. Many life insurance products can be a great tool for long-term savings also as it comes as a combination of protection and savings. General insurance products cover financial losses caused by various risks other than death. General insurance products come in various types covering a wide range of risks such as health insurance, motor insurance, marine insurance, liability insurance, travel insurance and commercial insurance etc.</p>
                    <p>Insurance is an effective risk management tool that protects what is precious for us –life, health, home and businesses etc. The requirement of insurance may vary from one individual to another, but there are certain types of insurance products that are must-have for every individual for ensuring a secure future.</p>
                    <h4 className="mt-5 text-muted">Must have Insurance products</h4>
                    <p>Knowing the importance of insurance is the need of the hour. Following insurance products are the must-have for any individual today.</p>
                    <p className="mt-4"><b className="text-muted">1. Life Insurance:</b></p>
                    <p>As no one wants to leave their loved ones financially shattered, life coverage is one of the must-have for every individual having dependents. In case of life insurance, the sum assured or the coverage amount will be paid out to the nominee of the insured in the event of the death of the insured. Life insurance is a crucial requirement to ensure the financial well-being of your loved ones even in your absence. The coverage amount opted should be able to provide complete financial protection – to replace income loss, to repay debt and also to create a financial buffer that can be utilised by insured’s family for future financial stability. Though life insurance products come in many variants, it’s important to first avail the term insurance with adequate coverage.</p>
                    <p className="mt-4 text-muted"><b>2. Health Insurance:</b></p>
                    <p>Health uncertainties are part of life. Keeping in mind the rising cost of healthcare and an increasing number of diseases, it’s important to have the financial cushion to protect yourself against health contingencies. Health insurance policies are of many types such as individual health insurance, family floater health insurance, critical illness health insurance and senior citizen health insurance. It’s important to have adequate health insurance coverage that can protect you from financial crisis during medical emergencies.</p>
                    <p className="mt-4 text-muted"><b>3. Motor Insurance:</b></p>
                    <p>Motor insurance policies are the mandatory legal requirement in India for every vehicle owner under the Motor Vehicle Act. Be it two-wheeler, car or a commercial vehicle, its compulsory to avail third party liability motor insurance to protect oneself against the claims that may arise from another party during an accident. However, motor insurance policies come in a comprehensive package wherein your valuable assets (bike or car) are covered against the various risk of damage or loss along with the personal accidental cover to you as the owner. Keeping in mind the rising incidents of road accidents and the asset value, it’s most important to have a comprehensive motor insurance policy.</p>
                    <p className="mt-4 text-muted"><b>4. Accident and disability Insurance:</b></p>
                    <p>Accidents are unexpected and are inevitable. Sometimes accidents can result in disabilities that can further have huge impact on your earning capacity. In order to have financial stability for yourself and your family, it’s important to be insured against accidents.</p>
                    <p className="mt-4 text-muted"><b>5. Home Insurance:</b></p>
                    <p>Home is one of your most valuable possessions that also includes many precious belongings and memories. Though you try to secure it to the fullest, your property is exposed to various risks like theft, damages due to natural disasters etc. which you may not be able to mitigate completely. Hence, in order to protect your home against losses and damages that may arise due to many insurable events, availing home insurance is the most effective solution.</p>
                    <p>Though you need to be prepared for future uncertainties by availing insurance cover, you may not need all types of insurance. The priority of any insurance product may vary depending on your individual need. Insurance is a large industry with numerous product types available to cater to every sort of need. Some of them mentioned already are of top priority for every individual. Priority of rest other types of insurance may purely depend on your unique need or situation. Let’s take a look at some of the insurance types that are of lesser priority.</p>
                    <p className="mt-4 text-muted"><b>6. Standalone critical illness Insurance:</b></p>
                    <p>Critical illness insurance plan may not be needed for every individual, specifically, if you do not have any family history of critical illness. Critical illnesses are sometimes covered in health insurance plans and also comes as a rider along with life insurance plans. Hence, a standalone cover for critical illness depends purely on the requirement of an individual.</p>
                    <p className="mt-4 text-muted"><b>7. Travel Insurance:</b></p>
                    <p>Travel insurance may be the priority for frequent travellers. But, it may not be needed for all. The need for insurance may vary depending on each individual’s unique needs. For example, if you are planning a domestic trip and your comprehensive health insurance plan covers you across the country for any medical emergencies, travel plans may not just be needed for you. More specifically, the travel insurance plan may not be your priority if you can afford to lose your pre-paid trip expenses. Sometimes travel covers also come as your credit card travel benefit.</p>
                </div>
            </div>
        </div>        
        </>
    );
}