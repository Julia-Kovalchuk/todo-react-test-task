import React, { useState } from "react";
import { ListItem } from "../ListItem/ListItem";
import { Message, StyledList } from "./styles";
import { ITodo } from "../../types/types";
import { Modal } from "../Modal/Modal";
import { Form } from "../Form/Form";

interface IProps {
  todos: ITodo[];
}

export const List = ({ todos }: IProps) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <React.Fragment>
      {isOpenModal && (
        <Modal changeModalView={setIsOpenModal}>
          <Form type="change" changeModalView={setIsOpenModal} />
        </Modal>
      )}

      <StyledList>
        {todos.length === 0 ? (
          <Message>empty 🙃</Message>
        ) : (
          todos.map((todo) => {
            return (
              <ListItem
                todo={todo}
                key={todo.id}
                changeModalView={setIsOpenModal}
              />
            );
          })
        )}
      </StyledList>
    </React.Fragment>
  );
};
