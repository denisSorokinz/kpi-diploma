import { Prisma } from '@prisma/client';
import { UnwrapPromise } from '@prisma/client/runtime/library';
import { ExcludeLens } from './lenses';
import { brands, models } from '../constants/crawler';

const mapListingFields = (listing: NonNullable<UnwrapPromise<ReturnType<Prisma.ListingDelegate['findUnique']>>>) => {
  const { name: brand } = brands.find((brand) => brand.id === listing.brandId)!;
  const { name: model } = models.find((model) => model.id === listing.modelId)!;

  return { ...listing, brand, model };
};

export { mapListingFields };
