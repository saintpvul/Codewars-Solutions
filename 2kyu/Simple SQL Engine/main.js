/*

In this kata you will create an object which can execute a query written in a simplified form of Structured Query Language (SQL) against a simple database.

Simplified SQL
We will be using a greatly simplified version of SQL. Your query engine will need to handle SQL queries comprising only the following:

A SELECT clause, with any number of columns,
A FROM clause, which identifies the primary table to select records from,
Any number of optional JOIN clauses which join another table to the table identified by the FROM clause, all of which will be treated as INNER JOINs.
An optional WHERE clause with only one condition.
For clarity, here are some common SQL features you will NOT need to support

Aliases (AS or [bracketed names]),
CASTing,
ORDER BY, GROUP BY, COUNT, or EXISTS,
IN or LIKE, or any other operator other than simple equality, inequality and greater than/less than,
AND or OR; only a single WHERE condition is allowed
All table and column names will be simple strings with no spaces. Constant strings will be written in normal SQL format, with single quotes and escaping internal single quotes by doubling them (for example, 'a ''string'' containing quotes'). For values, Haskell will use string constants only; numerical strings will, when necessary, have leading zeroes for correct ordering.

Here is an EBNF grammar of the SQL queries you will need to be able to handle.

query         =  select, ws, from, [ ws, join ], [ ws, where ] ;
select        =  "SELECT ", column-id, [ { ", ", column-id } ] ;
from          =  "FROM ", table-name, [ { ws, join } ] ;
join          =  "JOIN ", table-name, " on ", value-test ;
where         =  "WHERE ", value-test ;
value-test    =  value, comparison, value;
column-id     =  table-name, ".", column-name ;
table-name    = ? a valid SQL table name ? ;
column-name   = ? a valid SQL column name ? ;
value         =  column-id | const
comparison    =  " = " | " > " | " < " | " <= " | " >= " | " <> " ;
const         =  ? a number ? | ? a SQL single-quoted string ? ;
ws            = " " | "\n" | ws, ws ;
Note that SQL is not case sensitive; SELECT and select are equivalent.

For this kata, a "valid SQL table/column name" is a name containing only letters, numbers, and the '_' character, with no spaces (represented in JS RegExp as /[a-zA-Z0-9_]+/).

The Database
The database will be a simple object (read 'association list' for Haskell) passed to the constructor of your SQL engine. Each table will be a property in the object, with the table name as the property key. The tables will be arrays of objects; each object is a row, and each property on the object is a column in that row. (This isn't the most efficient possible structure, but it's easy to work with.) An example database is provided with the test cases.

Results
Your execute method must return an array of objects. Each object must have a property for each column-id in the SELECT clause of the query, set to the selected value for that column.

Test Helpers
Because we are not implementing ORDER BY, and the built-in Test.assertSimilar doesn't work correctly with arrays of objects when the objects are in different orders, I have provided a assertSimilarRows method which does the same thing as Test.assertSimilar but works with the objects your execute method will return.

SQL Primer
If you're not familiar with SQL, here's a primer on the parts of a SQL query relevent to this kata, kindly provided by wthit56:

SELECT
A SELECT clause dictates which columns from which tables each row should contain. For example, the clause SELECT movies.title, directors.name gives each row two columns: movies.title would take the title value from the movies table, and directors.name would take the name value from the directors table. Only tables included in the query using FROM and JOIN clauses can be selected from. (NOTE: SELECT * will not be used in this kata.)

FROM
A FROM clause identifies the primary table to start from. For example, the clause FROM movies would include the movies table in the query. This allows the movies table to be read by the SELECT clause.

JOIN
Any number of JOIN clauses (including 0; JOIN clauses are not required for a valid query) may define other related tables that should be included, along with a conditional statement (see below) dictating how the tables relate to one another. For example JOIN directors ON directors.ID = movies.directorID would link the table directors with the table movies, joining each row where the directors.ID value and movies.directorID value are the same.

Multiple JOIN clauses can be used, for example

JOIN actors_in_movies ON actors_in_movies.movieID = movies.ID
JOIN actors ON actors.ID = actors_in_movies.actorID
This would allow the matching values from tables actors_in_movies and actors to be read by the SELECT clause.

If any row in either table could match multiple times, multiple rows should be included in the results. For this kata, if a row does not have a matching row in a related table, that row should be omitted from the results entirely. This is known in other SQL languages as an INNER JOIN.

WHERE
An optional WHERE clause may describe a conditional statement (see below) that dictates which rows will be returned. If the conditional statement is true for a particular row, it will be returned. If it is not true, the row will be omitted from the results.

Conditional Statements
Conditional statements have two values and a comparison operator. For example, [value1] >= [value2] will be true if value1 is greater than or equal to value2, and false if not. These values can be one of two things:

A column value, referring to a table used by the query. For example, movies.ID = actors_in_movies.movieID will compare a movies row's ID value to an actors_in_movies row's movieID value.
A constant value, either a number or a string for this kata (Haskell: string only). A number will simply be a series of digits, perhaps with decimals. For example, 101 and 1.01 are both numerical contants. A string will be a number of characters wrapped in single-quotes. To represent literal single-quote characters within a string, two single-quotes will be used. For example, 'string' and 'string with ''single quotes'' embedded' are both string constants.
Normally, one side or the other will be a column value, and the other will be a column value or a constant. The comparison operator will be one of the following: = (equal), < (less than) <= (less than or equal to), > (greater than), >= (greater than), <> (not equal).

Here's a pseudo-code example:

database = {
    movies: [
        { id: 1, title: "The Matrix", cert: 15 },
        { id: 2, title: "Titanic", cert: 12 },
        { id: 3, title: "Alien", cert: 18 }
    ]
    actors_in_movies: [
        { actorID: 1, movieID: 1 },
        { actorID: 2, movieID: 1 },
        { actorID: 3, movieID: 2 },
        { actorID: 4, movieID: 3 }
    ],
    actors: [
        { id: 1, name: "Keanu Reeves" },
        { id: 2, name: "Carrie-Anne Moss" },
        { id: 4, name: "Sigourney Weaver" }
    ]
};

SELECT movies.title, actors.name
FROM movies
JOIN actors_in_movies ON actors_in_movies.movieID = movies.ID
JOIN actors ON actors_in_movies.actorID = actors.ID
WHERE movies.cert <= 15


* FROM *                                         * First JOIN *                 * Second JOIN *                              * WHERE *
[ movies ]                                      [ actors_in_movies ]            [ actors ]                                  
 { id: 1, title: "The Matrix", cert: 15 }        { actorID: 1, movieID: 1 }      { id: 1, name: "Keanu Reeves" }             true
 \* mutiple matching rows in actors_in_movies;   { actorID: 2, movieID: 1 }      { id: 2, name: "Carrie-Anne Moss" }         true
   row duplicated \*
 { id: 2, title: "Titanic", cert: 12 }           { actorID: 3, movieID: 2 }      \* no matching row found; entire row
                                                                                   (including movies and actors_in_movies)
                                                                                   is omitted
 { id: 3, title: "Alien", cert: 18 }             { actorID: 4, movieID: 3 }      { id: 4, name: "Sigourney Weaver" }         false

* SELECT *
 { movies.title: "The Matrix", actors.name: "Keanu Reeves" }
 { movies.title: "The Matrix", actors.name: "Carrie-Anne Moss" }


*/

// solution
