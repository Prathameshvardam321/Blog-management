const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const CLIENT_ID = '508740960723-rc5icve6la8f2f9m0e82mj3h1j2gb6le.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//041FM0GKMkmKSCgYIARAAGAQSNwF-L9Ir4gTg2-e0i1gC1kNIu5Wp4uBQTHQ_ryTSddqZa4pxUxW22TipIkGDT874BvEfaCLNnPo'
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })
 export async function sendEmail(Email,token) {
    try {
        const accesstoken = await oAuth2Client.getAccessToken()
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'prathameshvardam321@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accesstoken
            }
        })
    
        const mailOptions = {
            from: 'PrathmeshVardam321📧 <Prathameshvardam321@gmail.com>',
            to: Email,
            subject: 'For reset password',
            text: 'Heloow from API',
            html: `<h1>Hello,<br><br>Click on given link to reset your password!</h1><br><h1>Link:><a href="http://localhost:${process.env.APP_PORT}/${token}">click here</a></h1>`
        }
        const result = await transport.sendMail(mailOptions)
        return result
    } catch (error) {
        return error
    }
}