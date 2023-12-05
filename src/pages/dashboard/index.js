import DashBoard from "@/Component/layout/DashBoard";


const DashboardPage = () => {
    return (
        <div>
            <h1>this is dashboard</h1>
        </div>
    );
};

export default DashboardPage;


DashboardPage.getLayout = function getLayout(page) {
    return <DashBoard>{ page}</DashBoard>
};