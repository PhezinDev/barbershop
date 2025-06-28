"use client";

import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  SheetTrigger,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "./ui/sheet";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 justify-between flex items-center flex-row">
        <Image src="/logo.png" alt="Barbershop Logo" width={120} height={18} />

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <div className="flex items-center gap-3 py-5 border-b border-solid">
                <Avatar>
                  <AvatarImage className="w-[50px] object-cover rounded-full" src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_items_boosted&w=740" alt="Avatar cliente"/>
                </Avatar>
                <div>
                  <p className="font-semibold">Phellipe</p>
                  <p className="text-xs">phellipeaferreira@gmail.com</p>
                </div> 
              </div>

              <div className="flex flex-col gap-1 py-5 border-b border-solid">
                <SheetClose asChild>
                  <Button className="justify-start gap-2" variant="ghost" asChild><Link href="/"><HomeIcon size={18} />Inicio</Link></Button>
                </SheetClose>
                <Button className="justify-start gap-2" variant="ghost"><CalendarIcon size={18}/>Agendamentos</Button>
              </div>
              <div className="flex flex-col gap-1 py-5 border-b border-solid">
                <Button className="justify-start gap-2" variant="ghost"><CalendarIcon size={18}/>Link</Button>
                <Button className="justify-start gap-2" variant="ghost"><CalendarIcon size={18}/>Link</Button>
                <Button className="justify-start gap-2" variant="ghost"><CalendarIcon size={18}/>Link</Button>
                <Button className="justify-start gap-2" variant="ghost"><CalendarIcon size={18}/>Link</Button>
                <Button className="justify-start gap-2" variant="ghost"><CalendarIcon size={18}/>Link</Button>
                <Button className="justify-start gap-2" variant="ghost"><CalendarIcon size={18}/>Link</Button>
              </div>
              <div className="flex flex-col gap-1 py-5">
                <Button className="justify-start gap-2" variant="ghost"><LogOutIcon size={18}/>Sair da conta</Button>
              </div>

            </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
