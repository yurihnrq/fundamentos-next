import styles from '../styles/Header.module.css';

const Header = props => {
    return (
        <header className={styles.header}>
            <h1>
                {props.title}
            </h1>
            <nav className={styles.nav}>
                {props.children}
            </nav>
        </header>
    )
}

export default Header;
