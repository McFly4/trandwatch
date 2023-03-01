import { useRouter } from "next/router";
import data from "../api/item";
import styles from "./id.module.scss";

export default function Id() {
    const router = useRouter();
    const { id } = router.query;
    const watch = data.find((item) => item.id === id);
    return (
        <div className={styles.watch}>
            <p>{watch?.name}</p>
        </div>
    );
}
