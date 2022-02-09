create database challenge;

CREATE TABLE REVENUES (
    RevenueId 			INT AUTO_INCREMENT,
    RevenueDate 		DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
	RevenueDescription 	VARCHAR(200) NOT NULL,
    RevenueAmount		FLOAT NOT NULL,		
	CONSTRAINT PK_Revenue PRIMARY KEY (RevenueId)
);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Clau4232342!'

Select * from REVENUES

CREATE TABLE EXPENSES (
    ExpenseId 			INT AUTO_INCREMENT,
    ExpenseDate 		DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
	ExpenseDescription 	VARCHAR(200) NOT NULL,
    ExpenseAmount		FLOAT NOT NULL,		
	CONSTRAINT PK_Expense PRIMARY KEY (ExpenseId)
);

Select * from EXPENSES