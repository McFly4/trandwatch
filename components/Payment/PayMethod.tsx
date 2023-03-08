import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./pay.module.scss";
import { TextField } from "@mui/material";

const steps = [
    "Informations personelles",
    "Informations de livraison",
    "Paiement",
];

export default function PayMethod() {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [adress, setAdress] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expDate, setExpDate] = useState("");
    const [cvc, setCvc] = useState("");

    const isStepSkipped = (step: any) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    function generateRandomString() {
        let result = "";
        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;

        for (let i = 0; i < 5; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }

        return result;
    }

    return (
        <Box sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {} as any;
                    const labelProps = {} as any;
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1, marginTop: "50px" }}>
                        Votre commande est la numéro #
                        {generateRandomString().toUpperCase()}
                        <br /> <br />
                        Un mail de confirmation a été envoyé à {email}.
                        <br /> <br />
                        TRANDWATCH vous remercie pour votre achat. <br />A
                        bientôt sur notre site.
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        <Box sx={{ flex: "1 1 auto" }} />
                        <Button onClick={handleReset}>Terminer</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        {
                            {
                                0: (
                                    <div className={styles.form}>
                                        <div className={styles.form__group}>
                                            <TextField
                                                label="Prénom"
                                                variant="standard"
                                                value={firstName}
                                                onChange={(e) =>
                                                    setFirstName(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className={styles.form__group}>
                                            <TextField
                                                label="Nom"
                                                variant="standard"
                                                value={lastName}
                                                onChange={(e) =>
                                                    setLastName(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className={styles.form__group}>
                                            <TextField
                                                label="Email"
                                                variant="standard"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className={styles.form__group}>
                                            <TextField
                                                label="Téléphone"
                                                variant="standard"
                                                value={number}
                                                onChange={(e) =>
                                                    setNumber(e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>
                                ),
                                1: (
                                    <div className={styles.form}>
                                        <div className={styles.form__group}>
                                            <TextField
                                                label="Adresse"
                                                variant="standard"
                                                value={adress}
                                                onChange={(e) =>
                                                    setAdress(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className={styles.form__group}>
                                            <TextField
                                                label="Ville"
                                                variant="standard"
                                                value={city}
                                                onChange={(e) =>
                                                    setCity(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className={styles.form__group}>
                                            <TextField
                                                label="Code postal"
                                                variant="standard"
                                                value={zipCode}
                                                onChange={(e) =>
                                                    setZipCode(e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>
                                ),
                                2: (
                                    <div className={styles.form}>
                                        <div className={styles.form__group}>
                                            <TextField
                                                label="Numéro de carte"
                                                variant="standard"
                                                value={cardNumber}
                                                onChange={(e) =>
                                                    setCardNumber(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className={styles.form__group}>
                                            <TextField
                                                label="Date d'expiration"
                                                variant="standard"
                                                value={expDate}
                                                onChange={(e) =>
                                                    setExpDate(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className={styles.form__group}>
                                            <TextField
                                                label="CVC"
                                                variant="standard"
                                                value={cvc}
                                                onChange={(e) =>
                                                    setCvc(e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>
                                ),
                            }[activeStep]
                        }
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Retour
                        </Button>
                        <Box sx={{ flex: "1 1 auto" }} />

                        <Button
                            disabled={
                                email.length < 5 ||
                                firstName.length < 2 ||
                                lastName.length < 2
                            }
                            onClick={handleNext}
                        >
                            {activeStep === steps.length - 1
                                ? "Terminer"
                                : "Suivant"}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}
