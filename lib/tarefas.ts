export type Tarefa = {
  id: number;
  titulo: string;
};

const tarefasIniciais: Tarefa[] = [
  { id: 1, titulo: "Revisar os estudos de TypeScript" },
  { id: 2, titulo: "Organizar a semana" },
];

export async function buscarTarefas(): Promise<Tarefa[]> {
  return Promise.resolve(tarefasIniciais.map((tarefa) => ({ ...tarefa })));
}
