import { useEffect, useState } from 'react';
import Footer from '../CommonComponents/Footer'
import './Home.css'
import { Navigate, useNavigate } from 'react-router-dom';
export default function Home({setChangeColor,changeColor})
{
    const navigate=useNavigate()
    useEffect(()=>{
        setChangeColor("text-white")
    },[])
    const collectionData=[
        {
            url:"https://www.moooi.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F246251%2F588x468%2F27fb01cb5a%2Ftowels.png&w=640&q=80",
            name:"Bedding & Bath"
        },
        {
            url:"https://www.moooi.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F246251%2F588x468%2F1b348e1f77%2Fbig_george_armchair_spectrum_agave_product_0.png&w=640&q=80",
            name:"Furniture"
        },
        {
            url:"https://www.moooi.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F246251%2F588x468%2F73fe249d73%2Ftubelight.png&w=640&q=80",
            name:"Lighting"
        },
        {
            url:"https://www.moooi.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F246251%2F588x468%2F952491ecdc%2Fhome_accessories.png&w=640&q=80",
            name:"Home Accessories"
        },
        {
            url:"https://www.moooi.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F246251%2F588x468%2F6c80d3dce9%2Fshape_rugs_blue.png&w=640&q=80",
            name:"Wall & Floor"
        },
        {
            url:"https://www.moooi.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F246251%2F588x468%2Fdc507ca56e%2Fbody_-_beauty.png&w=640&q=80",
            name:"Body & Beauty"
        },
    ]
    // text-focus-in
    function scrollFunction(e) {
        const { scrollTop } = e.target;
        console.log("scrollFunctiondsds", scrollTop);

        const browseCollection = document.getElementById("browseCollection");
        if (browseCollection) {
            browseCollection.style.visibility = scrollTop > 320 ? "visible" : "hidden";
            if (scrollTop > 320) {
                browseCollection.classList.add("fadeUpAnimation");
            } else {
                browseCollection.classList.remove("fadeUpAnimation");
            }
        }
        const FirstHomeAnimate = document.getElementById("FirstHomeAnimate");
        if (FirstHomeAnimate) {
            FirstHomeAnimate.style.visibility = scrollTop > 1000 ? "visible" : "hidden";
            if (scrollTop > 1000) {
                FirstHomeAnimate.classList.add("fadeUpAnimation");
            } else {
                FirstHomeAnimate.classList.remove("fadeUpAnimation");
            }
        }
        const FirstHomeAnimate1 = document.getElementById("FirstHomeAnimate1");
        if (FirstHomeAnimate1) {
            FirstHomeAnimate1.style.visibility = scrollTop > 1334 ? "visible" : "hidden";
            if (scrollTop > 1334) {
                FirstHomeAnimate1.classList.add("fadeUpAnimation");
            } else {
                FirstHomeAnimate1.classList.remove("fadeUpAnimation");
            }
        }
        const FirstHomeAnimate2 = document.getElementById("FirstHomeAnimate2");
        if (FirstHomeAnimate2) {
            FirstHomeAnimate2.style.visibility = scrollTop > 2334 ? "visible" : "hidden";
            if (scrollTop > 2334) {
                FirstHomeAnimate2.classList.add("fadeUpAnimation");
            } else {
                FirstHomeAnimate2.classList.remove("fadeUpAnimation");
            }
        }
        const FirstHomeAnimate3 = document.getElementById("FirstHomeAnimate3");
        if (FirstHomeAnimate3) {
            FirstHomeAnimate3.style.visibility = scrollTop > 3634 ? "visible" : "hidden";
            if (scrollTop > 3634) {
                FirstHomeAnimate3.classList.add("fadeUpAnimation");
            } else {
                FirstHomeAnimate3.classList.remove("fadeUpAnimation");
            }
        }
        const FirstHomeAnimate4 = document.getElementById("FirstHomeAnimate4");
        if (FirstHomeAnimate4) {
            FirstHomeAnimate4.style.visibility = scrollTop > 4474 ? "visible" : "hidden";
            if (scrollTop > 4474) {
                FirstHomeAnimate4.classList.add("fadeUpAnimation");
            } else {
                FirstHomeAnimate4.classList.remove("fadeUpAnimation");
            }
        }
        
        // 487 id="browseCollection"
        

        }
   
    return(<>
        <div className="homePageMainDiv" onScroll={(e)=>{scrollFunction(e)}}>
            <div className='position-relative'>
                <video autoplay="autoplay" loop muted>
                    <source src="homePageVideo.mp4" type="video/mp4"></source>
                </video>
                <div className='position-absolute video-overlay-text text-focus-in'>
                    <p className='mb-1'>Milan 2024</p>
                    <h1>Experience A Life</h1>
                    <h1>Extraordinary!</h1>
                    <button className='watch-button-class p-2 pl-3 pr-3 mt-n5 '>Watch our Milan exhibition walkthrough</button>
                </div>
            </div>
            <div className='browsCollection mt-5 pt-5 mb-5 pb-5' id='browsCollection'>
                <div className='row p-0 m-0'>
                   <p className='text-center collectionHeading w-100'>BROWSE OUR COLLECTION</p>
                </div>
                <div className='mainDivForCollection d-flex justify-content-center mt-3' id="browseCollection" style={{visibility:"hidden"}} >
                    {collectionData.map((item,index)=>
                            <div className={`items`}  id={index} onClick={()=>{navigate("/product")}}>
                                <img src={item?.url} />
                                <p>{item?.name}</p>
                            </div>
                    )}
                    
                </div>
            </div>
            <div className='productStoryDiv '>
                    <p className='para1'>Product Story</p>
                    <p className='para2'  id="FirstHomeAnimate" style={{visibility:"hidden"}}>Gentle, genuine, & <br></br>generous Big George</p>
                    <button>Discover the Big George</button>        
            </div>
            <div className='cardView'>
                <div className="row justify-content-center card1">
                        <div className="col-6 biodesc p-5" id="FirstHomeAnimate1" style={{visibility:"hidden"}}>
                            <p className='para1'>Product Story</p>
                            <p className='para2'>Bend the rules with Tubelight</p>
                            <button>Discover our brand-new Tubelight</button>        
                        </div>
                            <div className="col-6 p-0 m-0">
                                <img className=" bioimage"
                                src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Fassets%2FCollection%2FWallcovering%2FLacey%20Longlegs%2FJPG%2FLacyLonglegs_White_Tubelight500.jpg&w=1080&q=80"
                                ></img>
                            </div>  
                       

                        {/* second one */}
                        
                            <div className="col-6 p-0 m-0">
                                <img className=" bioimage"
                                src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Fassets%2FCollection%2FExtinct%20Animals%20Insects%2FGlass%20Dome%2FTechnoBee%20in%20glass%20bell%20V03%20DJ.png&w=1200&q=80"
                                ></img>
                            </div> 
                            <div className="col-6 biodesc p-5"  id="FirstHomeAnimate2" style={{visibility:"hidden"}}>
                                <p className='para1'>Product Story</p>
                                <p className='para2'>The Green House Wallcovering Collection</p>
                                <button>Step into the Green House</button>        
                            </div> 
                            <div className='position-relative w-100'>
                                <video autoplay="autoplay" loop muted>
                                    <source src="https://cdn.moooi.com/assets/Collection/Monster%20Basketball/Monster%20Basketball%20Multicolour/Videos/Moooi_MonsterBasketballRainbow_V03_DJ_Reduced.mp4" type="video/mp4"></source>
                                </video>
                                <div className='position-absolute video-overlay-text'>
                                    <p className='mb-1'>Mooi Presents</p>
                                    <h1>Celebrate Joy and </h1>
                                    <h1>Creativity</h1>
                                    <button className='watch-button-class p-2 pl-3 pr-3 mt-n5'>Discover Monster Creativity Multicolured</button>
                                </div>
                            </div>

                              {/* Third one */}

                            <div className="col-6 biodesc p-5"  id="FirstHomeAnimate3" style={{visibility:"hidden"}}>
                                <p className='para1'>Moooi presents</p>
                                <p className='para2'>Discover Shape Rugs by Nikodem Szpunar</p>
                                <button>Discover this Carpet collection</button>        
                            </div>
                            <div className="col-6 p-0 m-0">
                                <img className=" bioimage"
                                src="https://cdn.moooi.com/assets/Web-Items/Home/WTW%20Square%20-%20gold.jpg"
                                ></img>
                            </div>  

                            {/* Fourth one */}

                            <div className="col-6 p-0 m-0" >
                                <img className=" bioimage"
                                src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Fassets%2FCollection%2FEvery%20Human%2FAura_Earthly_Delights.jpg&w=1080&q=80"
                                ></img>
                            </div> 
                            <div className="col-6 biodesc p-5"  id="FirstHomeAnimate4" style={{visibility:"hidden"}}>
                                <p className='para1'>Moi Presents</p>
                                <p className='para2'>Earthly Delights by Moooi X EveryHuman</p>
                                <button>Discover this room fragrance</button>        
                            </div> 
                    </div>
            </div>
            
        <Footer/>
        </div>
    </>)
}