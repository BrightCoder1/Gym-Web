import Contact from "../schema/ContactSchema.js";

export const ContactController =  async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const data = await Contact({
            name,
            email,
            message,
            dateSend: Date.now()
        })

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS
            }
        });

        // Email to Admin
        const adminMail = {
            from: email,
            to: process.env.EMAIL,
            subject: `Contact from ${name} by Gym.com contact form`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        // Confirmation email to user
        const userMail = {
            from: process.env.EMAIL,
            to: email,
            subject: "Your Email has been recive.",
            text: `Hi ${name},\n\nThanks for contacting us! We've received your message and our team will respond soon.\n\n- Gym Trainer`
        };

        // Send both emails
        await transporter.sendMail(adminMail);
        await transporter.sendMail(userMail);

        const datatest = await data.save();

        res.status(200).json({
            success: true,
            message: "Form submit Successfully!..."
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Invernale Server Error!...."
        })
    }
}