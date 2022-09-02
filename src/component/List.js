import React from 'react';
import {  List as AntList,Skeleton} from 'antd';
import Button from './Button';

export default function List ({data,handleEdit,handleDel}){

    return(

        <AntList
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
            <AntList.Item
          actions={[<Button  label="Edit" onClick={handleEdit}/>, <Button label="more" onClick={handleDel}/>]}
        >
          

         
            <AntList.Item.Meta
             
              title={item.name}
            />
           
         
          </AntList.Item>
        )}
      />

    )

}