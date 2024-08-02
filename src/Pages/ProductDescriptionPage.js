import { useState } from "react"
import { ReactImageTurntable } from 'react-image-turntable';
import Footer from "../CommonComponents/Footer";
import Carousel from 'react-bootstrap/Carousel';
import { Modal } from 'bootstrap'; 
import Accordion from 'react-bootstrap/Accordion';


export const images = [
    "https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2FPhotography%2F360%2FPNG%2F85843%2Fimage-thumb__85843__header_fullscreen_2x_jpg%2FBig_George_Armchair_Spectrum_Agave_360-01.webp&w=1080&q=80",
    "https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2FPhotography%2F360%2FPNG%2F85879%2Fimage-thumb__85879__header_fullscreen_2x_jpg%2FBig_George_Armchair_Spectrum_Agave_360-02.webp&w=1080&q=80",
    "https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2FPhotography%2F360%2FPNG%2F85867%2Fimage-thumb__85867__header_fullscreen_2x_jpg%2FBig_George_Armchair_Spectrum_Agave_360-03.webp&w=1080&q=80",
    "https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2FPhotography%2F360%2FPNG%2F85839%2Fimage-thumb__85839__header_fullscreen_2x_jpg%2FBig_George_Armchair_Spectrum_Agave_360-04.webp&w=1080&q=80",
    "https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2FPhotography%2F360%2FPNG%2F85831%2Fimage-thumb__85831__header_fullscreen_2x_jpg%2FBig_George_Armchair_Spectrum_Agave_360-05.webp&w=1080&q=80",
    "https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2FPhotography%2F360%2FPNG%2F85823%2Fimage-thumb__85823__header_fullscreen_2x_jpg%2FBig_George_Armchair_Spectrum_Agave_360-07.webp&w=1080&q=80",
    "https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2FPhotography%2F360%2FPNG%2F85823%2Fimage-thumb__85823__header_fullscreen_2x_jpg%2FBig_George_Armchair_Spectrum_Agave_360-07.webp&w=1080&q=80",
    "https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2FPhotography%2F360%2FPNG%2F85791%2Fimage-thumb__85791__header_fullscreen_2x_jpg%2FBig_George_Armchair_Spectrum_Agave_360-13.webp&w=1080&q=80",
    "https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2FPhotography%2F360%2FPNG%2F85795%2Fimage-thumb__85795__header_fullscreen_2x_jpg%2FBig_George_Armchair_Spectrum_Agave_360-16.webp&w=1080&q=80",
    "https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2FPhotography%2F360%2FPNG%2F85899%2Fimage-thumb__85899__header_fullscreen_2x_jpg%2FBig_George_Armchair_Spectrum_Agave_360-20.webp&w=1080&q=80",
    "https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2FPhotography%2F360%2FPNG%2F85891%2Fimage-thumb__85891__header_fullscreen_2x_jpg%2FBig_George_Armchair_Spectrum_Agave_360-21.webp&w=1080&q=80",
    "https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2FPhotography%2F360%2FPNG%2F85907%2Fimage-thumb__85907__header_fullscreen_2x_jpg%2FBig_George_Armchair_Spectrum_Agave_360-22.webp&w=1080&q=80",
    "https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2FPhotography%2F360%2FPNG%2F85915%2Fimage-thumb__85915__header_fullscreen_2x_jpg%2FBig_George_Armchair_Spectrum_Agave_360-24.webp&w=1080&q=80",
    

  ];

