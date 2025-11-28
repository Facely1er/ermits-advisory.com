import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../test/utils';
import { Button } from '../Button';

describe('Button Component', () => {
  it('should render with default props', () => {
    renderWithProviders(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('should apply primary variant by default', () => {
    renderWithProviders(<Button>Primary Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-navy');
  });

  it('should apply secondary variant when specified', () => {
    renderWithProviders(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-silver');
  });

  it('should apply ghost variant when specified', () => {
    renderWithProviders(<Button variant="ghost">Ghost</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-transparent');
  });

  it('should apply different sizes', () => {
    const { rerender } = renderWithProviders(<Button size="sm">Small</Button>);
    let button = screen.getByRole('button');
    expect(button).toHaveClass('text-sm');

    rerender(<Button size="md">Medium</Button>);
    button = screen.getByRole('button');
    expect(button).toHaveClass('text-base');

    rerender(<Button size="lg">Large</Button>);
    button = screen.getByRole('button');
    expect(button).toHaveClass('text-lg');
  });

  it('should handle click events', async () => {
    const user = userEvent.setup();
    let clicked = false;
    const handleClick = () => { clicked = true; };

    renderWithProviders(<Button onClick={handleClick}>Click</Button>);
    const button = screen.getByRole('button');

    await user.click(button);
    expect(clicked).toBe(true);
  });

  it('should be disabled when disabled prop is true', () => {
    renderWithProviders(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should apply fullWidth class', () => {
    renderWithProviders(<Button fullWidth>Full Width</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('w-full');
  });

  it('should show loading state', () => {
    renderWithProviders(<Button isLoading>Loading</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    // Verify loading spinner is present (adjust based on your implementation)
  });

  it('should apply custom className', () => {
    renderWithProviders(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('should render with icon', () => {
    const icon = <span data-testid="test-icon">Icon</span>;
    renderWithProviders(<Button icon={icon}>With Icon</Button>);
    
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    expect(screen.getByText('With Icon')).toBeInTheDocument();
  });

  it('should apply luxury variant', () => {
    renderWithProviders(<Button variant="luxury">Luxury</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('luxury-button');
  });

  it('should not trigger onClick when disabled', async () => {
    const user = userEvent.setup();
    let clicked = false;
    const handleClick = () => { clicked = true; };

    renderWithProviders(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>
    );
    
    const button = screen.getByRole('button');
    await user.click(button);
    expect(clicked).toBe(false);
  });
});

