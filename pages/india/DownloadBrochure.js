import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
//import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Axios from "@/src/axios";
import Loader from "../component/Loader";
import { useRouter } from 'next/router';
import Chennai_Brochure_2feb from "../assets/images/pdf/Digital-Connexion-Chennai-Brochure.pdf";

import Link from "next/link";

function DownloadBrochure(props) {
  const router = useRouter();

    const [validErrors, setValidErrors] = useState({});
    const [hasErr, setHasErr] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        formState: { errors },
        handleSubmit,
        getValues
    } = useForm();

    async function onSubmit(sendingData) {
        try {
            setIsLoading(true);


           

            const axiosConfig = {
                method: "post",
                url: "/contact",
                headers: {
                    Accept: "application/json",
                },
                data: JSON.stringify(sendingData),
            };

            const response = await Axios(axiosConfig);
            const data = await response.data;

            if (data.status === 400) {
                setValidErrors(data.errors.validation_error);
            } else if (data.status !== 200) {
                setHasErr(true);
            }
        } catch (err) {
            console.log(err);
            setHasErr(true);
            setIsLoading(false);
        } finally {
            setIsLoading(false);
           //router.push("/thank-you");
          window.open(Chennai_Brochure_2feb, '_blank');
          props.handleCloses();
        }
    }

  return (
    <Modal
      {...props}
      className="modal_edit"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.shows}
     onHide={props.handleCloses}
    >
      <Modal.Header closeButton className="w-100">
        <Modal.Title>Download Brochure</Modal.Title>
      </Modal.Header>
      <Modal.Body className="w-100 p-0  conversation-wrapper">
      <Form onSubmit={handleSubmit(onSubmit)} method="post">
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3 " controlId="Name" >
                                <Form.Control
    type="text"
    placeholder="Name*"
    autoComplete="off"
    {...register("name", {
        required: {
            value: true,
            message: "This field is required",
        },
        pattern: {
            value: /^[A-Za-z ]+$/, // Allow only alphabetic characters and spaces
            message: "Only alphabetic characters and spaces are allowed.",
        },
    })}
    onKeyPress={(event) => {
        const keyCode = event.which || event.keyCode;
        const keyValue = String.fromCharCode(keyCode);
        const isAlphabeticOrSpace = /^[A-Za-z ]$/.test(keyValue); // Allow alphabetic characters and spaces

        if (!isAlphabeticOrSpace) {
            event.preventDefault();
        }
    }}
/>


                                </Form.Group>
                                {errors.name && <p className="error">{errors.name?.message}</p>}
                                <p className="error">{validErrors.name}</p>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3  me-3 d-flex w-100" controlId="formBasicEmail2">
                                    <Form.Select className="me-3 w-25">
                                    <option value="+93">+93 AFG</option>