export default function ProductDescriptionPage(props)
{
    const[readMore,setReadMore]=useState(true)
    const[modalWork,setModalWork]=useState("carousel")
    const [rotationDisabled, setRotationDisabled] = useState(false);
    const[showCarouselIcon,setCarouselIcon]=useState(false)
    const handleKeyDown = (ev) => {
        if (rotationDisabled) return;
    
        if (ev.key === 'ArrowLeft' || ev.key === 'ArrowRight') {
          setRotationDisabled(true);
        }
      };
      console.log("modalWork",modalWork)
    // window.onscroll = function() {scrollFunction()};
    // function scrollFunction(e) {
	// 	console.log("dssddsd",e.target.scrollTop)
    //     const {scrollTop}=e.target
    //     if(scrollTop>250)
    //         {
    //             document.getElementById("producDesc").style.visibility="visible"
    //             document.getElementById("producDesc").classList.add("fadeUpAnimation")
    //             document.getElementById("shipping").style.visibility="visible"
    //             document.getElementById("shipping").classList.add("pulseAnimation")
    //         }
    //         if(scrollTop>750)
    //             {
    //                 document.getElementById("sofa360").style.visibility="visible"
    //                 document.getElementById("sofa360").classList.add("lightSpeedInLeftAnimation")
    //                 document.getElementById("sofa360RightImage").style.visibility="visible"
    //                 document.getElementById("sofa360RightImage").classList.add("lightSpeedInRightAnimation")        
    //             }
    //             if(scrollTop>1170)
    //                 {
    //                     document.getElementById("sofaCarousel").style.visibility="visible"
    //                     document.getElementById("sofaCarousel").classList.add("bounceInAnimation")        
    //                 }
    // }
    function scrollFunction(e) {
        console.log("dssddsd", e.target.scrollTop);
        const { scrollTop } = e.target;

        // Checking and setting styles for producDesc element
        const producDescElement = document.getElementById("producDesc");
        if (producDescElement) {
            producDescElement.style.visibility = scrollTop > 250 ? "visible" : "hidden";
            if (scrollTop > 250) {
                producDescElement.classList.add("fadeUpAnimation");
            } else {
                producDescElement.classList.remove("fadeUpAnimation");
            }
        }

        // Checking and setting styles for shipping element
        // const shippingElement = document.getElementById("shipping");
        // if (shippingElement) {
        //     shippingElement.style.visibility = scrollTop > 250 ? "visible" : "hidden";
        //     if (scrollTop > 250) {
        //         shippingElement.classList.add("fadeUpAnimation");
        //     } else {
        //         shippingElement.classList.remove("fadeUpAnimation");
        //     }
        // }

        // Checking and setting styles for sofa360 and sofa360RightImage elements
        const sofa360Element = document.getElementById("sofa360");
        const sofa360RightImageElement = document.getElementById("sofa360RightImage");
        if (sofa360Element && sofa360RightImageElement) {
            if (scrollTop > 920) {
                sofa360Element.style.visibility = "visible";
                sofa360Element.classList.add("lightSpeedInLeftAnimation");
                sofa360RightImageElement.style.visibility = "visible";
                sofa360RightImageElement.classList.add("lightSpeedInRightAnimation");
            } else {
                sofa360Element.style.visibility = "hidden";
                sofa360Element.classList.remove("lightSpeedInLeftAnimation");
                sofa360RightImageElement.style.visibility = "hidden";
                sofa360RightImageElement.classList.remove("lightSpeedInRightAnimation");
            }
        }

        // Checking and setting styles for sofaCarousel element
        const sofaCarouselElement = document.getElementById("sofaCarousel");
        if (sofaCarouselElement) {
            sofaCarouselElement.style.visibility = scrollTop > 1170 ? "visible" : "hidden";
            if (scrollTop > 1170) {
                sofaCarouselElement.classList.add("bounceInAnimation");
            } else {
                sofaCarouselElement.classList.remove("bounceInAnimation");
            }
        }
        const imagesSectionElement = document.getElementById("imagesSection");
      
        if (imagesSectionElement) {
            imagesSectionElement.style.visibility = scrollTop > 1900 ? "visible" : "hidden";
          
            if (scrollTop > 1900) {
                
                imagesSectionElement.classList.add("lightSpeedInRightAnimation");
                
            } else {
                imagesSectionElement.classList.remove("lightSpeedInRightAnimation");
                
            }
        }
        const fabricSectionCol1Divs = document.getElementById("fabricSectionCol1Div");
        if(fabricSectionCol1Divs)
        {
            fabricSectionCol1Divs.style.visibility = scrollTop > 1900 ? "visible" : "hidden";
            if (scrollTop > 1900) {
                fabricSectionCol1Divs.classList.add("InLeftAnimation");
            }
            else
            {
                fabricSectionCol1Divs.classList.remove("InLeftAnimation");
            }
        }

        const cardSectionElement = document.getElementById("card2");
        if (cardSectionElement) {
            // imagesSectionElement.style.visibility = scrollTop > 1900 ? "visible" : "hidden";
            if (scrollTop > 2300) {
                cardSectionElement.classList.add("card2");
            } else {
                cardSectionElement.classList.remove("card2");
            }
        }

        const card1OfProductDescription = document.getElementById("card1OfProductDesc");
        if (card1OfProductDescription) {
            // imagesSectionElement.style.visibility = scrollTop > 1900 ? "visible" : "hidden";
            if (scrollTop > 2466 && scrollTop <2950) {
                card1OfProductDescription.style.marginTop=scrollTop-2466+"px"
            }
        }

        const card2OfProductDescription = document.getElementById("card2OfProductDesc");
        if (card2OfProductDescription) {
            // imagesSectionElement.style.visibility = scrollTop > 1900 ? "visible" : "hidden";
            if (scrollTop > 3217 && scrollTop <3724) {
                card2OfProductDescription.style.marginTop=scrollTop-3217+"px"
            }
        }


        const card3OfProductDescription = document.getElementById("card3OfProductDesc");
        if (card3OfProductDescription) {
            // imagesSectionElement.style.visibility = scrollTop > 1900 ? "visible" : "hidden";
            if (scrollTop > 4011 && scrollTop <4542) {
                card3OfProductDescription.style.marginTop=scrollTop-4011+"px"
            }
        }

        const productDescriptiontypewriter = document.getElementById("typewriter");
        if (productDescriptiontypewriter) {
            // imagesSectionElement.style.visibility = scrollTop > 1900 ? "visible" : "hidden";
            if (scrollTop > 4200) {
                productDescriptiontypewriter.classList.add("typewriter")
            }
            if (scrollTop < 4200) {
                productDescriptiontypewriter.classList.remove("typewriter")
            }
        }

        // 

        
        
    }
   
    const CustomModal=(modalWork)=>{

        return(
            <div className="modal fade show" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered itemModalFullScreen" role="document">
                <div className="modal-content">
                    <div className="modal-body p-0">
                    {/* {modalWork} */}
                        <Accordion
                    //  defaultActiveKey="2" 
                     activeKey={`${(modalWork=="Images")?"2":(modalWork=="Dimensions")?"0":"1"}`}
                  
                     flush className="productPageAccordion">
                        <Accordion.Item eventKey="2">
                            <Accordion.Header onClick={()=>{setModalWork("Images")}}>Images</Accordion.Header>
                            <Accordion.Body>
                                    <Carousel indicators={true} >
                                    <Carousel.Item>
                                        <img className="carouselImages" src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2FPhotography%2FDetails%2FJPEG%2F85627%2Fimage-thumb__85627__header_fullscreen_2x_jpg%2FBig_George_Armchair_Spectrum_Agave_Detail-06.webp&w=1080&q=80"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="carouselImages" src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2FPhotography%2FDetails%2FJPEG%2F85747%2Fimage-thumb__85747__header_fullscreen_2x_jpg%2FBig_George_Armchair_Spectrum_Agave_Detail-04.webp&w=1080&q=80"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="carouselImages" src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2FPhotography%2F360%2FPNG%2F85843%2Fimage-thumb__85843__header_fullscreen_2x_jpg%2FBig_George_Armchair_Spectrum_Agave_360-01.webp&w=1080&q=80"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="carouselImages" src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2FPhotography%2FDetails%2FPNG%2F85855%2Fimage-thumb__85855__header_fullscreen_2x_jpg%2FBig_George_Armchair_Spectrum_Agave_Detail-03.webp&w=1080&q=80"/>
                                    </Carousel.Item>
                                </Carousel>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header onClick={()=>{setModalWork("Dimensions")}}>Dimensions</Accordion.Header>
                            <Accordion.Body>
                            <Carousel indicators={true} fade>
                                <Carousel.Item>
                                    <img className="carouselImages" src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2F2D%2F89267%2Fimage-thumb__89267__header_fullscreen_2x_jpg%2FBig_George_Armchair.webp&w=1920&q=80"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="carouselImages" src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FPosters%2FWeb-items%2Fimage-thumb__13177__header_fullscreen_2x%2FComparison-Woood-BlowAway-Bouquette.png&w=1080&q=80"/>
                                </Carousel.Item>
                            </Carousel>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header onClick={()=>{setModalWork("Specs")}}>Specs</Accordion.Header>
                            <Accordion.Body>
                            <>
                            <p class="m-2">
                            <h4 className="text-left pl-2">General</h4>
                            <p className="text-left pl-4 m-0" ><b>Material description</b> :<span className="pl-3">Wooden frame, steel springs, foam</span></p>
                            <p className="text-left pl-4 m-0" ><b>Indoor / outdoor</b> :<span className="pl-3">Indoor</span></p>

                            <p className="text-left pl-4 m-0" ><b>Seat depth</b> :<span className="pl-3">65 cm</span> </p>

                            <p className="text-left pl-4 m-0" ><b>Seat width</b> :<span className="pl-3">60 cm</span></p>

                            <p className="text-left pl-4 m-0" ><b>Seat height</b> :<span className="pl-3">41 cm</span> </p>

                            <p className="text-left pl-4 m-0" ><b>Height armrest</b> :<span className="pl-3"> 44.5 to 56 cm</span></p>

                            <p className="text-left pl-4 m-0" ><b>Weight capacity</b> :<span className="pl-3">120</span></p>

                        </p>
                        

                        <p class="m-2">
                            <h4 className="text-left pl-2">Dimensions</h4>
                            <p className="text-left pl-4 m-0" ><b>Width</b> :<span className="pl-3">140 cm</span></p>
                            <p className="text-left pl-4 m-0" ><b>Height</b> :<span className="pl-3">70 cm</span></p>
                            <p className="text-left pl-4 m-0" ><b>Depth</b> :<span className="pl-3">91 cm</span> </p>
                            <p className="text-left pl-4 m-0" ><b>Weight</b> :<span className="pl-3">47kg</span></p>
                        </p>

                        <p class="m-2">
                            <h4 className="text-left pl-2">Packaging</h4>
                            <p className="text-left pl-4 m-0" ><b>Width</b> :<span className="pl-3">118 cm</span></p>
                            <p className="text-left pl-4 m-0" ><b>Height</b> :<span className="pl-3">83 cm</span></p>
                            <p className="text-left pl-4 m-0" ><b>Length</b> :<span className="pl-3">136 cm</span> </p>
                            <p className="text-left pl-4 m-0" ><b>Weight</b> :<span className="pl-3">63kg</span></p>
                        </p>

                        </>
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                  
                       {/* {(modalWork=="carousel" || modalWork=="Images")?
                        <>
                        <Carousel indicators={true} fade>
                            <Carousel.Item>
                                <img className="carouselImages" src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2FPhotography%2FDetails%2FJPEG%2F85627%2Fimage-thumb__85627__header_fullscreen_2x_jpg%2FBig_George_Armchair_Spectrum_Agave_Detail-06.webp&w=1080&q=80"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carouselImages" src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2FPhotography%2FDetails%2FJPEG%2F85747%2Fimage-thumb__85747__header_fullscreen_2x_jpg%2FBig_George_Armchair_Spectrum_Agave_Detail-04.webp&w=1080&q=80"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carouselImages" src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2FPhotography%2F360%2FPNG%2F85843%2Fimage-thumb__85843__header_fullscreen_2x_jpg%2FBig_George_Armchair_Spectrum_Agave_360-01.webp&w=1080&q=80"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carouselImages" src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2FPhotography%2FDetails%2FPNG%2F85855%2Fimage-thumb__85855__header_fullscreen_2x_jpg%2FBig_George_Armchair_Spectrum_Agave_Detail-03.webp&w=1080&q=80"/>
                            </Carousel.Item>
                        </Carousel>
                        </>:(modalWork=="Dimensions")?<>
                            <Carousel indicators={true} fade>
                                <Carousel.Item>
                                    <img className="carouselImages" src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2F2D%2F89267%2Fimage-thumb__89267__header_fullscreen_2x_jpg%2FBig_George_Armchair.webp&w=1920&q=80"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="carouselImages" src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FPosters%2FWeb-items%2Fimage-thumb__13177__header_fullscreen_2x%2FComparison-Woood-BlowAway-Bouquette.png&w=1080&q=80"/>
                                </Carousel.Item>
                            </Carousel>
                        </>
                        :
                        <>
                            <p class="m-2">
                            <h4 className="text-left pl-2">General</h4>
                            <p className="text-left pl-4 m-0" ><b>Material description</b> :<span className="pl-3">Wooden frame, steel springs, foam</span></p>
                            <p className="text-left pl-4 m-0" ><b>Indoor / outdoor</b> :<span className="pl-3">Indoor</span></p>

                            <p className="text-left pl-4 m-0" ><b>Seat depth</b> :<span className="pl-3">65 cm</span> </p>

                            <p className="text-left pl-4 m-0" ><b>Seat width</b> :<span className="pl-3">60 cm</span></p>

                            <p className="text-left pl-4 m-0" ><b>Seat height</b> :<span className="pl-3">41 cm</span> </p>

                            <p className="text-left pl-4 m-0" ><b>Height armrest</b> :<span className="pl-3"> 44.5 to 56 cm</span></p>

                            <p className="text-left pl-4 m-0" ><b>Weight capacity</b> :<span className="pl-3">120</span></p>

                        </p>
                        

                        <p class="m-2">
                            <h4 className="text-left pl-2">Dimensions</h4>
                            <p className="text-left pl-4 m-0" ><b>Width</b> :<span className="pl-3">140 cm</span></p>
                            <p className="text-left pl-4 m-0" ><b>Height</b> :<span className="pl-3">70 cm</span></p>
                            <p className="text-left pl-4 m-0" ><b>Depth</b> :<span className="pl-3">91 cm</span> </p>
                            <p className="text-left pl-4 m-0" ><b>Weight</b> :<span className="pl-3">47kg</span></p>
                        </p>

                        <p class="m-2">
                            <h4 className="text-left pl-2">Packaging</h4>
                            <p className="text-left pl-4 m-0" ><b>Width</b> :<span className="pl-3">118 cm</span></p>
                            <p className="text-left pl-4 m-0" ><b>Height</b> :<span className="pl-3">83 cm</span></p>
                            <p className="text-left pl-4 m-0" ><b>Length</b> :<span className="pl-3">136 cm</span> </p>
                            <p className="text-left pl-4 m-0" ><b>Weight</b> :<span className="pl-3">63kg</span></p>
                        </p>

                        </>
                        
                     
                    }*/}
                    </div> 
                </div>
            </div>
        </div>
        )
    }

    const openCustomModal=()=>{
        const modal = new Modal(document.getElementById('exampleModal'))
        modal.show();
    }

    return(
     
       <div className="mainDivForProductDescriptionPage fadeUpAnimation" 
       style={{visibility:"visible"}}
       onScroll={(e)=>{scrollFunction(e)}}
       >
            <img 
            className="mainDivForProductDescriptionPageFirstImage bgImageAnimation"
            src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2F89923%2Fimage-thumb__89923__header_fullscreen_2x_jpg%2F01_Big_George_Living_02.webp&w=3840&q=80"/>
            <div className="row p-5 m-0" id="producDesc" style={{visibility:"hidden"}}>
                <div className="col-8 p-0  pl-3 m-0 producDesc " >
                        <p className="para1 mb-0">Big George Armchair</p>
                        <p className="para2">Cristián Mohaded, 2024</p>
                        <p className={`para3 mb-0 ${!readMore?"showCompletePara":"showHalfParagraphOnly"}`}>
                            "The Big George by Cristián Mohaded radiates a warm 
                            charm that extends beyond the practical utility of a 
                            seater. Its expansive dimensions and gentle curves 
                            create an irresistible haven for relaxation, instantly
                            transforming any space into a serene sanctuary. Big 
                            George is more than just a seater; it’s a gentle giant
                            ready to embrace you, turning your living space into 
                            a retreat where you can unwind, recharge, and 
                            luxuriate in the comforting warmth of a Big hug.

                            Personalize your Big George with our wide range 
                            of fabric choices for added style and comfort. 
                            Whether you prefer rich textures or soothing neutrals, 
                            customize your Big George to suit your taste and enhance
                            the ambiance of your home. Embrace the luxury of 
                            relaxation with Big George, where every detail is
                            crafted to envelop you in comfort and style."

                            This version elaborates on the features and 
                            benefits of Big George while inviting the 
                            reader to personalize their experience 
                            with fabric choices. </p>
                        <p className="text-left bg-white"><button className={`readMoreButton  `} onClick={()=>{setReadMore(!readMore)}}>{(readMore)?"Read more":"Read less"}</button></p>
                        <div className="d-flex btnGroups mt-5 mb-5">
                            {/* <button className="btn " >360 Deg</button> */}
                            <button className="btn" onClick={()=>{setModalWork("Dimensions");openCustomModal();}}>Dimensions</button>
                            <button className="btn" onClick={()=>{setModalWork("Specs");openCustomModal();}}>Specs</button>
                            <button className="btn" onClick={()=>{setModalWork("Images");openCustomModal();}}>Images</button>
                            <button className="btn"><i class="fa fa-download" aria-hidden="true"></i></button>
                            <button className="btn"><i class="fa fa-share-alt" aria-hidden="true"></i></button>
                        </div>

                        {CustomModal(modalWork)}
                        
                </div>
                
                <div className="col-4 p-0 m-0 " >
                    <div className="d-flex flex-column align-items-center btnGrouprightSide" style={{position:"relative",top:"40%"}}>
                        <p className="mb-0 w-75 d-flex align-items-center"><i class="fa fa-truck mr-2" aria-hidden="true"></i> <span>Free Shipping</span></p>
                        <p className="mb-0 w-75 d-flex align-items-center"><i class="fa fa-retweet mr-2" aria-hidden="true"></i> <span>Easy Returns Within 100 Days</span></p>
                        <p className="mb-0 w-75 d-flex align-items-center"><i class="fa fa-calendar-check-o mr-2" aria-hidden="true"></i> <span>5 Year Warranty after registration</span></p>
                    </div>
                    
                    
                </div>
            </div>

            <div className="row p-0 m-0 justify-content-center">
                    <div className="col-3 p-0 m-0 "
                        id="sofa360"
                        style={{visibility:"hidden"}}
                        onMouseOver={()=>{document.getElementById("360imge").className="deg360degPngImgPngImg"}}
                        onMouseLeave={()=>{document.getElementById("360imge").className=" deg360degPngImgPngImg animate__flipInY animate__animated animate__infinite animate__slower"}}
                       >
                        <div className="imageSection" >
                        <ReactImageTurntable
                            images={images}
                            autoRotate={{ disabled: rotationDisabled, interval: 2000 }}
                            onPointerDown={() => setRotationDisabled(true)}
                            onPointerUp={() => setRotationDisabled(false)}
                            onKeyDown={handleKeyDown}
                            onKeyUp={() => setRotationDisabled(false)}
                            {...props}
                        />
                        </div>
                    
                    <p><img src="360-degrees.png" id="360imge" className="deg360degPngImgPngImg animate__flipInY animate__animated animate__infinite animate__slower"/></p>
                    </div>
                    <div className="col-4 p-0 m-0 imageSectionRight"
                        id="sofa360RightImage"
                        style={{visibility:"hidden"}}
                        >
                            <img src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2FPhotography%2F360%2FPNG%2F85915%2Fimage-thumb__85915__header_fullscreen_2x_jpg%2FBig_George_Armchair_Spectrum_Agave_360-24.webp&w=1080&q=80"/>
                    </div>
            </div>
             {/* <div className="row p-0 m-0">
                    <div className="col-6 p-0 m-0 imageSectionBottom">
                         <img src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2FPhotography%2F360%2FPNG%2F85795%2Fimage-thumb__85795__header_fullscreen_2x_jpg%2FBig_George_Armchair_Spectrum_Agave_360-16.webp&w=1080&q=80"/>
                    </div>
                    <div className="col-6 p-0 m-0">
                            <img src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2FPhotography%2F360%2FPNG%2F85915%2Fimage-thumb__85915__header_fullscreen_2x_jpg%2FBig_George_Armchair_Spectrum_Agave_360-24.webp&w=1080&q=80"/>
                    </div>
            </div> */}
            <div className="row p-0 m-0 justify-content-center mt-5 "
                id="sofaCarousel"
                style={{visibility:"hidden"}}
                onMouseOver={()=>{setCarouselIcon(true)}}
                onMouseLeave={()=>{setCarouselIcon(false)}}
            >
                <div className="col-3 p-0 m-0 collapseImage"
                >       
                    {showCarouselIcon?<p className="d-flex justify-content-end mb-0 cursor-pointer"
                    // onClick={()=>{alert("Carousel coming soon")}}
                    ><i class="fa fa-arrows-alt" onClick={()=>{openCustomModal();setModalWork("Images")}}></i></p>:<p className="d-flex justify-content-end mb-0 cursor-pointer"><i class="fa " aria-hidden="true"></i></p>}
                     <img className="w-100" src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2FPhotography%2FDetails%2FPNG%2F85855%2Fimage-thumb__85855__header_fullscreen_2x_jpg%2FBig_George_Armchair_Spectrum_Agave_Detail-03.webp&w=1080&q=80"/>
                </div>
            </div>


            {/* fabric section */}
            <div className="row mt-5 fabricSectionCol1">
                <div className="col-5 " id="fabricSectionCol1Div" style={{visibility:"hidden"}}>
                        <p className="para1">Upholstrey</p>
                        <p className="para2">Big George Armchair is available in 491 fabrics.</p>
                        <button className="fabrics btn d-flex cursor-pointer">View fabric options</button>
                </div>
                <div className="col imagesSection " id="imagesSection"   style={{visibility:"hidden"}}>
                    <img className="" src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FFabrics%2FAbbracci%2F251%2Fimage-thumb__251__width_1200%2FAbbracci_Black.webp&w=1200&q=80"/>
                    <img className="" src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FFabrics%2FAbbracci%2F249%2Fimage-thumb__249__width_1200%2FAbbracci_Brown.webp&w=1200&q=80"/>
                    <img className="" src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FFabrics%2FAbbracci%2F252%2Fimage-thumb__252__width_1200%2FAbbracci_Grey.webp&w=1200&q=80"/>
                    <img src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FFabrics%2FAbbracci%2F248%2Fimage-thumb__248__width_1200%2FAbbracci_Oyster.webp&w=1200&q=80"/>
                </div>
            </div>
            <div className='cardView '>
                <div className="row justify-content-center whiteBackground" id="card2">
                        <div className="col-6 biodesc2 p-5" style={{marginTop:"1px"}} id="card1OfProductDesc">
                            <p className='para1'>ICONIC GRANDEUR</p>
                            <p className='para2'>Grand in size, iconic in design. In Big George, big proportions meet an iconic shape for a statement piece that stands out.</p>    
                        </div>
                            <div className="col-6 p-0 m-0">
                                <img className=" bioimage p-5 mt-3"
                                  src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2FPhotography%2FDetails%2FJPEG%2F85747%2Fimage-thumb__85747__header_fullscreen_2x_jpg%2FBig_George_Armchair_Spectrum_Agave_Detail-04.webp&w=1080&q=80"
                                ></img>
                            </div>  
                       

                        {/* second one */}
                        
                            <div className="col-6 p-0 m-0">
                                <img className=" bioimage pt-5 pt-5 pb-5"
                                 src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FApplied%2FTIF%2F91233%2Fimage-thumb__91233__header_fullscreen_2x_jpg%2F02_Big_George_Studio_High_Res.webp&w=1080&q=80"
                                ></img>
                            </div> 
                            <div className="col-6 biodesc2 p-5 "  style={{marginTop:"1px"}} id="card2OfProductDesc">
                                <p className='para1'>A GENTLE GIANT’S HUG</p>
                                <p className='para2'>Experience the embrace of Big George Sofa—comfort and friendly aesthetics merge, creating a welcoming haven in any living space.</p>       
                            </div> 

                              {/* Third one */}

                            <div className="col-6 biodesc2 p-5 "  style={{marginTop:"1px"}} id="card3OfProductDesc">
                                <p className='para1'>YOUR GEORGE, YOUR STYLE</p>
                                <p className='para2'>Personalise your comfort with our material library. Choose from all available fabrics for a Big George as unique as your style.</p>       
                            </div>
                            <div className="col-6 p-0 m-0">
                                <img className=" bioimage p-5 m-3"
                                src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBig%20George%2FBig%20George%20Armchair%2FPhotography%2FDetails%2FJPEG%2F85627%2Fimage-thumb__85627__header_fullscreen_2x_jpg%2FBig_George_Armchair_Spectrum_Agave_Detail-06.webp&w=1080&q=80"
                                ></img>
                            </div> 

                    </div>
                     {/* bio */}

                     <div className="row justify-content-center ">
                             
                            <div className="col-12 biodesc3 p-5 mt-5 ">
                                <p className='para1 text-center'>ABOUT THE DESIGNER</p>
                                <p className='para2 text-center ' id="typewriter">“CURIOSITY AND INTUITION ARE THE SOUL AND ALSO THE STRENGTHS OF MY UNIVERSE…”</p>     
                                {/* <p className='para3 text-center cursor-pointer'>Read more about Cristián Mohaded</p>   */}
                            </div> 
                            <div className="col-6 p-0 m-0">
                                <img className=" bioimage pt-5 mb-5 pb-5"
                                 src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Fassets%2FDesigners%2FCristian%2520Mohaded%2FPortrait%2520Cristian%2520Mohaded%2520-%2520Credits%2520to%2520photographer%2520Beto%2520Guti%25C3%25A9rrez.tif&w=3840&q=80"
                                ></img>
                            </div>
                     </div>
            </div>
            <Footer/>
       </div> 
    )

}