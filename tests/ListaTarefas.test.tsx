import { fireEvent, render, screen } from "@testing-library/react";
import ListaTarefas from "@/components/ListaTarefas";

describe("ListaTarefas", () => {
  it("adiciona uma tarefa e atualiza a contagem", () => {
    render(<ListaTarefas tarefasIniciais={[]} />);

    fireEvent.change(screen.getByLabelText("Nova tarefa"), {
      target: { value: "Concluir exercício" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Adicionar" }));

    expect(screen.getByText("Concluir exercício")).toBeInTheDocument();
    expect(screen.getByText("1 tarefa")).toBeInTheDocument();
    expect(
      screen.queryByText("Nenhuma tarefa por enquanto."),
    ).not.toBeInTheDocument();
  });

  it("mostra o estado vazio quando não há tarefas", () => {
    render(<ListaTarefas tarefasIniciais={[]} />);

    expect(
      screen.getByText("Nenhuma tarefa por enquanto."),
    ).toBeInTheDocument();
  });
});
