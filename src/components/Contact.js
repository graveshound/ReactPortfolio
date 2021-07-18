import React from 'react'

export const Contact = () => {

    const correo='pedro_arce@outlook.com';
    const subject='Hi, i want to connect with you'
    let name=document.getElementById("name").value;
    let mail=document.getElementById("mail").value;
    let text=document.getElementById("text").value;

    const mailer=`mailto:${correo}?subject=${subject}&body=Hi My name is ${name}, you can reach me in ${mail}, ${text}`
    return (
        <section className="contact section" id="contact">
                <h2 className="section-title">Contact</h2>

                <div className="contact__container bd-grid">
                    <form action="" className="contact__form">
                        <input type="text" id='name' placeholder="Name" className="contact__input" />
                        <input type="mail" placeholder="Email" id='mail' className="contact__input" />
                        <textarea name="" id="text" cols="0" rows="10" className="contact__input"></textarea>
                        <a type="button" href={mailer} className="contact__button button" > Send </a>
                    </form>
                </div>
            </section>
    )
}
