import AllFood from '@/Component/AllFood/AllFood';
import Loading from '@/Component/Loading/Loading';
import RootLayout from '@/Component/layout/RootLayout';


const AllMenu = ({ menuData }) => {
    if (!menuData) {
        <Loading></Loading>
  }
  console.log(menuData, "menu page");
    return (
        <div>
            <AllFood menuData={ menuData} />
        </div>
    );
};

export default AllMenu;

AllMenu.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("https://encouraging-pants-dog.cyclic.app/menus");
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return {
    props: {
      menuData: data,
    },
  };
};
