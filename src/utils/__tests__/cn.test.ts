import { describe, it, expect } from 'vitest';
import { cn } from '../cn';

describe('cn utility', () => {
  it('should join class names with spaces', () => {
    expect(cn('class1', 'class2', 'class3')).toBe('class1 class2 class3');
  });

  it('should filter out undefined values', () => {
    expect(cn('class1', undefined, 'class2')).toBe('class1 class2');
  });

  it('should filter out null values', () => {
    expect(cn('class1', null, 'class2')).toBe('class1 class2');
  });

  it('should filter out false values', () => {
    expect(cn('class1', false, 'class2')).toBe('class1 class2');
  });

  it('should handle conditional classes', () => {
    const isActive = true;
    const isDisabled = false;
    
    expect(cn('base', isActive && 'active', isDisabled && 'disabled'))
      .toBe('base active');
  });

  it('should handle empty input', () => {
    expect(cn()).toBe('');
  });

  it('should handle all falsy values', () => {
    expect(cn(undefined, null, false)).toBe('');
  });

  it('should handle complex conditional scenarios', () => {
    const variant = 'primary';
    const size = 'lg';
    const disabled = false;
    
    expect(
      cn(
        'button',
        variant === 'primary' && 'btn-primary',
        variant === 'secondary' && 'btn-secondary',
        size === 'lg' && 'btn-lg',
        disabled && 'btn-disabled'
      )
    ).toBe('button btn-primary btn-lg');
  });
});

