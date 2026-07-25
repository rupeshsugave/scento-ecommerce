import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import type { CSSProperties } from "react";
import api from "../services/api";

interface Item {
  name: string;
  image: string;
  size: string;
  price: number;
  quantity: number;
}

interface Order {
  _id: string;
  items: Item[];
  address: any;
  paymentMethod: string;
  total: number;
  status: string;
  createdAt: string;
}

function AdminOrders() {

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {

    try {

      const { data } = await api.get("/orders");

      if (data.success) {
        setOrders(data.orders);
      }

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchOrders();

  }, []);

  const updateStatus = async (
    id: string,
    status: string
  ) => {

    try {

      await api.put(
        `/orders/${id}/status`,
        {
          status
        }
      );

      fetchOrders();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <>

      <Navbar />

      <div style={pageStyle}>

        <h1 style={titleStyle}>
          ADMIN ORDERS
        </h1>

        {

          loading ?

            <h2 style={center}>
              Loading Orders...
            </h2>

            :

            orders.length === 0 ?

              <h2 style={center}>
                No Orders Found
              </h2>

              :

              orders.map((order) => (

                <div
                  key={order._id}
                  style={cardStyle}
                >

                  <div style={headerStyle}>

                    <div>

                      <h3>
                        Order ID
                      </h3>

                      <p>
                        {order._id}
                      </p>

                    </div>

                    <div>

                      <h3 style={gold}>
                        Status
                      </h3>

                      <select

                        value={order.status}

                        onChange={(e) =>
                          updateStatus(
                            order._id,
                            e.target.value
                          )
                        }

                        style={selectStyle}

                      >

                        <option>Placed</option>
                        <option>Processing</option>
                        <option>Shipped</option>
                        <option>Delivered</option>
                        <option>Cancelled</option>

                      </select>

                    </div>

                  </div>

                  <h2 style={gold}>
                    Customer Details
                  </h2>

                  <p>
                    Name: {order.address?.name}
                  </p>

                  <p>
                    Phone: {order.address?.phone}
                  </p>

                  <p>
                    Address: {order.address?.address}, {order.address?.city}
                  </p>

                  <p>
                    Payment: {order.paymentMethod}
                  </p>

                  <h2 style={gold}>
                    Products
                  </h2>

                  {

                    order.items.map((item, index) => (

                      <div
                        key={index}
                        style={productStyle}
                      >

                        <img
                          src={item.image}
                          style={imageStyle}
                        />

                        <div>

                          <h3>
                            {item.name}
                          </h3>

                          <p>
                            Size: {item.size}
                          </p>

                          <p>
                            Quantity: {item.quantity}
                          </p>

                        </div>

                      </div>

                    ))

                  }

                  <h2 style={totalStyle}>
                    Total: ₹{order.total}
                  </h2>

                </div>

              ))

        }

      </div>

    </>

  );

}

const pageStyle: CSSProperties = {

  background: "#050505",

  minHeight: "100vh",

  color: "white",

  padding: "40px 20px"

};

const titleStyle: CSSProperties = {

  textAlign: "center",

  color: "#d4af37",

  letterSpacing: "5px"

};

const center: CSSProperties = {

  textAlign: "center"

};

const cardStyle: CSSProperties = {

  maxWidth: "1000px",

  margin: "30px auto",

  background: "#111",

  padding: "30px",

  borderRadius: "25px",

  border: "1px solid #333"

};

const headerStyle: CSSProperties = {

  display: "flex",

  justifyContent: "space-between",

  borderBottom: "1px solid #333",

  paddingBottom: "20px"

};

const gold: CSSProperties = {

  color: "#d4af37"

};

const selectStyle: CSSProperties = {

  padding: "10px",

  borderRadius: "10px",

  background: "#222",

  color: "white",

  border: "1px solid #d4af37"

};

const productStyle: CSSProperties = {

  display: "flex",

  gap: "20px",

  alignItems: "center",

  padding: "15px 0",

  borderBottom: "1px solid #222"

};

const imageStyle: CSSProperties = {

  width: "70px",

  height: "80px",

  objectFit: "contain",

  background: "white",

  borderRadius: "10px"

};

const totalStyle: CSSProperties = {

  color: "#d4af37",

  textAlign: "right"

};

export default AdminOrders;