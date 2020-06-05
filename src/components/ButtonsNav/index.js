import React from 'react';
import Button from '@material-ui/core/Button';
import { Dropdown } from 'react-bootstrap'



export default function ButtonsNav() {

  return (
    <>
      <div>
      <Dropdown>
          <Dropdown.Toggle className="btn-products" id="dropdown-basic">
            Projects
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Request a New</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Currency</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Sponsor</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Completed</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <Button id="btn-forum" variant="contained">Forum</Button>
      </div>
      <div>
        <Button id="btn-developments" variant="contained">Developers</Button>
      </div>

    </>
  );
}
