"use client";

import { Button } from "@/app/_components/ui/button";
import { createStripeCheckout } from "../_actions/create-checkout";
import { loadStripe } from "@stripe/stripe-js";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const AcquirePlanButton = () => {
  const { user } = useUser();
  const handleAcquirePlanClick = async () => {
    const { sessionId } = await createStripeCheckout();

    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      throw new Error("Missing STRIPE_PUBLISHABLE_KEY");
    }
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    );

    if (!stripe) {
      throw new Error("Missing STRIPE_PUBLISHABLE_KEY");
    }

    await stripe.redirectToCheckout({ sessionId });
  };
  if (!user) {
    return null;
  }

  const hasPremiumPlan = user.publicMetadata.subscriptionPlan === "premium";
  if (hasPremiumPlan) {
    return (
      <Button className="w-full rounded-full font-bold" variant="link" asChild>
        <Link
          href={`${process.env.NEXT_PUBLIC_STRIPE_CUSTUMER_PORTAL_URL as string}?prefilled_email=${user.emailAddresses[0].emailAddress}`}
        >
          Gerenciar plano
        </Link>
      </Button>
    );
  }
  return (
    <Button
      className="w-full rounded-full font-bold"
      onClick={handleAcquirePlanClick}
    >
      Adquirir plano
    </Button>
  );
};

export default AcquirePlanButton;
