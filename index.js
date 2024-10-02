// get the user input from this code
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([
    {
        message: "Type your URL: ",
        name: "URL",
    },
]).then((answers) => {
    // provide the qr image by turning the entered url into a qr code image
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
    // file system using fs module
    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log('The file has been created');
    })
    // console.log(answers);
}).catch((error) => {
    if (error.isTtyError) {
        console.error("Prompt cannot be used in a non-tty environment. See https://github.com");
    }
    else {
        console.error(error);
    }
})