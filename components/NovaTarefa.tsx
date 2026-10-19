"use client";

import { FormEvent, useState } from "react";

type NovaTarefaProps = {
  onAdicionar: (titulo: string) => void;
};

export default function NovaTarefa({ onAdicionar }: NovaTarefaProps) {
  const [titulo, setTitulo] = useState("");
  const [erro, setErro] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const tituloValido = titulo.trim();

    if (!tituloValido) {
      setErro("Digite uma tarefa antes de adicionar.");
      return;
    }

    onAdicionar(tituloValido);
    setTitulo("");
    setErro("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="nova-tarefa">Nova tarefa</label>
      <input
        id="nova-tarefa"
        type="text"
        value={titulo}
        onChange={(event) => {
          setTitulo(event.target.value);
          if (erro) setErro("");
        }}
        placeholder="O que você precisa fazer?"
        aria-invalid={Boolean(erro)}
        aria-describedby={erro ? "erro-nova-tarefa" : undefined}
      />
      <button type="submit">Adicionar</button>
      {erro && (
        <p className="form-error" id="erro-nova-tarefa" role="alert">
          {erro}
        </p>
      )}
    </form>
  );
}
