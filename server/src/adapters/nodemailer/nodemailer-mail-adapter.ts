import nodemailer from "nodemailer";
import { MailAdapter, sendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "89484ab1d7c5d9",
    pass: "22ea75919e2f6d",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: sendMailData) {
    await transport.sendMail({
      from: "Equipe feedget <oi@feedget.com>",
      to: "Your name <mail@sample.com>",
      subject,
      html: body,
    });
  }
}
