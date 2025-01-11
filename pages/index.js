import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Astronomy Picture of the Day</title>
        <meta name="description" content="Astronomy Picture of the Day (Remade by Sam Cheng) (Remake edited by Adarsh R. Kumar) | Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <a href="https://apod.nasa.gov"><h1>Astronomy Picture of the Day</h1></a>
      <p id={styles.description}>Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer. Hover over the image to zoom it in, and click it to open it in a new tab.</p>
      
      <a style={{color: "white", background: 
      "red"}} id={styles.error} href="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY">{data.code}{data.msg}</a>
      <a href={data.hdurl} target="_blank" id={styles.imageContainer}><img src={data.hdurl} /></a>

      <a href={data.url} target="_blank"><h2>{data.title}</h2></a>
      <h3>{data.date} | © {data.copyright}</h3>

      <p>{data.explanation}</p>

      <footer>
        <p>Remade by <a href="https://samalander.dev">Sam Cheng</a> | Remake edited by <a href="https://adarshrkumar.dev">Adarsh R. Kumar</a> | <a href="https://apod.nasa.gov">Original Site</a> | <a href="/__repl">Source Code</a>
        </p>
      </footer>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const req = await fetch(`https://api.nasa.gov/planetary/apod?api_key=GLT8cN2Z6dtQhoudnomQqY12vhTmyMsvnK5ATez7`);
  const data = await req.json();

  return {
    props: { data },
  }
}