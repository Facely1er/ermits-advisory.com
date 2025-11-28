import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/utils';
import { Badge } from '../Badge';

describe('Badge Component', () => {
  it('should render with text content', () => {
    renderWithProviders(<Badge>Test Badge</Badge>);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  it('should apply default variant', () => {
    const { container } = renderWithProviders(<Badge>Default</Badge>);
    const badge = container.firstChild;
    expect(badge).toHaveClass('bg-gray-100');
  });

  it('should apply success variant', () => {
    const { container } = renderWithProviders(
      <Badge variant="success">Success</Badge>
    );
    const badge = container.firstChild;
    expect(badge).toHaveClass('bg-green-100');
  });

  it('should apply warning variant', () => {
    const { container } = renderWithProviders(
      <Badge variant="warning">Warning</Badge>
    );
    const badge = container.firstChild;
    expect(badge).toHaveClass('bg-yellow-100');
  });

  it('should apply error variant', () => {
    const { container } = renderWithProviders(
      <Badge variant="error">Error</Badge>
    );
    const badge = container.firstChild;
    expect(badge).toHaveClass('bg-red-100');
  });

  it('should apply info variant', () => {
    const { container } = renderWithProviders(
      <Badge variant="info">Info</Badge>
    );
    const badge = container.firstChild;
    expect(badge).toHaveClass('bg-blue-100');
  });

  it('should apply small size', () => {
    const { container } = renderWithProviders(
      <Badge size="sm">Small</Badge>
    );
    const badge = container.firstChild;
    expect(badge).toHaveClass('text-xs');
  });

  it('should apply medium size by default', () => {
    const { container } = renderWithProviders(<Badge>Medium</Badge>);
    const badge = container.firstChild;
    expect(badge).toHaveClass('text-sm');
  });

  it('should apply large size', () => {
    const { container } = renderWithProviders(
      <Badge size="lg">Large</Badge>
    );
    const badge = container.firstChild;
    expect(badge).toHaveClass('text-base');
  });

  it('should apply custom className', () => {
    const { container } = renderWithProviders(
      <Badge className="custom-badge">Custom</Badge>
    );
    const badge = container.firstChild;
    expect(badge).toHaveClass('custom-badge');
  });

  it('should render with icon', () => {
    const icon = <span data-testid="badge-icon">!</span>;
    renderWithProviders(<Badge icon={icon}>With Icon</Badge>);
    
    expect(screen.getByTestId('badge-icon')).toBeInTheDocument();
    expect(screen.getByText('With Icon')).toBeInTheDocument();
  });

  it('should have rounded corners', () => {
    const { container } = renderWithProviders(<Badge>Badge</Badge>);
    const badge = container.firstChild;
    expect(badge).toHaveClass('rounded-full');
  });
});

