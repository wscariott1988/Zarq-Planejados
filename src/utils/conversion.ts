declare function gtag(...args: unknown[]): void;

export function trackWhatsAppConversion() {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'conversion', {
      'send_to': 'AW-18192976905/SugUCJjPxrQcEImYi-ND',
      'value': 1.0,
      'currency': 'BRL'
    });
  }
}
