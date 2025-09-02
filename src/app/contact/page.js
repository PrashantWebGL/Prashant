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
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d472.66974039338925!2d73.74422013748234!3d18.6029642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM2JzEwLjUiTiA3M8KwNDQnNDEuMiJF!5e0!3m2!1sen!2sin!4v1756838043916!5m2!1sen!2sin"
                width={100} height={450} style={{ border: 0 }} allowFullScreen="" loading="lazy" className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade">

            </iframe>


        </>
    );
};

export default Contact;