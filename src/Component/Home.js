import React from 'react'
import './Home.css'
import {BiPlay} from 'react-icons/bi'

function Home() {
    return (
        <div>
            <div className='home-all'>
                <div className='home'>
                    <img src='./Images/CCTV-home.png'></img>
                    <div className='home-content'>
                        <p>SOLID SOLUTION FOR YOUR HOME OFFICE</p>
                        <h1>SECURE YOUR </h1><h1>OFFICE & HOUSE</h1>
                        <div className='paragraph'>
                            <p>Teaching to the great lession of the life about useing</p>
                            <p>how to use the replaise bidy in th eera of thwbafbdkfbweuk</p>
                        </div>
                        <div>
                            <a className='home-button' href=''>Get In Touch</a>
                            <a className='home-button-service' href=''>Our Services</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about'>
                <div className='about-us'>
                    <div className='about-us-write'>
                        <samp className='samp'> ABOUT US</samp>
                        <h1 className='heading-p'>Get Best CCTV Solutions For House</h1>
                        <samp><p> Bandwidth has historically been very unequally distributed worldwide, with increasing concentration in the digital age. Historically only 10 countries have hosted 70-75% of the global telecommunication capacity.</p></samp>
                        <hr />
                        <div className='business'>
                            <ul>
                                <div className='business-li'>
                                    <img src='./Images/done.png'></img><li>New Business Ideas create</li>
                                </div>
                                <div className='business-li'>
                                    <img src='./Images/done.png'></img><li>Grow corporate financial system</li>
                                </div>
                                <li><img src='./Images/done.png'></img>Global business solutions</li>
                                <li><img src='./Images/done.png'></img>Global Clients</li>
                                <li><img src='./Images/done.png'></img>1000 Case Stories</li>
                                <li><img src='./Images/done.png'></img>Performance Improve</li>
                            </ul>
                        </div>
                    </div>
                    <img className='about-img' src="./Images/about-cctv.jpg" alt="" />
                </div>
            </div>
            <div className='services'>
                <div className='services-containt'>
                    <h4>SERVICES</h4>
                    <h1>What We Provide</h1>
                    <div className='serices-imgages'>
                        <div className='service-border'>
                            <div>
                                <img className="service-img" src="./Images/CCTV-home.png" alt="img" />
                            </div>
                            <h2>Provide security</h2>
                            <p>Service No.1</p>
                            {/* <h1>01</h1> */}
                        </div>
                        <div className='service-border'>
                            <img className="service-img" src="./Images/CCTV-home.png" alt="img" />
                            <h2>Provide security</h2>
                            <p>Service No.2</p>
                            {/* <h1>02</h1> */}
                        </div>
                        <div className='service-border'>
                            <img className="service-img" src="./Images/CCTV-home.png" alt="img" />
                            <h2>Provide security</h2>
                            <p>Service No.3</p>
                            {/* <h1>03</h1> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='get-support'>
                <div >
                    <div>
                        <img className='support-img' src="./Images/support-bg.jpg" alt="img" />
                        <div className='get-support-paragraph'>
                            <div className='play-icon'><BiPlay className='player-icon'/></div>
                            <h1>ffgfgs</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;