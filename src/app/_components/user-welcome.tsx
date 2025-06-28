export default function UserWelcome() {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString("pt-BR", { month: "long" });
    const year = now.getFullYear();
    const hour = now.toLocaleString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return (
        <div className="p-5">
          <h2 className="text-xl font-bold">Olá, Phellipe!</h2>
          <p>
            {day} de {month} de {year}
          </p>
        </div>
    )
}