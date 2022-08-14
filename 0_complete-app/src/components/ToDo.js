const ToDo = ({ todo }) => {
  const isComplete = todo.complete;

  if (isComplete) {
    return (
      <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg text-gray-400 cursor-default">
        {todo.task}
      </li>
    );
  } else {
    return (
      <li class="px-6 py-2 border-b border-gray-200 w-full">{todo.task}</li>
    );
  }
};

export default ToDo;
