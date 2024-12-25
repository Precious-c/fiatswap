import { bouncy } from "ldrs";
bouncy.register();
import { Card } from "./ui/card";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

export function HelpCenter() {
  const faqs = [
    {
      question: " What is this platform about?",
      answer: `This platform allows users to seamlessly convert cryptocurrency into Naira and withdraw it directly to their bank accounts.`,
    },
    {
      question: "Which cryptocurrencies are supported?",
      answer: `For now, we only support USDT and tokens under TON Network. Check our supported currencies list for details.`,
    },
    {
      question: "How does the platform work?",
      answer: `Sign up, connect your crypto wallet, select the cryptocurrency you want to convert, and enter the amount. Once the transaction is complete, the equivalent Naira will be sent to your linked bank account.`,
    },
    {
      question: "Is this platform available outside Nigeria?",
      answer: `No. For now our services are only available to users in Nigeria.`,
    },

    {
      question: "Which banks can I withdraw to?",
      answer: `We support all major Nigerian banks for withdrawals.`,
    },

    //Transactions
    {
      question: "What is the exchange rate for crypto to Naira?",
      answer: `Exchange rates are updated in real-time and displayed before you confirm any transaction.`,
    },
    {
      question: "How long does it take to convert crypto to Naira?",
      answer: `Transactions are usually processed within 10 minutes to a few hours, depending on network congestion.`,
    },
    {
      question: "Is there a minimum or maximum amount I can convert?",
      answer: `The minimum conversion amount is 5$, and the maximum depends on your account verification level.`,
    },
    {
      question: "Are there fees for using the platform?",
      answer: `Yes, a small transaction fee will be applied and displayed before you confirm your transaction.`,
    },

    //Account Management
    {
      question: "What documents do I need to verify my account?",
      answer: `You’ll need a valid government-issued ID, a recent utility bill, and a liveness check for verification.`,
    },
    {
      question: "Can I change my bank account details?",
      answer: `Yes, go to the Profile section, update your bank account information, and save the changes.`,
    },
    {
      question: "How can I change my password?",
      answer: `Navigate to "Account Security" under the "Profile" page`,
    },
    {
      question: "What should I do if my transaction is delayed?",
      answer: `Please wait 2 hours as network congestion may cause delays. If the issue persists, contact support with your transaction ID.`,
    },
    {
      question: "How do I contact customer support?",
      answer: `Scroll to the bottom of this page and to see or support mediums`,
    },
  ];

  return (
    <div className="py-4 pb-16">
      <div className="mx-auto w-full max-w-sm">
        <h2 className="text-lg font-bold text-center">Help Center</h2>

        <div className=" pb-0">
          <div className="m-5">
            <h5 className="text-center font-semibold mb-3">
              Welcome to the Help Center! How can we assist you today?
            </h5>

            <div>
              <h4 className="font-bold my-4">FAQs</h4>

              <Accordion type="single" collapsible className="flex flex-col gap-3">
                {faqs.map((item, i) => (
                  <Card className="p-3 rounded-sm bg-[#0f0f0f] border-0">
                    <AccordionItem value={`item-${i + 1}`} className=" ">
                      <AccordionTrigger className="text-left flex justify-between w-full font-semibold">
                        {item.question} <ChevronDown />
                      </AccordionTrigger>
                      <AccordionContent className="mt-4 ">{item.answer}</AccordionContent>
                    </AccordionItem>
                  </Card>
                ))}
              </Accordion>
            </div>

            <div className="flex flex-col w-full mt-5 text-center">
              <h4 className="font-bold mb-1">Contact Support</h4>
              <p className="text-sm">
                <a href="mailto:support@fiatswap.com">Email: support@fiatswap.com</a>
              </p>
              <p className="text-sm">
                <a href="https://t.me/fiatswap_support">Telegram: fiatswap_support</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
