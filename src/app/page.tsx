"use client";
import { db } from "./_lib/prisma";
import { clear } from "console";
import { Button } from "../app/_components/ui/button";
import { Textarea } from "../app/_components/ui/textarea";
import Header from "./_components/header";
import { Input } from "./_components/ui/input";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import BarbershopItem from "./_components/barbershop-item";

export default async function Home() {
    const barbershops = await db.barbershop.findMany({});
    const popularBarbershops = await db.barbershop.findMany({
      orderBy: { name: "desc" },
    });

    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString("pt-BR", { month: "long" });
    const year = now.getFullYear();
    const hour = now.toLocaleString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return (
      <div>
        <Header />
        <div className="p-5">
          <h2 className="text-xl font-bold">Olá, Phellipe!</h2>
          <p>
            {day} de {month} de {year}
          </p>

          {/* Busca */}
          <div className="flex items-center gap-2 flex-row mt-6">
            <Input placeholder="Faça sua busca" />
            <Button size="icon">
              <SearchIcon />
            </Button>
          </div>
          {/* Busca Rapida */}
          <div className="flex gap-3 overflow-scroll [&::-webkit-scrollbar]:hidden">
            <Button variant="secondary" className="mt-4">
              <Image
                src="/cabelo.svg"
                width={16}
                height={16}
                alt="Corte de Cabelo"
              />
              Corte de Cabelo
            </Button>
            <Button variant="secondary" className="mt-4">
              <Image
                src="/barba.svg"
                width={16}
                height={16}
                alt="Corte de Barba"
              />
              Barba
            </Button>
            <Button variant="secondary" className="mt-4">
              <Image
                src="/acabamento.svg"
                width={16}
                height={16}
                alt="Acabamento"
              />
              Acabamento
            </Button>
            <Button variant="secondary" className="mt-4">
              <Image
                src="/sobrancelha.svg"
                width={16}
                height={16}
                alt="sobrancelha"
              />
              Sobrancelha
            </Button>
            <Button variant="secondary" className="mt-4">
              <Image
                src="/massagem.svg"
                width={16}
                height={16}
                alt="massagem"
              />
              Massagem
            </Button>
            <Button variant="secondary" className="mt-4">
              <Image
                src="/hidratacao.svg"
                width={16}
                height={16}
                alt="hidratacao"
              />
              Hidratação
            </Button>
          </div>

          {/* Imagem */}
          <div className="relative w-full h-[150px] mt-6">
            <Image
              src="/banner-01.png"
              alt="Banner de promoção"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* agendamento */}
          <h2 className="text-gray-400 font-bold text-xs uppercase mt-6 mb-6">
            Seus agendamentos
          </h2>
          <Card>
            <CardContent className="flex justify-between p-0">
              {/* Esquerda */}
              <div className="flex flex-col gap-2 py-5 pl-5">
                <Badge className="w-fit">Confirmado</Badge>
                <h3 className="font-semibold">Corte de Cabelo</h3>
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="Avatar do cliente"
                    />
                  </Avatar>
                  <p className="text-sm">Barbearia FSW</p>
                </div>
              </div>

              {/* Direita */}
              <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
                <p className="text-sm">{month}</p>
                <p className="text-2xl">{day}</p>
                <p className="text-sm">{hour}</p>
              </div>
            </CardContent>
          </Card>
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
        </div>
        <Card>
          <CardContent className="p-5 border-none">
            <h2 className="text-xl font-bold">Sobre o Barbershop</h2>
            <p className="text-gray-500 mt-2">
              O Barbershop é uma plataforma que conecta clientes a barbearias,
              facilitando o agendamento de serviços de beleza e cuidados
              pessoais.
            </p>
            <Textarea className="mt-4" placeholder="Deixe seu feedback..." />
            <Button className="mt-4" variant="secondary">
              Enviar
            </Button>
          </CardContent>
        </Card>

        
      </div>
    );
  
}
