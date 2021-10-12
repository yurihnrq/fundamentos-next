import Link from 'next/link';
import Header from './Header';
import Content from './Content';
import styles from '../styles/Layout.module.css';

const Layout = props => {
    return (
        <div className={styles.layout}>
            <Header title={props.title}>
                <Link href="/">
                    Inicio
                </Link>
                <Link href="/jsx">
                    JSX
                </Link>
                <Link href="/style">
                    Style
                </Link>
            </Header>
            <Content>
                {props.children}
            </Content>
        </div>
    )
};

export default Layout;
