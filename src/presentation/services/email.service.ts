import nodemailer, { Transporter } from 'nodemailer';	


export interface SendEmailOptions {
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachments?: Attachment[];
}


export interface Attachment {
    filename: string;
    path: string;
}


export class EmailService {


    private transporter: Transporter;

    constructor(
        mailerService: string,
        mailerEmail: string,
        senderEmailPassword: string
    ){
       
        this.transporter = nodemailer.createTransport({
            service: mailerService,
            auth: {
                user: mailerEmail,
                pass: senderEmailPassword
            }
        });
    }

    async sendEMail(options: SendEmailOptions): Promise<boolean>{
        const { to, subject, htmlBody, attachments } = options;

        try {
            const sentInformation = await this.transporter.sendMail({
                to: to,
                subject: subject,
                html: htmlBody,
                attachments: attachments
            })

            return true            
        } catch (error) {
            return false
        }
    }

}