import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToDoForm from '../ToDoForm';

describe('<ToDoForm />', () => {
  let getByTestId;
  let addHandler;

  describe('clicking the add button', () => {
    beforeEach(async () => {
      addHandler = jest.fn().mockName('handleAdd');
      ({ getByTestId } = render(<ToDoForm onAdd={addHandler} />));

      await userEvent.type(
        getByTestId('toDoItem'),
        'New item',
      );
      userEvent.click(getByTestId('addButton'));
    });

    it('clears the text field', () => {
      expect(getByTestId('toDoItem').value).toEqual('');
    });

    it('calls the add handler', () => {
      expect(addHandler).toHaveBeenCalledWith('New item');
   });
  });
});