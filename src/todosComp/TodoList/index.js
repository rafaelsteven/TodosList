function TodoList (props)
{
  return (
    <ul className="ul_todes">
        {props.children}
    </ul>
  );
}

export {TodoList};