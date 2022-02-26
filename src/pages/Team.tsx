import React from 'react'
import SideImage from '../components/SideImage'
import VCenter from '../components/VCenter'
import DefaultLayout from '../layouts/DefaultLayout'

export default function Team(props) {
    return (
        <DefaultLayout>
            <main>
                <section>
                    <SideImage image="img/jpg/robot_1.jpg">
                        <VCenter fullscreen>
                            <div className='container'>
                                <h1 className="display-1">Members and Divisions</h1>
                                <p className="lead">Our team is divided into separate divisons that specialize in a specific field and work together as a team to produce a fully functional robot.</p>
                            </div>
                        </VCenter>
                    </SideImage>
                </section>
                <section>
                    <SideImage flipped image="img/jpg/mechanics.jpg">
                        <VCenter fullscreen>
                            <div className='container'>
                                <h2 className="display-2">Mechanics</h2>
                                <p>The Mechanics division handles the construction of the robot. Designing and building the core mechanisms using the proper tools. Online we can teach the different tools and techniques required to properly build a robot.</p>
                                <ol>
                                    <li>Research on new possible drive trains, motors, and etc.</li>
                                    <li>Learning the name of the tools and how to use them.</li>
                                    <li>Working with our mentors to learn how to apply our knowledge and know how to take apart/put our robots together.</li>
                                </ol>
                            </div>
                        </VCenter>
                    </SideImage>
                </section>
                <section>
                    <SideImage image='img/jpg/electronics.jpg'>
                        <VCenter fullscreen>
                            <div className='container'>
                                <h2 className="display-2">Electronics</h2>
                                <p>Electronics deals with the power and control system of the robot. This includes working with batteries, circuit breakers, motor controllers, various sensors and wires. In the electronics division, one learns how to wire all these different components to make our robot/s function.</p>
                            </div>
                        </VCenter>
                    </SideImage>
                </section>
                <section>
                    <SideImage flipped image='img/jpg/programming_brainstorming.jpg'>
                        <VCenter fullscreen>
                            <div className='container'>
                                <h2 className="display-2">Programming</h2>
                                <p>The Programming division is responsible for adding functionality to the robot through use of its motors, servos, sensors, etc. We deal with both human-controlled actions through gamepads and autonomous “sensor-based” actions to control most of the robot. All of this is handled over our laptop “Driver Station”, sending commands and reading data to and from the robot. After teaching you Java <em>(No prior experience required)</em> and how to use our various tools and software, come “Kick Off” when the competition is revealed, we will split into two groups.</p>
                                <ul>
                                    <li>The “Tele-Operated” group will focus on user-controlled actions for the robot and work with controllers. You will work with the driveteam to create the most comfortable and efficient control systems.</li>
                                    <li>The “Autonomous” group will focus on sensor and camera-based data to make the robot complete complex automated tasks without the aid of a person. This is more on the complex side and will require a lot of research.</li>
                                </ul>
                            </div>
                        </VCenter>
                    </SideImage>
                </section>
                <section>
                    <SideImage image='img/40545476633_bc7a03d898_k.jpg'>
                        <VCenter fullscreen>
                            <div className='container'>
                                <h2 className="display-2">Computer-Aided Design</h2>
                                <p>In this division, we will be doing design practices and lectures on features and what is necessary to teach you guys to design a robot in the computer.</p>
                            </div>
                        </VCenter>
                    </SideImage>
                </section>
                <section>
                    <SideImage flipped image='img/jpg/scouting.jpg'>
                        <VCenter fullscreen>
                            <div className='container'>
                                <h2 className="display-2">Marketing</h2>
                                <p>Our marketing division is one cohesive group, responsible for sponsor outreach, public appearance, and most importantly internal budget and activity management. Some of the work from this division includes:</p>
                                <ul>
                                    <li>Outreach through phone calls, emails, and in person interactions.</li>
                                    <li>Managing the team’s overall financial activities and elements including divisional budgets, logs of income, profit of each respective fundraiser.</li>
                                    <li>Executing fundraising and community events such as bake sales, PTC events, and luncheons.</li>
                                    <li>Exposing students to development in skills pertaining organization, writing, presentation, communication, and leadership.</li>
                                    <li>Help organize events like competitions (gather necessary materials like competition rosters, robot transportation, etc)</li>
                                </ul>
                            </div>
                        </VCenter>
                    </SideImage>
                </section>
            </main>
        </DefaultLayout>
    )
}