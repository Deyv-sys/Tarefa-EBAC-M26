import ListaTarefas from "@/components/ListaTarefas";
import { buscarTarefas } from "@/lib/tarefas";

export default async function Home() {
  const tarefas = await buscarTarefas();

  return <ListaTarefas tarefasIniciais={tarefas} />;
}
