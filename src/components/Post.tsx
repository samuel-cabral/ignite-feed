import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

interface PostAuthor {
  avatarUrl: string
  name: string
  role: string
}

interface PostContent {
  type: 'paragraph' | 'link'
  text: string
}

interface PostProps {
  author: PostAuthor
  publishedAt: Date
  content: PostContent[]
}

export function Post({ author, publishedAt, content }: PostProps) {
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

  const [comments, setComments] = useState([{ id: 1, content: 'teste' }])
  const [newCommentText, setNewCommentText] = useState('')

  function handleCreateNewComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const commentContent = event.currentTarget.comment.value

    const newComment = {
      id: Date.now(),
      content: commentContent,
    }

    setComments([...comments, newComment])
    setNewCommentText('')
  }

  function handleNewCommentTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('O comentário não pode estar vazio')
  }

  function deleteComment(commentId: number) {
    const commentsWithoutDeletedOne = [
      ...comments.filter((comment) => comment.id !== commentId),
    ]
    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentTextEmpty = newCommentText.trim() === ''

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
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentTextEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  )
}