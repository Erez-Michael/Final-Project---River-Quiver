import React, { Fragment } from "react";
import styled from "styled-components";
import ReadOnlyRow from "./ReadOnlyRow";
import useHandlers from "./useHandlers";

const Table = () => {
  const {
    contacts,
    handleAddFormChange,
    handleAddFormSubmit,
    handleEditFormSubmit,
    handleEditClick,
    handleDeleteClick,
  } = useHandlers();

  return (
    <Container>
      <Wrapper>
        <Thead>
          <p>Level</p>
          <p>Flow</p>
          <p>Rating</p>
          <p>Equipment</p>
          <p>Delete</p>
        </Thead>
        <Fragment>
          {contacts.map((contact) => (
            <ReadOnlyRow
              contact={contact}
              handleEditClick={handleEditClick}
              handleDeleteClick={handleDeleteClick}
            />
          ))}
        </Fragment>
      </Wrapper>
      <WrapperTwo>
        <h2>Add a Comment</h2>
        <WrapperThree>
          <form onSubmit={handleAddFormSubmit}>
            <input
              type="text"
              name="level"
              required="required"
              placeholder="Add level"
              onChange={handleAddFormChange}
            />
            <input
              type="text"
              name="flow"
              required="required"
              placeholder="Add flow"
              onChange={handleAddFormChange}
            />
            <input
              type="text"
              name="rating"
              required="required"
              placeholder="Add rating"
              onChange={handleAddFormChange}
            />
            <input
              type="text"
              name="equipment"
              required="required"
              placeholder="Add equipment"
              onChange={handleAddFormChange}
            />
            <div>
              <button type="submit">Add</button>
            </div>
          </form>
        </WrapperThree>
      </WrapperTwo>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 70vw;

  border-radius: 5px;
  padding: 10px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    0px 18px 24px 10px rgba(54, 72, 83, 0.59);
  box-shadow: 0px 10px 13px -7px #000000,
    0px 18px 24px 10px rgba(54, 72, 83, 0.59);
`;
const WrapperTwo = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    color: #2c3d52;
    font-size: 25px;
  }
`;
const WrapperThree = styled.div`
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    margin-right: 10px;
  }
  input {
    width: 13vw;
    text-align: left;
    font-size: 18px;
  }

  button {
    margin-left: 50px;
    margin-top: 3px;
    display: flex;
    justify-content: center;
    width: 5vw;
    text-align: center;
    border: #2c3d52 solid 1px;
    color: #2c3d52;
    background-color: whitesmoke;
    padding: 1px 10px;
    font-size: 18px;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Thead = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  padding-bottom: 10px;
  p {
    width: 70vw;
    font-size: 22px;
    font-weight: 600;
    text-align: left;
    margin-bottom: 15px;
    padding-bottom: 2px;
    border-bottom: #2c3d52 solid 1px;
  }
`;
export default Table;