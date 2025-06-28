import { Button } from "./ui/button"
import Image from "next/image";

export default function QuickSearch() {
    return (
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

         
    )
}