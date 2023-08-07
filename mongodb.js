//const  MongoClient  = require('mongodb').MongoClient;// you can assume this or like line 4
const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://kashishverma:YAkUwNxa9eHfIugP@issuetracker.clxpqt9.mongodb.net/issueTracker?retryWrites=true&w=majority';

let db;

async function connectToDatabase() {
  try {
    const mongoClient = await new MongoClient(uri).connect();

    console.log('{har har Mahadev} Successfully connected to MongoDB Atlas!');

    db = mongoClient.db('issueTracker');

  } catch (error) {
    console.error('Connection to MongoDB Atlas failed!', error);
    throw error;
  }
}

function getDbConnection() {
  if (!db) {
    throw new Error('MongoDB connection not established. Call connectToDatabase() first.');
  }
  return db;
}

module.exports = { connectToDatabase, getDbConnection };
