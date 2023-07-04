import { type TodoTitle } from '../types'
import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: (title: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>
        Todo
{/*         <img style={{ width: '80px', height: 'auto', marginLeft: '1rem' }} src="https://www.shutterstock.com/image-vector/short-yellow-pencil-realistic-isolated-260nw-2196759167.jpg" /> */}
      </h1>
      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}
