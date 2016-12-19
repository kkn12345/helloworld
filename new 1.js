use demo_ind;
db.employee.insert({employee_id:50001,F_name:'Narendra',L_Name:'Shukla',Email:'narendra@edureka.in',phone_number:9739205326,hire_date:'04-Feb-2014',Job_id:'A3',Salary:2000000,commission_pct:0,manager_id:'101',Department_id:10});
db.employee.insert({employee_id:50002,F_name:'Mark',L_Name:'Shukla',Email:'mark@edureka.in',phone_number:1111111111,hire_date:'03-Feb-2014',Job_id:'A2',Salary:3000000,commission_pct:0,manager_id:'100',Department_id:20});
db.employee.insert({employee_id:50003,F_name:'Priyanka',L_Name:'Shukla',Email:'priyanka@edureka.in',phone_number:222222222,hire_date:'02-Feb-2014',Job_id:'A4',Salary:1000000,commission_pct:0,manager_id:'102',Department_id:30});
db.employee.insert({employee_id:50004,F_name:'Neha',L_Name:'Shukla',Email:'neha@gmail.com',phone_number:3333333333,hire_date:'01-Feb-2014',Job_id:'A5',Salary:900000,commission_pct:0,manager_id:'104',Department_id:40});
db.employee.find().Pretty()
db.employee.getIndexes()
db.employee.createIndex()
/*********************************How to create index*******************************************************************/

db.collection_name.ensureIndex({key:1})

/************************** Single Field Indexes ******************************************************************************************/


db.employee.ensureIndex({ "phone_number":1 })

db.employee.createIndex({ "email":1 })


db.employee.ensureIndex( { "phone_number": 1 });
db.employee.dropIndex( { "phone_number": 1 });
db.employee.dropIndexes();

db.employee.createIndex( { "phone_number": 1 },{"name":"rakesh"} )
db.employee.getIndexes()

db.employee.ensureIndex( { "phone_number": 1 },{"name":"TestIndex"} )

db.employee.createIndex({ "phone_number": 1 },{"name":"TestIndex"} )

/************************ Multikey Index*************************************************************************************************/

db.employee.insert({employee_id:50005,F_name:'Sneha',L_Name:'Tiwary',Email:'sneha@gmail.com',phone_number:4444444444,hire_date:'02-Feb-2012',Job_id:'A5',Salary:900000,commission_pct:0,manager_id:'104',Department_id:40,test:['A','B','C','D']})

>db.employee.ensureIndex( { test:1} )
>db.employee.getIndexes()


/********************************* Hashed Indexes **************************************************************************************/

db.employee.ensureIndex( { _id : "hashed" } )

db.employee.ensureIndex( { F_name : "hashed" } )

/*****************Example Creating Text Index ************************************************/

Prepare Data Points:
db.posts.insert([
{
   "post_text": "enjoy the mongodb articles on Simplilearn",
   "tags": [
      "mongodb",
      "simplilearn"
   ]
},

{
   "post_text": "enjoy the nosql articles on Simplilearn",
   "tags": [
      "nosql",
      "simplilearn"
   ]
},

{
   "post_text": "enjoy the cassandra articles on Simplilearn",
   "tags": [
      "cassandra",
      "simplilearn"
   ]
},

{
   "post_text": "enjoy the hbase articles on Simplilearn",
   "tags": [
      "hbase",
      "simplilearn"
   ]
}])


db.posts.createIndex({post_text:"text"})

db.posts.find({$text:{$search:"simplilearn"}})

db.posts.find({tags:{$regex:"simpl"}})    

db.posts.find({tags:{$regex:"hbase"}})     

db.posts.find({tags:{$regex:"cassandra"}})



/*******************************************General Purpose aggregation **********************************************************/
Count, Distinct Group
/*******************************************Count the number of documents*********************************************************/
Count the number of documents
db.zips.count();
db.zips.count({city:"ACMAR"});
db.zips.count({state:"AL"});
/********************************************Distinct Documents******************************************************************/
db.zips.distinct("state");
db.zips.distinct("state").length


