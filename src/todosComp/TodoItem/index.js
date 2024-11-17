import { IconCheck } from "../../icons/IconCheck";
import { DeleteIcon } from "../../icons/DeleteIcon";
function TodoItem({text,completed,onComplete,onDelete}) {
    return (
      <li className={`li_todos ${completed && "completd"}`}>
        <IconCheck
        completed={completed}
        onComplete={onComplete}
        />
        <p>{text}</p>
        <DeleteIcon
          onDelete={onDelete}
        />
      </li>
    );
}


export {TodoItem};