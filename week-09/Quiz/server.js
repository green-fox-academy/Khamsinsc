'use strict';

const express = require('express');
const app = express();
const PORT = 8000;
const path = require('path');
const database = require('./database');
const connection = database.connection;

app.use(express.json());
app.use(express.urlencoded());
app.use('/assets', express.static('assets'));

app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/questions', (req, res) => {
  res.sendFile(path.join(__dirname, './questions.html'));
});

app.get('/api/game', (req, res) => {//return a random question with its answers with JSON file from a database
  connection.query(
    'SELECT * FROM questions;',
    (err, rows1) => {
      if (err) {
        console.error(err);
      } else if (rows1.length > 0) {
        let questionQuantity = rows1.length;
        let randomQuestion = rows1[getRandomIndex(questionQuantity)];        
        connection.query(
          `SELECT * FROM answers
          WHERE question_id = '${randomQuestion['id']}';`,
          (err, rows2) => {
            if (err) {
              console.error(err);
            } else {
              res.send(processQuestion(randomQuestion, rows2));
            }
          },
        );
      } else {
        res.status(404).send();
      }
    },
  );
});

app.get('/api/questions', (req, res) => {  //return all questions database select * ...
  connection.query(
    'SELECT * FROM questions;',
    (err, resQuestions) => {
      if (err) {
        console.error(err);
      } else if (resQuestions.length > 0) {
        res.status(200).send(resQuestions)
      } else {
        res.status(404).send();
      }
    },
  );
});

app.post('/api/questions', (req, res) => {  //insert into database with data variable
  const data = req.body;
  connection.query(
    `INSERT INTO questions (question)
    VALUES ('${data.question}');`
    ,
    (err, ansOne) => {      
      if (err) {
        console.error(err);
      } else {
        data.answers.forEach((element) => {
          connection.query(
            `INSERT INTO answers (question_id, answer, is_correct)
            VALUES (${ansOne["insertId"]}, '${element.text}', '${element.is_correct}');`,
            (err, ansTwo) => {
              if (err) {
                console.error(err);
              }
            }
          )
        });
      } res.status(200).send('query successfully processed');
    }
  )
})

app.delete('/api/questions/:id', (req, res) => {
  const id = req.params.id;
  connection.query(`
  SELECT * FROM questions
  WHERE id = '${id}'`, (err, rows) => {
      err ?
        console.log(err) : (rows.length < 1) ?
          res.status(404).send() : rows.length > 0 ?
            deleteQuestion(id, res) : res.status(500).send();
    }
  )
})

app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
  console.log(`Database is ${connection === null ? 'NOT ' : ''}available`);
});

const getRandomIndex = (length) => {
  return Math.floor(Math.random() * length);
}

const processQuestion = (question, answers) => {
  answers.forEach((element, index) => {
    Object.defineProperty(element, `answer_${index}`,
      Object.getOwnPropertyDescriptor(element, 'answer'));
    delete element['answer'];
  });

  const responseObject = {
    'id': question.id,
    'question': question.question,
    'answers': answers
  }
  return responseObject;
}

const deleteQuestion = (id, res) => {
  connection.query(
    `DELETE FROM questions
     WHERE id = '${id}';
     DELETE FROM answers
     WHERE question_id ='${id}';`,
    (err, rows) => {
      err ? console.error(err) : res.status(204).send();
    },
  )
}