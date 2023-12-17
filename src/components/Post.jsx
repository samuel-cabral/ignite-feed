import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/samuel-cabral.png"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Samuel Cabral</strong>
            <span>Front-End Developer</span>
          </div>
        </div>

        <time title="15 de dezembro às 19:20" dateTime="2023-12-16 19:20:30">
          Publicado há 2h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
          🚀.
        </p>
        <p>
          👉 <a>jane.design/doctorcare</a>
        </p>
        <p>
          <a>#novoprojeto</a>
          <a>#nlw</a>
          <a>#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
}
