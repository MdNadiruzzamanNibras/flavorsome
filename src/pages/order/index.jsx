import DashBoard from "@/Component/layout/DashBoard";
import Image from "next/image";

const Order = ({ orders }) => {
  console.log(orders);
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
                <td>{order?.schedule}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
Order.getLayout = function getLayout(page) {
  return <DashBoard>{page}</DashBoard>;
};
export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/order");
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return {
    props: {
      orders: data,
    },
  };
};
