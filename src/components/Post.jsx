import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'

const commentsData = [
  {
    id: 1,
    content: 'Muito bom esse post! Obrigado por compartilhar!',
  },
]

export function Post({ author, publishedAt, content }) {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const [comments, setComments] = useState(commentsData)
  const [newCommentText, setNewCommentText] = useState('')

  function handleCreateNewComment(event) {
    event.preventDefault()

    const commentContent = event.target.elements[0].value

    const newComment = {
      id: Date.now(),
      content: commentContent,
    }

    setComments([...comments, newComment])
    setNewCommentText('')
  }

  function handleNewCommentTextChange(event) {
    setNewCommentText(event.target.value)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.text}>{line.text}</p>
          }

          if (line.type === 'link') {
            return (
              <a
                key={line.text}
                href={line.text}
                target="_blank"
                rel="noopener noreferrer"
              >
                {line.text}
              </a>
            )
          }

          return null
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <textarea
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentTextChange}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment key={comment.id} content={comment.content} />
        ))}
      </div>
    </article>
  )
}
