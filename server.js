const express = require("express");
const app = express();
const path = require("path");
const { syncAndSeed, client } = require("./db");
app.use(express.static(path.join(__dirname, "public")));
app.use(require('method-override')('_method'));
app.use(express.urlencoded({ extended: false}));

//Homepage
app.get('/', async(req, res, next) => {
    

    const html = 
    `<!DOCTYPE html>
    <html>
    <head>
    <div class="container">
    <img src="/skyline.png"/> <h1 class ="bottom-left"> World's Tallest Buildings (2021) </h1> 
    </div>
    <title> </title>
    <link rel="stylesheet" href="/style.css" />
    
    </head>

    <body>
    <div class="news-list">
       <header> Top 5 Tallest Buildings </header>
        ${await buildings).map(post => `
        <div>
            <p>
            <a href='/posts/${post.id}'><span class="news-position"> #${post.id}. </span>${post.name}</a>
            <small> ${post.location} </small>
            </p>
            
        </div>`
        ).join('')}
    </div>
    </body>
    </html>`

    res.send(html);
});

//Get Table for buildings
const findBuildings = async() => (await client.query("SELECT * FROM products")).rows;

const start = async() => {
    try {
        await client.connect();
    await syncAndSeed();
    const port = process.env.PORT || 1500;
    app.listen(port, () => console.log(`Listening on ${port}`));
    } catch (error) {
        console.log(error);
    }
};

start();