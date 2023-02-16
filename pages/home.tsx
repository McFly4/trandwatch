import styles from "../styles/home.module.scss";
import data from "./api/item";
import Image from "next/image";
import { useState } from "react";

const home = () => {
    const items = data;
    const [search, setSearch] = useState("");
    const handleSearch = (e: any) => {
        setSearch(e.target.value);
    };

    const result = items.filter((item: any) => {
        return item?.name.toLowerCase().includes(search.toLowerCase() || "");
    });

    return (
        <>
            <div className={styles.video}>
                <video className="fullscreen-video" muted autoPlay loop>
                    <source src="/rolex.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={styles.video__text}>
                    <h1>time to get a new watch</h1>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.item__filtered}>
                    <h2>Filtered by:</h2>
                    <input
                        type="text"
                        placeholder="Search..."
                        onChange={handleSearch}
                    />
                </div>
                <div className={styles.item__cards}>
                    {result.map((item) => (
                        <div key={item.id} className={styles.item__cards__card}>
                            <div className={styles.img}>
                                <Image
                                    src={`${item.image}`}
                                    alt={`${item.name}`}
                                    fill
                                />
                            </div>
                            <h3 style={{ marginBottom: "15px" }}>
                                {item.name}
                            </h3>
                            <p>{item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default home;
