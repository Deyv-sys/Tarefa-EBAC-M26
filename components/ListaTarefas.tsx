"use client";

import { useRef, useState } from "react";
import NovaTarefa from "@/components/NovaTarefa";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";
import type { Tarefa } from "@/lib/tarefas";

type ListaTarefasProps = {
  tarefasIniciais: Tarefa[];
};

export default function ListaTarefas({ tarefasIniciais }: ListaTarefasProps) {
  const [tarefas, setTarefas] = useState(tarefasIniciais);
  const proximoId = useRef(
    Math.max(0, ...tarefasIniciais.map((tarefa) => tarefa.id)) + 1,
  );
  const quantidade = useContadorDeTarefas(tarefas);

  function adicionarTarefa(titulo: string) {
    setTarefas((atuais) => [
      ...atuais,
      { id: proximoId.current++, titulo },
    ]);
  }

  return (
    <main>
      <h1>Minhas tarefas</h1>
      <p className="task-count" aria-live="polite">
        {quantidade} {quantidade === 1 ? "tarefa" : "tarefas"}
      </p>
      <NovaTarefa onAdicionar={adicionarTarefa} />
      {tarefas.length > 0 ? (
        <ul className="task-list" aria-label="Lista de tarefas">
          {tarefas.map((tarefa) => (
            <li key={tarefa.id}>{tarefa.titulo}</li>
          ))}
        </ul>
      ) : (
        <p className="empty-state">Nenhuma tarefa por enquanto.</p>
      )}
    </main>
  );
}
