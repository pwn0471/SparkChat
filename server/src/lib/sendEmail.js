import { transporter } from "./mail.js";

export const sendWelcomeEmail = async (email, name) => {
  try {
    await transporter.sendMail({
      from: `"BindaasTalk" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Welcome to BindaasTalk 🎉",
      html: `
        <h2>Hey ${name} 👋</h2>
        <p>Welcome to <b>BindaasTalk</b>!</p>
        <p>Start chatting and connecting with people worldwide 🚀</p>
      `,
    });

    console.log("✅ Email sent");
  } catch (error) {
    console.error("❌ Email error:", error);
  }
};