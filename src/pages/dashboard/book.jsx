import DashBoard from "@/Component/layout/DashBoard";


const Book = () => {
    return (
        <div>
            <h1>this is book table</h1>
        </div>
    );
};

export default Book;
Book.getLayout = function getLayout(page) {
    return <DashBoard>{ page}</DashBoard>
};