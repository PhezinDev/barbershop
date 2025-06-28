import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Textarea } from "./ui/textarea"


export default function About() {
    return (
        <Card className="mt-5">
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
    )
}