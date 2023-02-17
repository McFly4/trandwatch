import styles from "./nav.module.scss";
import Image from "next/image";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav__container}>
                <p>Nos montres</p>
                <Image
                    src="/trandwatch.png"
                    alt="Logo"
                    width={450}
                    height={80}
                />
                <p>À propos</p>
            </div>
        </nav>
    );
}
