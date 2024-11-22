import { Database } from './database.js';
import crypto from 'node:crypto';
import { buildRoutePath } from './utils/build-route-path.js';

const database = new Database()

export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/users'),
    handler: (req, res) => {
      const {search} = req.query

      const users = database.select('users', search ? {
        name: decodeURIComponent(search),
        email: decodeURIComponent(search)
      } : null)

      const responseFormatted = JSON.stringify(users)
      
      return res.setHeader('Content-Type', 'application/json').end(responseFormatted);
    }
  },
  {
    method: 'POST',
    path:  buildRoutePath('/users'),
    handler: (req, res) => {
      const {body} = req

      if(!(body?.name && body?.email)) {
        return res.writeHead(400).end();
      }
    
      const newUser = {
        id: crypto.randomUUID(),
        name: body.name,
        email: body.email
      }

      database.insert('users', newUser)

      return res.writeHead(201).end();
    }
  },
  {
    method: 'DELETE',
    path:  buildRoutePath('/users/:id'),
    handler: (req, res) => {
      const {id} = req.params

      database.delete('users', id)

      return res.writeHead(204).end();
    }
  },
  {
    method: 'PUT',
    path:  buildRoutePath('/users/:id'),
    handler: (req, res) => {
      const {id} = req.params

      if(!id && (!!req.body?.name || !!req.body?.email)) {
        return res.writeHead(400).end();
      }

      database.update('users', id, {
        name: req.body.name,
        email: req.body.email
      })

      return res.writeHead(204).end();
    }
   
  }
]