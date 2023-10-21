import RootLayout from "@/Component/layout/RootLayout";


const foodDetail = ({food}) => {
    return (
        <div className="h-screen">
            <h1>menu id{food?.id}</h1>
            <h1> { food?.title}</h1>
        </div>
    );
};

export default foodDetail;

foodDetail.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
     const res = await fetch("http://localhost:5000/menu");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const foods = await res.json();

    if (!Array.isArray(foods)) {
     
      console.warn("foods is not an array:", foods);
      return { paths: [], fallback: false };
    }

    const paths = foods.map((food) => ({
      params: { foodId: food?.id },
    }));

    return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
  const {params} =context
    const res = await fetch(`http://localhost:5000/menu/${params.foodId}`);
    
    const data = await res.json();

    return {
      props: {
        food: data,
      },
      revalidate: 10,
    };
  
};