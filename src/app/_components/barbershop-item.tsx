import { Barbershop } from "@prisma/client";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { StarIcon } from "lucide-react";
import Link from "next/link";

interface BarbershopItemProps {
    barbershop: Barbershop;
}

const BarbershopItem = ({barbershop} : BarbershopItemProps) => {
    return (
        <Card className="min-w-[167px] rounded-xl">
            <CardContent className="p-0 px-1 pt-1">
                {/* Imagem */}
                <div className='relative h-[159px] w-full'>
                    <Image fill className="object-cover rounded-xl" alt={barbershop.name} src={barbershop.imageUrl}/>
                    <Badge className="absolute left-2 top-2" variant="secondary">
                        <StarIcon size={12} className="text-yellow-500 fill-yellow-400"/>
                        <p className="font-bold p-1">5,0</p>
                    </Badge>
                </div>

                {/* Conteúdo */}
                <div className=" pb-2">
                    <h3 className="py-3 font-semibold truncate">{barbershop.name}</h3>
                    <p className="text-sm text-gray-400 truncate">{barbershop.address}</p>
                    <Button variant="secondary" className="mt-3 w-full" asChild>
                        <Link href={`/barbershops/${barbershop.id}`}>Reservar</Link>
                    </Button>
                </div>


            </CardContent>
        </Card>
    );

}

export default BarbershopItem;