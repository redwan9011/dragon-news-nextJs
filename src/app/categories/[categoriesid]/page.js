import React from 'react';

const DynamicNewspage = ({params,searchParams}) => {
    console.log(searchParams);
    return (
        <div>
            {/* dynamic page {params?.categoriesid} <br /> */}
            dynamic page {searchParams.category}
        </div>
    );
};

export default DynamicNewspage;