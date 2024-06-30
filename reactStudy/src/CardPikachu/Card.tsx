import styles from './Card.module.css'


function Card(){
    return(
            <div className={styles.card}>
                <img className={styles.cardImage} src="https://static.printler.com/cache/c/8/8/e/6/2/c88e62cb33a7b6e20b60af964d362a10883a43a1.jpg" alt="profile picture" />
                <h2 className={styles.cardTitle}>Bro Code</h2>
                <p className={styles.cardText}>I make Youtube videos and play video games</p>
            </div>
    );
}

export default Card