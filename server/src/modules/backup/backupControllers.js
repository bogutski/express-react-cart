import MongoBackup from 'mongodb-atlas-backup';
import message from './../messages/messages';

// Create an instance of the database connection
const backup = new MongoBackup({
  user: process.env.MONGO_ATLAS_USER,
  password: process.env.MONGO_ATLAS_PWD,
  replicaSet: process.env.MONGO_ATLAS_REPLICA_SET,
  nodes: [
    process.env.MONGO_ATLAS_NODE_0,
    process.env.MONGO_ATLAS_NODE_1,
    process.env.MONGO_ATLAS_NODE_2,
  ],
});

export const backupDump = (req, res) => {
  backup.dump();

  res.status(200)
    .json(message.success());
};

export const backupRestore = (req, res) => {
  backup.restore();

  res.status(200)
    .json(message.success());
};
