const express  = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3306;

const app = express();

app.use(bodyParser.json());

//MySQL connection
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    port     : '3000',
    password : 'Clau4232342!',
    database : 'challenge'
  });

  //Check connection
  connection.connect (error=> {
      if (error) throw error;
      console.log('Database server running on port $PORT');
  })
  

  app.listen(PORT,()=> console.log('Server running on port ${PORT}'));


  //Route
  app.get('/', (request,response)=> {
    response.send('Welcome to my api!');
  });

  //List Revenues
  app.get('/revenues', (request,response)=> {
    const sql = 'SELECT * FROM REVENUES';
    connection.query(sql, (error, results) => {
      if (error) throw error;
      if (results.length > 0) {
        response.json(results);
      } else {
        response.send('No revenues found');
      }
    });
  });

  //List Expense
  app.get('/expenses', (request,response)=> {
    const sql = 'SELECT * FROM EXPENSES';
    connection.query(sql, (error, results) => {
      if (error) throw error;
      if (results.length > 0) {
        response.json(results);
      } else {
        response.send('No Expenses found');
      }
    });
  });

  

  //Register New Revenue
  app.post('/newRevenue', (request,response)=> {
    const sql = 'INSERT INTO REVENUES SET ?';
    
    const RevenuesObj = {
      //RevenueDate:  request.body.date, -> Default value 
      RevenueDescription: request.body.description,
      RevenueAmount: request.body.amount
    }

    connection.query(sql, RevenuesObj, error => {
      if(error) throw error;
      response.send('New revenue registered')
    })
  });

  //Register New Expense
  app.post('/newExpense', (request,response)=> {
    const sql = 'INSERT INTO EXPENSES SET ?';
    
    const ExpenseObj = {
      //ExpenseDate:  request.body.date, -> Default value 
      ExpenseDescription: request.body.description,
      ExpenseAmount: request.body.amount
    }

    connection.query(sql, ExpenseObj, error => {
      if(error) throw error;
      response.send('New expense registered')
    })
  });


  /*

  //Update Revenue
  app.get('/', (request,response)=> {
    const sql = '';
    response.send('Welcome to my api!');
  });

  //Delete Revenue
  app.get('/', (request,response)=> {
    const sql = '';
    response.send('Welcome to my api!');
  });




  app.get('/', (request,response)=> {
    const sql = '';
    response.send('Welcome to my api!');
  });

  //Update Expense
  app.get('/', (request,response)=> {
    response.send('Welcome to my api!');
  });
  
  //Delete Expense
  app.get('/', (request,response)=> {
    const sql = '';
    response.send('Welcome to my api!');
  });
  
  

  */