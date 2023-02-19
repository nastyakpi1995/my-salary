import React, { useCallback } from 'react';
import AsyncSelect from 'react-select/async';
import { IOption } from '../../types';

interface IMyAsyncSelect {
    onChange: any;
    onBlur: any;
    name: string;
    value: IOption;
    options: IOption[];
}
const filterCompany = (inputValue: string, options: IOption[]) => {
    return options.filter((i) =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
};

const SelectAsyncMonth:React.FC<IMyAsyncSelect> = ({ onChange, onBlur, name, value, options }) => {

    const loadOptions = useCallback(
        (
            inputValue: string,
            callback: (options: any) => void
        ) => {
            setTimeout(() => {
                callback(filterCompany(inputValue, options));
            }, 1000);
        },
        [],
    );

    return (
        <AsyncSelect
            value={value}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            cacheOptions
            loadOptions={loadOptions}
            defaultOptions />
    )
}

export default SelectAsyncMonth
