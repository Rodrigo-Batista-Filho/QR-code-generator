/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer
    .prompt([
        {
            type: "input",
            name: "url",
            message: "Enter URL for generating qr-code",
        },
    ])
    .then((answers) => {
        const url = answers.url;
        const qrCode = qr.image(url, {type: "png"});
        const qrFileName = "qr_img.png";
        qrCode.pipe(fs.createWriteStream(qrFileName));
        console.log(`Qr code saved as ${qrFileName}`);

        const txtFileName = "URL.txt";
        fs.writeFile(txtFileName, url, (err) => {
            if (err) throw err;
            console.log(`User input saved to ${URL}`);
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            
        } else {

        }
    })