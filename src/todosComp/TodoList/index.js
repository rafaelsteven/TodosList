function TodoList (props)
{
  return (
    <section className="ul_todes">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
      {(props.totalTodos && !props.searchTodos.length)  && props.onEmptySearchResult(props.searchValue)}
      
      {!props.loading && props.searchTodos.map(props.render || props.children)}
      <ul className="ul_todes">
          {props.children}
      </ul>
    </section>
  );
}

export {TodoList};