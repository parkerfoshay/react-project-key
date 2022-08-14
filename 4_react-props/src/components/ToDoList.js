const ToDoList = (props) => {
  return (
    <div class="flex justify-center pt-8">
      <ul class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
      <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg text-gray-400 cursor-default">
        {props.toDoList[0].task}
      </li>
      </ul>
    </div>
  );
};

export default ToDoList;