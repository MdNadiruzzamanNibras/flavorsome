import DashBoard from "@/Component/layout/DashBoard";
import useAdmin from "@/Hook/useAdmin";
import auth from "@/firebase/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";


const DashboardPage = () => {
      const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    console.log(admin);
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