import React from "react";
import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Link from "next/link";
import Header from "../component/Header";
import Footer from "../component/Footer";
import CustomHead from "../CustomHead";
import { fetchPageData } from "../api";

function WhistleBlowerPolicy({pageData}){


    return(
        <>
      
       <CustomHead {...pageData} />

        <Header />

          <div className="whistle-wrapper pad80 top80 grey">
                <Container>
                    <div className="whistle-loop wow fadeInUp">
                        <h2>INTRODUCTION</h2>
                        <p>We at Digital Connexion believe that best practice governance, controls
                        and compliance are essential for maximizing shareholder value. In order to
                        achieve this, we must act with integrity and honesty in everything we do
                        thereby helping customers to have confidence when entrusting their
                        business to the Company. We are therefore committed to high moral and
                        ethical standards in all our business activities. As employees and
                        representatives of Digital Connexion, we must practice honesty and
                        integrity in fulfilling our responsibilities and comply with all applicable laws
                        and regulations.</p>
                    </div>

                    <div className="whistle-loop wow fadeInUp">
                        <h2>OBJECTIVE</h2>
                        <p>The objective of this policy is:</p>
                        <ul>
                            <li>To provide an opportunity and framework for employees to report inappropriate behaviors or practices </li>
                            <li>To have a process that provides assurance against recrimination if and/or when such reports are fairly made </li>
                            <li>To make it clear Digital Connexion views breaches of security, confidentiality and regulations as very serious issues.</li>
                        </ul>
                    </div>

                    <div className="whistle-loop wow fadeInUp">
                        <h2>SCOPE</h2>
                        <p>This Whistle Blower Policy applies to all directors, officers, and employees across the organization. </p>
                    </div>

                    <div className="whistle-loop wow fadeInUp">
                        <h2>POLICY</h2>
                        <p>Every employee is responsible for reporting any conduct within the Company that the employee reasonably believes might:  </p>
                        <ul>
                            <li>Be in breach of applicable law or governmental regulation</li>
                            <li>Otherwise , constitutes unlawful behaviour (including behaviour that might constitute fraud or breach of data security or financial or regulatory reporting)</li>
                            <li>Constitute a breach of applicable internal policy, including, for example, a breach of confidentiality</li>
                            <li>Be detrimental to the name, brand and reputation of the company or any of its employees.</li>
                        </ul>
                        <p>If an employee is aware of a violation and does not report it, he/she may be held equally culpable as the guilty party and may face disciplinary action leading to termination.</p>
                    </div>

                    <div className="whistle-loop wow fadeInUp">
                        <h2>Whistleblower</h2>
                        <p>A person or entity making a protected disclosure is commonly referred to
                            as a whistleblower. Whistleblowers may be employees, applicants for
                            employment, vendors, contractors or the general public. The
                            whistleblower’s role is a reporting party. They are not investigators or
                            finders of fact, nor do they determine the appropriate corrective or remedial
                            action that may be warranted. </p>
                    </div>

                    <div className="whistle-loop wow fadeInUp">
                        <h2>Procedures for Making Complaints </h2>
                        <p>In the first instance, an employee should speak to their reporting manager
about their concerns and explain the reason for their concerns. A meeting
with the employee’s reporting Manager to discuss the concern more fully
should normally be held within 48 hours, although this will depend upon the
seriousness of the concern. </p>

<p>Any employee who is uncomfortable making a report to his or her direct
Reporting Manager or supervisor should raise their concerns with either 
</p>


<ul>
    <li> Their Manager’s Manager; or </li> 
    <li>Chief Human Resources Officer, or</li>
    <li>The person to whom the report is made will investigate and make a
preliminary assessment of the issue reported ascertaining whether there is
cause for concern. In all cases, a full report of the case must be
submitted to the HR office which should retain a record of all such reports </li>
    <li>The HR office will work with the business to ascertain any remedial
action that needs to be taken as a result of the investigation. If the matter
raised, concerns fraud or potential fraud, or is deemed material in the
context of the business, or is not being adequately addressed by business
management, then a report will be submitted to the CEO and the Audit
Committee.</li>
    <li>In some instances, e.g., to preserve continued independence, it may
be appropriate for the HR to refer the investigations to the internal auditors</li>
    <li>Reports of violations or suspected violations will be kept confidential
to the extent possible, consistent with the need to conduct an adequate
investigation. </li>
<li>Any violations in accordance with this policy, as well as
breaches of this policy, may result in disciplinary action leading to
termination.</li>
</ul>
                    </div>





                    <div className="whistle-loop wow fadeInUp">
                        <h2>No Retaliation</h2>
                        <p>No Employee who in good faith reports a violation shall suffer harassment,
retaliation or adverse employment consequences. An employee who
retaliates against someone who has reported a violation in good faith is
subject to discipline up to and including termination of employment. This
Whistleblower policy is intended to encourage and enable employees and
others to raise serious concerns within Company rather than seeking
resolution outside the company.</p>
                    </div>


                    <div className="whistle-loop wow fadeInUp">
                        <h2>Acting in Good Faith</h2>
                        <p>Anyone filing a complaint concerning a violation or suspected violation
must be acting in good faith and have reasonable grounds for believing the
information disclosed indicates a violation. Any allegations that prove not to
be substantiated and which prove to have been made maliciously or
knowingly to be false will be viewed as a serious disciplinary offense.</p>
                    </div>

                    <div className="whistle-loop wow fadeInUp">
                        <h2>Retention of Records</h2>
                        <p>All records relating to any accounting allegation, Legal allegation, report of
a retaliatory act or the investigation of any such Report shall be retained for
a period of five years.</p>
                    </div>


                    <div className="whistle-loop wow fadeInUp">
                        <h2>Requesting Guidance and Reporting Concerns</h2>
                        <p>As a Digital Connexion employee, you are responsible for reporting actual
or suspected violations of the CoC and for seeking clarification and
guidance on ethics, compliance, and legal issues. All Employees, Directors,
members, or other stakeholders associated with the Company may report
an actual or suspected ethical violation, or seek guidance, through the
following Ethicsline reporting channels:</p>

<div className="overflow-scroll">

<Table striped bordered>
      <thead>
        <tr>
          <th style={{width:"10%"}}>#</th>
          <th>Reporting Channel</th>
          <th>Contact Details</th>
          <th>Availability</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Phone</td>
          <td>- India Toll-Free: 1800-102-6969</td>
          <td><b>9:00 am to 10:00 pm IST for</b> 
English and Hindi (Monday -
Saturday)
<b> 10:00 am – 7:00 pm IST</b> for
Marathi, Gujarati, Telugu,
Kannada, and Tamil (Monday
- Saturday)
<b> Off-office hours:</b> Voicemail
facility available</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Web Portal </td>
          <td><Link  href="mailto:bamdlr.integritymatters.in" >https://bamdlr.integritymatters.in </Link> <br /> 
          Please provide Access Code: <b>BAMDLR</b></td>
          <td>24x7</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Email</td>
          <td> <Link  href="mailto:bamdlr@integritymatters.in" > bamdlr@integritymatters.in </Link> </td>
          <td>24x7</td>
        </tr>

        <tr>
          <td>4</td>
          <td>Post</td>
          <td> BAM DLR, C/o Integrity Matters, Unit
1211, CENTRUM, Plot No C-3, S.G.
Barve Road, Wagle Estate, Thane West –
400604, Maharashtra, India </td>
          <td>24x7</td>
        </tr>
      </tbody>
    </Table>
    </div>

<p>Ethicsline is operated by an independent external third-party specialist
service provider “Integrity Matters”. Employees who contact Ethicsline will
be assigned a unique report key that they may use to check on the status
of reports and inquiries.
When using the Ethicsline you will have a choice to remain anonymous. It
is vitally important for you to keep your report number in a safe place so
you can follow up on your concern or question. The report number, if lost,
cannot be retrieved. We may have follow-up questions about your concern,
and you can assist with the investigation by calling or logging back into the
web reporting site to provide additional details. We request you to provide
as much information as possible. Without all of the facts and complete
information, it may be difficult for us to get to the bottom of your concerns or questions.</p>
                    </div>



                </Container>
          </div>

<Footer />
          
        </>
    )
}

export default WhistleBlowerPolicy;


export async function getServerSideProps() {
    const keyid = 'whistleblower';
    const pageData = await fetchPageData(keyid);  
    return {
      props: { pageData },
    };
  }