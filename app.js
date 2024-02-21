// Importing required modules
const nodemailer = require('nodemailer');

// Function to send email
async function sendEmail(recipient, subject, message) {
    try {
        // Create transporter object
        let transporter = nodemailer.createTransport({
            host: 'smtp.mail.ru', 
            port: 465, 
            secure: false, 
            auth: {
                user: 'kalimatovaaisha@mail.ru', 
                pass: 'Aisha14zhas' 
            }
        });

        // Mail options
        let mailOptions = {
            from: 'kalimatovaaisha@mail.ru', // Sender address
            to: 'gulnaz16092004@gmail.com', // Recipient address
            subject: 'finals', // Subject of the email
            text: "Are u ready for finals?" // Body of the email
        };

        // Send mail
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ', info.messageId);
    } catch (error) {
        console.error('Error occurred: ', error);
    }
}

// Testing email sending functionality
sendEmail('recipient@example.com', 'Test Email', 'This is a test email from Node.js.');
// Function to send email with user input
async function sendEmailWithUserInput() {
    try {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Recipient Email: ', async (recipient) => {
            readline.question('Subject: ', async (subject) => {
                readline.question('Message: ', async (message) => {
                    await sendEmail(recipient, subject, message);
                    readline.close();
                });
            });
        });
    } catch (error) {
        console.error('Error occurred: ', error);
    }
}

// Call function to send email with user input
sendEmailWithUserInput();

