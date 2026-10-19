import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";
import type { Tarefa } from "@/lib/tarefas";

describe("useContadorDeTarefas", () => {
  it("retorna zero quando a lista está vazia", () => {
    const { result } = renderHook(() => useContadorDeTarefas([]));

    expect(result.current).toBe(0);
  });

  it("retorna e atualiza a quantidade de tarefas", () => {
    const tarefas: Tarefa[] = [
      { id: 1, titulo: "Primeira tarefa" },
      { id: 2, titulo: "Segunda tarefa" },
    ];
    const { result, rerender } = renderHook(
      ({ itens }) => useContadorDeTarefas(itens),
      { initialProps: { itens: tarefas } },
    );

    expect(result.current).toBe(2);

    rerender({ itens: [...tarefas, { id: 3, titulo: "Terceira tarefa" }] });
    expect(result.current).toBe(3);
  });
});
