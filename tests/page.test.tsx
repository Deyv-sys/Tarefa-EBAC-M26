import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Página inicial", () => {
  it("carrega e renderiza as tarefas locais", async () => {
    render(await Home());

    expect(
      screen.getByRole("heading", { name: "Minhas tarefas" }),
    ).toBeInTheDocument();
    expect(screen.getByText("2 tarefas")).toBeInTheDocument();
    expect(
      screen.getByText("Revisar os estudos de TypeScript"),
    ).toBeInTheDocument();
    expect(screen.getByText("Organizar a semana")).toBeInTheDocument();
  });
});
