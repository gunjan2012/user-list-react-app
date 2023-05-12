import React from "react";
import { Form } from "react-bootstrap";
import { SHOW_CARD, HIDE_CARD } from "../redux/constants";
import { useDispatch } from "react-redux";

const UserRow = ({ user }) => {
  const dispatch = useDispatch();

  const showCard = () => {
    dispatch({ type: SHOW_CARD, userId: user.id });
  };

  const hideCard = () => {
    dispatch({ type: HIDE_CARD, userId: null });
  };

  return (
    <>
      <tr>
        <td>
          <div
            className="d-flex align-items-center cursor-pointer"
            onMouseEnter={showCard}
            onMouseLeave={hideCard}
          >
            <img
              src={user.img}
              alt="user-image"
              style={{ width: 45, height: 45 }}
              className="rounded-circle"
            />
            <div className="ms-3">
              <p className="fw-bold mb-1">{user.name}</p>
              <p className="text-muted mb-0">{user.email}</p>
            </div>
          </div>
        </td>
        <td>
          {user.access === "Owner" ? (
            <p className="fw-bold user-status">Active</p>
          ) : (
            <Form.Select className="status-selector" defaultValue={user.status}>
              <option>Active</option>
              <option>Inactive</option>
            </Form.Select>
          )}
        </td>
        <td>
          {user.access === "Owner" ? (
            <p className="fw-bold">Owner</p>
          ) : (
            <Form.Select className="status-selector" defaultValue={user.access}>
              <option>Manager</option>
              <option>Read</option>
            </Form.Select>
          )}
        </td>
        <td>
          {user.access === "Owner" ? (
            <span className="material-symbols-outlined fs-2 text-muted">
              lock
            </span>
          ) : (
            <span className="material-symbols-outlined fs-2 text-muted">
              delete
            </span>
          )}
        </td>
      </tr>
    </>
  );
};

export default UserRow;
