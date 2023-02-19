import React from "react";
import { useFormikContext } from 'formik';

import styled from "styled-components";
import { SelectAsyncMonth } from "../../index";
import { allMonth} from "../../../helpers";
import { IOption } from '../../../types'
import { FieldStyled } from './styles';

interface Values {
    month: IOption;
    income: IOption;
    salary: number;
    year: number;
}
interface ITimeForm {
}

const TimeForm:React.FC<ITimeForm> = () => {
    const {
        values: { month, income, year, salary },
        handleBlur,
        setFieldValue
    } = useFormikContext<Values>();
    const onChangeYear = (num: string, setFieldValue: Function) => {
        setFieldValue('year',  num, true)
    }
    return (
        <TimeStyles>
            <MonthStyles>
                <Label>Month</Label>
                <SelectAsyncMonth
                    value={month}
                    onBlur={handleBlur}
                    options={allMonth.map((el, index) => ({
                        value: (index + 1).toString(),
                        label: el
                    }))}
                    onChange={(value: IOption) => setFieldValue('month', value, false)}
                    name='income' />
            </MonthStyles>
            <YearStyles>
                <Label>Year</Label>
                <FakeInput>
                    202
                    <FieldStyled
                        primary
                        value={year}
                        onBlur={handleBlur}
                        maxLength={1}
                        onChange={({target}) =>  onChangeYear(target.value, setFieldValue)}
                        name="year"
                        placeholder={'hello'} />
                </FakeInput>
            </YearStyles>
        </TimeStyles>
    )
}
export default TimeForm;


const Label = styled.label`
  color: white;
  font-size: 22px;
  margin: 15px 0;
`;

const TimeStyles = styled.div`
  display: flex;
`
const MonthStyles = styled.div`
  display: flex;
  width: 500px;
  flex-direction: column;
  margin-right: 20px;
`
const YearStyles = styled.div`
  display: flex;
  flex-direction: column;
`
const FakeInput = styled.div`
  color: #3B4554;
  font-size: 18px;
  line-height: 24px;
  border: 1px solid #3B4554;
  border-radius: 4px;
  background: white;
  padding: 6px 20px;
  display: flex;
  align-items: center;
`
