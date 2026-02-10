import nodemailer from 'nodemailer'

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    const { fullName, email, subject, message } = req.body

    // Validation
    if (!fullName || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email address' })
    }

    try {
        // Configuration du transporteur (à personnaliser avec vos informations)
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: process.env.SMTP_PORT || 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER, // Votre email
                pass: process.env.SMTP_PASSWORD, // Votre mot de passe ou app password
            },
        })

        // Options de l'email
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // Email où vous voulez recevoir les messages
            replyTo: email,
            subject: `Portfolio Contact: ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
                        <p style="margin: 10px 0;"><strong style="color: #555;">Name:</strong> ${fullName}</p>
                        <p style="margin: 10px 0;"><strong style="color: #555;">Email:</strong> ${email}</p>
                        <p style="margin: 10px 0;"><strong style="color: #555;">Subject:</strong> ${subject}</p>
                    </div>
                    <div style="background-color: #fff; padding: 20px; border-left: 4px solid #4CAF50; margin: 20px 0;">
                        <p style="margin: 0;"><strong style="color: #555;">Message:</strong></p>
                        <p style="margin: 10px 0; color: #333; line-height: 1.6;">${message}</p>
                    </div>
                    <p style="color: #999; font-size: 12px; margin-top: 30px;">
                        This email was sent from your portfolio contact form.
                    </p>
                </div>
            `,
        }

        // Envoi de l'email
        await transporter.sendMail(mailOptions)

        return res.status(200).json({ 
            message: 'Message sent successfully! I will get back to you soon.' 
        })
    } catch (error) {
        console.error('Error sending email:', error)
        return res.status(500).json({ 
            message: 'Failed to send message. Please try again later or contact me directly via email.' 
        })
    }
}
