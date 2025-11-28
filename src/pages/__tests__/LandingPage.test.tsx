import { describe, it, expect, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../test/utils';
import LandingPage from '../LandingPage';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
  useInView: () => true,
  useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
  useTransform: (value: any, input: any, output: any) => ({ get: () => output[0] }),
}));

describe('LandingPage Integration Tests', () => {
  it('should render the landing page', () => {
    renderWithProviders(<LandingPage />);
    
    // Check for key elements
    expect(screen.getByText(/Strategic Cybersecurity/i)).toBeInTheDocument();
  });

  it('should display navigation links', () => {
    renderWithProviders(<LandingPage />);
    
    // Check for navigation (may need adjustment based on actual nav structure)
    const nav = document.querySelector('nav');
    expect(nav).toBeInTheDocument();
  });

  it('should have CTA buttons', () => {
    renderWithProviders(<LandingPage />);
    
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('should display STEEL framework information', () => {
    renderWithProviders(<LandingPage />);
    
    // Look for STEEL-related content
    const steelContent = screen.getByText(/STEEL/i);
    expect(steelContent).toBeInTheDocument();
  });

  it('should render footer', () => {
    renderWithProviders(<LandingPage />);
    
    const footer = document.querySelector('footer');
    expect(footer).toBeInTheDocument();
  });
});

