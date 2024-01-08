import { Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { ThumbsUp } from '@phosphor-icons/react/dist/ssr'
import { Avatar } from './Avatar'

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/samuel-cabral.png"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Samuel Cabral</strong>
              <time
                title="15 de dezembro às 19:20"
                dateTime="2023-12-16 19:20:30"
              >
                Cerca há 2h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
