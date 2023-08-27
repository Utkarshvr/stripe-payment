import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = Stripe(process.env.STRIPE_KEY);

const YOUR_DOMAIN = "http://localhost:3000";

export async function POST(req, res) {
  try {
    const { products } = await req.json();
    console.log(products);
    const line_items = products.map((prod) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: prod.title,
          description: prod.description,
          metadata: { id: prod.id },
          images: [prod.image],
        },
        unit_amount: prod.price * 80 * 100,
      },
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${YOUR_DOMAIN}/success`,
      cancel_url: `${YOUR_DOMAIN}/cancel`,
    });

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}
