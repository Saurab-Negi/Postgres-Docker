import { Request, Response } from 'express';
import { sendEmail } from "../utils/sesMailer";

export const sendMail = async (req: Request, res: Response) => {
  const { to , message } = req.body;

  try {
    await sendEmail({
      toAddress: to,
      htmlBody: `<p>${message}</p>`,
      textBody: message,
    });

    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("SES error:", error);
    res.status(500).json({ success: false, error });
  }
}
