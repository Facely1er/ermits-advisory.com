import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/utils';
import { Card } from '../Card';

describe('Card Component', () => {
  it('should render children content', () => {
    renderWithProviders(
      <Card>
        <div>Test Content</div>
      </Card>
    );
    
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should apply default variant', () => {
    const { container } = renderWithProviders(<Card>Content</Card>);
    const card = container.firstChild;
    expect(card).toHaveClass('bg-white');
  });

  it('should apply glass variant', () => {
    const { container } = renderWithProviders(
      <Card variant="glass">Content</Card>
    );
    const card = container.firstChild;
    expect(card).toHaveClass('glass-card');
  });

  it('should apply solid variant', () => {
    const { container } = renderWithProviders(
      <Card variant="solid">Content</Card>
    );
    const card = container.firstChild;
    expect(card).toHaveClass('bg-navy');
  });

  it('should apply outline variant', () => {
    const { container } = renderWithProviders(
      <Card variant="outline">Content</Card>
    );
    const card = container.firstChild;
    expect(card).toHaveClass('bg-transparent');
  });

  it('should apply luxury variant', () => {
    const { container } = renderWithProviders(
      <Card variant="luxury">Content</Card>
    );
    const card = container.firstChild;
    expect(card).toHaveClass('luxury-card');
  });

  it('should apply different padding sizes', () => {
    const { container, rerender } = renderWithProviders(
      <Card padding="none">Content</Card>
    );
    let card = container.firstChild;
    expect(card).not.toHaveClass('p-3', 'p-5', 'p-8');

    rerender(<Card padding="sm">Content</Card>);
    card = container.firstChild;
    expect(card).toHaveClass('p-3');

    rerender(<Card padding="md">Content</Card>);
    card = container.firstChild;
    expect(card).toHaveClass('p-5');

    rerender(<Card padding="lg">Content</Card>);
    card = container.firstChild;
    expect(card).toHaveClass('p-8');
  });

  it('should apply fullHeight class', () => {
    const { container } = renderWithProviders(
      <Card fullHeight>Content</Card>
    );
    const card = container.firstChild;
    expect(card).toHaveClass('h-full');
  });

  it('should apply custom className', () => {
    const { container } = renderWithProviders(
      <Card className="custom-class">Content</Card>
    );
    const card = container.firstChild;
    expect(card).toHaveClass('custom-class');
  });

  it('should apply glowOnHover class', () => {
    const { container } = renderWithProviders(
      <Card glowOnHover>Content</Card>
    );
    const card = container.firstChild;
    expect(card).toHaveClass('hover:shadow-luxury-gold');
  });

  it('should render with multiple children', () => {
    renderWithProviders(
      <Card>
        <h2>Title</h2>
        <p>Description</p>
      </Card>
    );
    
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  it('should pass through HTML attributes', () => {
    const { container } = renderWithProviders(
      <Card data-testid="custom-card">Content</Card>
    );
    
    expect(screen.getByTestId('custom-card')).toBeInTheDocument();
  });

  it('should apply rounded corners', () => {
    const { container } = renderWithProviders(<Card>Content</Card>);
    const card = container.firstChild;
    expect(card).toHaveClass('rounded-lg');
  });
});