Terminology and Concepts
The following table presents the various SQL terminology and concepts and the corresponding MongoDB terminology and concepts.
SQL Terms/Concepts     MongoDB Terms/Concepts
database     database
table     collection
row     document or BSON document
column     field
index     index
table joins     embedded documents and linking
primary key
Specify any unique column or column combination as primary key.
    
primary key
In MongoDB, the primary key is automatically set to the _id field.
aggregation (e.g. group by)     
aggregation pipeline



db.zips.aggregate( { $group :
                         { _id : "$state",
                           totalPop : { $sum : "$pop" } } },
                       { $match : {totalPop : { $gte : 10*1000*1000 } } } )
                       
                       
db.zips.aggregate( { $group :
                         { _id : "$state",
                           totalPop : { $sum : "$pop" } } },
                       { $match : {totalPop : { $gte : 10000000} } } )
from Markanday Shukla (Trainer) to All Participants:
db.zips.aggregate( { $group :
                         { _id : { state : "$state", city : "$city" },
                           pop : { $sum : "$pop" } } },
                       { $group :
                       { _id : "$_id.state",
                         avgCityPop : { $avg : "$pop" } } } )
from Markanday Shukla (Trainer) to All Participants:
/***********************************************Pipeline Agregartion another example******************************************************/ 
 db.books.find();
 db.books.insert([
  { _id: 147, title: "War and Peace", ISBN: 9780307266934 },
  { _id: 148, title: "Anna Karenina", ISBN: 9781593080273 },
  { _id: 149, title: "Pride and Prejudice", ISBN: 9783526419358 },
  { _id: 150, title: "Host and Ghost", ISBN: 111111111 },
  { _id: 151, title: "Ashiqe hai zaman", ISBN: 22222222 },
  { _id: 152, title: "Sarabi", ISBN: 233333333333333 },
  { _id: 153, title: "Aurat", ISBN: 944444444444444 },
  { _id: 154, title: "Art of living", ISBN: 955555555555 },
  { _id: 155, title: "Aayurved Medicine", ISBN: 9666666666666 },
  { _id: 156, title: "Pride of India", ISBN: 97777777777},
  { _id: 157, title: "Ashok Samrat", ISBN: 98888888888888888 },
  { _id: 158, title: "The great India", ISBN: 999999999999 },
  { _id: 159, title: "Jungle Kng", ISBN: 912121212121212 },
  { _id: 160, title
from Markanday Shukla (Trainer) to All Participants:
 db.books.insert({ _id: 200, title: "War and Peace", ISBN: 9780307266934 });
 db.books.insert({ _id: 201, title: "Anna Karenina", ISBN: 9781593080273 });
 db.books.insert({ _id: 203, title: "Pride and Prejudice", ISBN: 9783526419358 });
from Markanday Shukla (Trainer) to All Participants:
/****************Group By ******************************************************/
SELECT ISBN, COUNT(*)  FROM books GROUP BY ISBN;
db.books.aggregate([
  { $group: {
    // group by ISBN
    _id: "$ISBN",
    // increment nbBooks for each document
    nbBooks: { $sum: 1 }
  } }
]);
db.books.aggregate([
    { "$group": {
        "_id": {
            "ISBN": "$ISBN",
            "Title": "$title"
        },
        "bookCount": { "$sum": 1 }
    }}
    
    
db.books.aggregate([
  { $group: {
    // group by author_id
    _id: "$ISBN",
    // increment nbBooks for each document
    nbBooks: { $sum: 1 }
  } }
]);


db.likes.insert([
{
   _id: 1001,
   title: 'MongoDB Overview', 
   description: 'MongoDB is no sql database',
   by_user: 'Simplilear',
   url: 'http://www.simplilear.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 100
},
{
   _id: 1002,
   title: 'NoSQL Overview', 
   description: 'No sql database is very fast',
   by_user: 'Edueka',
   url: 'http://www.edureka.co',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 10
},
{
   _id: 1003,
   title: 'Neo4j Overview', 
   description: 'Neo4j is no sql database',
   by_user: 'Neo4j',
   url: 'http://www.neo4j.com',
   tags: ['neo4j', 'database', 'NoSQL'],
   likes: 750
},
{
   _id: 1004,
   title: 'Hbase Overview', 
   description: 'HBase is no sql database',
   by_user: 'Hbase',
   url: 'http://www.apache.hbase.com',
   tags: ['hbase', 'database', 'NoSQL'],
   likes: 710
}
])
db.likes.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : 1}}}])

