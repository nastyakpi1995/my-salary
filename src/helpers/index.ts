import {FormikValues} from "formik";

export const allMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const currentData = new Date();

export const currentMonth = allMonth[currentData.getMonth()];
export const getOnlyNum = (value: string) => {
    const onlyNumber = value.replace(/\D+/g, '');
    return onlyNumber === '' ? 0 : +onlyNumber;
};


export const formattedNumber = (number: number) =>
    number.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

export const getSalaryData = (values: FormikValues, companies: string[]) => {
    const correctNumb = values.salary.toString().replace(/,/g, '');

    return companies.map((el, index) => {
        if (index === 0) {
            const { month, year } = values;
            return `${month.label} 202${year}`;
        }

        if (index === 1) {
            return (+correctNumb * 0.98) - 1430;
        }

        if (index === +values.income.value) {
            return correctNumb;
        }

        return '';
    });
}
