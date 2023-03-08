import { useState } from "react";
import { useRouter } from "next/router";
import data from "../api/item";
import styles from "./id.module.scss";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PayMethod from "@/components/Payment/PayMethod";

export default function Id() {
    const [open, setOpen] = useState(false);
    const [buyNow, setBuyNow] = useState(false);
    const router = useRouter();
    const { id } = router.query;
    const watch = data.find((item) => item.id === id);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const openPayMethod = () => {
        setBuyNow(true);
        setTimeout(() => {
            window.scrollBy({
                top: 500,
                behavior: "smooth",
            });
        }, 1000);
    };

    return (
        <>
            <div className={styles.video}>
                <video muted autoPlay loop>
                    <source src={watch?.video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={styles.video__text}>
                    <h1>{watch?.name}</h1>
                    <h3>{watch?.subname}</h3>
                </div>
            </div>

            <>
                <div className={styles.item}>
                    <div className="item__img">
                        <img src={watch?.image} alt="" />
                    </div>
                    <div className={styles.item__description}>
                        <h1>{watch?.name}</h1>
                        <h4>{watch?.desc1}</h4>
                        <h3>{watch?.price}</h3>

                        <div className={styles.buttons}>
                            <Button
                                variant="contained"
                                color="success"
                                onClick={openPayMethod}
                            >
                                <p>Acheter maintenant</p>
                            </Button>
                            <Button
                                variant="outlined"
                                onClick={handleClickOpen}
                            >
                                <p>Contactez le vendeur</p>
                            </Button>
                        </div>
                    </div>
                </div>

                {buyNow ? (
                    <div className={styles.stepper}>
                        <div className={styles.item__buynow}>
                            <PayMethod />
                            <Button
                                color="error"
                                onClick={() => setBuyNow(false)}
                            >
                                Annuler
                            </Button>
                        </div>
                    </div>
                ) : null}
            </>
            <Dialog open={open} onClose={handleClose} fullWidth={true}>
                <DialogTitle>Informations sur le vendeur :</DialogTitle>
                <DialogContent>
                    <DialogContentText
                        sx={{
                            fontSize: "15px",
                            color: "#fff",
                            marginTop: "15px",
                        }}
                    >
                        Nom : {watch?.cname}
                    </DialogContentText>
                    <DialogContentText
                        sx={{
                            fontSize: "15px",
                            color: "#fff",
                            margin: "20px 0",
                        }}
                    >
                        Mail : {watch?.cemail}
                    </DialogContentText>
                    <DialogContentText sx={{ fontSize: "15px", color: "#fff" }}>
                        Téléphone : {watch?.cphone}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    );
}
