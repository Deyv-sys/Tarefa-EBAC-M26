import type { Tarefa } from "@/lib/tarefas";

export function useContadorDeTarefas(tarefas: Tarefa[]): number {
  return tarefas.length;
}
