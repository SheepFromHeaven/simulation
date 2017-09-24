import {getInitialState} from '../core/AppState';
import {setup} from '../core/setup';
import {addBuilding} from '../core/buildings/buildings.actions';
import {BLUEPRINTS} from '../core/blueprints';
import {BUILDING_TYPE} from '../core/types/BUILDING_TYPES';
import {startApp} from '../core/game/game.actions';
import * as express from 'express';
import * as  http from 'http';
import * as ioServer from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = ioServer(server);

app.get('/', function(req, res){
  const state = store.getState();
  sendJson(res, state);
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.emit('init', store.getState());
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

server.listen(8081, function(){
  console.log('listening on *:8081');
});

const broadcastAction = (action) => {
  io.emit('action', action);
};

const actionBroadcaster = store => next => action => {
  broadcastAction(action);
  return next(action);
};

const store = setup.createReduxStore(getInitialState(), [actionBroadcaster]);
const updateLoop = setup.startUpdateLoop(store, 1000);

store.dispatch(addBuilding(BLUEPRINTS[BUILDING_TYPE.WOODCUTTER]));
store.dispatch(startApp());






const sendJson = (res, content: any) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(content));
};