<option value="+355">+355 ALB</option>
<option value="+213">+213 DZA</option>
<option value="+1-684">+1-684 ASM</option>
<option value="+376">+376 AND</option>
<option value="+244">+244 AGO</option>
<option value="+1-264">+1-264 AIA</option>
<option value="+672">+672 ATA</option>
<option value="+1-268">+1-268 ATG</option>
<option value="+54">+54 ARG</option>
<option value="+374">+374 ARM</option>
<option value="+297">+297 ABW</option>
<option value="+61">+61 AUS</option>
<option value="+43">+43 AUT</option>
<option value="+994">+994 AZE</option>
<option value="+1-242">+1-242 BHS</option>
<option value="+973">+973 BHR</option>
<option value="+880">+880 BGD</option>
<option value="+1-246">+1-246 BRB</option>
<option value="+375">+375 BLR</option>
<option value="+32">+32 BEL</option>
<option value="+501">+501 BLZ</option>
<option value="+229">+229 BEN</option>
<option value="+1-441">+1-441 BMU</option>
<option value="+975">+975 BTN</option>
<option value="+591">+591 BOL</option>
<option value="+387">+387 BIH</option>
<option value="+267">+267 BWA</option>
<option value="+55">+55 BRA</option>
<option value="+246">+246 IOT</option>
<option value="+1-284">+1-284 VGB</option>
<option value="+673">+673 BRN</option>
<option value="+359">+359 BGR</option>
<option value="+226">+226 BFA</option>
<option value="+257">+257 BDI</option>
<option value="+855">+855 KHM</option>
<option value="+237">+237 CMR</option>
<option value="+1">+1 CAN</option>
<option value="+238">+238 CPV</option>
<option value="+1-345">+1-345 CYM</option>
<option value="+236">+236 CAF</option>
<option value="+235">+235 TCD</option>
<option value="+56">+56 CHL</option>
<option value="+86">+86 CHN</option>
<option value="+61">+61 CXR</option>
<option value="+61">+61 CCK</option>
<option value="+57">+57 COL</option>
<option value="+269">+269 COM</option>
<option value="+682">+682 COK</option>
<option value="+506">+506 CRI</option>
<option value="+385">+385 HRV</option>
<option value="+53">+53 CUB</option>
<option value="+599">+599 CUW</option>
<option value="+357">+357 CYP</option>
<option value="+420">+420 CZE</option>
<option value="+243">+243 COD</option>
<option value="+45">+45 DNK</option>
<option value="+253">+253 DJI</option>
<option value="+1-767">+1-767 DMA</option>
<option value="+1-809">+1-809 DOM</option>
<option value="+670">+670 TLS</option>
<option value="+593">+593 ECU</option>
<option value="+20">+20 EGY</option>
<option value="+503">+503 SLV</option>
<option value="+240">+240 GNQ</option>
<option value="+291">+291 ERI</option>
<option value="+372">+372 EST</option>
<option value="+251">+251 ETH</option>
<option value="+500">+500 FLK</option>
<option value="+298">+298 FRO</option>
<option value="+679">+679 FJI</option>
<option value="+358">+358 FIN</option>
<option value="+33">+33 FRA</option>
<option value="+689">+689 PYF</option>
<option value="+241">+241 GAB</option>
<option value="+220">+220 GMB</option>
<option value="+995">+995 GEO</option>
<option value="+49">+49 DEU</option>
<option value="+233">+233 GHA</option>
<option value="+350">+350 GIB</option>
<option value="+30">+30 GRC</option>
<option value="+299">+299 GRL</option>
<option value="+1-473">+1-473 GRD</option>
<option value="+1-671">+1-671 GUM</option>
<option value="+502">+502 GTM</option>
<option value="+44-1481">+44-1481 GGY</option>
<option value="+224">+224 GIN</option>
<option value="+245">+245 GNB</option>
<option value="+592">+592 GUY</option>
<option value="+509">+509 HTI</option>
<option value="+504">+504 HND</option>
<option value="+852">+852 HKG</option>
<option value="+36">+36 HUN</option>
<option value="+354">+354 ISL</option>
<option selected value="+91">+91 IND</option>
<option value="+62">+62 IDN</option>
<option value="+98">+98 IRN</option>
<option value="+964">+964 IRQ</option>
<option value="+353">+353 IRL</option>
<option value="+44-1624">+44-1624 IMN</option>
<option value="+972">+972 ISR</option>
<option value="+39">+39 ITA</option>
<option value="+225">+225 CIV</option>
<option value="+1-876">+1-876 JAM</option>
<option value="+81">+81 JPN</option>
<option value="+44-1534">+44-1534 JEY</option>
<option value="+962">+962 JOR</option>
<option value="+7">+7 KAZ</option>
<option value="+254">+254 KEN</option>
<option value="+686">+686 KIR</option>
<option value="+383">+383 XKX</option>
<option value="+965">+965 KWT</option>
<option value="+996">+996 KGZ</option>
<option value="+856">+856 LAO</option>
<option value="+371">+371 LVA</option>
<option value="+961">+961 LBN</option>
<option value="+266">+266 LSO</option>
<option value="+231">+231 LBR</option>
<option value="+218">+218 LBY</option>
<option value="+423">+423 LIE</option>
<option value="+370">+370 LTU</option>
<option value="+352">+352 LUX</option>
<option value="+853">+853 MAC</option>
<option value="+389">+389 MKD</option>
<option value="+261">+261 MDG</option>
<option value="+265">+265 MWI</option>
<option value="+60">+60 MYS</option>
<option value="+960">+960 MDV</option>
<option value="+223">+223 MLI</option>
<option value="+356">+356 MLT</option>
<option value="+692">+692 MHL</option>
<option value="+222">+222 MRT</option>
<option value="+230">+230 MUS</option>
<option value="+262">+262 MYT</option>
<option value="+52">+52 MEX</option>
<option value="+691">+691 FSM</option>
<option value="+373">+373 MDA</option>
<option value="+377">+377 MCO</option>
<option value="+976">+976 MNG</option>
<option value="+382">+382 MNE</option>
<option value="+1-664">+1-664 MSR</option>
<option value="+212">+212 MAR</option>
<option value="+258">+258 MOZ</option>
<option value="+95">+95 MMR</option>
<option value="+264">+264 NAM</option>
<option value="+674">+674 NRU</option>
<option value="+977">+977 NPL</option>
<option value="+31">+31 NLD</option>
<option value="+599">+599 BES</option>
<option value="+1-868">+1-868 TTO</option>
<option value="+687">+687 NCL</option>
<option value="+64">+64 NZL</option>
<option value="+505">+505 NIC</option>
<option value="+227">+227 NER</option>
<option value="+234">+234 NGA</option>
<option value="+683">+683 NIU</option>
<option value="+850">+850 PRK</option>
<option value="+1-670">+1-670 MNP</option>
<option value="+47">+47 NOR</option>
<option value="+968">+968 OMN</option>
<option value="+92">+92 PAK</option>
<option value="+680">+680 PLW</option>
<option value="+970">+970 PSE</option>
<option value="+507">+507 PAN</option>
<option value="+675">+675 PNG</option>
<option value="+595">+595 PRY</option>
<option value="+51">+51 PER</option>
<option value="+63">+63 PHL</option>
<option value="+48">+48 POL</option>
<option value="+351">+351 PRT</option>
<option value="+1-787">+1-787 PRI</option>
<option value="+974">+974 QAT</option>
<option value="+242">+242 COG</option>
<option value="+262">+262 REU</option>
<option value="+40">+40 ROU</option>
<option value="+7">+7 RUS</option>
<option value="+250">+250 RWA</option>
<option value="+590">+590 BLM</option>
<option value="+290">+290 SHN</option>
<option value="+1-869">+1-869 KNA</option>
<option value="+1-758">+1-758 LCA</option>
<option value="+590">+590 MAF</option>
<option value="+508">+508 SPM</option>
<option value="+1-784">+1-784 VCT</option>
<option value="+685">+685 WSM</option>
<option value="+378">+378 SMR</option>
<option value="+239">+239 STP</option>
<option value="+966">+966 SAU</option>
<option value="+221">+221 SEN</option>
<option value="+381">+381 SRB</option>
<option value="+248">+248 SYC</option>
<option value="+232">+232 SLE</option>
<option value="+65">+65 SGP</option>
<option value="+1-721">+1-721 SXM</option>
<option value="+421">+421 SVK</option>
<option value="+386">+386 SVN</option>
<option value="+677">+677 SLB</option>
<option value="+252">+252 SOM</option>
<option value="+27">+27 ZAF</option>
<option value="+82">+82 KOR</option>
<option value="+211">+211 SSD</option>
<option value="+34">+34 ESP</option>
<option value="+94">+94 LKA</option>
<option value="+249">+249 SDN</option>
<option value="+597">+597 SUR</option>
<option value="+47">+47 SJM</option>
<option value="+268">+268 SWZ</option>
<option value="+46">+46 SWE</option>
<option value="+963">+963 SYR</option>
<option value="+886">+886 TWN</option>
<option value="+992">+992 TJK</option>
<option value="+255">+255 TZA</option>
<option value="+66">+66 THA</option>
<option value="+228">+228 TGO</option>
<option value="+690">+690 TKL</option>
<option value="+676">+676 TON</option>
<option value="+1-868">+1-868 TTO</option>
<option value="+216">+216 TUN</option>
<option value="+90">+90 TUR</option>
<option value="+993">+993 TKM</option>
<option value="+1-649">+1-649 TCA</option>
<option value="+688">+688 TUV</option>
<option value="+256">+256 UGA</option>
<option value="+380">+380 UKR</option>
<option value="+971">+971 ARE</option>
<option value="+44">+44 GBR</option>
<option value="+1">+1 USA</option>
<option value="+598">+598 URY</option>
<option value="+998">+998 UZB</option>
<option value="+678">+678 VUT</option>
<option value="+379">+379 VAT</option>
<option value="+58">+58 VEN</option>
<option value="+84">+84 VNM</option>
<option value="+681">+681 WLF</option>
<option value="+212">+212 ESH</option>
<option value="+967">+967 YEM</option>
<option value="+260">+260 ZMB</option>
<option value="+263">+263 ZWE</option>
                                    </Form.Select>
                                    <Form.Control
                                        maxLength="10"
                                        type="text"
                                        placeholder="XXXXXXXXXX*"
                                        autoComplete="off"
                                        {...register("phone", {
                                            required: {
                                                value: true,
                                                message: "This field is required",
                                            },
                                            pattern: {
                                                value: /^\d{10}$/,
                                                message: "Invalid mobile number",
                                            },
                                        })}
                                        onKeyPress={(event) => {
                                            const keyCode = event.which || event.keyCode;
                                            const keyValue = String.fromCharCode(keyCode);
                                            const isNumber = /^\d+$/.test(keyValue);

                                            if (!isNumber) {
                                                event.preventDefault();
                                            }
                                        }}
                                    />
                                </Form.Group>
                                {errors.phone && <p className="error">{errors.phone?.message}</p>}
                                {errors.phone?.type === "pattern" && <p className="error">{errors.phone?.pattern?.message}</p>}
                                {/* error from the backend */}
                                <p className="error">{validErrors.phone}</p>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3 " controlId="b_email">
                                    <Form.Control
                                        type="text"
                                        placeholder="Official email*"
                                        autoComplete="off"
                                        {...register("email", {
                                            required: { value: true, message: "This field is required" },
                                            pattern: {
                                                value: /^\S+@\S+.\S+$/,
                                                message: "Invalid email",
                                            },
                                        })}
                                    />
                                </Form.Group>
                                {errors.email && <p className="error">{errors.email?.message}</p>}
                                {errors.email?.type === "pattern" && <p className="error">{errors.email?.pattern?.message}</p>}
                                <p className="error">{validErrors.email}</p>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3 " controlId="c_name">
                                    <Form.Control
                                        type="text"
                                        placeholder="Company name*"
                                        autoComplete="off"
                                        {...register("company", {
                                            required: {
                                                value: true,
                                                message: "This field is required",
                                            },
                                            pattern: {
                                                value:/^[A-Za-z ]+$/,
                                                message: "Invalid mobile number. Only alphabetic characters are allowed.",
                                            },
                                        })}
                                        onKeyPress={(event) => {
                                            const keyCode = event.which || event.keyCode;
                                            const keyValue = String.fromCharCode(keyCode);
                                            const isAlphabetic =/^[A-Za-z ]+$/.test(keyValue);

                                            if (!isAlphabetic) {
                                                event.preventDefault();
                                            }
                                        }}
                                    />
                                </Form.Group>
                                {errors.company && <p className="error">{errors.company?.message}</p>}
                                <p className="error">{validErrors.company}</p>
                            </Col>
                            
                            <Col md={6}>
                                <Form.Group className="mb-3 " controlId="b_email" >
                                    <Form.Control
                                        type="text"
                                        placeholder="Designation*"
                                        autoComplete="off"
                                        {...register("designation", {
                                            required: {
                                                value: true,
                                                message: "This field is required",
                                            },
                                            pattern: {
                                                value:/^[A-Za-z ]+$/,
                                                message: "Invalid mobile number. Only alphabetic characters are allowed.",
                                            },
                                        })}
                                        onKeyPress={(event) => {
                                            const keyCode = event.which || event.keyCode;
                                            const keyValue = String.fromCharCode(keyCode);
                                            const isAlphabetic =/^[A-Za-z ]+$/.test(keyValue);

                                            if (!isAlphabetic) {
                                                event.preventDefault();
                                            }
                                        }}
                                    />
                                </Form.Group>
                                {errors.designation && <p className="error">{errors.designation?.message}</p>}
                                <p className="error">{validErrors.designation}</p>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3 " controlId="formBasicEmail" >
                                    <Form.Select 
                                        {...register("type", {
                                            required: {
                                              value: true,
                                              message: "This field is required",
                                            },
                                          })}
                                    >
                                        <option value="">Select</option>
                                        <option value="Inquiry Become a Partner">Become a Partner</option>
                                        <option value="Inquiry Quote">Contact Sales: Request a quote</option>
                                        <option value="Inquiry meeting or tour">Contact Sales: Schedule a meeting or tour</option>
                                        <option value="Inquiry Customer Success">Contact Customer Success</option>
                                        <option value="Inquiry HR">Contact Human Resources</option>
                                        <option value="Inquiry Investor">Contact Investor Relations</option>
                                    </Form.Select>
                                </Form.Group>
                                {errors.type && <p className="error">{errors.type?.message}</p>}
                                <p className="error">{validErrors.type}</p>
                            </Col>

                            <Col md={12}>
                                <Form.Group className="mb-3  " controlId="exampleForm.ControlTextarea1" >
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Message"
                                        autoComplete="off"
                                        
                                    />
                                </Form.Group>
                                {errors.message && <p className="error">{errors.message?.message}</p>}
                                <p className="error">{validErrors.message}</p>
                            </Col>

                            <Col md={12}>
                                <div className="form-check " >
                                    <input
                                    style={{"height": "1em"}}
                                        type="checkbox"
                                        id="formBasicCheckbox"
                                        className="form-check-input"
                                        {...register("privacy_policy", {
                                            required: {
                                                value: true,
                                                message: "Please accept to the privacy policy",
                                            },
                                        })}
                                    />
                                    <label title="" htmlFor="formBasicCheckbox" className="form-check-label">
                                        By submitting the form you agree with our Acceptable Use and <Link href="/privacy-policy">Privacy Policy.</Link>{" "}
                                    </label>
                                </div>

                                {errors.privacy_policy && <p className="error">{errors.privacy_policy?.message}</p>}
                                <p className="error">{validErrors.privacy_policy}</p>
                                {hasErr && <p className="error">Something went wrong!</p>}
                            </Col>

                            <Col md={12} className="text-center " >
                                <Button type="submit" className="btns mt-4">
                                    <span>SUBMIT</span>{" "}
                                </Button>
                            </Col>
                        </Row>

                        <Form.Control type="hidden" name="form_type" value="brochure_chennai" {...register("form_type")}></Form.Control>
                    </Form>
        {/* {hasErr && <p className="error">Something went wrong!</p>} */}
        {isLoading && <Loader />}
      </Modal.Body>
    </Modal>
  );
}

export default DownloadBrochure;
