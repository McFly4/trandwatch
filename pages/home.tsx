import styles from "../styles/home.module.scss";
import data from "./api/item";
import data2 from "./api/brand";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Home = () => {
    const items = data;
    const brands = data2;
    const [search, setSearch] = useState("");
    const [brand, setBrand] = useState("");
    const handleSearch = (e: any) => {
        setSearch(e.target.value);
    };

    const handleFilters = (e: any) => {
        setBrand(e.target.value);
    };

    const filteredItems = items.filter((item: any) => {
        return (
            item?.name.toLowerCase().includes(search.toLowerCase() || "") &&
            item?.brand.toLowerCase().includes(brand.toLowerCase() || "")
        );
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
                    <div className={styles.item__filtered__brand}>
                        <Autocomplete
                            multiple
                            id="checkboxes-tags-demo"
                            options={brands}
                            onChange={(event, value: any) =>
                                setBrand(value[0]?.name || "")
                            }
                            getOptionLabel={(option: any) => option.name}
                            renderOption={(props, option, { selected }) => (
                                <li {...props}>{option.name}</li>
                            )}
                            style={{ width: 500 }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Checkboxes"
                                    placeholder="Favorites"
                                />
                            )}
                        />
                    </div>
                    <TextField
                        label="Rechercher"
                        variant="standard"
                        onChange={handleSearch}
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
                <div className={styles.item__cards}>
                    {filteredItems.map((item) => (
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

export default Home;
