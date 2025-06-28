
import { Card, CardContent } from "./ui/card";

export default function Footer() {
    return (
        <footer>
          <Card className="border-none bg-background">
            <CardContent className="p-5 py-6 text-center">
              <p className="text-gray-400 text-sm">Desenvolvido por Phezin</p>
              <p className="text-gray-400 text-xs">
                © 2023 Barbershop. Todos os direitos reservados.
              </p>
            </CardContent>
          </Card>
        </footer>
    )
}