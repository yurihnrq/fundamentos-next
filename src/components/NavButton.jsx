import Link from 'next/link';
import styles from '../styles/NavButton.module.css'

const NavButton = ({link, text}) => {

    return (
        <div className={styles.navbutton}>
            <Link href={link}>
                {text}
            </Link>
        </div>
    )
};

export default NavButton;
