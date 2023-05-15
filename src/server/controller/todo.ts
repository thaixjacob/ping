import { read } from '@db-crud-todo'
import { NextApiRequest, NextApiResponse } from 'next'

function get(_req: NextApiRequest, res: NextApiResponse) {
  const ALL_TODOS = read()

  res.status(200).json({ todos: ALL_TODOS })
}

export const todoController = {
  get,
}
