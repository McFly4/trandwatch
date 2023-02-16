import styles from "./nav.module.scss";
import Image from "next/image";
import TextField from "@mui/material/TextField";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav__menu}>
                <p>Toutes nos montres</p>
                <p>Rolex</p>
                <p>Tag Hueuer</p>
            </div>
            <div className={styles.nav__logo}>
                <Image
                    src="/trandwatch.png"
                    alt="Logo"
                    width={450}
                    height={80}
                />
            </div>
            <div className={styles.nav__search}>
                <TextField
                    label="Rechercher"
                    variant="standard"
                    InputLabelProps={{
                        style: {
                            color: "white",
                        },
                    }}
                    InputProps={{
                        style: {
                            color: "white",
                            borderColor: "white",
                        },
                    }}
                />
            </div>
        </nav>
    );
}
