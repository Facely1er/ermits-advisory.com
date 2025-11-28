import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/utils';
import SteelPremium from '../SteelPremium';

// Mock modules
vi.mock('../../services/stripe', () => ({
  createCheckoutSession: vi.fn(),
}));

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe('SteelPremium Integration Tests', () => {
  it('should render the premium page', () => {
    renderWithProviders(<SteelPremium />);
    
    expect(screen.getByText(/Premium/i)).toBeInTheDocument();
  });

  it('should display pricing information', () => {
    renderWithProviders(<SteelPremium />);
    
    // Look for price (adjust based on actual price display)
    const priceText = screen.getByText(/\$29/i);
    expect(priceText).toBeInTheDocument();
  });

  it('should have purchase buttons', () => {
    renderWithProviders(<SteelPremium />);
    
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('should display premium features', () => {
    renderWithProviders(<SteelPremium />);
    
    // Check for feature list (adjust based on actual features)
    expect(screen.getByText(/PDF Report/i)).toBeInTheDocument();
  });

  it('should render navigation', () => {
    renderWithProviders(<SteelPremium />);
    
    const nav = document.querySelector('nav');
    expect(nav).toBeInTheDocument();
  });
});

