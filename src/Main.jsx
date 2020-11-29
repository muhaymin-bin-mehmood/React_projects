/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

var mainImg = "https://lamborghini-huracan.web.app/images/home2.png"

function Main(){
    return (
<main>
        <div class="background-image"></div>
        <div class="width2">
            <div class="homesection2">
                <div class="section2detail">
                    <h3>Lamborghini Models</h3>
                    <h1>Lamborghini Huracán</h1>
                    <p>The Huracán maintains the 5.2-litre naturally aspirated Audi/Lamborghini V10 engine from the Gallardo, tuned to generate a maximum power output of 449 kW (602 hp; 610 PS). To ensure its balance and performance, the car is mid-engined. The engine has both direct fuel injection and multi-point fuel injection.</p>
                </div>
                <div class="section2img">
                    <img src={mainImg} alt="lamborghini img" />
                </div>
            </div>
        </div>
        <div class="topfooter">
            <div class="width2">
                <div class="topfooter1">
                    <div class="topfooterdetail1">
                        <i class="fas fa-car-alt"></i>
                        <h2>Lamborghini Models</h2>
                    </div>
                    <div class="topfooterdetail2">
                        <i class="fas fa-users"></i>
                        <h2>About Us</h2>
                    </div>
                    <div class="topfooterdetail3">
                        <i class="fas fa-blog"></i>
                        <h2>Blogs</h2>
                    </div>
                    <div class="topfooterdetail4">
                        <i class="fas fa-map-marker-alt"></i>
                        <h2>Our Location</h2>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}

export default Main;