import React from 'react'
import SideImage from '../components/SideImage'
import VCenter from '../components/VCenter'
import DefaultLayout from '../layouts/DefaultLayout'

export default function Competitions(props) {

    return (
        <DefaultLayout>
            <main>
                <section>
                    <SideImage color='#ED1C24' image='img/jpg/robot_start.jpg'>
                        <VCenter fullscreen>
                            <div className='py-3 container'>
                                <h1 className="display-1" style={{ fontFamily: "Arial" }}><i>FIRST</i> Robotics</h1>
                                <p className="text-small">Content Courtesy of the <i>FIRST</i> Website</p>
                                <h2>About</h2>
                                <p>FIRST (For Inspiration and Recognition of Science and Technology) was founded in 1989 to inspire young people's interest and participation in science and technology. Based in Manchester, NH, the 501(c)(3) not-for-profit public charity designs accessible, innovative programs that motivate young people to pursue education and career opportunities in science, technology, engineering, and math, while building self-confidence, knowledge, and life skills.</p>
                                <p>FIRST is More Than Robots. FIRST participation is proven to encourage students to pursue education and careers in STEM-related fields, inspire them to become leaders and innovators, and enhance their 21<sup>st</sup> century work-life skills.</p>
                            </div>
                        </VCenter>
                    </SideImage>
                </section>
                <section>
                    <SideImage flipped color='#0066B3' image='img/jpg/robot_1.jpg'>
                        <VCenter>
                            <div className='py-3 container'>
                                <h1 className="display-1" style={{ fontFamily: "Arial" }}>Mission</h1>
                                <p>The mission of <i>FIRST</i>&reg; is to inspire young people to be science and technology leaders and innovators, by engaging them in exciting mentor-based programs that build science, engineering, and technology skills, that inspire innovation, and that foster well-rounded life capabilities including self-confidence, communication, and leadership.</p>
                            </div>
                        </VCenter>
                    </SideImage>
                </section>
            </main>
        </DefaultLayout>
    )
}