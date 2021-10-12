import styles from '../styles/Content.module.css'

const Layout = props => {
    return (
        <main className={styles.content}>
            {props.children}
        </main>
    )
};

export default Layout;
