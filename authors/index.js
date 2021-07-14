const express = require("express");

const app = express();

const port = 8000;
app.listen(port, () => {
  console.info("Server started on port :" + port);
});

// app.get("/", (req, res) => {
//   res.send("Authors API");
// });

// app.get('/authors/1', (req, res) => {
//   res.send("Lawrence Nowell, UK");
// });

// app.get('/authors/2', (req, res) => {
//     res.send("William Shakespeare, UK");
//   });

//   app.get('/authors/3', (req, res) => {
//     res.send("Charles Dickens, US");
//   });

//   app.get('/authors/4', (req, res) => {
//     res.send("Osccar Wilde, UK");
//   });


// smart work exemple Exercice 2

app.get('/authors/:id', (req,res) => {
    const id = req.params.id
    const authors = [
      'Lawrence Nowell, UK',
      'William Shakespeare, UK',
      'Charles Dickens, US',
      'Oscar Wilde, UK',
    ]
    res.send(authors[id - 1])
  })

//   Exercice_No_3

  app.get('/authors/:id/books', (req, res) => {
    const id = req.params.id
    const books = [
      'Beowulf',
      'Hamlet, Othello, Romeo and Juliet, MacBeth',
      'Oliver Twist, A Christmas Carol',
      'The Picture of Dorian Gray, The Importance of Being Earnest',
    ]
    res.send(books[id - 1])
  })

//   Exercice_No_4


  const authors = [
    {
      name: 'Lawrence Nowell',
      nationality: 'UK',
      books: ['Beowulf'],
    },
    {
      name: 'William Shakespeare',
      nationality: 'UK',
      books: ['Hamlet', 'Othello', 'Romeo and Juliet', 'MacBeth'],
    },
    {
      name: 'Charles Dickens',
      nationality: 'US',
      books: ['Oliver Twist', 'A Christmas Carol'],
    },
    {
      name: 'Oscar Wilde',
      nationality: 'UK',
      books: ['The Picture of Dorian Gray', 'The Importance of Being Earnest'],
    },
  ]
  
  app.get('/json/authors/:id', (req, res) => {
    const id = req.params.id
    res.json({
      name: authors[id - 1].name,
      nationality: authors[id - 1].nationality,
    })
  })
  
  app.get('/json/authors/:id/books', (req, res) => {
    const id = req.params.id
    res.json({
      books: authors[id - 1].books,
    })
  })



app.get("*", (req, res) => {
  res.send("404 -Error");
});
