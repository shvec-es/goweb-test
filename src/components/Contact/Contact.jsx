import React from 'react';
import s from './Contact.module.scss';
import contactJ1 from 'images/home/contact.jpg';

const Contact = () => {
  return (
    <section className={s.contact} id="contact">
      <img className={s.photo} src={contactJ1} alt="contact-section" />
      <form className={s.contactform} name="contact" method="post">
        <h2 className={s.title}>Request Callback</h2>

        <input type="hidden" name="form-name" value="contact" />
        <div className={s.thumb}>
          <input className={s.input} type="text" name="name" />
          <label className={s.label}>Enter your name</label>
        </div>
        <div className={s.thumb}>
          <input className={s.input} type="email" name="email" />
          <label className={s.label}>Enter email*</label>
        </div>
        <button className={s.button} type="submit">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
