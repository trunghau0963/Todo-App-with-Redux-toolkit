import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { toggleTodostatus } from "../../redux/action";
import { todoListSlide } from "../TodoList/todoSlide";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ id, name, completed, priority }) {
  const [checked, setChecked] = useState(completed);
  const dispatch = useDispatch()
  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(todoListSlide.actions.toggleTodostatus(id))
  };
  const stateString = completed ? "Complete" : "Incomplete";

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag style={{ margin: 0 }}>
        {stateString}
      </Tag>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  );
}
