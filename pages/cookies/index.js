import Head from "next/head";
import React from "react";
import { Container } from "react-bootstrap";
import Header from "../component/Header";
import Footer from "../component/Footer";
import CustomHead from "../CustomHead";
import { fetchPageData } from "../api";


function Cookies({ pageData }){
  

    return(
        <>

<CustomHead {...pageData} />
       
            <Header />

          <div className="whistle-wrapper pad80 top80 grey">
                <Container>
                    <div className="whistle-loop wow fadeInUp">
                        <h2>What are cookies?</h2>
                        <p>Cookies are small text files, often including unique identifiers, that are sent by web servers to web browsers and may then be sent back to the server each time the browser requests a page from the server. Cookies are very useful and enable an internet site to recognize you, log in you visit a particular page, provide a secure connection to a website, and enhance your user experience by improving your browsing comfort and/or adapting the content of a page to your areas of interest.</p>
                    </div>

                    <div className="whistle-loop wow fadeInUp">
                        <h2>How does our site use cookies?</h2>
                        <p>All major internet browsers offer the option to manage the cookies that were installed on your computer or mobile device.</p>
                       <p>If you do not wish for our website to place cookies on your computer or mobile device, you may limit or delete these easily by adjusting your mobile or browser settings. In addition, you can set your mobile or browser settings in such a way that you get a notification every time you receive a cookie on your computer or mobile device so that you can decide whether you wish to accept this cookie or not. Depending on your browser, you can set your browser to warn you before accepting cookies, or you can set it to refuse them. Please refer to the 'help' button (or similar) on your browser to learn more about how you can do this.</p>

                       <p><i>Global Privacy Control (GPC) signals:</i> When we detect GPC signals that express a user’s preference for privacy, we will not set targeting and social media cookies. Strictly necessary and performance cookies, will still be set (see below). If you wish to turn off performance cookies you can do so in our “cookie settings” link above.</p>

                       <p>Please note that when you disable certain cookies that enhance the functioning of our website, the possibility exists that certain parts of our website will no longer function properly and may impact your experience on our websites.</p>

                       <p>If you use different devices to access our websites, you will need to ensure that each browser on each device is set to your cookie preference.</p>
                    </div>

                    <div className="whistle-loop wow fadeInUp mb-4">
                        <h2>Information on the types of cookies that are used on our site</h2>
                        <p>We have provided details of the types of cookies that are used on our site as well as other relevant and useful information on the cookies. You can also find more information on the cookies when you click the pop-up window "cookie preferences". </p>
                    </div>

                    <div className="whistle-loop wow fadeInUp h3-whistle">
                        <h3>Technical cookies:</h3>
                        <p>These cookies are necessary to enable you to move around our site and use its features. These cookies also allow our site to remember your previous actions within the same browsing session. </p>
                    </div>

                    <div className="whistle-loop wow fadeInUp  h3-whistle">
                        <h3>Analytical cookies:</h3>
                        <p> These cookies are used by us or third-party service providers to analyze how our sites are used and how they are performing. For example, we use cookies to know which country you are in when you request a service to help base the contents on your location. We also use some cookies from Google Analytics, SiTest and Docodoco-jp to obtain web analytics and intelligence about our site. These tools use programming code to collect information about your interaction with our site, such as the pages you visit, the links you click on, and how long you are on our site. These tools do not store any personally identifiable information.</p>
                    </div>

                    <div className="whistle-loop wow fadeInUp  h3-whistle">
                        <h3>Functionality cookies:</h3>
                        <p>These cookies allow our site to remember the choices you make when you visit our site in order to provide enhanced, more personalized features to you. The types of information collected by functional cookies are language preference and the region you are located in. </p>
                    </div>

                    <div className="whistle-loop wow fadeInUp  h3-whistle">
                        <h3>Advertising and retargeting cookies:</h3>
                        <p> These cookies save information from your browsing history in order to record your interests and your browsing path on our site. We may use advertising and targeting cookies for retargeting, which enables our advertising partners to target advertising to you on other websites based on your visit to our site. Without these cookies, the online advertisements you encounter will be less relevant to you and your interests.</p>
                    </div>



                </Container>
          </div>

<Footer />
          
        </>
    )
}

export default Cookies;

export async function getServerSideProps() {
    const keyid = 'cookies';
    const pageData = await fetchPageData(keyid);  
    return {
      props: { pageData },
    };
}