import { getCategoryNews } from '@/Utils/getCategoryNews';
import React from 'react';

const DynamicNewspage = async({params,searchParams}) => {
    // console.log(searchParams);
    const { data} = await getCategoryNews(searchParams.category);
    // console.log(data);
    return (
        <div>
            {/* dynamic page {params?.categoriesid} <br /> */}
            <h1>Total <strong>{searchParams.category}</strong> News: {data.length}</h1>
        </div>
    );
};

export default DynamicNewspage;