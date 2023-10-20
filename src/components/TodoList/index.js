import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
// import { addTodo } from "../../redux/action"; // redux
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todoRemainingSelector } from "../../redux/selector";
import { todoListSlide } from "./todoSlide";

export default function TodoList() {
  const [todoName, setTodoName] = useState();
  const [priority, setPriority] = useState("Medium");

  const todoList = useSelector(todoRemainingSelector);
  // const filter = useSelector(filterSelector)
  // console.log({todoList, filter})

  const dispatch = useDispatch();

  // redux
  // const handleAddButtonClick = () => {
  //   dispatch(
  //     addTodo({
  //       id: uuidv4(),
  //       name: todoName,
  //       priority: priority,
  //       complete: false,
  //     })
  //   );
  //   setTodoName("");
  //   setPriority("Medium");
  // };

  // redux-toolkits

  const handleAddButtonClick = () => {
    dispatch(
      todoListSlide.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        complete: false,
      })
    );
    setTodoName("");
    setPriority("Medium");
  };

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };

  const handlePriority = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
        {todoList.map((todo, idx) => (
          <Todo
            key={idx}
            id={todo.id}
            name={todo.name}
            completed={todo.completed}
            priority={todo.priority}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
