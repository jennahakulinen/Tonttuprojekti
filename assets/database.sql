DROP TABLE IF EXISTS Favourites;
DROP TABLE IF EXISTS Category;
DROP TABLE IF EXISTS RecipeIng;
DROP TABLE IF EXISTS Unit;
DROP TABLE IF EXISTS Rates;
DROP TABLE IF EXISTS Recipe_Category;
DROP TABLE IF EXISTS Steps;
DROP TABLE IF EXISTS Ingredients;
DROP TABLE IF EXISTS Recipe;
DROP TABLE IF EXISTS Cookmas_User;


CREATE TABLE Cookmas_User
(
  Username VARCHAR(255) NOT NULL,
  Email VARCHAR(255) NOT NULL,
  Password CHAR(60) NOT NULL,
  Hometown VARCHAR(255) NOT NULL,
  ProfilePic TEXT NOT NULL,
  Role INT NOT NULL,
  PRIMARY KEY (Username)
);

CREATE TABLE Recipe
(
  File TEXT NOT NULL,
  RecipeName VARCHAR(255) NOT NULL,
  RecipeID INT NOT NULL,
  Description TEXT NOT NULL,
  CookTime INT NOT NULL,
  Username VARCHAR(255) NOT NULL,
  PRIMARY KEY (RecipeID),
  FOREIGN KEY (Username) REFERENCES Cookmas_User(Username)
);

CREATE TABLE Ingredients
(
  IngredientName VARCHAR(255) NOT NULL,
  IngredientID INT NOT NULL,
  PRIMARY KEY (IngredientID)
);

CREATE TABLE Steps
(
  StepID INT NOT NULL,
  StepDescription TEXT NOT NULL,
  StepNumber INT NOT NULL,
  RecipeID INT NOT NULL,
  PRIMARY KEY (StepID),
  FOREIGN KEY (RecipeID) REFERENCES Recipe(RecipeID)
);

CREATE TABLE Category
(
  CategoryID INT NOT NULL,
  CategoryName VARCHAR(255) NOT NULL,
  PRIMARY KEY (CategoryID)
);

CREATE TABLE Rates
(
  RateID INT NOT NULL,
  Rated INT NOT NULL,
  Username VARCHAR(255) NOT NULL,
  RecipeID INT NOT NULL,
  PRIMARY KEY (RateID),
  FOREIGN KEY (Username) REFERENCES Cookmas_User(Username),
  FOREIGN KEY (RecipeID) REFERENCES Recipe(RecipeID)
);

CREATE TABLE Unit
(
  UnitName CHAR(5) NOT NULL,
  PRIMARY KEY (UnitName)
);

CREATE TABLE RecipeIng
(
  Quantity INT NOT NULL,
  RecipeIngID INT NOT NULL,
  UnitName CHAR(5) NOT NULL,
  IngredientID INT NOT NULL,
  RecipeID INT NOT NULL,
  PRIMARY KEY (RecipeIngID),
  FOREIGN KEY (UnitName) REFERENCES Unit(UnitName),
  FOREIGN KEY (IngredientID) REFERENCES Ingredients(IngredientID),
  FOREIGN KEY (RecipeID) REFERENCES Recipe(RecipeID)
);

CREATE TABLE Recipe_Category
(
  RecipeID INT NOT NULL,
  CategoryID INT NOT NULL,
  PRIMARY KEY (RecipeID, CategoryID),
  FOREIGN KEY (RecipeID) REFERENCES Recipe(RecipeID),
  FOREIGN KEY (CategoryID) REFERENCES Category(CategoryID)
);

CREATE TABLE Favourites
(
  Username VARCHAR(255) NOT NULL,
  RecipeID INT NOT NULL,
  PRIMARY KEY (Username, RecipeID),
  FOREIGN KEY (Username) REFERENCES Cookmas_User(Username),
  FOREIGN KEY (RecipeID) REFERENCES Recipe(RecipeID)
);