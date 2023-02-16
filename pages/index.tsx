import type { NextPage } from "next";
import styles from "../styles/home.module.scss";
import Main from "./home";

const Home: NextPage = () => {
    return (
        <div className={styles.Home}>
            <Main />
        </div>
    );
};

export default Home;
