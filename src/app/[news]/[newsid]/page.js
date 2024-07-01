import { getSingleNews } from "@/Utils/getSingleNews";


const NewsDetails =async ({params}) => {
    const {data} = await getSingleNews(params.newsid)
    console.log(data);
    return (
        <div>
            {params.newsid}
            {params.news}

            <h1>{data.title}</h1>
        </div>
    );
};

export default NewsDetails;