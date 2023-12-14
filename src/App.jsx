import { Post } from './Post'
import { Header } from './components/Header'

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Samuel Cabral"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, placeat. Excepturi nulla velit perferendis distinctio nisi iusto repellat eius sunt fugiat omnis quae fugit odit nesciunt expedita odio, quaerat dolores."
      />
      <Post
        author="Mayrla Cabral"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, placeat. Excepturi nulla velit perferendis distinctio nisi iusto repellat eius sunt fugiat omnis quae fugit odit nesciunt expedita odio, quaerat dolores."
      />
    </div>
  )
}
