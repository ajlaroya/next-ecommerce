import { wixClientServer } from "@/lib/wixClientServer";
import Link from "next/link";
import { notFound } from "next/navigation";

const OrderPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const wixClient = await wixClientServer();

  let order;
  try {
    order = await wixClient.orders.getOrder(id);
  } catch (error) {
    return notFound();
  }

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] items-center justify-center">
      <h1 className="text-2xl font-semibold">Order Details</h1>
      <div className="mt-12 flex flex-col gap-6">
        <div>
          <span className="font-medium">Order ID: </span>
          <span>{order._id}</span>
        </div>
        <div>
          <span className="font-medium">Receiver Name: </span>
          <span>
            {order.billingInfo?.contactDetails?.firstName}{" "}
            {order.billingInfo?.contactDetails?.lastName}
          </span>
        </div>
        <div>
          <span className="font-medium">Receiver Email: </span>
          <span>{order.buyerInfo?.email}</span>
        </div>
        <div>
          <span className="font-medium">Price: </span>
          <span>{order.priceSummary?.subtotal?.amount}</span>
        </div>
        <div>
          <span className="font-medium">Payment Status: </span>
          <span>{order.paymentStatus}</span>
        </div>
        <div>
          <span className="font-medium">Order Status: </span>
          <span>{order.status}</span>
        </div>
        <div>
          <span className="font-medium">Delivery Address: </span>
          <span>
            {order.billingInfo?.address?.addressLine1},{" "}
            {order.billingInfo?.address?.addressLine2},{" "}
            {order.billingInfo?.address?.city}
          </span>
        </div>
      </div>
      <Link href="/" className="underline mt-6">
        Have a problem? Contact us
      </Link>
    </div>
  );
};

export default OrderPage;
