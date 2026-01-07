import * as React from 'react';

import classNames from 'classnames';

import { BrandContainer, BrandImage } from './BrandStyle';

import Glints from '../../../assets/image/glints-logo.svg';
import GlintsTapLoker from '../../../assets/image/glints-taploker-logo.svg';
import GlintsTapJobs from '../../../assets/image/glints-tapjobs-logo.svg';
import GlintsWhite from '../../../assets/image/glints-logo-white.svg';
import GlintsTapLokerWhite from '../../../assets/image/glints-taploker-logo-white.svg';
import GlintsTapJobsWhite from '../../../assets/image/glints-tapjobs-logo-white.svg';

const Brand = ({
  alt,
  asset,
  className,
  rightClickURL,
  onContextMenu,
  variant = 'horizontal',
  ...defaultProps
}: Props) => {
  const handleRightClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (rightClickURL) {
      e.preventDefault();

      if (onContextMenu !== undefined) {
        onContextMenu();
      }

      window.location.href = rightClickURL;
    }
  };

  let srcAsset = '';

  if (asset === 'glints-white') {
    srcAsset = GlintsWhite;
  } else if (asset === 'glints-taploker-white') {
    srcAsset = GlintsTapLokerWhite;
  } else if (asset === 'glints-tapjobs-white') {
    srcAsset = GlintsTapJobsWhite;
  } else if (asset === 'glints') {
    srcAsset = Glints;
  } else if (asset === 'glints-tapjobs') {
    srcAsset = GlintsTapJobs;
  } else if (asset === 'glints-taploker') {
    srcAsset = GlintsTapLoker;
  } else {
    srcAsset = asset;
  }

  return (
    <BrandContainer
      className={classNames('aries-brand', className)}
      role="presentation"
      tabIndex={0}
      onContextMenu={handleRightClick}
      {...defaultProps}
    >
      <BrandImage
        className="brand-image"
        src={srcAsset}
        alt={alt}
        tabIndex={-1}
        $variant={variant}
      />
    </BrandContainer>
  );
};

export type Props = React.ComponentPropsWithoutRef<typeof BrandContainer> & {
  /** There are 3 available values for asset props. The first and second one are Glints logo, but you can also custom the logo by parsing url or path of the logo. */
  asset: string;
  /** HTML <img> alt Attribute */
  alt?: HTMLImageElement['alt'];
  className?: string;
  /** Redirect to url when right click is triggered. */
  rightClickURL?: string;
  /** Executes when the user right-clicks on the component */
  onContextMenu?(): void;
  /** Display mode of the brand image */
  variant?: 'square' | 'horizontal';
};

export default Brand;
