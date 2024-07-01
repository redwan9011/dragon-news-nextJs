import { getAllCategories } from "@/Utils/getAllCategories";
import { Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";


const CategoryList = async() => {
    const {data:categories} = await getAllCategories()
    // console.log(data);

    return (
        <div>
           
            <Typography variant="h5" marginBottom={1}> Categories</Typography>
            <Divider></Divider>
            <Stack rowGap={1} marginTop={3}>

                {
                    categories.map(category => 
                    <Button variant="outlined" key={category._id}>
                       <Link href={`/categories/news?category=${category.title.toLowerCase()}`}> {category.title}</Link>
                        
                        </Button>)
                }
            </Stack>
            <h1></h1>
        </div>
    );
};

export default CategoryList;