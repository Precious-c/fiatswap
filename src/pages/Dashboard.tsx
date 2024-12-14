import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { user } from "../data";
import Currency from "@/utils/Currency";
import FlickeringGrid from "@/components/ui/flickering-grid";
import TransactionHistory from "@/components/TransactionHistory";
import { DepositDrawer } from "@/components/DepositDrawer";
import { WithdrawDrawer } from "@/components/WithdrawDrawer";
import Assets from "@/components/Assets";

const Dashboard = () => {
  return (
    <div className="py-4 flex flex-col justify-center gap-6 ">
      {/* greeting/welcome */}
      <FlickeringGrid
        className="z-0 absolute inset-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)] max-w-[380px] justify-self-center left-1"
        squareSize={4}
        gridGap={6}
        color="#9d78a1"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={1500}
        // width={800}
      />

      <div className="z-10 flex items-center gap-3">
        <Avatar className="w-16 h-16">
          <AvatarImage src={user.profilePictureUrl} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="dark:text-primary font-semibold text-sm">Welcome back, </p>
          <p className="dark:text-primary font-bold text-lg">{user.username}</p>
        </div>
      </div>

      {/* BalanceCard */}
      <Card className=" z-10 flex flex-col items-center justify-center py-6 border-0 ">
        <CardTitle className="text-accent-foreground font-normal">Available Balance</CardTitle>
        <CardContent className="text-4xl font-bold p-2">
          <Currency price={user.balance} />
        </CardContent>
      </Card>

      {/* Quick buttons */}
      <div className="flex justify-evenly z-10">
        <DepositDrawer />
        <WithdrawDrawer />
      </div>

      {/* Assets section */}
      <Assets />

      {/* quick swap section */}
      {/* <Swap /> */}

      <TransactionHistory />
      {/* </Card> */}
    </div>
  );
};

export default Dashboard;
