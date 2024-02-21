import { TVariant } from 'types';

export const getLocaleLang = (variants: TVariant[], item: string) => {
  const variant = variants.find(
    (variant: TVariant) => typeof variant !== 'string' && variant.text === item,
  );

  if (variant && typeof variant !== 'string') {
    return variant.route;
  }
};
