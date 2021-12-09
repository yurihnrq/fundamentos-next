import NavButton from './NavButton';
import Header from './Header';
import Content from './Content';
import styles from '../styles/Layout.module.css';

const Layout = ({title, children}) => {
    return (
        <div className={styles.layout}>
            <Header title={title}>
                <NavButton link="/" text="Inicio"/>
                <NavButton link="/jsx" text="JSX"/>
                <NavButton link="/style" text="Style"/>
                <NavButton link="/navigation" text="Navegação"/>
                <NavButton link="/apis" text="APIs"/>
                <NavButton link="/ssr" text="SSR"/>
                <NavButton link="/ssg" text="SSG"/>
            </Header>
            <Content>
                {children}
            </Content>
        </div>
    )
};

export default Layout;
