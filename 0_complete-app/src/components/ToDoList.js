import ToDo from "./ToDo";

const ToDoList = ({ toDoList }) => {
  return (
    <div class="flex justify-center pt-8">
      <ul class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
        {toDoList.map((todo) => {
          return <ToDo todo={todo} />;
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
