import { Barbershop } from "@prisma/client";
import Image from "next/image";
import { Button } from "./button";

import { Card, CardContent } from "./card";

interface ServiceItemProps {
    service: BarbershopService
}



const ServiceItem = ({service}: ServiceItemProps)=> {
    return ( 
        <Card>
            <CardContent className="flex item-center gap-3 p-3">
        
            <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
                <Image src={service.imageUrl} fill alt={service.name} className="object-cover rounded-lg"/>
            </div>

            {/* direita */}

            <div className="space-y-2 w-full">
                <h3 className="font-semibold text-sm">{service.name}</h3>
                <p className="text-sm text-gray-400">{service.description}</p>
                <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-primary">{Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(service.price)}</p>
                    <Button variant="secondary" className="ml-auto" size="sm">Reservar</Button>
                </div>
            </div>
            

            
        
            </CardContent>
        </Card>
    );
} 

export default ServiceItem;