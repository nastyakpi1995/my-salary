import {currentMonth} from "../helpers";

export const getInitialSalaryValues = (companies: string[]) => ({
    month: { value: new Date().getMonth(), label: currentMonth },
    income: { value: '2', label: companies[2] },
    year: 3,
    salary: 0
})
