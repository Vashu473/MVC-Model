// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);
// const { Server } = require('socket.io');
// const socket = new Server(server);
// const mongoose = require('mongoose');
// const insertUser = require('./fast/fast.controller.ts');
// socket.of('/socket').on('connection', socket => {
//   socket.on('disconnect', () => {});
// });
// mongoose.connect(process.env.MONGODB_URI);
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log('db connected');
//   console.log('setting change streams');
//   const fastChangeStreams = connection.collection('fastusers').watch();
//   const fastWinnerChangeStreams = connection.collection('fastwinners').watch();
//   const fastPeriodChangeStreams = connection.collection('fasts').watch();
//   // for period
//   fastPeriodChangeStreams.on('change', change => {
//     switch (change.operationType) {
//       case 'update':
//         const fastData = change?.updateDescription?.updatedFields?.period;
//         console.log('hi socket--', change?.updateDescription);
//         socket.of('/socket').emit('period', fastData);
//         break;
//       default:
//         break;
//     }
//   });
//   //  for user
//   fastChangeStreams.on('change', change => {
//     switch (change.operationType) {
//       case 'insert':
//         const fastData = {
//           _id: change.fullDocument._id,
//           user_id: change.fullDocument.user_id,
//           period: change.fullDocument.period,
//           delivery: change.fullDocument.delivery,
//           amount: change.fullDocument.amount,
//           fee: change.fullDocument.fee,
//           gameName: change.fullDocument.gameName,
//           color: change.fullDocument.color,
//           select: change.fullDocument.select,
//         };
//         console.log('hi socket winner');
//         socket.of('/socket').emit('winList', fastData);
//         break;
//       default:
//         break;
//     }
//   });
//   //  for winner
//   fastWinnerChangeStreams.on('change', change => {
//     switch (change.operationType) {
//       case 'insert':
//         const fastData = change.fullDocument.select;
//         console.log('hi socket user', change.fullDocument);
//         socket.of('/socket').emit('winuser', fastData);
//         break;
//       default:
//         break;
//     }
//   });
// });
// function startSocket() {
//   server.listen(8000, () => {
//     console.log('socket listening');
//   });
// }
// module.exports = startSocket;
