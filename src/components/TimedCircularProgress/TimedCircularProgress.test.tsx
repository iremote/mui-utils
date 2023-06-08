import { render, screen } from '@testing-library/react';
import { TimedCircularProgress } from './';
import React from "react";

describe('TimedCircularProgress', () => {
  it('renders without crashing', () => {
    render(<TimedCircularProgress counterStart={10}/>);
    expect(screen.getByText(/10/i, {})).toBeTruthy();
  });
});
