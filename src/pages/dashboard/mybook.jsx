import DashBoard from "@/Component/layout/DashBoard";

const MYBook = () => {
  return (
    <div>
      <h1>this my book</h1>
    </div>
  );
};

export default MYBook;
MYBook.getLayout = function getLayout(page) {
  return <DashBoard>{page}</DashBoard>;
};
