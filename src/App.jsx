import { Post } from './Post'
import { Header } from './components/Header'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Diego Fernandes" content="Criando um app CRA do zero" />
          <Post author="Diego Fernandes" content="Criando um app CRA do zero" />
          <Post author="Diego Fernandes" content="Criando um app CRA do zero" />
        </main>
      </div>
    </div>
  )
}
