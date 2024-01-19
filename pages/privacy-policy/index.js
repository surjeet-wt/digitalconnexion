import Head from "next/head";
import React from "react";
import { Container } from "react-bootstrap";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Link from "next/link";
import CustomHead from "../CustomHead";
import { fetchPageData } from "../api";

function PrivacyPolicy({ pageData }){
    
    return(
        <>
       <CustomHead {...pageData} />

        <Header />

          <div className="whistle-wrapper pad80 top80 grey">
                <Container>
                    <div className="whistle-loop ">
                        <h2 className="wow fadeInUp">Introduction</h2>
                        <p  className="wow fadeInUp">This is the Privacy Policy of Bam DLR Data Center Service Pvt. Ltd., its subsidiaries, related companies, and affiliates (collectively referred to as the “Digital Connexion” and any such entities collectively or individually, “we”, “our” or “us” as the context and case may require).</p>

                        <p  className="wow fadeInUp">We are committed to respecting and protecting the privacy rights of individuals who interact with us through our websites and our portals, when accessing our premises, when using our products and services, or with whom we otherwise communicate.
</p>
                    </div>

                    <div className="whistle-loop">
                        <h2 className="wow fadeInUp">Privacy Notice </h2>
                        <p  className="wow fadeInUp">This notice describes how Digital Connexion collects, uses, shares, and/or otherwise processes your personal information in compliance with all applicable data protection laws in the countries and regions where we operate and in the context of our business activities. It is addressed to all individuals outside our organization with whom we interact (together, “you”).
</p>

                        <p  className="wow fadeInUp">This notice describes what personal data we use about you, how we use it, and your choices and rights in relation to your personal data. This applies to our use of your personal data in our interactions with you through our websites and social media sites (‘Sites’) that link to our privacy statement, or personal data about you that we may collect offline or receive from other parties.
</p>
                        <p  className="wow fadeInUp">Additional information on our privacy practices with respect to recruitment, certain products, services, and solutions, may be provided in specific privacy statements and/or privacy sheets and/or other notices provided to you. To the extent that a specific statement, sheet, or notice differs from this privacy statement, the specific statement, sheet, or notice will take precedence.
</p>
                        <p  className="wow fadeInUp">This notice may be amended or updated from time to time to reflect changes in our practices with respect to the processing of personal data, or changes in applicable law. We will notify you in case of material changes. We encourage you to read this notice carefully. If you have any questions regarding how Digital Connexion processes your data, please contact the Digital Connexion privacy team.
</p>
                    </div>

                    <div className="whistle-loop">
                        <h2 className="wow fadeInUp"> Personal Data</h2>
                        <p  className="wow fadeInUp">“Personal data” refers to any data, whether true or not, about an individual who can be identified from that data; or from that data and other information to which we have or are likely to have access including existing data in our records which you have provided us, in any submissions you may have made to us or via any form of interaction with us.
</p>

                        <p  className="wow fadeInUp">Examples of personal data include but are not limited to, the following:
</p>

                        <ul>
                        <li  className="wow fadeInUp">Name</li>
                        <li  className="wow fadeInUp">Address</li>
                        <li  className="wow fadeInUp">Email</li>
                        <li  className="wow fadeInUp">Telephone number</li>
                        <li  className="wow fadeInUp">Birth date</li>
                        <li  className="wow fadeInUp">Photograph, image, picture, recording, film footage, likeness or other characteristics or identification, or such other medium in which your likeness may appear,</li>
                        <li  className="wow fadeInUp">Credit card number/bank details, and/or</li>
                        <li  className="wow fadeInUp">Other non-public information such as your IP or device MAC ID Address.
</li>
                        </ul>

                       

                    </div>

                    <div className="whistle-loop">
                        <h2 className="wow fadeInUp"> Non-Personally Identifiable Information </h2>
                        <p  className="wow fadeInUp">We may also collect information that cannot be used to identify or contact you (hereafter referred to as “non-personally identifiable information”), such as demographic information (e.g., age, profession, gender, or reason for call) and physical information (area of call, general customer type). Non-personally identifiable information may also include browser types, domain names, and other anonymous statistical data created by aggregating user information collected through the use of our website. Non-personally identifiable information is used to help us better understand the characteristics of the businesses that may use our services. We use the information collected and aggregated to improve and market our services to you and other businesses. In the event that we link any non-personally identifiable information with your personal data, we will treat such information as personal data and only use such information in accordance with this privacy policy.
</p>
                    </div>

                    <div className="whistle-loop">
                        <h2 className="wow fadeInUp">How we collect Personal Data?</h2>
                        <p  className="wow fadeInUp"> In the context of our services, we may collect or obtain personal data about you as an individual in the following situations:
</p>

                            <ul>
                                <li  className="wow fadeInUp">As a visitor to our office locations and/or data center facilities
</li>
                                <li  className="wow fadeInUp">When you use and/or interact with us through our websites or through social media
</li>
                                <li  className="wow fadeInUp">In the context of our business relationship (including, though not limited to, customer, supplier, and service provider)
</li>
                                <li  className="wow fadeInUp">As a registered customer representative using and accessing our portals
</li>
                                <li  className="wow fadeInUp">As an authorized representative of our customers, suppliers, or service provider(s) accessing our secure data center facilities
</li>
                                <li  className="wow fadeInUp">As an applicant in our recruitment process
</li>
                                <li  className="wow fadeInUp">As a business representative who corresponds with us via email, voicemail, or audio or video conferencing
</li>
                                <li  className="wow fadeInUp">As a business prospect representative who shows interest in our services
</li>
                                <li  className="wow fadeInUp">As a participant in our conferences, events, and learning sessions
</li>
                            </ul>

                        <p  className="wow fadeInUp">We may collect or obtain personal data from you and about you from various sources. We limit the collection of personal data to what is required to achieve the purpose(s) for which the data was collected.
</p>
                    </div>

                    <div className="whistle-loop">
                        <h2 className="wow fadeInUp">Directly from you:</h2>
                        <p  className="wow fadeInUp"><b>Data you provide to us:</b> We obtain personal data when contact details are provided to us (e.g., in the context of a contractual business relationship, either by registration on the website, by email or telephone, or by any other means, or when you provide us with your contact details during a business or trade event, or as a candidate in the recruitment process).
</p>

                        <p  className="wow fadeInUp"><b>Relationship data:</b> We collect or obtain personal data in the ordinary course of our contractual relationship with you (e.g., we provide a service to you, or to your employer).
</p>
                    </div>

                    <div className="whistle-loop">
                        <h2 className="wow fadeInUp">Indirectly from you:</h2>
                        <p  className="wow fadeInUp"> <b>Security data:</b> We collect information about your visits to our data center facilities and other premises, including records of the locations accessed and the credentials processed (“data center access records”), and CCTV images captured during your visit to our data centers.</p>

                        <p  className="wow fadeInUp"><b>Website data:</b> We may collect or automatically obtain personal data when you visit our websites or our portals, or when you use the features or resources available and associated with our websites.</p>

                        <p  className="wow fadeInUp"><b>Registration and access details:</b> We collect or obtain personal data when you use, or register to use, our websites, portals, or services, including records of your interactions with us, such as details of your access to our portals.</p>

                        <p  className="wow fadeInUp"><b>Relationship data through your employer or your agent:</b> We collect or obtain personal data from our customers, suppliers and service providers who provide your details to us as your employer or as your agent.
</p>
                    </div>


                    <div className="whistle-loop">
                        <h2 className="wow fadeInUp">Indirectly through a third party:</h2>
                        <p  className="wow fadeInUp"><b>Third-party information:</b>We may collect or obtain your personal data from third parties, including though not limited to, credit reference agencies, law enforcement authorities, and marketing firms.

</p>
                        <p  className="wow fadeInUp"><b>Content and advertising information: </b>If you interact with third-party content or advertising on a website (including third-party plugins and cookies), we may receive personal data from the relevant third-party provider of that content or advertising.</p>
                    </div>


                    <div className="whistle-loop">
                        <h2 className="wow fadeInUp">Children</h2>
                        <p  className="wow fadeInUp">Our websites, products, and services are not intended for use by minors, and Digital Realty does not knowingly collect personal data from minors.</p>
                    </div>


                    <div className="whistle-loop">
                        <h2 className="wow fadeInUp"> Our lawful basis for using information about you
</h2>
                        <p  className="wow fadeInUp">When we use your personal data in connection with the purposes set out in this privacy statement, we may rely on one or more of the following legal bases, depending on the purpose for which your personal data was collected and our relationship with you:
</p>

                        <ul>
                            <li  className="wow fadeInUp"><b>Performance of contract:</b> To provide our products, services and solutions as specified in our contract.
</li>
                            <li  className="wow fadeInUp"><b>Our legitimate business interests: </b> To protect our legitimate business interests or those of a third party with whom we share your personal data. Whenever we rely on this lawful basis to use your personal data, we assess our business interests to ensure that they do not override your rights. Additionally, you may have the right to object to our use of your personal data in certain circumstances. See the 'Your Personal Data Rights' section of this privacy statement.
</li>
                            <li  className="wow fadeInUp"><b>Compliance with a mandatory legal obligation:</b> To ensure that we comply with applicable laws and regulations that govern and regulate how we do business.</li>
                            <li  className="wow fadeInUp"><b>Consent:</b>  Where you have provided consent to the use of your personal data.</li>
                        </ul>
                    </div>


                    <div className="whistle-loop">
                        <h2 className="wow fadeInUp"> Purposes for the Collection, Use and Disclosure of your Personal Data
</h2>
                        <p  className="wow fadeInUp"> Generally, Digital Connexion collects, uses and discloses your personal data in respect of the following purposes:
</p>
                        <ul>
                        <li  className="wow fadeInUp">To provide our services to you in accordance with any agreements
</li> 

                        <li  className="wow fadeInUp"> To communicate with you on our promotions, services, events, programmes, and initiatives
</li> 

<li  className="wow fadeInUp">  To communicate with you on our vendors’, agents’, contractors’ third party service providers’ or business partners’ (collectively referred to as our “partners”) promotions, services, events
</li> 

<li  className="wow fadeInUp"> To respond to your enquiries, requests, or feedback on our website or services, including suggested improvements</li> 

<li  className="wow fadeInUp"> To process and administer your actual or potential transactions with us (including, but not limited to, provision by us of services or provision of products or services by you to us)
</li> 

<li  className="wow fadeInUp">  To process your registrations as a registered user of the website
</li> 

<li  className="wow fadeInUp"> To verify your identity and/or eligibility for discounts and promotions or activities or events organised by or on behalf of us
</li> 

<li  className="wow fadeInUp"> To facilitate our and/or our partners’ provision of products and services to you
</li> 

<li  className="wow fadeInUp"> To manage our administrative and business operations and to comply with our internal policies and procedures, including any employment policies and practices
</li> 

<li  className="wow fadeInUp">To facilitate business asset transactions (including, but not limited to, asset sales, mergers or acquisitions involving any of our companies)</li> 

<li  className="wow fadeInUp">To obtain your feedback or participation in surveys, market research and/or analysis for statistical, profiling or other purposes to enable us to customize, review, improvise and develop our services, to understand customer preferences, behaviour, and market trends
</li> 

<li  className="wow fadeInUp"> To manage the safety and security of our premises including but not limited to conducting security clearances and carrying out CCTV surveillance, granting or refusing admission to our premises</li> 

<li  className="wow fadeInUp">To respond to any claims, actions or proceedings and/or to safeguard and enforce our contractual and legal rights and obligations
</li> 

<li  className="wow fadeInUp"> To manage and prepare any reports regarding incidents or accidents
</li> 

<li  className="wow fadeInUp"> To comply with any applicable rules, laws, regulations, codes of practice or guidelines as well as to assist in investigations and law enforcement by the relevant authorities
</li> 

<li  className="wow fadeInUp">Any other purpose reasonably related to any of the above</li> 
                        </ul>

                        <p  className="wow fadeInUp"> For any other purpose(s) not set out herein, Digital Connexion may notify and seek your further consent in accordance with the requirements of any applicable laws, regulations, codes of practice, guidelines or rules before using your personal data for that other purpose(s).</p>

                        <p  className="wow fadeInUp">You can generally use and browse our website without disclosing your personal data to us, except where such disclosures may be necessary to allow us to respond to your requests, or in cases where you contact us directly in respect of our services.
</p>
                    </div>


                    <div className="whistle-loop privacy-h3">
                        <h2 className="wow fadeInUp"> We may Use your personal data for</h2>
                            
                           <div className="whitle-inner">
                            <h3  className="wow fadeInUp">Products, services, and solutions improvements.</h3>
                                <ul>
                                    <li  className="wow fadeInUp">Perform administrative and business functions and internal reporting
</li>
                                    <li  className="wow fadeInUp">Send administrative information to you and manage our business relationship with you
</li>
                                    <li  className="wow fadeInUp">Obtain feedback from you about our products, services and solutions including through client satisfaction surveys, in which event, we will only use your personal data for the sole purpose of sending you a survey (through our third-party customer experience management platform)
</li>
                                    <li  className="wow fadeInUp">Assess the performance of our sites and to improve their operation
</li>
                                    <li  className="wow fadeInUp">Process your orders and provide you with our products, services and solutions</li>
                                    <li  className="wow fadeInUp">Provide you with current information about our products, services and solutions
</li>
                                    <li  className="wow fadeInUp">Respond to your inquiries and fulfil requests made by you
</li>
                                    <li  className="wow fadeInUp">Update our records and keep your contact details up-to-date
</li>
                                </ul>
                           </div>


                           <div className="whitle-inner">
                                <h3  className="wow fadeInUp">Provide you with marketing materials and to personalize your experience.</h3>
                                <ul>
                                    <li  className="wow fadeInUp">Send marketing communications to you</li>
                                    <li  className="wow fadeInUp">Provide you with a more personalized experience when you interact with us</li>
                                    <li  className="wow fadeInUp">Enable you to subscribe to our newsletters and mailing lists</li>
                                    <li  className="wow fadeInUp">Enable you to manage your marketing and cookie preferences</li>
                                    <li  className="wow fadeInUp">Enable you to register for events, workshops and seminars hosted by us</li>
                                </ul>
                            </div>


                            <div className="whitle-inner">
                                <h3  className="wow fadeInUp">Achieving our business purposes and analyze information.</h3>
                                <ul>
                                    <li  className="wow fadeInUp">Establish, manage, and maintain our business relationship with you</li>
                                    <li  className="wow fadeInUp">To provide you with information regarding our products, services and solutions that may be of interest to you</li>
                                    <li  className="wow fadeInUp">Compile usage statistics for our sites
</li>
                                    <li  className="wow fadeInUp">Process and respond to privacy requests, questions, concerns and complaints
</li>
                                    <li  className="wow fadeInUp">Fulfil our contractual obligations
</li>
                                </ul>
                            </div>

                            <div className="whitle-inner">
                                <h3  className="wow fadeInUp">Research and analytical purposes.</h3>
                                <ul>
                                    <li  className="wow fadeInUp">Better understand how you use our sites
</li>
                                    <li  className="wow fadeInUp">Improve our products, services and solutions
</li>
                                    <li  className="wow fadeInUp">Evaluate product, service and solution demand
</li>
                                    <li  className="wow fadeInUp">Administer surveys and questionnaires, such as for market research or client satisfaction requirements
</li>
                                </ul>
                            </div>

                            <div className="whitle-inner">
                                <h3  className="wow fadeInUp">Compliance with our legal obligations.</h3>
                                <ul>
                                    <li  className="wow fadeInUp">Investigate, prevent, or take action regarding illegal activities, suspected fraud</li>
                                    <li  className="wow fadeInUp">Investigate violations of our terms of use or this privacy statement
</li>
                                </ul>
                            </div>


                    </div>

                    <div className="whistle-loop">
                        <h2 className="wow fadeInUp">Sharing of Personal Data with third parties</h2>
                        <p  className="wow fadeInUp">We will only share your personal data with third parties in the following situations:</p>
                        <ul>
                        <li  className="wow fadeInUp">We may share your personal data with our contracted service providers, suppliers, and other third-party processors, who act on our behalf and only process your personal data in accordance with our prior documented instructions. These providers are authorized to use your personal data only as necessary to provide us with their services. Where we engage any service providers, we take all reasonable and adequate measures to ensure that the confidentiality and security of the personal data is protected, together with any additional requirements under applicable laws. The list of processors to whom we disclose personal data and the associated purpose can be found on our website.
</li>
                        <li  className="wow fadeInUp">We may share your personal data with other entities within the Digital Realty group, for legitimate business purposes and for the operation of our websites, and for providing our services to you, in accordance with our contractual obligations and applicable law.
</li>
                        <li  className="wow fadeInUp">We may share your personal data with other customers based on your prior consent (e.g., for cross-connection purposes within our data center facilities or enabling interaction within the Digital Realty Marketplace).</li>
                        <li  className="wow fadeInUp">We may share your personal data in the context of a (potential) business transaction, such as a transaction to buy, sell, merge, or otherwise reorganize our business.
</li>
                        <li  className="wow fadeInUp">We may share your personal data with legal authorities and external advisors as necessary in connection with legal proceedings, and for investigating, detecting, or preventing criminal offenses.
</li>
                        <li  className="wow fadeInUp">We reserve the right to disclose your personal data to the authorities if required to do so by law, to the extent we believe it is reasonably necessary to comply with applicable law and/or it is in the interest of the rights, property, or safety of our employees, customers, or the public.
</li>

                        </ul>


                        <p  className="wow fadeInUp">Digital Connexion does not sell personal data to third parties.
</p>
                    </div>


                    <div className="whistle-loop">
                        <h2 className="wow fadeInUp"> Data security</h2>
                        <p  className="wow fadeInUp">Digital Connexion employs appropriate physical, technical, and organizational controls within our organization designed to protect your personal data against accidental or unlawful destruction, loss, alteration, or disclosure in accordance with applicable laws and regulations. Our controls are subject to periodic assessment and evaluation by both internal and external auditors. The overall program is evaluated regularly to ensure proper safeguards are in place for the ever-changing cyber environment.
</p>
                    </div>


                    <div className="whistle-loop">
                        <h2 className="wow fadeInUp">  Data accuracy</h2>
                        <p  className="wow fadeInUp">We take every reasonable step to ensure that:</p>

                        <ul>
                            <li  className="wow fadeInUp">Your personal data that we process is accurate, and, where necessary, kept up to date</li>
                            <li  className="wow fadeInUp">Where any of your personal data that we process is found to be inaccurate, having regard to the purposes for which the personal data is processed, is erased, or rectified without delay
</li>
                        </ul>
                        <p  className="wow fadeInUp">From time to time, we may ask you to confirm the accuracy of your personal data.
.</p>
                    </div>

                    <div className="whistle-loop">
                        <h2 className="wow fadeInUp"> Data minimization</h2>
                        <p  className="wow fadeInUp">We take every reasonable step to ensure that the personal data that we process is limited to the personal data reasonably necessary in connection with the purposes set out in this notice.</p>
                    </div>

                    <div className="whistle-loop">
                        <h2 className="wow fadeInUp"> Data retention</h2>
                        <p  className="wow fadeInUp">We will retain your personal data for as long as necessary or as permitted by law in relation to the purposes under section (D) for which your personal data was obtained. The criteria for determining our retention periods include:
</p>

                        <ul>
                            <li  className="wow fadeInUp">The duration of an ongoing business relationship with you

                                <ol>
                                    <li  className="wow fadeInUp">Where we provide services and/or carry out a contract with you and/or your employer
</li>
                                    <li  className="wow fadeInUp">Where you are lawfully included in our mailing list and have not unsubscribed
</li>
                                </ol>

                            </li>
                            <li  className="wow fadeInUp">Where we have a legitimate interest in processing the personal data for the purposes of operating our business and fulfilling our obligations with you and/your employer
</li>

                            <li  className="wow fadeInUp">Where there is a restricted retention period subject to applicable local laws and regulations


                                <ol>
                                    <li  className="wow fadeInUp">CCTV recordings for physical security in our data centers</li>
                                    <li  className="wow fadeInUp">Biometric data relating to secure access to data centers
</li>
                                    <li  className="wow fadeInUp">Personal information of applicants during the recruitment process (employment law restrictions vary per country)
</li>
                                    <li  className="wow fadeInUp">If applicable, any other processing of personal data where local laws or regulations require a restricted retention period
</li>
                                </ol>
                            </li>


                            <li  className="wow fadeInUp">In compliance with legal obligations to which we are subject per applicable law, we have statutory minimum retainment periods


                                <ol>
                                    <li  className="wow fadeInUp">e.g., to keep your personal data for business records, administrative and tax requirements</li>
                                </ol>
                            </li>

                            <li  className="wow fadeInUp">Protecting our legal position

                                <ol>
                                    <li  className="wow fadeInUp">To preserve evidence during any applicable limitation period under applicable law (any period during which any person could bring a legal claim against us in connection with your personal data, or to which your personal data are relevant for defending our interests in the context of judicial proceedings)
</li>
                                </ol>
                            </li>
                        </ul>
                        <p  className="wow fadeInUp">Once the retention periods have expired, we will permanently and securely delete, destroy or anonymize the relevant personal data.
</p>
                    </div>





                    <div className="whistle-loop">
                        <h2 className="wow fadeInUp">Your Personal Data rights</h2>
                        <p  className="wow fadeInUp">You have rights under various data protection laws in various countries in relation to your personal data but we offer them irrespective of your location.
</p>
                        <p  className="wow fadeInUp">We are committed to upholding your rights, including:
</p>

                        <ul>
                            <li  className="wow fadeInUp"><b>Right to be informed:</b> you have a right to know what personal data we have about you, what we do with it, where we get it from, who we share it with, how long we keep it and why we need it
</li>

                            <li  className="wow fadeInUp"><b>Right of access:</b>you have the right to update inaccurate and/or incomplete personal data about you

</li>

                            <li  className="wow fadeInUp"><b>Right to rectification:</b>   you have the right to update inaccurate and/or incomplete personal data about you
</li>

                            <li  className="wow fadeInUp"><b>Right to be forgotten:</b> you have the right to have your personal data erased, deleted or destroyed
</li>

                            <li  className="wow fadeInUp"><b>Right to data portability: </b>you have the right to move, copy or transfer your personal data in a safe and secure way and reuse it for your own purposes
</li>

                            <li  className="wow fadeInUp"><b>Right to withdraw consent:</b> you have the right to withdraw consent at any time regarding the use of your personal data or in relation to direct marketing activities
</li>

                            <li  className="wow fadeInUp"><b>Right to restrict Use:</b> you have the right to limit the way we use your personal data
</li>

                            <li  className="wow fadeInUp"><b>Right to object:</b> you have the right to stop or prevent us from using your personal data. In particular, you can object to our use of your personal data for direct marketing or the sale of your personal data
</li>

                            <li  className="wow fadeInUp"><b>Right to challenge automated decisions:</b> you have the right to query and review decisions made about you using purely automated means (i.e. without human involvement or intervention)
</li>

                            <li  className="wow fadeInUp"><b>Right to complain: </b>you have the right to make a complaint or raise a concern about how we use your personal data. Complaints may be made directly to us or a relevant data protection authority
</li>
                        </ul>

                        <p  className="wow fadeInUp">Where you contact us, we may request specific information from you to verify your identity to enable us to search for and provide you with access to or a copy of your personal data, as permitted under applicable law. Where permitted under applicable law, we may charge you a reasonable fee to access your personal data; however, we will advise you of any fee in advance.
</p>

                        <p  className="wow fadeInUp">Individuals may hold additional rights in certain countries, which must be recognized and upheld.
</p>

                        <p  className="wow fadeInUp">In some situations, we may not be required to enforce these rights, where permitted under applicable law. We may also have a legitimate business interest to decline a request to action your rights.
</p>

                        <p  className="wow fadeInUp">You may contact us with requests, complaints or questions regarding these rights as set forth in the ‘How to contact us’ section, below.</p>
                    </div>

                    <div className="whistle-loop">
                        <h2 className="wow fadeInUp"> Cookies and similar technologies</h2>
                        <p  className="wow fadeInUp">When you access our sites, we and our service providers use cookies (small text files containing a unique identification number that are placed on your PC, laptop, tablet or mobile phone)and similar technologies including scripts, embedded web links, web beacons, local shared objects (flash cookies) and Local Storage (HTML 5) Please refer to our cookies statement for more information on:
</p>

                        <ul>
                            <li>What cookies are
</li>
                            <li>How we use cookies and similar technologies
</li>
                            <li>How third parties we partner with may use cookies and similar technologies
</li>
                            <li>Your choices regarding acceptance of cookies and similar technologies</li>
                        </ul>
                    </div>

                    <div className="whistle-loop">
                        <h2 className="wow fadeInUp">Links to third-party websites and applications
</h2>
                        <p  className="wow fadeInUp">Our sites may provide links to the websites and/or applications of other parties. You may further interact with us through third party applications, owned and operated by the company you work for or other third parties such as LinkedIn, WhatApp, Slack, Microsoft Teams, Facebook, Twitter, Google+, and other social media sites or applications. We are not responsible for and make no representations or warranties in relation to the security, privacy practices and content of these third-party websites and applications. Please ensure that you read the applicable privacy and cookie policies before sharing personal data on these website applications. Your use of such websites and applications is at your own risk.
</p>
                    </div>

                    <div className="whistle-loop">
                        <h2 className="wow fadeInUp"> Children's Privacy</h2>
                        <p  className="wow fadeInUp">We encourage parents and guardians to take an active role in their children’s online activities. We do not aim our Sites at children. If you believe that we may have collected Personal Data about someone who is under the applicable age of consent in your country without the proper consent of the child’s parent or guardian, please contact us.</p>
                    </div>


                    <div className="whistle-loop">
                        <h2 className="wow fadeInUp">  Updates to our Privacy Statement</h2>
                        <p  className="wow fadeInUp">We may update our privacy statement at any time. If we do, we will update the 'Version' and 'Last update' information at the bottom of our privacy statement.

</p>

                        <p  className="wow fadeInUp">We encourage you to regularly review our privacy statement to stay informed about how we use your personal data and privacy practices.
</p>
                    </div>

                    <div className="whistle-loop mb-0">
                        <h2 className="wow fadeInUp"> How to contact us</h2>
                        <p  className="wow fadeInUp">If you have any questions about how we use your personal data, have a privacy concern, or wish to make a request or complaint relating to your personal data, please contact us at 
 <Link href="mailto:info@digitalconnexion.com"> info@digitalconnexion.com</Link></p>
                    </div>



                </Container>
          </div>

<Footer />

          
        </>
    )
}

export default PrivacyPolicy;


export async function getServerSideProps() {
    const keyid = 'privacypolicy';
    const pageData = await fetchPageData(keyid);  
    return {
      props: { pageData },
    };
}