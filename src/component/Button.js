import React from 'react';
import { Button as AntButton } from 'antd';

export default function Button ({label,onClick}){

    return(

        <AntButton type="primary" onClick={onClick}>{label}</AntButton>

    )

}