// import path from 'node:path';
// const somePath = path.join('some_folder', 'some_file.txt');
// path.parse(path)
// Дозволяє отримати інформацію по шляху, який був переданий аргументом
// // path.parse('C:\\\\path\\\\dir\\\\file.txt');
// import fs from 'node:fs';Синхронна функція. 
// const fileContent = fs.readFileSync('path_to_file');
// Асинхронна з колбеком
//error first - callback last. : fs.readFile('path_to_file', (err, fileContent) => {
// 	/* ваш код */
// });
// Асинхронна з промісами
//import fs from 'node:fs/promises';
// const fileContent = await fs.readFile('path_to_file');
// const message = 'npm init -y => npm install --save-dev nodemon => npm init @eslint/config@latest';


// console.log(message);