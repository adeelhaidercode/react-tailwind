import React from 'react';
import { aboutLinks, experienceLinks } from '../static/FooterData';
import {
    footerEmail, footerInsta, footerLinkendIn, footerTime,
    footerWhatsapp, footerYoutube, footerfacebook, footermail,
    footerphone, footerArrow
} from '../static/Icon';

function Footer() {
    const socialIcons = [
        { href: "#", src: footermail, alt: "Email" },
        { href: "#", src: footerfacebook, alt: "Facebook" },
        { href: "#", src: footerInsta, alt: "Instagram" },
        { href: "#", src: footerLinkendIn, alt: "LinkedIn" },
        { href: "#", src: footerYoutube, alt: "YouTube" },
    ];

    const contactInfo = [
        {
            icon: footerphone,
            text: "+92 21 111 336 111",
        },
        {
            icon: footerWhatsapp,
            text: "+92 300 3376464",
        },
        {
            icon: footerEmail,
            text: "info@denning.edu.pk",
        },
        {
            icon: footerTime,
            text: `Office timings:
From 10 a.m. till 6 p.m.
Monday to Friday
From 10 a.m. till 3 p.m.
Saturday`,
        },
    ];

    return (
        <footer className="bg-[#1a153c] text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-start">
                    {/* Social Media Icons */}
                    <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
                        <div className="flex space-x-4">
                            {socialIcons.map((icon, index) => (
                                <a key={index} href={icon.href} className=''>{icon.src}</a>
                            ))}
                        </div>
                    </div>
                    {/* About Section */}
                    <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
                        <h3 className="text-lg font-bold mb-2">ABOUT</h3>
                        <hr className="border-yellow-400 mb-2 w-16" />
                        <ul className="space-y-2">
                            {aboutLinks.map((link, index) => (
                                <li key={index}><a href={link.href} className="text-sm hover:underline">{link.text}</a></li>
                            ))}
                        </ul>
                    </div>
                    {/* Denning Experience Section */}
                    <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
                        <h3 className="text-lg font-bold mb-2">DENNING EXPERIENCE</h3>
                        <hr className="border-yellow-400 mb-2 w-16" />
                        <ul className="space-y-2">
                            {experienceLinks.map((link, index) => (

                                <li key={index}><a href={link.href} className="text-sm hover:underline ruby">{footerArrow}{link.text}</a></li>
                            ))}
                        </ul>
                    </div>
                    {/* Contact Info Section */}
                    <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
                        <h3 className="text-lg font-bold mb-2">CONTACT INFO</h3>
                        <hr className="border-yellow-400 mb-2 w-16" />
                        <ul className="space-y-2 text-sm">
                            {contactInfo.map((info, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                    {info.icon}
                                    <span>{info.text.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
