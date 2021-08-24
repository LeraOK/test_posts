import React, {useState} from "react";


export const useTextArea = (initialValue)=>{
    const [value, setValue] = useState(initialValue);
    const onChange = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setValue(e.target.value);
    }
    return{
        value,onChange
    }
}
