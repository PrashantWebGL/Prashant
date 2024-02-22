import React from 'react';
import styles from "./contact.module.css";
import ContactForm from "@/app/components/contactform";

const Contact = () => {
    return (
        <>
            <div className={styles.container}>

                <section className={styles.contact_section}>
                    <h2>I&apos;d love to hear <span> from you </span></h2>

                    <ContactForm />
                </section>
            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d789.75233987346!2d127.061258!3d37.648984!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cb94286f6a50d%3A0x24db9a20b4cf1f9a!2zU291dGggS29yZWEsIFNlb3VsLCBTYW5nZ3llLWRvbmcsIDIwNyDsg4Hqs4Tso7zqs7Uy64uo7KeA7JWE7YyM7Yq4!5e0!3m2!1sen!2sus!4v1708602222950!5m2!1sen!2sus"
                width={100} height={450} style={{ border: 0 }} allowFullScreen="" loading="lazy" className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade">

            </iframe>


        </>
    );
};

export default Contact;