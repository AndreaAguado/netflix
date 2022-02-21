import { Link } from 'react-router-dom';
import styles from '../styles/layout/NoFoundPage.module.scss';

const NoFoundPage = () => {
    return (
        <main className={styles.main}>
            <h2 className={styles.title}>Nothing to see here</h2>
            <Link to="/" title="Go to homepage" className={styles.link}>Return to homepage</Link>
        </main>
    )
}
export default NoFoundPage;