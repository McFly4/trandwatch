import styles from "./nav.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav__container}>
                <Link href="/">
                    <p>Nos montres</p>
                </Link>
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
