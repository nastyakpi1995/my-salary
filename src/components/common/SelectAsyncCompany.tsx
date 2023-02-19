import React, {useMemo, useCallback} from 'react';
import AsyncSelect from 'react-select/async';

export interface IOption {
     value: string;
     label: string;
}

interface IMyAsyncSelect {
    onChange: any;
    onBlur: any;
    name: string;
    value: IOption;
    data: string[];
}
const filterCompany = (inputValue: string, options: IOption[]) => {
    return options.filter((i) =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
};

 const MyAsyncSelect:React.FC<IMyAsyncSelect> = ({ onChange, onBlur, name, value, data }) => {
     const options = useMemo(() => {
         const filterData = data.filter(el => el !== 'Сума').filter(el => el)
         return filterData.map((el, index) => ({ value: index + 2, label: el }))
     }, [data]);

     const loadOptions = useCallback(
         (
             inputValue: string,
             callback: (options: any) => void
         ) => {
             setTimeout(() => {
                 callback(filterCompany(inputValue, options as any));
             }, 1000);
         },
         [],
     );

    return (
        <AsyncSelect
            value={value as any}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            cacheOptions
            loadOptions={loadOptions}
            defaultOptions />
    )
 }

export default MyAsyncSelect
