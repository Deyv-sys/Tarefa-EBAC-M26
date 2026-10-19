import { fireEvent, render, screen } from "@testing-library/react";
import NovaTarefa from "@/components/NovaTarefa";

describe("NovaTarefa", () => {
  it("renderiza o campo e o botão de adicionar", () => {
    render(<NovaTarefa onAdicionar={jest.fn()} />);

    expect(screen.getByLabelText("Nova tarefa")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Adicionar" }),
    ).toBeInTheDocument();
  });

  it("mostra erro e não submete texto vazio ou com espaços", () => {
    const onAdicionar = jest.fn();
    render(<NovaTarefa onAdicionar={onAdicionar} />);

    fireEvent.click(screen.getByRole("button", { name: "Adicionar" }));
    expect(screen.getByRole("alert")).toHaveTextContent(
      "Digite uma tarefa antes de adicionar.",
    );

    fireEvent.change(screen.getByLabelText("Nova tarefa"), {
      target: { value: "   " },
    });
    fireEvent.click(screen.getByRole("button", { name: "Adicionar" }));

    expect(onAdicionar).not.toHaveBeenCalled();
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("envia o texto sem espaços extras e limpa o campo", () => {
    const onAdicionar = jest.fn();
    render(<NovaTarefa onAdicionar={onAdicionar} />);

    fireEvent.change(screen.getByLabelText("Nova tarefa"), {
      target: { value: "  Estudar React  " },
    });
    fireEvent.click(screen.getByRole("button", { name: "Adicionar" }));

    expect(onAdicionar).toHaveBeenCalledWith("Estudar React");
    expect(screen.getByLabelText("Nova tarefa")).toHaveValue("");
  });
});
