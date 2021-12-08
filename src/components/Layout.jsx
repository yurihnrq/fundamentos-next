import NavButton from './NavButton';
import Header from './Header';
import Content from './Content';
import styles from '../styles/Layout.module.css';

const Layout = props => {
    return (
        <div className={styles.layout}>
            <Header title={props.title}>
                <NavButton link="/" text="Inicio"/>
                <NavButton link="/jsx" text="JSX"/>
                <NavButton link="/style" text="Style"/>
                <NavButton link="/navigation" text="Navegação"/>
                <NavButton link="/apis" text="APIs"/>
            </Header>
            <Content>
                {props.children}
            </Content>
        </div>
    )
};

export default Layout;
