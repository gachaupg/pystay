/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export function OrdersPage() {
  const orders = [
    { id: 1, name: "Laptop", price: "$1200", status: "Shipped" },
    { id: 2, name: "Phone", price: "$800", status: "Processing" },
    { id: 3, name: "Headphones", price: "$150", status: "Delivered" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-3/4 mx-auto bg-white p-6 rounded-2xl shadow-lg pt-32"
    >
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      <ul className="space-y-4">
        {orders.map((order) => (
          <li
            key={order.id}
            className="p-4 border flex items-center justify-between gap-4 rounded-lg shadow-md bg-gray-100"
          >
            <div>
              <img
                src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2"
                alt="Order item"
                className="w-20 h-20 object-cover rounded-md"
              />
            </div>
            <div>
              <p className="font-semibold">{order.name}</p>
              <p className="text-gray-600">Price: {order.price}</p>
              <p
                className={`font-bold ${
                  order.status === "Shipped"
                    ? "text-blue-500"
                    : order.status === "Delivered"
                    ? "text-green-500"
                    : "text-yellow-500"
                }`}
              >
                Status: {order.status}
              </p>
            </div>
            <p>
              <button className="bg-blue-500 text-white p-2 rounded-lg">
                View
              </button>
            </p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
