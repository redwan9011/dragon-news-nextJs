import { getSingleNews } from "@/Utils/getSingleNews";
import { Avatar, Box, Container, Grid, Typography,  } from "@mui/material";
import Image from "next/image";



const NewsDetails = async ({ params }) => {
    const { data } = await getSingleNews(params.newsid)
    // console.log(data);
    const { title, _id, thumbnail_url,image_url,details , author} = data || {}
    return (
        <div className="mt-10 pb-10">
            <Box>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item lg={6}>
                        
                          <Image src={thumbnail_url} width={200} height={0} alt="sports" className="w-full"></Image>

                          <div className="grid grid-cols-2 gap-5 mt-2">
                          <Image src={image_url} width={200} height={0} alt="sports" className="w-full h-40"></Image>
                          <Image src={thumbnail_url}  width={200} height={0} alt="sports" className="w-full h-40"></Image>

                          </div>
                        </Grid>


                        <Grid item lg={6}>
                            <Typography className="font-bold text-2xl">{title}</Typography>
                           <Box sx={{
                             display: "flex",
                             alignItems: "center",
                             gap: 3
                           }}>
                           <Avatar alt="author"  src={author.img} />
                           <Typography >- By {author.name}</Typography>
                           <Typography >Publish:{author.published_date}</Typography>
                           </Box>
                          

                            <Typography className="whitespace-pre-line text-justify text-gray-600 mt-3">{details}</Typography>

                            <Typography variant="h6" className="mt-2">``Many desktop publishing packages and web page editors now use their default model text</Typography>
                            <Typography variant="h6" className="">-- Redwan Islam</Typography>
                        </Grid>
                       
                    </Grid>

                </Container>
            </Box>
        </div>
    );
};

export default NewsDetails;