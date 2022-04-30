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
      expect(jsonTextBox).toBeDefined();
      expect(false).toEqual(true);
    });

    test('with a text box that displays CSV format"', () => {
      const csvTextBox = screen.getByLabelText('CSV');
      expect(csvTextBox).toBeDefined();
      expect(false).toEqual(true);
    });

    describe.skip('with a button to convert the json to CSV', () => {
      beforeEach(() => {
        const convertBtn = screen.getByRole('button', { name: 'convert' });
        userEvent.click(convertBtn);
      });

      test('with a button to convert the json to text', () => {
        expect(false);
      });

      test('that prints a warning if json is empty"', () => {
        expect(false);
      });

      test('that prints a warning if json is invalid"', () => {
        expect(false);
      });

      test('with a button that clears both boxes', () => {
        expect(false);
      });
    });
  });
});