-----------------------

Expression    Description    Example
_______________________________________________
$sum    
Sums up the defined value from all documents in the collection.    
db.likes.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : "$likes"}}}])

$avg    
Calculates the average of all given values from all documents in the collection.    
db.likes.aggregate([{$group : {_id : "$by_user", num_tutorial : {$avg : "$likes"}}}])

$min    
Gets the minimum of the corresponding values from all documents in the collection.    
db.likes.aggregate([{$group : {_id : "$by_user", num_tutorial : {$min : "$likes"}}}])

$max    
Gets the maximum of the corresponding values from all documents in the collection.    
db.likes.aggregate([{$group : {_id : "$by_user", num_tutorial : {$max : "$likes"}}}])


$push    
Inserts the value to an array in the resulting document.    
db.likes.aggregate([{$group : {_id : "$by_user", url : {$push: "$url"}}}])

$addToSet    
Inserts the value to an array in the resulting document but does not create duplicates.    
db.likes.aggregate([{$group : {_id : "$by_user", url : {$addToSet : "$url"}}}])

$first    
Gets the first document from the source documents according to the grouping. 
db.likes.aggregate([{$group : {_id : "$by_user", first_url : {$first : "$url"}}}])

$last    
Gets the last document from the source documents according to the grouping. 
Typically this makes only sense together with some previously applied “$sort”-stage.    
db.likes.aggregate([{$group : {_id : "$by_user", last_url : {$last : "$url"}}}])

/********************************************MapReduce *******************************************************************/
Syntax:
>db.collection.mapReduce(
                        function() {emit(key,value);},  //map function
                        function(key,values) {return reduceFunction}, 
                                {   //reduce function
                                    out: collection,
                                    query: document,
                                    sort: document,
                                    limit: number
                                }
                        )
                        
map:     is a javascript function that maps a value with a key and emits a key-valur pair
reduce:     is a javscript function that reduces or groups all the documents having the same key
out:     specifies the location of the map-reduce query result
query:     specifies the optional selection criteria for selecting documents
sort:     specifies the optional sort criteria
limit:     specifies the optional maximum number of documents to be returned

from Markanday Shukla (Trainer) to All Participants:
/************************************************MapReduce**********************************************************************/
Inserting data to MongoDB.
Let’s first create two books with the following commands.
db.books.insert( {name : "Understanding JAVA", pages : 100});
db.books.insert( {name : "Understanding JSON", pages : 200});
db.books.insert( {name : "Understanding XML", pages : 300});
db.books.insert( {name : "Understanding Web Services", pages : 400});
db.books.insert( {name : "Understanding Axis2", pages : 150});
db.books.insert( {name : "Understanding JAVA", pages : 100});
db.books.insert( {name : "Understanding JSON", pages : 200});
db.books.insert( {name : "Understanding XML", pages : 300});
db.books.insert( {name : "Understanding Web Services", pages : 400});
db.books.insert( {name : "Understanding Axis2", pages : 150});

from Markanday Shukla (Trainer) to All Participants:
Writing the Map function
Let’s process this library collection in a way that, we need to find the number of books having 
pages less 250 pages and greater than that.
var map = function() {
var category;
if ( this.pages >= 250 )
category = 'Big Books';
else
category = "Small Books";
emit(category, {name: this.name});
};

from Markanday Shukla (Trainer) to All Participants:
Writing the Reduce function.
var reduce = function(key, values) {
var sum = 0;
values.forEach(function(doc) {
sum += 1;
});
return {books: sum};
};
Running MapReduce against the books collection.
var count  = db.books.mapReduce(map, reduce, {out: "book_results"});
