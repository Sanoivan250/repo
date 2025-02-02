const express = require('express')
const app = express();
app.set('view engine','ejs');
app.use(express.static('public'))


// ............Blog datas ...........
const blogs=[
    {
      "title": "Ajax Davis",
      "description": "developer and wanna be writer"
    },
   {
      "name": "Thomas (Ajax) Davis"
    },
   [
      {
        "title": "An Open Source Computer vision model to identify the Australian Aboriginal Flag [Tutorial]",
        "source": "https://raw.githubusercontent.com/australia/aboriginal-flag-cv-model/master/README.md",
        "publishedDate": "2020-09-05"
      },
      {
        "title": "Introducing JSON Blog",
        "source": "https://gist.github.com/thomasdavis/db7db8d07ccb086504261802edf3069a/raw/introducing.md?cb=1",
        "publishedDate": "2020-08-05"
      },
      {
        "title": "Organizing your application using Modules (require.js)",
        "source": "https://raw.githubusercontent.com/thomasdavis/backbonetutorials/gh-pages/_posts/2011-10-10-organizing-backbone-using-modules.md",
        "publishedDate": "2014-04-16"
      },
      {
        "title": "Markdown Example",
        "source": "https://gist.githubusercontent.com/thomasdavis/03b712d36272c9e79535c583bf8e70b8/raw/1aa2f00e62ac85d1f51d0792facb1af8db4b6ef3/second.md",
        "publishedDate": "2014-04-16"
      }
    ],
    [
      {
        "title": "About",
        "source": "https://gist.githubusercontent.com/thomasdavis/7451150385ee571e4ef87ffcefabc583/raw/about.md"
      },
      {
        "title": "Contact",
        "source": "https://gist.githubusercontent.com/thomasdavis/855f6d9869236b89de4a87a636ab3ac2/raw/contact.md"
      }
    ]
]

app.get('/',(req,resp)=>{
    resp.status(200).render('index',{title:'Home ||page',blogs})
})
app.use((req,resp)=>{
    resp.status(404).render('404');
})
// set server .......
app.listen(5000,console.log('Im listening on port 5000'))