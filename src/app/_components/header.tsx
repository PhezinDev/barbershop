import { MenuIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <Card>
        <CardContent className="p-5 justify-between flex items-center flex-row">
            <Image src="/logo.png" alt="Barbershop Logo" width={120} height={18} />
            <Button size="icon" variant="outline">
                <MenuIcon/>
            </Button>
        </CardContent>
    </Card>
  );
}

export default Header;

