

import { db } from "@/app/_lib/prisma";
import {  MenuIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { MapPinIcon, StarIcon } from "lucide-react";
import ServiceItem from "@/app/_components/ui/service-item";
import BackButton from "@/app/_components/ui/back-button";
import PhoneItem from "@/app/_components/phone-item";

interface BarbershopPageProps {
    params: { id: string };
}

const BarbershopPage = async ({params}: BarbershopPageProps) => {

    const barbershop = await db.barbershop.findUnique({
        where:{
            id: params.id
        },
        include:{
            services: true,
        }
    })

    return (
        <div>
            {/* IMAGEM */}
            <div className="relative w-full h-[250px]">
                <Image src={barbershop?.imageUrl || "/placeholder.webp"} fill alt={barbershop?.name || "barbershop"} className="object-cover"/>
                <BackButton/>
                <Button size="icon" variant="secondary" className="absolute top-4 right-4"><MenuIcon/></Button>
            </div>

            {/* ENDEREÇO */}
           <div className="p-5 border-b border-solid">
             <h1 className="text-xl font-bold mb-3">{barbershop?.name}</h1>
             <div className="flex items-center gap-1 mb-2">
                <MapPinIcon className="text-primary" size={18}/>
                <p className="text-sm text-gray-400">{barbershop?.address}</p>
             </div>

              <div className="flex items-center gap-1">
                <StarIcon className="text-yellow-500 fill-yellow-400" size={18}/>
                <p className="text-sm font-bold">5,0(869 Avaliações)</p>

             </div>
           </div>

           {/* DESCRIÇÃO */}

           <div className="p-5 border-b border-solid space-y-3">
            <h2 className="font-bold text-gray-400 uppercase text-xs">Sobre nós</h2>
            <p className="text-sm text-justify">{barbershop?.description}</p>
           </div>


              {/* SERVIÇOS */}

            <div className="p-5">
                <h2 className="font-bold text-gray-400 uppercase text-xs mb-3">Serviços</h2>
                <div className="space-y-3">
                    {barbershop?.services.map(service => <ServiceItem service={service} key={service.id} />)}
                </div>
            </div>

            { /* CONTATO */}
            <div className="space-y-3 p-5">
                {barbershop?.phones.map(phone => (
                    <PhoneItem key={phone} phone={phone}/>
                    
                ))}                
            </div>
        

        </div>
    )
}

export default BarbershopPage;