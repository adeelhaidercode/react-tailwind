import React from 'react';
import { phoneIcon, whatsappIcon, mailIcon } from '../static/Icon';

function ContactHeader() {
    const contactDetails = [
        { icon: whatsappIcon, info: '+92 300 337 6464' },
        { icon: phoneIcon, info: '+92 21 111 336 111' },
        { icon: mailIcon, info: 'info@mokltd.com' },
    ];

    return (
        <div className="bg-primary">
            <div className=" md:flex xs:block md:flex-row-reverse gap-4 px-4 py-2 max-w-screen-xl">
                {contactDetails.map((contact, index) => (
                    <div key={index} className="flex">
                        <span alt="Icon" className="pt-[6px]">{contact.icon}</span>
                        <span className={`text-black text-sm md:text-base${contact.icon === mailIcon ? 'underline text-black' : ''}`}>
                            {contact.info}
                        </span>
                    </div>
                ))
                }
            </div >
        </div >
    );
}

export default ContactHeader;
