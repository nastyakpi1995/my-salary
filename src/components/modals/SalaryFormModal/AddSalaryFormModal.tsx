import React, { useState } from "react";
import {Formik, FormikValues, useFormikContext} from 'formik';

import styled from "styled-components";
import { ButtonRegular, SelectAsyncCompany } from "../../index";
import { getOnlyNum, getSalaryData } from "../../../helpers";
import { IOption } from '../../../types'
import { postAddColumnSalaryRequest } from "../../../response";
import { getInitialSalaryValues } from "../../../constants/formAddSalaryData";
import TimeForm from "./TimeForm";
import { FieldStyled } from './styles';

interface Values {
    month: IOption;
    income: IOption;
    salary: number;
    year: number;
}
interface ISalaryForm {
    loading: boolean;
    companies: string[]
}
const SalaryForm:React.FC<ISalaryForm> = ({ loading, companies }) => {
    const {
        values: { month, income, year, salary },
        handleBlur,
        setFieldValue,
        handleSubmit
    } = useFormikContext<Values>();

    return (
        <MyForm onSubmit={handleSubmit} >
            <TimeForm />
            <Label>Income</Label>
            <SelectAsyncCompany
                value={income}
                onBlur={handleBlur}
                data={companies}
                onChange={(value: IOption) => setFieldValue('income', value, false)}
                name='income' />
            <Label>Salary</Label>
            <FieldStyled
                value={salary}
                onBlur={handleBlur}
                onChange={({target}: any) => {
                    setFieldValue('salary', getOnlyNum(target.value).toLocaleString(), true)
                }}
                name="salary"
                placeholder="0" />
            <ButtonRegular text={loading ? 'loading...' + 'Submit' : 'Submit'} type={'submit'} />
        </MyForm>
    )
}

interface IAddSalaryFormModal {
    companies: string[]
}

const AddSalaryFormModal:React.FC<IAddSalaryFormModal> = ({companies}) => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (values: FormikValues) => {
        setLoading(true);
        const appendData = getSalaryData(values, companies);
        try {
            const { status } = await postAddColumnSalaryRequest(appendData);
            if (status) {
                setIsSuccess(true);
            }
        } catch (error) {
            console.log('Error posting salary request:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Wrapper>
            <Formik initialValues={getInitialSalaryValues(companies)} onSubmit={handleSubmit}>
                <SalaryForm loading={loading} companies={companies} />
            </Formik>
        </Wrapper>
    );
};
export default AddSalaryFormModal;

const Wrapper = styled.div`
  background: #101B2A;
  width: 100%;

  padding: 40px;
  border-radius: 14px;
  display: flex;
  flex-direction: row;
`

const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 900px;
`;

const Label = styled.label`
  color: white;
  font-size: 22px;
  margin: 15px 0;
`;
