const ToDo = (props) => {
    return (
      <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg text-gray-400 cursor-default">
        {props.todo.task}
      </li>
    );
};

export default ToDo;
