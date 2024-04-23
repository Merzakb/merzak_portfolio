import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { email, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    //  cc: email,
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
        transport.sendMail(mailOptions, (err) => {
            if (!err) {
                resolve('Votre message a bien été envoyé. Je vous répondrai dans les plus brefs délais.');
            } else {
                reject(err.message);
            }
        });
    });

    try {
        await sendMailPromise();
        return NextResponse.json({ message: 'Votre message a bien été envoyé. Je vous répondrai dans les plus brefs délais.' });
    } catch (err) {
        console.log("erreur api" );
        return NextResponse.json({ error: err }, { status: 500 });
    }
}


/*
import { NextResponse } from 'next/server';
import emailjs from '@emailjs/browser';

export async function POST(request) {
    const { email, name, message } = await request.json();

    // Initialize emailjs
    emailjs.init(process.env.EMAILJS_PUBLIC_KEY_ID);

    // Create a new email message
    const emailMessage = {
        from_name: name,
        from_email: email,
        to_name: 'Merzak', 
        message: message,
    };

    try {
        // Send the email
        await emailjs.send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, emailMessage);
        return NextResponse.json({ message: 'Votre message a bien été envoyé. Je vous répondrai dans les plus brefs délais.' });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}
*/