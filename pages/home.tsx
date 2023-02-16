import styles from "../styles/home.module.scss";

const home = () => {
    return (
        <div className={styles.video}>
            <video className="fullscreen-video" muted autoPlay loop>
                <source src="/rolex.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.video__text}>
                <h1>time to get a new watch</h1>
            </div>
        </div>
    );
};

export default home;
