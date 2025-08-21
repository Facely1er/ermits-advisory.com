// Format a number with thousand separators according to the locale
const formatNumber = (value: number, locale = 'en-US'): string => {
  return new Intl.NumberFormat(locale).format(value);
};

// Format currency with symbol according to the locale
const formatCurrency = (value: number, locale = 'en-US', currency = 'USD'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

// Format percentage with appropriate decimals
export const formatPercentage = (value: number, locale = 'en-US', decimals = 1): string => {
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value / 100);
};

// Format a date according to the locale
const formatDate = (date: Date, locale = 'en-US', options?: Intl.DateTimeFormatOptions): string => {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  return new Intl.DateTimeFormat(locale, options || defaultOptions).format(date);
};

// Format a date in relative time (e.g., "2 days ago")
const formatRelativeTime = (date: Date, locale = 'en-US'): string => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  // Define time units in seconds
  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;

  // Use Intl.RelativeTimeFormat if available
  if (typeof Intl.RelativeTimeFormat !== 'undefined') {
    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

    if (diffInSeconds < minute) {
      return rtf.format(-Math.floor(diffInSeconds), 'second');
    } else if (diffInSeconds < hour) {
      return rtf.format(-Math.floor(diffInSeconds / minute), 'minute');
    } else if (diffInSeconds < day) {
      return rtf.format(-Math.floor(diffInSeconds / hour), 'hour');
    } else if (diffInSeconds < week) {
      return rtf.format(-Math.floor(diffInSeconds / day), 'day');
    } else if (diffInSeconds < month) {
      return rtf.format(-Math.floor(diffInSeconds / week), 'week');
    } else if (diffInSeconds < year) {
      return rtf.format(-Math.floor(diffInSeconds / month), 'month');
    } else {
      return rtf.format(-Math.floor(diffInSeconds / year), 'year');
    }
  } else {
    // Fallback for browsers without RelativeTimeFormat support
    if (diffInSeconds < minute) {
      return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < hour) {
      return `${Math.floor(diffInSeconds / minute)} minutes ago`;
    } else if (diffInSeconds < day) {
      return `${Math.floor(diffInSeconds / hour)} hours ago`;
    } else if (diffInSeconds < week) {
      return `${Math.floor(diffInSeconds / day)} days ago`;
    } else if (diffInSeconds < month) {
      return `${Math.floor(diffInSeconds / week)} weeks ago`;
    } else if (diffInSeconds < year) {
      return `${Math.floor(diffInSeconds / month)} months ago`;
    } else {
      return `${Math.floor(diffInSeconds / year)} years ago`;
    }
  }
};
