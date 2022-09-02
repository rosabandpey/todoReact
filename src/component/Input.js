
import {Input as AntInput} from 'antd';


import React from 'react';

export default function Input ({value,onChange,name}){

    return(

        <AntInput placeholder="Basic usage" value={value} onChange={onChange} name={name}/>

    )

}