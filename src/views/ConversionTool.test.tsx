/* eslint-disable no-useless-escape */
/* eslint-disable playwright/missing-playwright-await */

// Bonus: Haven't written tests for these
// path to json file in system
// click an open button to load file containing json
// See a warning if json file not found
// Enter path the csv file is tobe saved to a text box
// Can click Save to save the csv file to the local file system
// Warning if text is empty or save operation failed

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ConversionTool from './ConversionTool';

describe('conversion tool should render', () => {
  describe('a json to csv converter', () => {
    beforeEach(() => {
      render(<ConversionTool />);
    });

    test('that displays a header "JSON to CSV"', () => {
      const header = screen.getByText(/JSON to CSV/i);
      expect(header).toBeInTheDocument();
    });

    test('with a text box for inputting json JSON', () => {
      const jsonTextBox = screen.getByLabelText('JSON');
      userEvent.type(jsonTextBox, 'test');
      expect(jsonTextBox).toHaveValue('test');
    });

    test('with a text box that displays CSV format"', () => {
      const csvTextBox = screen.getByLabelText('CSV');
      expect(csvTextBox).toBeDefined();
      expect(csvTextBox).toHaveAttribute('readonly');
    });

    describe('with a button to convert the json to CSV', () => {
      test('with a button to convert the json to text', () => {
        const jsonTextBox = screen.getByLabelText('JSON');
        const csvTextBox = screen.getByLabelText('CSV');
        const convertBtn = screen.getByRole('button', { name: 'convert' });

        userEvent.type(jsonTextBox, '{ "test": "value" }');
        userEvent.click(convertBtn);

        expect(csvTextBox).toHaveValue('test,value');
      });

      test('parse warning can be closed', () => {
        const jsonTextBox = screen.getByLabelText('JSON');
        const convertBtn = screen.getByRole('button', { name: 'convert' });

        userEvent.type(jsonTextBox, '{}');
        userEvent.click(convertBtn);

        const warning = screen.getByText('Warning - Empty Json');
        const closeWarningBtn = screen.getByRole('button', {
          name: 'close-warning',
        });

        expect(warning).toBeInTheDocument();

        userEvent.click(closeWarningBtn);

        expect(warning).not.toBeInTheDocument();
      });

      test('that prints a warning if json is empty"', () => {
        const jsonTextBox = screen.getByLabelText('JSON');
        const csvTextBox = screen.getByLabelText('CSV');
        const convertBtn = screen.getByRole('button', { name: 'convert' });

        userEvent.click(convertBtn);

        expect(csvTextBox).toHaveValue('');
        expect(screen.getByText('Warning - Empty Json')).toBeInTheDocument();

        userEvent.type(jsonTextBox, '{ }');
        userEvent.click(convertBtn);

        expect(csvTextBox).toHaveValue('');
        expect(screen.getByText('Warning - Empty Json')).toBeInTheDocument();
      });

      test('that prints a warning if json is invalid"', () => {
        const jsonTextBox = screen.getByLabelText('JSON');
        const csvTextBox = screen.getByLabelText('CSV');
        const convertBtn = screen.getByRole('button', { name: 'convert' });

        userEvent.type(jsonTextBox, '{ "test": }');
        userEvent.click(convertBtn);

        expect(csvTextBox).toHaveValue('');
        expect(screen.getByText('Warning - Invalid Json')).toBeInTheDocument();
      });

      test('with a button that clears both boxes', () => {
        const jsonTextBox = screen.getByLabelText('JSON');
        const csvTextBox = screen.getByLabelText('CSV');

        const clearBtn = screen.getByRole('button', { name: 'Clear' });
        const convertBtn = screen.getByRole('button', { name: 'Convert' });

        userEvent.type(jsonTextBox, 'test');

        expect(jsonTextBox).toHaveValue('test');

        userEvent.click(clearBtn);

        expect(jsonTextBox).toHaveValue('');

        userEvent.clear(jsonTextBox);
        // eslint-disable-next-line prettier/prettier
        userEvent.type(jsonTextBox, '\{ "test": "value" \}');
        userEvent.click(convertBtn);

        // eslint-disable-next-line prettier/prettier
        expect(jsonTextBox).toHaveValue('\{ "test": "value" \}');
        expect(csvTextBox).toHaveValue('test,value');

        userEvent.click(clearBtn);
        expect(jsonTextBox).toHaveValue('');
        expect(csvTextBox).toHaveValue('');
      });
    });
  });
});
