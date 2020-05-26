import * as http from 'http';
import express, {NextFunction, Request, Response} from 'express';

const App = express();

console.log('Server running at http://127.0.0.1:3000/');

App.listen(3000);
