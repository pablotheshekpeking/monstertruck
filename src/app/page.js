import styles from './page.module.css';
import { Providers } from './provider';

export default function Home() {
  return (
    <div className={styles.customFont}>
      <Providers />
    </div>
  )
}
