export default function PaginaAdminEvento(props: any) {
  const id = props.params.todos[0];
  const senha = props.params.todos[1];

  return (
    <main className="flex flex-col">
      <span>ID: {id}</span>
      <span>SENHA: {senha}</span>
    </main>
  );
}
