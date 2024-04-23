"use client"

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { AiFillGithub } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { sendEmail } from '@/backend/send-email';
import Errors from '../errors/Errors';
import Spinner from '../spinner/Spinner'; 
import styles from "./contact.module.css";

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors }} = useForm();
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [sending, setSending] = useState(false); 
    const [error, setError] = useState(null);

    function onSubmit(data) {
        setSending(true); 
        sendEmail(data)
            .then((response) => {
                setModalMessage(response.message);
                setShowModal(true);
                reset(); 
            })
            .catch((err) => {
                console.error(err); 
                setError(err.message); 
                setShowModal(false); 
            })
            .finally(() => {
                setSending(false); 
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <div className='me-2 d-flex justify-content-between'>
                        <label htmlFor="name" className="form-label">Nom complet</label>
                        {errors.name && <Errors id="name-error">{errors.name.message}</Errors>}
                    </div>
                    <input
                        type="text"
                        id="name"
                        placeholder="Nom Complet"
                        className="form-control"
                        {...register('name', { required: 'Vous devez remplir ce champ' })}
                        aria-label="Nom complet"
                        aria-describedby={errors.name && "name-error"}
                    />
                </div>
                <div className="mb-3">
                    <div className='me-2 d-flex justify-content-between'> 
                        <label htmlFor="email" className="form-label">Adresse Email</label>
                        {errors.email && <Errors id="email-error">{errors.email.message}</Errors>}
                    </div>
                    <input
                        type="email"
                        id="email"
                        placeholder="exemple@domain.com"
                        className="form-control"
                        {...register('email', { required: 'Vous devez remplir ce champ' })}
                        aria-label="Adresse Email"
                        aria-describedby={errors.email && "email-error"}
                    />
                </div>
                <div className="mb-3">
                    <div className='me-2 d-flex justify-content-between'>
                        <label htmlFor="message" className="form-label">Message</label> 
                        {errors.message && <Errors id="message-error">{errors.message.message}</Errors>}
                    </div>
                    <textarea
                        id="message"
                        rows={6}
                        placeholder="Tapez votre message"
                        className="form-control"
                        {...register('message', { required: 'Vous devez remplir ce champ' })}
                        aria-label="Message"
                        aria-describedby={errors.message && "message-error"}
                    ></textarea>
                </div>
                <div className='d-flex justify-content-center mt-5'>
                    <button type="submit" className="btn btn-secondary text-primary fw-bolder text-center">
                        {sending ?   <Spinner /> : 'Envoyer'}
                    </button>
                </div>
            </form>

            {error && 
                <div>
                    <p className='text-danger text-center fs-6 mt-2'>{error} 
                        <br /> si l'erreur persiste, retrouvez-moi sur mes comptes
                    </p>
                    <ul className="d-flex justify-content-center list-unstyled text-primary">
                        <li className={` me-2 bg-secondary rounded-circle p-2 ${styles.link}`}>
                        <Link
                            href="https://github.com/Merzakb"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="visually-hidden-focusable">Github</span>
                            <AiFillGithub className={` text-primary p-2  ${styles.icon}`} />
                        </Link>
                        </li>
                        <li className={` me-2 bg-secondary rounded-circle p-2 ${styles.link}`}>
                        <Link
                            href="https://twitter.com/__merzak"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="visually-hidden-focusable">Twitter</span>
                            <BsTwitterX  className={` text-primary p-2  ${styles.icon}`}/>
                        </Link>
                        </li>
                        <li className={` me-2 bg-secondary rounded-circle p-2 ${styles.link}`}>
                        <Link
                            href="https://www.linkedin.com/in/merzak-b-0300b9289/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="visually-hidden-focusable">Linkedin</span>
                            <FaLinkedinIn className={` text-primary p-2  ${styles.icon}`} />
                        </Link>
                        </li>
                    </ul>
                </div>
            }

            {showModal && (
                <div className={`modal px-5 ${styles.modal}`} aria-modal="true" role="dialog">
                    <div className={`bg-tertiary p-3 col-md-8 col-lg-6 rounded ${styles.content}`}>
                        {!error && <p className='text-primary fw-bolder text-center'>{modalMessage}</p>}
                        <div className='d-flex justify-content-center mt-5'>
                            <button className='btn btn-primary text-white fw-bold ' onClick={() => setShowModal(false)}>Fermer</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
