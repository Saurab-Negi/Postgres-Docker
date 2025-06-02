import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({
  region: process.env.AWS_REGION,
});

interface SendEmailParams {
  toAddress: string;
  htmlBody: string;
  textBody?: string;
}

export const sendEmail = async ({toAddress, htmlBody, textBody}: SendEmailParams) => {
  const params = {
    Destination: {
      ToAddresses: [toAddress],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: htmlBody,
        },
        ...(textBody && {
          Text: {
            Charset: "UTF-8",
            Data: textBody,
          },
        }),
      },
      Subject: {
        Charset: "UTF-8",
        Data: 'Welcome mail!',
      },
    },
    Source: process.env.SENDER_MAIL,
  };

  const command = new SendEmailCommand(params);
  return ses.send(command);
};
