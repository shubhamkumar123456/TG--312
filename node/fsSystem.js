import fs from 'fs'

// CRUD --> create , read , update , delete

// 1) create a file using fs module -->
// fs.writeFileSync('trial.pdf' , 'this is dummy text')
// fs.writeFileSync('index.html', `<html>
//         <head></head>
//         <body>
//             <h1>THis is heading tag</h1>
//         </body>
//     </html>`)


//2) read a file using fs module -->
// let ans = fs.readFileSync('trial.pdf', 'utf-8')
// console.log(ans)


//3) add more text in existing file --> append method
    // fs.appendFileSync('trial.pdf', ' this is an additional text')

// 4) Rename a file --> 
// fs.renameSync('trial.pdf' , 'trialOne.pdf')

//5) Delete A file --> unlink method
// fs.unlinkSync('index.html')

//6) create a folder using fs module --> 
// fs.mkdirSync('pages') 