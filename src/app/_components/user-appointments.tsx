import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarImage } from "./ui/avatar";



export default function UserAppointments() {
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
        <h2 className="text-gray-400 font-bold text-xs uppercase mt-6 mb-6">
            Seus agendamentos
          </h2>
          <Card>
            <CardContent className="flex justify-between p-0">
              {/* Esquerda */}
              <div className="flex flex-col gap-2 py-5 pl-5">
                <Badge className="w-fit bg-[#39ff14] drop-shadow-[0_0_4px_#39ff14]">Confirmado</Badge>
                <div className="flex font-semibold gap-1">
                  <Badge>Corte de Cabelo</Badge>
                  <Badge>barba</Badge>
                  <Badge>Acabamento</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="Avatar do cliente"
                    />
                  </Avatar>
                  <p className="text-sm">Barbearia Vintage</p>
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
     </div>
  );
}