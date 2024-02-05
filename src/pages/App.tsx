import * as React from 'react';

//console.log("env=", process.env.NODE_ENV)
//
export default function Page() { 
    return (
    <html>
        <head>
            <title>welcome</title>
            <link href="/public/static/main.css" rel="stylesheet" />
        </head>
        <body>
            <div id="app"></div>
            <script type="module" src="/public/static/main.js"></script>
        </body>
    </html>
    );
}
