export default function PaginaConvite(props: any) {
  console.log("PaginaConvite", props);
  return (
    <main>
      <span>{props.params.alias}</span>
    </main>
  );
}
