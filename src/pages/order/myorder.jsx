import DashBoard from "@/Component/layout/DashBoard";
import Image from "next/image";
import fetch from "node-fetch";

const MyOrder = ({ orders }) => {
  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <table className="table mt-20 w-full">
          <thead className="">
            <tr className="bg-black text-white text-xl text-center">
              <th>NO.</th>
              <th>Image</th>
              <th>Food Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id} className="text-center text-lg">
                <th>{index + 1}</th>
                <td className="flex justify-center">
                  <Image
                    src={order?.image}
                    width={100}
                    height={100}
                    alt="order"
                  />
                </td>
                <td>{order?.name}</td>
                <td>{order?.qunatity}</td>
                <td>{order?.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
MyOrder.getLayout = function getLayout(page) {
  return <DashBoard>{page}</DashBoard>;
};
export const getServerSideProps = async ({ req }) => {
  try {
    const userEmail = req.headers.cookie
      ?.split(";")
      .find((cookie) => cookie.trim().startsWith("userEmail="))
      ?.split("=")[1];
    const decodedEmail = decodeURIComponent(userEmail);

    if (!decodedEmail) {
      throw new Error("User email not found");
    }

    // Use userEmail to fetch data from your API or database
    const apiUrl = `https://encouraging-pants-dog.cyclic.app/myorder/${decodedEmail}`;
    const res = await fetch(apiUrl);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const orders = await res.json();

    return {
      props: {
        orders,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        orders: [],
      },
    };
  }
};
