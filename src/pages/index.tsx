import styles from '../styles/homepage.module.scss'
import Link from "next/link"


function HomePage() {
  return (
    <>
      <div className={styles.homepageContainer}>
        <h1>Soup Swap</h1>
        <p>
          Sign up to drop drop the swap swap</p>
        <Link href="/recipes/new"> Add a recipe now!!</Link>
      </div>
    </>
  );
}



export default HomePage;
