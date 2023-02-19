import axios from "axios";
import React, { useState, useEffect } from "react";
import { ChartComponent, ModalComponent, AddSalaryFormModal, ButtonRegular } from "../components";
import {APP_URL} from "../constants";

const DmytroPage = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        axios.get(`${APP_URL}/dmytro-rows`).then(({data}) => {
            if (data?.data) {
                setData(data?.data?.values)
            }
        })
    }, [setData]);

    return (
        <div>
            <div>Вітаю Дімочка</div>
            <ChartComponent data={data} />
            <ButtonRegular text={'got sallary'} onClick={() => setOpen(true)} />
            {open && data && (
                <ModalComponent onClick={() => setOpen(false)}>
                    <AddSalaryFormModal companies={data[0]} />
                </ModalComponent>
            )}
        </div>
    );
}

export default DmytroPage;
