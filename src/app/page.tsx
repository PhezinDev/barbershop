
import { db } from "./_lib/prisma";
import Header from "./_components/header";
import Image from "next/image";
import BarbershopItem from "./_components/barbershop-item";
import SearchBar from "./_components/search-bar";
import UserAppointments from "./_components/user-appointments";
import About from "./_components/about";
import UserWelcome from "./_components/user-welcome";
import QuickSearch from "./_components/quick-search";


export default async function Home() {
    const barbershops = await db.barbershop.findMany({});
    const popularBarbershops = await db.barbershop.findMany({
      orderBy: { name: "desc" },
    });

    
    return (
      
      <div>
        <Header />
        <UserWelcome/>

        <div className="p-5">

          {/* Busca */}
          <SearchBar/>
          {/* Busca Rapida */}
          <QuickSearch/>

          {/* Imagem */}
          <div className="relative w-full h-[150px] mt-6">
            <Image
              src="/banner-01.png"
              alt="Banner de promoção"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          

          {/* AGENDAMENTO */}

          <UserAppointments/>

          {/* BARBEARIAS RECOMENDADAS */}
         
          <h2 className="text-gray-400 font-bold text-xs uppercase mt-6 mb-6">
            Barbearias recomendadas
          </h2>
          <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
            {barbershops.map((barbershop) => (
              <BarbershopItem barbershop={barbershop} key={barbershop.id} />
            ))}
          </div>

          <h2 className="text-gray-400 font-bold text-xs uppercase mt-6 mb-6">
            Barbearias populares
          </h2>
          <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
            {popularBarbershops.map((barbershop) => (
              <BarbershopItem barbershop={barbershop} key={barbershop.id} />
            ))}
          </div>

          {/* SOBRE */}

          <About/>

        </div>

        
      </div>
    );
  
}
