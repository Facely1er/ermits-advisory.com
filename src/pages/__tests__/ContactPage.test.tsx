import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../test/utils';
import ContactPage from '../ContactPage';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    form: ({ children, ...props }: any) => <form {...props}>{children}</form>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe('ContactPage Integration Tests', () => {
  it('should render contact form', () => {
    renderWithProviders(<ContactPage />);
    
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  it('should have form fields', () => {
    renderWithProviders(<ContactPage />);
    
    // Check for common form fields
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });

  it('should have submit button', () => {
    renderWithProviders(<ContactPage />);
    
    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
  });

  it('should allow typing in form fields', async () => {
    const user = userEvent.setup();
    renderWithProviders(<ContactPage />);
    
    const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
    await user.type(nameInput, 'John Doe');
    
    expect(nameInput.value).toBe('John Doe');
  });

  it('should display contact information', () => {
    renderWithProviders(<ContactPage />);
    
    // Look for email or other contact info
    const contactInfo = document.body.textContent;
    expect(contactInfo).toMatch(/@ermits/i);
  });
});

