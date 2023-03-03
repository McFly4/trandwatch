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

export default function Id() {
    const router = useRouter();
    const { id } = router.query;
    const watch = data.find((item) => item.id === id);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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

            <div className={styles.item}>
                <div className="item__img">
                    <img src={watch?.image} alt="" />
                </div>
                <div className={styles.item__description}>
                    <h1>{watch?.name}</h1>
                    <h3>{watch?.price}</h3>
                    <Button variant="outlined" onClick={handleClickOpen}>
                        Contactez le vendeur
                    </Button>
                </div>
            </div>
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
