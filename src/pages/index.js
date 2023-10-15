import RootLayout from "../Component/RootLayout";

const Home = () => {
  return (
    <div>
      <h1 className="bg-black">this home page</h1>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};