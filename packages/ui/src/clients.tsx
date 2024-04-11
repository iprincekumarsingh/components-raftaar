export function ClientCard(props: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return <div className={props.className}>{props.children}</div>;
}
