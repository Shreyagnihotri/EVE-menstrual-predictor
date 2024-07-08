import React from 'react'
import './aboutus.css'

function Aboutus() {
    return (
        <>
            <section className='section-white'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-md-12 text-center'>
                            <h2 className='section-title'>
                                The Team behind <strong className='brand-name'>EVE</strong>
                            </h2>
                        </div>

                        <div className='col-sm-6 col-md-3 wrap'>
                            <img src="./anshu.jpg" />
                            <div class="text">
                                <h3 style={{ textAlign: "center" }}>Anshita Kushwaha</h3>
                                <p>Developer</p>
                                <p>Skilled in developing scalable web appilcation and implementing innovative solutions to complex problems.</p>
                                <a href="https://www.linkedin.com/in/anshita-kushwaha-0793a5183?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRSNVzJWAQ2%2BZD9%2BC1CVFjQ%3D%3D" target="_blank">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-3 wrap'>
                            <img src="./shreyas.jpg" />
                            <div class="text">
                                <h3>Shreya Agnihotri</h3>
                                <p>Founder</p>
                                <p>Visionary founder committed to crafting exceptional websites that captivate audiences, merging creativity with strategic insight to deliver unforgettable user experiences.</p>
                                <a href="https://www.linkedin.com/in/shreyaagnihotri29?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </div>
                        </div>

                        <div className='col-sm-6 col-md-3 wrap'>
                            <img src="./mahicas.jpg" />
                            <div class="text">
                                <h3>Mahendra Dabi</h3>
                                <p>Designer</p>
                                <p>Skilled designer adept at crafting visually stunning websites with a keen eye for detail and a passion for intuitive user experiences.</p>
                                <a href="https://www.linkedin.com/in/mahendra-dabi-1b6252181?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNBX7vlG9RnyLzAaigWxF0g%3D%3D" target="_blank">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </div>
                        </div>

                        <div className='col-sm-6 col-md-3 wrap'>
                            <img src="./arpit.jpeg" />
                            <div class="text">
                                <h3>Arpit Yadav</h3>
                                <p>Tester</p>
                                <p>Expert tester proficient in guaranteeing top-notch software quality, with a sharp attention to detail and a dedication to creating seamless and reliable user interactions.</p>
                                <a href="https://www.linkedin.com/in/arpit-yadav-34a266238" target="_blank">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </div>
                        </div>


                    </div>

                </div>

            </section>
        </>
    )
}

export default Aboutus